function resultWorkflowTask(wfstr, wfstat, wfcomment, wfnote) // optional process name
{	// Standard INCLUDES_ACCELA_FUNCTION version 9.3
	var useProcess = false;
	var processName = "";
	if (arguments.length > 4) {
		processName = arguments[4]; // subprocess
		useProcess = true;
	}
	var itemCap = capId;
	if (arguments.length > 5) { itemCap = arguments[5]; } // optional CapId

	var workflowResult = aa.workflow.getTaskItems(itemCap, wfstr, processName, null, null, null);
	if (workflowResult.getSuccess())
		var wfObj = workflowResult.getOutput();
	else {
		logMessage("**ERROR: Failed to get workflow object: " + workflowResult.getErrorMessage());
		return false;
	}

	if (!wfstat) wfstat = "NA";

	for (i in wfObj) {
		var fTask = wfObj[i];
		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase()) && (!useProcess || fTask.getProcessCode().equals(processName))) {
			var statObj = aa.workflow.getTaskStatus(fTask, wfstat);
			var dispo = "U";
			if (statObj.getSuccess()) {
				var status = statObj.getOutput();
				dispo = status.getResultAction();
			} else {
				logDebug("Could not get status action resulting to no change. Please check task status.");
			}

			var dispositionDate = aa.date.getCurrentDate();
			var stepnumber = fTask.getStepNumber();
			var processID = fTask.getProcessID();
			var dispositionType = (dispo == "U"? "[U] Update" : (dispo == "Y" || dispo == "N"? "[" + dispo + "] Go to Next": (dispo == "B"? "[B] Branch": (dispo == "L"? "[L] Loop": "[" + dispo + "] ??"))));

			logDebug("For CapId: " + itemCap + " Task:" + fTask.getProcessCode() + "." +  fTask.getTaskDescription() + "(" + processID + "." + stepnumber + ")"
				   + ", Status: " + fTask.getDisposition() + (fTask.getActiveFlag().equals("Y")? " Active":"") + (fTask.getCompleteFlag().equals("Y")? " Complete":"") 
				   + ", Note:" + fTask.getDispositionNote() + ", CurrentTaskID:" + fTask.getCurrentTaskID() + ", NextTaskID:" + fTask.getNextTaskID());
			logDebug("systemUserObj: " + systemUserObj);

			if (useProcess)
				var result = aa.workflow.handleDisposition(itemCap, stepnumber, processID, wfstat, dispositionDate, wfnote, wfcomment, systemUserObj, dispo);
			else
				var result = aa.workflow.handleDisposition(itemCap, stepnumber, wfstat, dispositionDate, wfnote, wfcomment, systemUserObj, dispo);

			if (result.getSuccess()) {
				logDebug("Resulting Workflow Task: " + fTask.getProcessCode() + "." + wfstr + "(" + processID + "." + stepnumber + ")" + " with status " + wfstat + " " + dispositionType + (isTaskActive("Inspections")? " Active":""));
			} else {
				logDebug("ERROR: Resulting Workflow Task: " + fTask.getProcessCode() + "." + wfstr + "(" + processID + "." + stepnumber + ")" + " with status " + wfstat + " " + dispositionType + ". Reason: " + result.getErrorMessage());
			}
		}
	}
}


 
// added function sendEmailwAttachment 9-10-17
