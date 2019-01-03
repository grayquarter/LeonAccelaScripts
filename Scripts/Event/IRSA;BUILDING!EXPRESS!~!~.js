
var inspTypeID = inspType.substr(0, 3);
var utilityReleaseInspections = ['502', '503', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '527', '533', '534', '535', '400', '905'];
if (typeof(inspResultComment) == 'undefined') {
	inspResultComment = inspComment;
}

var excludeInspectionTypes = [];
inspectionStatuses = [null, 'Pending', 'Scheduled'];
var requiredInspections = hasRequiredInspections(capId, excludeInspectionTypes, inspectionStatuses);
// logDebug('<font color=orange>Required inspections: ' + br + '.  ' + requiredInspections.join(',' + br + '.  ') + '</font>');
if (requiredInspections && requiredInspections.length == 0) {
	resultWorkflowTask('Inspections', 'Final Inspection Completed', 'Updated by script by inspection: ' + inspType + '. ' + inspResultComment, '');
	editAppSpecific('Final Date', jsDateToASIDate(new Date()));
} else {
	comment('<font color=red>Waiting for inspections: ' + br + '.  ' + requiredInspections.join(',' + br + '.  ') + '</font>');
}

logDebug('isTaskActive(' Inspections '): ' + isTaskActive('Inspections'));
logDebug('isTaskActive(' Certificate of Completeness '): ' + isTaskActive('Certificate of Completeness'));
if (isTaskActive('Inspections') && !exists(inspResult, ['Information', 'Cancelled', 'Pending', 'Scheduled'])) {
	sendNotification_BLDInspectionResult();
}
