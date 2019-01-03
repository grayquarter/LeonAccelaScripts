function getActiveTasks(stask) {
	var taskArray = new Array();
	var taskNames = new Array();
	if (arguments.length > 1 && arguments[1]) taskNames = arguments[1];
	// logDebug("Checking for " + (stask? " Process: " + stask:"") + (taskNames? "Active Tasks: " + taskNames.join(","):""));

	// returns true if any of the subtasks are active
	var taskResult = aa.workflow.getTasks(capId);
	if (taskResult.getSuccess())
		{ taskArr = taskResult.getOutput(); }
	else
		{ logDebug( "**ERROR: getting tasks : " + taskResult.getErrorMessage()); return false }
		
	for (xx in taskArr) {
		if (stask && !taskArr[xx].getProcessCode().equals(stask)) continue; // Include only process code specified
		if (taskNames && !exists(taskArr[xx].getTaskDescription(),taskNames)) continue; // Include tasks by name
		if (!taskArr[xx].getActiveFlag().equals("Y")) continue; // Exclude inactive tasks.
		taskArray.push(taskArr[xx]);
	}
	return taskArray;
}

 

/*----------------------------------------------------------------------------------------------------/
| Function getCapAddress
| Used to bring back the address information of a record
| Added by IK Consulting, LLC - 9/8/16
/----------------------------------------------------------------------------------------------------*/
