function issuePermit() {
	var nextTask = "Permit Issuance", nextStatus = "Issued", nextTaskUpdate = false;
	var resultTask = isTaskActive(nextTask);
	if (resultTask) { // Should task be resulted? if so check if it can be then result it.
		var result = checkWorkflowTaskUpdate_BLD(nextTask,nextStatus,false);
		if (result && result.getSuccess() && result.getErrorType() != "Supervisor Override") {
			nextTaskUpdate = true;
		}
		if (nextTaskUpdate) {
			resultWorkflowTask(nextTask, nextStatus, "Updated by script.", "");
		} else {
			showMessage = true;
			comment("Restrictions prevent updating task: " + nextTask + " with status: " + nextStatus + " Reasons: " + br + result.getOutput().join(";" + br));
		}
	} else { // Task should have been resulted via Workflow Task Update, so skip check and resulting task.
		nextTaskUpdate = isTaskActive(nextTask);
	}
	// Send Notification Template
	if (nextTaskUpdate) {
		var templateName = "BLD_PERMIT_ISSUED", templateParams = aa.util.newHashtable(), reportName = "Building Permit", reportParams = aa.util.newHashMap(), reportModule = "Building";
		addParameter(reportParams,"Permit Number", capIDString.toString().trim());
		addParameter(reportParams,"Printed By", systemUserFullName.toString().trim());
		getParams4Notification(templateParams, []); // Add Standard Notification Parameters
		sendNotificationTemplate("Applicant,Primary Contact", templateName, templateParams, reportName, reportParams, reportModule);
		if (balanceDue <= 0 && AInfo["Redact Record"] == "Yes") { 
			updateAppStatus("Issued Redacted"); 
		//	redactRecord(); 
		}
	}
}

 
