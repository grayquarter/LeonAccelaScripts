function assignTask_TPS(wfstr, username) { // optional process name
	// Assigns the task to a user.  No audit.
	// Modified from INCLUDES_ACCELA_FUNCTIONS v9.3.6
	//   - Optional capid
	//   - if username is null then use currentUser.
	//	 - if error during assignment then returns reason.
	//   - removed logMessage.
	var useProcess = false;
	var processName = "";
	if (arguments.length > 2 && arguments[2]) {
		processName = arguments[2]; // subprocess
		useProcess = true;
	}
	var itemCap = capId;
	if (arguments.length > 3 && arguments[3])
		itemCap = arguments[3];

	if (username) {
		logDebug("Looking up username: " + username + " for assignTask");
		var taskUserResult = aa.person.getUser(username);
	} else {
		logDebug("Looking up currentUser: " + currentUserID + " for assignTask");
		var taskUserResult = aa.person.getCurrentUser();
	}

	if (taskUserResult.getSuccess()) {
		taskUserObj = taskUserResult.getOutput(); //  User Object
		logDebug("taskUserObj: " + taskUserObj + (taskUserObj && taskUserObj.getUserID ? ", Agency: " + taskUserObj.getAgencyCode() + ", Dept: " + taskUserObj.getDeptOfUser() + ", UserID: " + taskUserObj.getUserID() : "") + (taskUserObj && taskUserObj.getClass ? " " + taskUserObj.getClass() : ""));
	} else {
		logDebug("**ERROR: Failed to get user object: " + taskUserResult.getErrorMessage());
		return false;
	}

	var workflowResult = aa.workflow.getTaskItems(capId, wfstr, processName, null, null, null);
	if (workflowResult.getSuccess())
		var wfObj = workflowResult.getOutput();
	else {
		logDebug("**ERROR: Failed to get workflow object: " + workflowResult.getErrorMessage());
		return false;
	}

	for (i in wfObj) {
		var fTask = wfObj[i];
		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase()) && (!useProcess || fTask.getProcessCode().equals(processName))) {
			fTask.setAssignedUser(taskUserObj);
			var taskItem = fTask.getTaskItem();
			var adjustResult = aa.workflow.assignTask(taskItem);
			if (!adjustResult.getSuccess()) {
				logDebug("ERROR: Failed to assigned Workflow Task: " + wfstr + " to " + username + ". Reason: " + adjustResult.getErrorMessage());
				return false;
			}
			logDebug("Assigned Workflow Task: " + fTask.getTaskDescription() + " with status " + fTask.getDisposition() + " to " + username);
		}
	}
}
