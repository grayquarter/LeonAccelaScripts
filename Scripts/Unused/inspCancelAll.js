function inspCancelAll() {
	// Modified from INCLUDES_ACCELA_FUNCTIONS v9.3.0
	//   - Optionally specify CapId;
	//   - Also cancel all Pending inspections
	var itemCap = capId;
	if (arguments.length > 0 & arguments[0]) itemCap = arguments[0];
	var isCancelled = false;
	var inspResults = aa.inspection.getInspections(itemCap);
	if (inspResults.getSuccess()) {
		var inspAll = inspResults.getOutput();
		var inspectionId;
		var cancelResult;
		for (ii in inspAll)	{
			if (!inspAll[ii].getAuditStatus().equals("A")) continue; // Ignore inactive inspections
			if (inspAll[ii].getDocumentDescription().equals("Insp Scheduled") || inspAll[ii].getDocumentDescription().equals("Insp Pending")) {
				inspectionId = inspAll[ii].getIdNumber();		// Inspection identifier	
				cancelResult = aa.inspection.cancelInspection(itemCap,inspectionId);
				if (cancelResult.getSuccess()) {
					logMessage("Cancelling inspection: " + inspAll[ii].getInspectionType() + ", Status: " + inspAll[ii].getInspectionStatus() + " (" + inspAll[ii].getDocumentDescription() + ")");
					isCancelled = true;
				} else
					logMessage("**ERROR","**ERROR: Cannot cancel inspection: "+inspAll[ii].getInspectionType()+", "+cancelResult.getErrorMessage());
			}
		}
	} else
		logMessage("**ERROR: getting inspections: " + inspResults.getErrorMessage());
	
	return isCancelled;
}

/*------------------------------------------------------------------------------------------------------/
/ Function to retrieve check licenses by LP and LP Type
/ IK Consulting, LLC, 3/29/17
/------------------------------------------------------------------------------------------------------*/
