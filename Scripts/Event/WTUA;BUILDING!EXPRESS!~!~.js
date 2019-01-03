
logDebug('Script: WTUA:Building/Express/*/*' + ', wfTask: ' + wfTask + ', wfStatus: ' + wfStatus);
if (wfTask == 'Intake' && wfStatus == 'Application Submitted' && balanceDue == 0) {
	var valuationOfWorkPerformed = (AInfo['Valuation of Work Performed'] ? parseInt(AInfo['Valuation of Work Performed']) : null);
	var improvementType = AInfo['Type of Work'];
	logDebug('improvementType: ' + improvementType);
	logDebug('valuationOfWorkPerformed: ' + valuationOfWorkPerformed);
	var feesNeedUpdate = addFees_Building(null, true);
	addInspections_Building(feesNeedUpdate);
}

if (wfTask == 'Intake' && wfStatus == 'Application Submitted') {
	var templateName = 'STAFF BLD VERIFICATION EXPRESS PERMIT',
	templateParams = aa.util.newHashtable(),
	reportName = null,
	reportParams = aa.util.newHashMap(),
	reportModule = 'Building';
	getParams4Notification(templateParams, []);
	sendNotificationTemplate(null, 'STAFF BLD VERIFICATION EXPRESS PERMIT', templateParams);
	var assignedTask = 'Permit Issuance';
	assignTask(assignedTask, currentUserID);
}

assignedTask = 'Permit Issuance', assignedTaskUser = null, assignedTaskUserID = null, assignedTaskUserEmail = null;
assignedTaskUser = getTaskAssignedUser(assignedTask);
logDebug('assignedTask: ' + assignedTask + ', assignedTaskUser: ' + assignedTaskUser);
if (assignedTaskUser) {
	assignedTaskUserID = assignedTaskUser.getUserID();
	assignedTaskUserEmail = assignedTaskUser.getEmail();
	logDebug('assignedTaskUser: ' + assignedTaskUser + ', UserID: ' + assignedTaskUserID + ', Email: ' + assignedTaskUserEmail);
}

if (wfTask == 'Verification' && wfStatus == 'Ready to Issue') {
	assignedTaskUser = getTaskAssignedUser('Permit Issuance');
	var templateName = 'STAFF READY TO ISSUE PERMIT',
	templateParams = aa.util.newHashtable(),
	reportName = null,
	reportParams = aa.util.newHashMap(),
	reportModule = 'Building';
	getParams4Notification(templateParams, []);
	addParameter(templateParams, '$$taskAssignedUserEmail$$', assignedTaskUserEmail);
	sendNotificationTemplate(null, 'STAFF READY TO ISSUE PERMIT', templateParams);
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	issuePermit();
}

if (wfTask == 'Certificate of Completeness' && wfStatus == 'CC Issued') {
	issueCertificate(wfTask, wfStatus, false);
}
