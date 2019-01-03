function updateComplaintCasesTable(pCapType) {
try {
	showDebug = true;
	logDebug("Finding " + pCapType + " records associated by Parcel");
	rCapIdList = new Array();
	rCapIdMsgList = new Array();
	capList = getRelatedCapsByAddress(pCapType);
	for (x in capList) {
		capListId = ""+capList[x].getCustomID();
		logDebug("capList["+x+"]: " + capListId);
		if (exists(capListId , rCapIdList)) continue; // Cap already exists on list.
		rCapIdList.push(capListId); 
		rCapIdMsgList[capListId] = "Address";
	}

	logDebug("Finding " + pCapType + " records associated by Parcel");
	capList = getRelatedCapsByParcel(pCapType);
	for (x in capList) {
		capListId = ""+capList[x].getCustomID();
		logDebug("capList["+x+"]: " + capListId);
		rCapIdMsgList[capListId] = (typeof(rCapIdMsgList[capListId]) == "undefined"? "":rCapIdMsgList[capListId] + ", ") + "Parcel";
		if (exists(capListId , rCapIdList)) continue; // Cap already exists on list.
		rCapIdList.push(capListId); 
	}
	rCapIdList.sort();
	logDebug("capIDs: " + rCapIdList.join(","));
	
    var tableName = "COMPLAINT CASES";
    var tableArr = loadASITable(tableName, capId);
	if (!tableArr) tableArr = new Array(); // Problem loading Array use empty array
	// Create a list of CAPs in Table
	var capIdList = new Array();
    for (var r in tableArr) {
		var tableRow = tableArr[r];
        rMsg = tableName + "[" + r + "]: Case # " + tableRow["Case #"] + ", Violation Type: " + tableRow["Violation Type"] + ", Open Date: " + tableRow["Open Date"] + ", Current Balance: " + tableRow["Current Balance"] + ", Status: " + tableRow["Status"] + ", Comments: " + tableRow["Comments"];
		if (tableRow["Case #"] == "" || tableRow["Case #"] == "(Total)") continue;
		capIdList.push(tableRow["Case #"]);
	}
	capIdList.sort();
	logDebug("existing capIDs: " + capIdList.join(","));
	
	// Add Missing Rows
	var readOnly = 'N';
	for (x in rCapIdList) {
		if (exists(rCapIdList[x], capIdList)) continue; // Skip Cap Id that already exist in table.
		rCapId = aa.cap.getCapID(rCapIdList[x]).getOutput();
		if (rCapId == null) continue; // Skip Cap Id not found
		rCapIdString = rCapId.getCustomID();
		var rCap = aa.cap.getCap(rCapId).getOutput();
		if (rCap == null) continue; // Skip Cap not found
		logDebug("Adding rCapList["+x+"]: " + rCapIdString + " " + rCapIdList[x]);
		var rCapStatus = rCap.getCapStatus();
		referToCEB = isTaskStatus_TPS("Follow-up Inspection", "Refer to CEB", null, rCapId);
		referToNAB = isTaskStatus_TPS("Follow-up Inspection", "Refer to NAB", null, rCapId) || isTaskStatus_TPS("Code Enforcement Board Findings", "Refer to NAB", null, rCapId);
		finesDue = getAppSpecific("Total Fees and Fines",rCapId);
		finesDue = (!isNaN(parseFloat(finesDue))? parseFloat(finesDue): 0);
		if (exists(rCapStatus,["CLOSED","INVALID","VOID","VOLUNTARY COMPLIANCE"]) && !(referToCEB || referToNAB)) { logDebug("Skipping (2)" + " status: " + rCapStatus + (referToCEB?" referred CEB":"") + (referToNAB?" referred NAB":"")); continue; }
		if (!exists(rCapStatus,["COMPLAINT","NOV","CEB FINDING","CEB LIEN"]) && !(referToCEB || referToNAB)) { logDebug("Skipping (1)" + " status: " + rCapStatus + (referToCEB?" referred CEB":"") + (referToNAB?" referred NAB":"")); continue; }
		
		tableRow = new Array();
		tableRow["Case #"] = "" + rCapIdString;
		tableRow["Violation Type"] = "";
		tableRow["Open Date"] = "";
		tableRow["Current Balance"] = "0";
		tableRow["Status"] = rCapStatus;
		tableRow["Comments"] = "";
		tableArr.push(tableRow);
	}


	// Update Table
	var totalDue = 0;
	newTableArr = new Array();
    for (var r in tableArr) {
		var tableRow = tableArr[r];
		var tableRow = updateComplaintCasesTableRow(tableName, tableRow, r);
		finesDue = tableRow["Current Balance"];
		finesDue = (!isNaN(parseFloat(finesDue))? parseFloat(finesDue): 0);
		totalDue += finesDue;
		// if (tableRow == false) continue;
        rMsg = tableName + "[" + r + "]: Case # " + tableRow["Case #"] + ", Violation Type: " + tableRow["Violation Type"] + ", Open Date: " + tableRow["Open Date"] + ", Current Balance: " + tableRow["Current Balance"] + ", Status: " + tableRow["Status"] + ", Comments: " + tableRow["Comments"];
		logDebug("Added " + rMsg);
		newTableArr.push(tableRow);
    }
	
	// Add (Total) row
	if (newTableArr.length > 0 && false) {
		tableRow = new Array();
		tableRow["Case #"] = "(Total)";
		tableRow["Violation Type"] = "(Total)";
		tableRow["Open Date"] = "";
		tableRow["Current Balance"] = ""+totalDue;
		tableRow["Status"] = "(Total)";
		tableRow["Comments"] = "Total of all Rows";
		newTableArr.push(tableRow);
	}
    removeASITable(tableName, capId);
    addASITable(tableName, newTableArr, capId);

} catch (err) {
	logDebug("A JavaScript Error occured: " + err.message + " Line " + err.lineNumber);
	logDebug("Stack: " + err.stack);
}

}

 
