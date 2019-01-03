
var improvementType = AInfo['Improvement Type'];
var valuationOfWorkPerformed = (AInfo['Valuation of Work Performed'] ? parseInt(AInfo['Valuation of Work Performed']) : null);
logDebug('improvementType: ' + improvementType);
logDebug('valuationOfWorkPerformed: ' + valuationOfWorkPerformed);
editAppName(improvementType);
if (isTaskComplete('Intake')) {
	var feesNeedUpdate = addFees_Building(null, true);
	addInspections_Building(feesNeedUpdate);
}

assignTask('Intake', currentUserID);
assignTask('Permit Issuance', currentUserID);
// DISABLED: ASA:Building/Express/*/*:04 Redact Record
// if (AInfo['Redact Record'] == 'Yes') {
// 	redactRecord();
// 	editAppName((AInfo['Redact Record'] == 'Yes'? 'REDACT:':'') + improvementType);
// 	}
