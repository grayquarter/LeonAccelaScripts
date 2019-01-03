
var improvementType = AInfo['Improvement Type'];
var valuationOfWorkPerformed = (AInfo['Valuation of Work Performed'] ? parseInt(AInfo['Valuation of Work Performed']) : null);
logDebug('improvementType: ' + improvementType);
logDebug('valuationOfWorkPerformed: ' + valuationOfWorkPerformed);
editAppName(improvementType);
if (isTaskComplete('Intake')) {
	var feesNeedUpdate = addFees_Building(null, true);
	addInspections_Building(feesNeedUpdate);
}

// DISABLED: ASIUA:Building/Express/*/*:03 Assign
// if (isTaskActive('Intake')) {
// 	assignTask('Intake',currentUserID);
// 	}

// DISABLED: ASIUA:Building/Express/*/*:04 Redact Record
// redactRecord(AInfo['Redact Record']);
// editAppName((AInfo['Redact Record'] == 'Yes'? 'REDACT:':'') + improvementType);
