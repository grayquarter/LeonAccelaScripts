function addInspections_Building() {
	var inspectionsNeedUpdate = null;
	if (arguments.length > 0) inspectionsNeedUpdate = arguments[0];
	var newFeeArray = "";
	var inspOptArray = new Array();
	var inspReqArray = new Array();

	var resultObj = getFees_Inspections_Building(inspectionsNeedUpdate);
	if (resultObj) {
		newFeeArray = resultObj["New Fees"];
		valuationBasedFees = resultObj["Vaulation Based Fees"];
		inspectionsNeedUpdate = resultObj["Need Update"];
		inspOptArray = resultObj["Optional Inspections"];
		inspReqArray = resultObj["Required Inspections"];
	}

	logDebug("Optional inspections: " + inspOptArray.join(","));
	logDebug("Required inspections: " + inspReqArray.join(","));
	
//	var inspectionsNeedUpdate = false; // Turn this off for now.
	if (!inspectionsNeedUpdate) return; // Fees do not need to be updated
	
	inspArray = new Array();
	for (ii in inspOptArray) inspArray.push(inspOptArray[ii]);
	for (ii in inspReqArray) inspArray.push(inspReqArray[ii]);
	// Remove any unnecessary Inspections - Pending/Scheduled
	var inspResultObj = aa.inspection.getInspections(capId);
	if (inspResultObj.getSuccess())	{
		var inspList = inspResultObj.getOutput();
		for (xx in inspList) {
			inspectionId = inspList[xx].getIdNumber();		// Inspection identifier	
			inspectionType = inspList[xx].getInspectionType();	// Inspection type	
			inspectionStatus = inspList[xx].getInspectionStatus();	// Inspection type	
			if (!inspList[xx].getAuditStatus().equals("A")) continue; // ignore inactive inspections.
			if (!exists(inspectionStatus.toUpperCase(),["SCHEDULED","PENDING"])) continue; // ignore inspections that are not Scheduled or Pending.
			if (exists(inspectionType,inspOptArray)) continue; // ignore Optional Inspections
			if (exists(inspectionType,inspReqArray)) continue; // ignore Required Inspections
			// Remove inspection
			cancelResult = aa.inspection.cancelInspection(capId,inspectionId);
			if (cancelResult.getSuccess()) {
				logDebug("Cancelling inspection: " + inspectionId + " " + inspectionType);
//				isCancelled = true;
			} else {
				logDebug("**ERROR: Cannot cancel inspection: " + inspectionId + " " + inspectionType + ", " + cancelResult.getErrorMessage());
			}
		}
	}
	// Add missing Inspections
	for (ii in inspArray) {
		inspGroup = "L-INSP_ALL";
		inspType = inspArray[ii];
		inspRequired = exists(inspType,inspReqArray)
		if (!isScheduled(inspType)) createPendingInspection_TPS(inspGroup,inspType,capId,inspRequired,"Added By Script");
	}
}

 
