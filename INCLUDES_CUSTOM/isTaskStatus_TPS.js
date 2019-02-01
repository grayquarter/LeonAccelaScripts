function isTaskStatus_TPS(wfstr, wfstat) // optional process name
{ // 05/29/2018 RS Modified from INCLUDES_ACCELA_FUNCTIONS to optionally include RecordID (capID).
	var useProcess = false;
	var processName = "";
	if (arguments.length > 2 && arguments[2] != null) {
		processName = arguments[2]; // subprocess
		useProcess = true;
	}
	var capID = capId;
	if (arguments.length > 3 && arguments[3] != null)
		capID = arguments[3];

	var workflowResult = aa.workflow.getTaskItems(capID, wfstr, processName, null, wfstat, null);
	if (workflowResult.getSuccess())
		var wfObj = workflowResult.getOutput();
	else {
		logMessage("**ERROR: Failed to get workflow object: " + workflowResult.getErrorMessage());
		return false;
	}

	for (i in wfObj) {
		fTask = wfObj[i];
		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase()) && (!useProcess || fTask.getProcessCode().equals(processName)))
			if (fTask.getDisposition() != null) {
				if (fTask.getDisposition().toUpperCase().equals(wfstat.toUpperCase()))
					return true;
				else
					return false;
			}
	}
	return false;
}
