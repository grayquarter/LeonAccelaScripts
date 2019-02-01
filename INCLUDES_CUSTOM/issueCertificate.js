function issueCertificate(nextTask, nextStatus, resultTask) {
	var nextTaskUpdate = false;
	if (nextTask == null) { // Determine Next Task based on Active Task if not identified.
		if (isTaskActive("Certificate")) {
			nextTask = "Certificate";
			nextStatus = "COFO Issued";
			var improvementType = AInfo["Improvement Type"];
			if (exists(appTypeArray[1], ["Express"]))
				nextStatus = "CC Issued";
			else if (improvementType && exists(improvementType, [""]))
				nextStatus = "CC Issued";
		} // "CC Issued";
		if (isTaskActive("Certificate of Completeness")) {
			nextTask = "Certificate of Completeness";
			nextStatus = "CC Issued";
		}
		if (isTaskActive("Certificate of Occupancy")) {
			nextTask = "Certificate of Occupancy";
			nextStatus = "COFO Issued";
		}
	}
	if (nextTask) {
		// resultTask = isTaskActive(nextTask);
		if (resultTask) { // Should task be resulted? if so check if it can be then result it.
			var result = checkWorkflowTaskUpdate_BLD(nextTask, nextStatus, false);
			if (result && result.getSuccess() && result.getErrorType() != "Supervisor Override") {
				nextTaskUpdate = true;
			}
			if (nextTaskUpdate) {
				resultWorkflowTask(nextTask, nextStatus, "Updated by script via Inspection Results.", "");
			} else {
				showMessage = true;
				comment("Restrictions prevent updating task: " + nextTask + " with status: " + nextStatus + " Reasons: " + br + result.getOutput().join(";" + br));
			}
		} else { // Task should have been resulted via Workflow Task Update, so skip check and resulting task.
			nextTaskUpdate = true;
		}
		// Send Notification Template
		if (nextTaskUpdate && nextStatus) {
			var templateName = null,
			templateParams = aa.util.newHashtable(),
			reportName = null,
			reportParams = aa.util.newHashMap(),
			reportModule = "Building";
			if (exists(nextStatus, ["COFO Issued"])) {
				templateName = "BLD_CERTIFICATE_OF_OCCUPANCY";
				reportName = "Certificate of Occupancy";
				//addParameter(reportParams,"Record Number", capIDString.toString().trim());
				addParameter(reportParams, "permitNo", capIDString.toString().trim());
			} else if (exists(nextStatus, ["CC Issued"])) {
				templateName = "BLD_CERTIFICATE_OF_COMPLETION";
				if (appMatch("Building/Express/*/*")) {
					reportName = "Express CofC";
				} else {
					reportName = "Certificate of Completion";
				}
				//addParameter(reportParams,"AltID", capIDString.toString().trim()); // Use Report Parameter Name not Parameter Name for Report configured report.
				addParameter(reportParams, "Permit Number", capIDString.toString().trim()); // Use configured Parameter Name for Report.
			}
			if (templateName) {
				getParams4Notification(templateParams, []); // Add Standard Notification Parameters
				sendNotificationTemplate("Applicant,Primary Contact", templateName, templateParams, reportName, reportParams, reportModule);
			}
		}
		if (!isTaskActive(nextTask)) {
			inspCancelAll();
			closeCap(currentUserID);
		}
	}
}
