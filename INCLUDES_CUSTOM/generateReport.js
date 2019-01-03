function generateReport(itemCap, reportName, module, parameters) {
	//Modified from INCLUDES_ACCELA_FUNCTIONS
	//Includes the ability to save the report as a document.
	//returns the report file which can be attached to an email.
	var saveReport = false;
	if (arguments.length > 4) saveReport = arguments[4];
	var reportUserID = currentUserID; // Optional parameter for User ID default to currentUserID
	if (arguments.length > 5) reportUserID = arguments[5];

	logDebug("Generating " + (saveReport ? "saved " : "") + "report: " + reportName + ", CAP: " + itemCap.getCustomID() + ", parameters: " + parameters);
try {
	// Step 1.  Get Report Model by ReportName
	var reportInfoResult = aa.reportManager.getReportInfoModelByName(reportName);
	if (reportInfoResult.getSuccess() == false) {
		// Notify adimistrator via Email, for example
		logDebug("Could not find this report " + reportName);
		return false;
	}
	
	var reportModule = module;
	if (reportModule == null) { // Use Group from record type as module.
		appTypeResult = itemCap.getCapType();
		appTypeString = appTypeResult.toString();
		appTypeArray = appTypeString.split("/");
		reportModule = appTypeArray[0];
	} 

	// Step 2. Initialize report
	report = reportInfoResult.getOutput();
	report.setModule(reportModule);
//	report.setCapId(itemCap.getCustomID());
	report.setCapId(itemCap.getID1() + "-" + itemCap.getID2() + "-" + itemCap.getID3());
	report.setReportParameters(parameters);
	if (saveReport) {
		logDebug("attaching report to CAP: " + itemCap.getCustomID());
		report.getEDMSEntityIdModel().setAltId(itemCap.getCustomID());
//		report.getEDMSEntityIdModel().setCapId(itemCap.getID1() + "-" + itemCap.getID2() + "-" + itemCap.getID3());
	} else {
//		logDebug("No Report Saved");
		report.setEDMSEntityIdModel(null);
	}

	// Step 3. Check permission on report
	var permissionResult = aa.reportManager.hasPermission(reportName, reportUserID);
	if (permissionResult.getSuccess() == false || permissionResult.getOutput().booleanValue() == false) {
		// Notify adimistrator via Email, for example
		logDebug("The user " + reportUserID + " does not have perssion on this report " + reportName);
		return false;
	}

	// Step 4. Run report
	var reportResult = aa.reportManager.getReportResult(report);
	if (reportResult.getSuccess() == false) {
		// Notify adimistrator via Email, for example
		logDebug("Could not get report from report manager normally, error message please refer to: " + reportResult.getErrorMessage());
		return false;
	}

	// Step 5, Store Report File to harddisk
	reportOutput = reportResult.getOutput();
	var reportFileResult = aa.reportManager.storeReportToDisk(reportOutput);
	if (reportFileResult.getSuccess() == false) {
		// Notify adimistrator via Email, for example
		logDebug("The application does not have permission to store this temporary report " + reportName + ", error message please refer to:" + reportResult.getErrorMessage());
		return false;
	}
	reportFile = reportFileResult.getOutput();
	logDebug("reportFile: " + reportFile);
	return reportFile;

} catch (err) {
	var context = "generateReport" + (typeof (scriptName) == "undefined" ? "" : " of Script: " + scriptName);
	logDebug("ERROR: An error occured in " + context + " Line " + err.lineNumber + " Error:  " + err.message);
	logDebug("Stack: " + err.stack);
}
}
 
