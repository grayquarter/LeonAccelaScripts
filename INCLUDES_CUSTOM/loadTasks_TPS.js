function loadTasks_TPS(ltcapidstr) {
	// Override INCLUDES_ACCELA_FUNCTIONS 3.2.3
	// Modified to include ProcessCode if requested.
	// Modified to include updated object with task.
	if (typeof(ltcapidstr) == "string") {
		var ltresult = aa.cap.getCapID(ltcapidstr);
		if (ltresult.getSuccess())
			ltCapId = ltresult.getOutput();
		else {
			logMessage("**ERROR: Failed to get cap ID: " + ltcapidstr + " error: " + ltresult.getErrorMessage());
			return false;
		}
	} else
		ltCapId = ltcapidstr;

	useProcessCode = false;
	if (arguments.length > 1) {
		useProcessCode = true;
	}

	var taskArr = new Array();

	var workflowResult = aa.workflow.getTasks(ltCapId);
	if (workflowResult.getSuccess())
		wfObj = workflowResult.getOutput();
	else {
		logMessage("**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage());
		return false;
	}

	for (i in wfObj) {
		fTask = wfObj[i];
		var myTask = new Task_TPS(fTask); // Modified 7/2/2018
		taskArr[(useProcessCode ? fTask.getProcessCode() + "." : "") + fTask.getTaskDescription()] = myTask;
	}
	return taskArr;
}

//////////////////
