function getInspectionsLatestStatus() {
	// returns an array of inspections by type.
	var itemCap = capId;
	if (arguments.length > 0 && arguments[0])
		itemCap = arguments[0]; // use cap ID specified in args
	var required = false;
	if (arguments.length > 1 && arguments[1])
		required = true; // "required" param = true or false. Only include required inspections?
	var excludeInspectionTypes = new Array();
	if (arguments.length > 2 && arguments[2])
		excludeInspectionTypes = arguments[2]; // use exclude inspection types specified in args
	var inspectionStatuses = null;
	// var inspectionStatuses = [null, "Scheduled", "Pending"];
	if (arguments.length > 3 && arguments[3])
		inspectionStatuses = arguments[3]; // "staus" param = result status of inspection. This determines what the status is of the inspection. In your case, not approved.

	var qualifiedInspections = new Array();
	var inspResultObj = aa.inspection.getInspections(itemCap);
	if (!inspResultObj.getSuccess()) {
		logDebug("Could not get inspections: " + inspResultObj.getErrorMessage());
		return false;
	}

	var inspList = inspResultObj.getOutput();
	for (i in inspList) {
		var inspObj = inspList[i];
		inspectionType = inspObj.getInspectionType();
		inspectionStatus = inspObj.getInspectionStatus();
		inspectionStatusDate = ((inspObj.getInspectionStatusDate()) ? convertDate(inspObj.getInspectionStatusDate()) : inspObj.getInspectionStatusDate());
		inspectionStatusDateTime = ((inspectionStatusDate) ? inspectionStatusDate.getTime() : null);
		inspectionRequired = ((inspObj.getInspection().getActivity().getRequiredInspection() == "Y") ? "Required" : "Optional");
		fMsg = "Inspection: " + inspObj.getIdNumber() + " " + inspectionType + ": " + inspectionStatus + " " + inspectionStatusDate + " " + inspectionRequired;
		//		logDebug("Checking " + fMsg);
		if (required && !inspObj.getInspection().getActivity().getRequiredInspection().equals("Y"))
			continue;
		// {	logDebug("Skipping (Required) " + fMsg);	continue; }
		if (exists(inspObj.getInspectionType(), excludeInspectionTypes))
			continue; // skip exclude inspection types
		// {	logDebug("Skipping (Type) " + fMsg);	continue; }
		if (exists(inspObj.getInspectionStatus(), ["Rescheduled", "Cancelled"]))
			continue; // skip rescheduled and canceled.
		// {	logDebug("Skipping (Status: Rescheduled, Cancelled) " + fMsg);  continue; }
		if (inspectionStatuses && !exists(inspObj.getInspectionStatus(), inspectionStatuses))
			continue; // only include these inspection statuses
		// {	logDebug("Skipping (Status) " + fMsg);	continue; }
		if (typeof(qualifiedInspections[inspObj.getInspectionType()]) == "undefined") {
			//			logDebug("Adding " + fMsg);
			qualifiedInspections[inspectionType] = inspObj;
			continue;
		}
		if (exists(inspObj.getInspectionStatus(), ["Pending", "Scheduled"])) {
			logDebug("Replacing (Status: Pending, Scheduled) " + fMsg);
			qualifiedInspections[inspectionType] = inspObj;
			continue;
		} // Replace Pending and Scheduled.

		inspObj2 = qualifiedInspections[inspectionType];
		inspObj2StatusDate = ((inspObj2.getInspectionStatusDate()) ? convertDate(inspObj2.getInspectionStatusDate()) : inspObj2.getInspectionStatusDate());
		inspObj2StatusDateTime = ((inspObj2StatusDate) ? inspObj2StatusDate.getTime() : null);
		inspObj2Required = ((inspObj2.getInspection().getActivity().getRequiredInspection() == "Y") ? "Required" : "Optional");
		fMsg2 = "Inspection: " + inspObj2.getIdNumber() + " " + inspObj2.getInspectionType() + ": " + inspObj2.getInspectionStatus() + " " + inspObj2StatusDate + " " + inspObj2Required;
		if (inspObj2StatusDateTime == inspectionStatusDateTime) {
			if (inspObj2.getIdNumber() < inspObj.getIdNumber()) {
				//				logDebug("Replacing (#) " + fMsg2 + " with " + fMsg);
				qualifiedInspections[inspectionType] = inspObj;
				//			} else {
				//				logDebug("Skipping (#) " + fMsg2 + " vs " + fMsg);
			}
		} else if (inspObj2.getInspectionStatusDate() && inspObj2.getInspectionStatusDate() < inspObj.getInspectionStatusDate()) {
			//			logDebug("Replacing (Date) " + fMsg2 + " with " + fMsg);
			qualifiedInspections[inspectionType] = inspObj;
			//		} else {
			//			logDebug("Skipping " + fMsg2 + " vs " + fMsg);
		}
	}

	//	logDebug("Latest " + (required? "Required " : "") + "Inspections:");
	// Sort by Inspection Type
	var qualifiedInspectionTypes = new Array();
	for (inspectionType in qualifiedInspections) {
		qualifiedInspectionTypes.push(inspectionType);
	}
	qualifiedInspectionTypes.sort();
	var qualifiedInspectionsSorted = new Array();
	for (ii in qualifiedInspectionTypes) {
		var inspectionType = qualifiedInspectionTypes[ii];
		qualifiedInspectionsSorted[inspectionType] = qualifiedInspections[inspectionType];
		logDebug(inspectionType + ": " + qualifiedInspections[inspectionType].getInspectionStatus() + (qualifiedInspections[inspectionType].getInspection().getActivity().getRequiredInspection().equals("Y") ? " Required" : " Optional"));
		logDebug(inspectionType + ": " + qualifiedInspectionsSorted[inspectionType].getInspectionStatus() + (qualifiedInspectionsSorted[inspectionType].getInspection().getActivity().getRequiredInspection().equals("Y") ? " Required" : " Optional"));
	}

	return qualifiedInspectionsSorted;
}
