function sendNotification_BLDInspectionResult(inspTypeID) {
	var utilityReleaseInspections = ["502", "503", "507", "508", "509", "510", "511", "512", "513", "514", "515", "516", "517", "518", "519", "520", "521", "522", "523", "524", "525", "526", "527", "528", "529", "530", "531", "532", "527", "533", "534", "535", "400", "905"];
	var templateName = "BLD_INSPECTION_RESULT",
	templateParams = aa.util.newHashtable(),
	reportName = null,
	reportParams = aa.util.newHashMap(),
	reportModule = "Building";
	if (inspResult == "Approved") {
		if (exists(inspTypeID, utilityReleaseInspections)) {
			logDebug("Utility Release Inspection: " + inspType);
			//			sendNotification_UtilityRelease(inspTypeID);
		} else if (inspResult == "Approved" && exists(inspTypeID, ["905"]) && exists(appTypeArray[1], ["Commercial", "Residential", "Quick Turn"])
			 && AInfo["Sewer System Type"] == "Sewer" && checkInspectionResult("400: Building Sewer", "Approved") == false) {
			// Handle Sewer Utility Release Notification for 905: Plumbing Final if not sent via 400: Building Sewer.
			logDebug("Utility Release Inspection: " + inspType);
			//			sendNotification_UtilityRelease(inspTypeID);
		}
	}
	if (exists(inspTypeID, utilityReleaseInspections) && !exists(inspTypeID, ["400", "905"]))
		templateName = null; // Don't sent results of Utility Release Inspection.
	if (templateName) {
		getParams4Notification(templateParams, []); // Add Standard Notification Parameters
		sendNotificationTemplate("Applicant,Primary Contact,License Professional", templateName, templateParams, reportName, reportParams, reportModule);
	}
}
