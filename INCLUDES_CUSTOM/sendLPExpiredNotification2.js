function sendLPExpiredNotification(itemCap) {
    var applicant = null;
    var primaryLPEmail = null;
    var capLicenseArr = getLicenseProfessional(itemCap);
    if (!capLicenseArr) return null;
    // Check License Professional 
    for (capLic in capLicenseArr) {
        var lpLicState = null, lpLicExpDate = null, lpBusLicExpDate = null, lpInsExpDate = null, lpWCExpDate = null;
        var licProfScriptModel = capLicenseArr[capLic];
        if (licProfScriptModel.getAuditStatus() != "A") continue; // Inactive LP
        lpEmail = licProfScriptModel.getEmail();
        lpLicType = licProfScriptModel.getLicenseType();
        lpLicNbr = licProfScriptModel.getLicenseNbr();
        lpBusName = licProfScriptModel.getBusinessName();
        lpBusName2 = licProfScriptModel.getBusName2();
        lpName = (licProfScriptModel.getContactFirstName() ? licProfScriptModel.getContactFirstName() : "") + (licProfScriptModel.getContactMiddleName() ? " " + licProfScriptModel.getContactMiddleName() : "") + (licProfScriptModel.getContactLastName() ? " " + licProfScriptModel.getContactLastName() : "");

        lpIssuesMsg = "";
        lpSendNotification = false;
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
                    lpSendNotification = true;
                    lpExpDateText[expType] = "<font color=red>" + jsDateToMMDDYYYY(expDate) + "</font>";
                    lpExpStatus[expType] = "has expired " + lpExpDateText[expType];
                    lpIssuesMsg += expType + " " + lpExpStatus[expType] + "<br>";
                } else if (expDue <= 14) {
                    lpSendNotification = true;
                    lpExpDateText[expType] = "<font color=red>" + jsDateToMMDDYYYY(expDate) + "</font>";
                    lpExpStatus[expType] = "is about to expire on " + lpExpDateText[expType];
                    lpIssuesMsg += expType + " " + lpExpStatus[expType] + " " + expDue + "<br>";
                } else {
                    lpExpDateText[expType] = jsDateToMMDDYYYY(expDate);
                    lpExpStatus[expType] = "expires on " + lpExpDateText[expType];
                }
            }
        }
        if (!lpSendNotification) continue;
        logDebug("Notifying LP[" + capLic + "]: " + lpLicType + " " + lpLicNbr + " " + lpLicState + " " + lpBusName + " " + lpName + ", issues: " + lpIssuesMsg)
        var emailParams = aa.util.newHashtable();
        addParameter(emailParams, "$$altId$$", capIDString);
        addParameter(emailParams, "$$lpLicType$$", lpLicType);
        addParameter(emailParams, "$$lpLicNbr$$", lpLicNbr);
        addParameter(emailParams, "$$lpLicState$$", lpLicState);
        addParameter(emailParams, "$$lpBusName$$", lpBusName);
        addParameter(emailParams, "$$lpBusName2$$", lpBusName2);
        addParameter(emailParams, "$$lpName$$", lpName);
        for (eType in expTypes) {
            expType = expTypes[eType];
            expDateText = lpExpDateText[expType];
            expStatus = lpExpStatus[expType];
            addParameter(emailParams, "$$lp" + expType.replace(" ", "") + "ExpDate$$", expDateText);
            addParameter(emailParams, "$$lp" + expType.replace(" ", "") + "ExpStatus$$", expStatus);
        }
        addParameter(emailParams, "$$lpIssuesMsg$$", lpIssuesMsg);
        // Get Applicant
        var applicantEmail = "";
        if (applicant == null) applicant = getContactByType("Applicant", capId);
        if (applicant) {
            getContactParams4Notification(emailParams, "Applicant");
            applicantEmail = applicant.getEmail();
        }
        var emailAddressLicensing = "Licensing@LeonCountyfl.gov";
        var emailAddressLicensing = "DSEM_LICENSING@leoncountyfl.gov";
        var emailFrom = emailAddressLicensing;
        var lpEmailMsg = "";
        var emailTo = new Array();
        var emailCC = new Array();
        if (lpEmail && lpEmail != "") {
            emailTo.push(lpEmail);
            if (applicantEmail && applicantEmail != "") emailCC.push(applicantEmail);
            emailCC.push(emailAddressLicensing);
        } else {
            if (applicantEmail && applicantEmail != "") emailTo.push(applicantEmail);
            emailTo.push(emailAddressLicensing);
            lpEmailMsg = "<p>The deficient contractor " + lpBusName + " does not have a valid email address on file.</p>"
        }
        if (!primaryLPEmail) {
            primaryLP = getPrimaryLP(itemCap);
            if (primaryLP) primaryLPEmail = primaryLP.getEmail();
        }
        if (primaryLPEmail && primaryLPEmail != "" && !exist(primaryLPEmail, emailTo) && !exist(primaryLPEmail, emailCC)) emailCC.push(primaryLPEmail);

        addParameter(emailParams, "$$lpEmailMsg$$", lpEmailMsg);
        sendNotificationEmail(emailFrom, emailTo.join(";"), emailCC.join(";"), "LP_EXPIRATION_NOTIFICATION", emailParams, null, capId, false);
        // addActivityLP("Communication", "LP_EXPIRATION_NOTIFICATION", "Leon County Notice of License Deficiency on Permit Number " + capIDString + " for License Number " + lpLicNbr , null, capId, "Y");
    }
}
