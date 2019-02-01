function checkValidLicenses(itemCap) {
	var lpIssuesDetails = new Array();
	var lpWarningDetails = new Array();

	var missingLicenseTypes = new Array();
	var requiredLicenseTypes = new Array();
	contractorLicenseTypes = ["Building", "Electric", "Gas", "Mechanical", "Mobile Home", "Plumbing", "Pool", "Roofing", "Sign", "Vinyl", "House Mover", "Docks", "Aluminum", "Excavation", "Garage Door"];
	for (cc in contractorLicenseTypes) {
		contractorLicenseType = contractorLicenseTypes[cc];
		if (AInfo[contractorLicenseType + " Required"] == "CHECKED" || AInfo[contractorLicenseType + " Provided"] == "CHECKED" || AInfo[contractorLicenseType] == "CHECKED") {
			logDebug(contractorLicenseType + ", Required: " + AInfo[contractorLicenseType + " Required"] + ", Provided: " + AInfo[contractorLicenseType + " Provided"])
			requiredLicenseTypes[contractorLicenseType] = AInfo[contractorLicenseType + " Provided"];
			if (AInfo[contractorLicenseType + " Required"] == "CHECKED" && AInfo[contractorLicenseType + " Provided"] != "CHECKED")
				missingLicenseTypes.push(contractorLicenseType);
		}
	}
	if (missingLicenseTypes && missingLicenseTypes.length > 0) {
		lpIssuesDetails.push("Missing required License Types? " + missingLicenseTypes.join(","));
	}

	var capLicenseArr = getLicenseProfessional(itemCap);
	if (!capLicenseArr)
		return null;
	// Check License Professional
	for (capLic in capLicenseArr) {
		var lpLicState = null,
		lpLicExpDate = null,
		lpBusLicExpDate = null,
		lpInsExpDate = null,
		lpWCExpDate = null;
		var licProfScriptModel = capLicenseArr[capLic];
		if (licProfScriptModel.getAuditStatus() != "A")
			continue; // Inactive LP
		lpEmail = licProfScriptModel.getEmail();
		lpLicType = licProfScriptModel.getLicenseType();
		lpLicNbr = licProfScriptModel.getLicenseNbr();
		lpBusName = licProfScriptModel.getBusinessName();
		lpBusName2 = licProfScriptModel.getBusName2();
		lpName = (licProfScriptModel.getContactFirstName() ? licProfScriptModel.getContactFirstName() : "") + (licProfScriptModel.getContactMiddleName() ? " " + licProfScriptModel.getContactMiddleName() : "") + (licProfScriptModel.getContactLastName() ? " " + licProfScriptModel.getContactLastName() : "");

		lpIssuesMsg = "";
		lpExpired = false;
		refLPLModel = getRefLicenseProf(lpLicNbr);
		if (refLPLModel) {
			// lpEmail = refLPLModel.getEMailAddress();
			lpLicState = refLPLModel.getLicState();
			lpLicType = refLPLModel.getLicenseType();
			//lpLicNbr = refLPLModel.getStateLicense();
			lpBusName = refLPLModel.getBusinessName();
			lpBusName2 = refLPLModel.getBusinessName2();
			lpName = (refLPLModel.getContactFirstName() ? refLPLModel.getContactFirstName() : "") + (refLPLModel.getContactMiddleName() ? " " + refLPLModel.getContactMiddleName() : "") + (refLPLModel.getContactLastName() ? " " + refLPLModel.getContactLastName() : "");
			var lpExpDate = new Array();
			var lpExpDateText = new Array();
			var lpExpStatus = new Array();
			// Check License Expiration Dates
			var expTypes = ["State License", "Workers Compensation", "General Liability", "File Maintenance"];
			lpExpDate["State License"] = (refLPLModel.getLicenseExpirationDate() ? convertDate(refLPLModel.getLicenseExpirationDate()) : null);
			lpExpDate["Workers Compensation"] = (refLPLModel.getWcExpDate() ? convertDate(refLPLModel.getWcExpDate()) : null);
			lpExpDate["General Liability"] = (refLPLModel.getInsuranceExpDate() ? convertDate(refLPLModel.getInsuranceExpDate()) : null);
			lpExpDate["File Maintenance"] = (refLPLModel.getBusinessLicExpDate() ? convertDate(refLPLModel.getBusinessLicExpDate()) : null);
			for (eType in expTypes) {
				expType = expTypes[eType];
				expDate = lpExpDate[expType];
				expDue = (expDate ? parseInt(dateDiff(new Date(), expDate)) : null);
				if (expDue == null) {
					lpExpDateText[expType] = "";
					lpExpStatus[expType] = "N/A";
				} else if (expDue <= 0) {
					lpExpired = true;
					lpExpDateText[expType] = "<font color=red>" + jsDateToMMDDYYYY(expDate) + "</font>";
					lpExpDateText[expType] = jsDateToMMDDYYYY(expDate);
					lpExpStatus[expType] = "has expired " + lpExpDateText[expType];
					lpIssuesMsg += (lpIssuesMsg == "" ? "" : br + " - - ") + expType + " " + lpExpStatus[expType];
				} else if (expDue <= 14) {
					//					if(lpExpired == false) lpExpire = "Warning";
					lpSendNotification = true;
					lpExpDateText[expType] = "<font color=orange>" + jsDateToMMDDYYYY(expDate) + "</font>";
					lpExpDateText[expType] = jsDateToMMDDYYYY(expDate);
					lpExpStatus[expType] = "is about to expire on " + lpExpDateText[expType];
					lpIssuesMsg += (lpIssuesMsg == "" ? "" : br + " - - ") + expType + " " + lpExpStatus[expType];
				} else {
					lpExpDateText[expType] = jsDateToMMDDYYYY(expDate);
					lpExpStatus[expType] = "expires on " + lpExpDateText[expType];
				}
			}
		}
		logDebug(lpLicType + " " + lpLicNbr + " " + (lpName == "" ? lpBusName : lpName) + ": " + (lpExpired == false ? "OK" : br + lpIssuesMsg));
		if (lpExpired == true) {
			lpIssuesDetails.push(lpLicType + " " + lpLicNbr + " " + (lpName == "" ? lpBusName : lpName) + ": " + (lpIssuesMsg == "" ? "OK" : br + " - - " + lpIssuesMsg));
		} else if (lpExpired == "Warning") {
			lpWarningDetails.push(lpLicType + " " + lpLicNbr + " " + (lpName == "" ? lpBusName : lpName) + ": " + (lpIssuesMsg == "" ? "OK" : br + " - - " + lpIssuesMsg));
		}
	}

	if (lpWarningDetails && lpWarningDetails.length > 0)
		logMessage("WARNINGS: Check Professional(s): " + br + " - " + lpWarningDetails.join("," + br + " - "));

	return lpIssuesDetails;
}
