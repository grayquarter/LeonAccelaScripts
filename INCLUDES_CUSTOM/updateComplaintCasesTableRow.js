function updateComplaintCasesTableRow(tableName, tableRow, r) {
        rMsg = tableName + "[" + r + "]: Case # " + tableRow["Case #"] + ", Violation Type: " + tableRow["Violation Type"] + ", Open Date: " + tableRow["Open Date"] + ", Current Balance: " + tableRow["Current Balance"] + ", Status: " + tableRow["Status"] + ", Comments: " + tableRow["Comments"];
		if (tableRow["Case #"] == "" || tableRow["Case #"] == "(Total)") {tableRow["Status"] = "("; logDebug("Skipped " + rMsg); return false; }
        // logDebug("Checking " + rMsg)
		rCapId = aa.cap.getCapID(tableRow["Case #"]).getOutput();
		if (rCapId == null) {tableRow["Status"] = "(Unknown)"; tableRow["Comments"] += (tableRow["Comments"].indexOf("Record not found") >=0? "":"; Record Not Found"); logDebug("Skipped " + rMsg); return false; }
		rCapIdString = rCapId.getCustomID();
		var rCap = aa.cap.getCap(rCapId).getOutput();
		if (rCap == null) {tableRow["Status"] = "(Unknown)"; tableRow["Comments"] += (tableRow["Comments"].indexOf("Record not found") >=0? "":"; Record Not Found"); logDebug("Skipped " + rMsg); return false; }
		var rCapTypeResult = rCap.getCapType();
		var rCapTypeAlias = rCapTypeResult.getAlias();
		var rCapName = rCap.getSpecialText();
		var rCapStatus = rCap.getCapStatus();
		var rCapFileDateObj = rCap.getFileDate();
		var rCapFileDate = rCapFileDateObj.getMonth() + "/" + rCapFileDateObj.getDayOfMonth() + "/" + rCapFileDateObj.getYear();
		referToCEB = isTaskStatus_TPS("Follow-up Inspection", "Refer to CEB", null, rCapId);
		referToNAB = isTaskStatus_TPS("Follow-up Inspection", "Refer to NAB", null, rCapId) || isTaskStatus_TPS("Code Enforcement Board Findings", "Refer to NAB", null, rCapId);
		fineImposed = isTaskStatus_TPS("Code Enforcement Board Findings", "Fine Imposed", null, rCapId);
		violationType = getAppSpecific("Violation Type",rCapId);
		finesDue = 0;
		finesDue = getAppSpecific("Total Fees and Fines",rCapId);
		finesDue = (!isNaN(parseFloat(finesDue))? parseFloat(finesDue): 0);
		var rCapComments = (typeof(rCapIdMsgList[capListId]) == "undefined"? "" + tableRow["Comments"]:"Associated to " + rCapIdMsgList[capListId]) + (fineImposed? "; Fine Imposed":(referToCEB? "; Referred to CEB":"")+(referToNAB? "; Referred to NAB":""));

		// tableRow["Case #"] = "" + rCapIdString; // Should not need to update this as it should already be set.
		tableRow["Violation Type"] = "" + violationType;
		tableRow["Open Date"] = "" + rCapFileDate;
		tableRow["Current Balance"] = "" + finesDue;
		if (rCapStatus ==  "COMPLAINT", rCapStatus ==  "NOV") rCapStatus = "Open";
		if (rCapStatus ==  "CEB FINDING") rCapStatus = "Code Enforcement Board Finding";
		if (rCapStatus ==  "CEB LIEN") rCapStatus = "Code Enforcement Board Lien";
		if (rCapStatus ==  "CLOSED") rCapStatus = "Closed";
		if (rCapStatus ==  "INVALID") rCapStatus = "Invalid";
		if (rCapStatus ==  "REFERRED") rCapStatus = "Referred";
		if (rCapStatus ==  "VOLUNTARY COMPLIANCE") rCapStatus = "Voluntary Compliance";
		if (rCapStatus ==  "VOID") rCapStatus = "Void";
		tableRow["Status"] = "" + rCapStatus;
		tableRow["Comments"] = "" + rCapComments;
		
        rMsg = tableName + "[" + r + "]: Case # " + tableRow["Case #"] + ", Violation Type: " + tableRow["Violation Type"] + ", Open Date: " + tableRow["Open Date"] + ", Current Balance: " + tableRow["Current Balance"] + ", Status: " + tableRow["Status"] + ", Comments: " + tableRow["Comments"];
        logDebug("Updating " + rMsg)
		return tableRow;
}

/*------------------------------------------------------------------------------------------------------/
|  Author: Pedro Luis Montoya
|  Created: 2016/10/31
|  Function: updateConditionTemplateModel
|  Summary: Accept a template model from a CAE Condition, with group name, sub group name, field name,
|           and field value. The function will search through the template model by transversing the
|           groups and sub groups to find the correct field and replacing the value. Return the same
|           model that was submitted.
/------------------------------------------------------------------------------------------------------*/
