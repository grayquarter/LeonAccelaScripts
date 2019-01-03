function Task_TPS() {// Task Object 
	// Override INCLUDES_ACCELA_FUNCTIONS 3.2.3 
	// 7/2/2018 Modified to include updated object with task.
	this.task = null;	// Added 7/2/2018
	this.status = null; 
	this.comment = null;
	this.note = null;
	this.statusdate = null;
	this.process = null;
	this.processID = null;
	this.step = null;
	this.active = null;
	this.assignedUser = null; // Added 7/2/2018
	if (arguments.length > 0 && arguments[0]) { // Added 7/2/2018
		var fTask = arguments[0];
		this.task = fTask;
		this.status = fTask.getDisposition();
		this.comment = fTask.getDispositionComment();
		this.process = fTask.getProcessCode();
	        if (fTask.getStatusDate()) this.statusdate = "" + (fTask.getStatusDate().getMonth() + 1) + "/" + fTask.getStatusDate().getDate() + "/" + (fTask.getStatusDate().getYear() + 1900);
		this.processID = fTask.getProcessID();
		this.note = fTask.getDispositionNote();
		this.step = fTask.getStepNumber();
		this.active = fTask.getActiveFlag(); 
		this.assignedStaff = fTask.getAssignedStaff();
	}
	this.getTaskItem = function () { 
		return this.task.getTaskItem() ;
	}
}

