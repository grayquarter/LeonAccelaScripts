function hasRequiredInspections() {
	// Update Workflow if all required inspections are completed.
	var itemCap = capId;
	if (arguments.length > 0 && arguments[0])
		itemCap = arguments[0]; // use cap ID specified in args
	var excludeInspectionTypes = [];
	if (arguments.length > 1 && arguments[1])
		excludeInspectionTypes = arguments[1];
	var inspectionStatuses = [];
	var inspectionStatuses = [null, "Pending", "Scheduled"];
	if (arguments.length > 2 && arguments[2])
		inspectionStatuses = arguments[2];
	var requiredInspections = getInspectionsLatestStatus(capId, true, excludeInspectionTypes);
	//	logDebug("required Inspections with statuses(" + inspectionStatuses.join(",") + "):");
	var reasonDetails = [];
	if (requiredInspections) {
		for (xx in requiredInspections) {
			//			logDebug(".   " + requiredInspections[xx].getInspectionType() + (requiredInspections[xx].getInspectionStatus()? ": " + requiredInspections[xx].getInspectionStatus():"") + " " + exists(requiredInspections[xx].getInspectionStatus(),inspectionStatuses));
			if (exists(requiredInspections[xx].getInspectionStatus(), inspectionStatuses)) {
				reasonDetails.push(requiredInspections[xx].getInspectionType() + (requiredInspections[xx].getInspectionStatus() ? ": " + requiredInspections[xx].getInspectionStatus() : ""));
			}
		}
	}
	//	logDebug("<font color=orange>Required inspections: " + br + ".  " + reasonDetails.join("," + br + ".  ") + "</font>");
	return reasonDetails;
}
