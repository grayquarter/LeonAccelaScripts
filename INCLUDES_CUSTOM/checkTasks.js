function checkTasks(stask) {
	var taskArray = new Array();
	var taskNames = null;
	var taskStatuses = null;
	if (arguments.length > 1 && arguments[1]) taskNames = arguments[1];
	if (arguments.length > 2 && arguments[2]) taskStatuses = arguments[2];

	// logDebug("Checking for " + (stask? " Process: " + stask:"") + (taskNames? " Tasks: " + taskNames.join(","):"") + (taskStatuses? " with Status: " + taskStatuses.join(","):""));

	// returns true if any of the subtasks are active
	var taskResult = aa.workflow.getTasks(capId);
	if (taskResult.getSuccess())
		{ taskArr = taskResult.getOutput(); }
	else
		{ logDebug( "**ERROR: getting tasks : " + taskResult.getErrorMessage()); return false }

	for (xx in taskArr) {
		if (stask && !taskArr[xx].getProcessCode().equals(stask)) continue; // Include only process code specified
		if (taskNames && !exists(taskArr[xx].getTaskDescription(),taskNames)) continue; // Include tasks by name
		if (!taskArr[xx].getActiveFlag().equals("Y")) { // Exclude inactive tasks if no statuses specified or matches status specified.
			if (!taskStatuses) continue;
			if (exists(taskArr[xx].getDisposition(),taskStatuses)) continue; // Exclude tasks by status
		}
		// logDebug((taskArr[xx].getActiveFlag().equals("Y")? "Active ":"") + "task: " + taskArr[xx].getTaskDescription() + " " + exists(taskArr[xx].getTaskDescription(),taskNames) + ", status: " + taskArr[xx].getDisposition() + " " + exists(taskArr[xx].getDisposition(),taskStatuses));
		taskArray.push(taskArr[xx]);
	}
	return taskArray;
}

 
