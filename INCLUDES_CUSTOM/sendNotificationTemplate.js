function sendNotificationTemplate(contactTypes, templateName) {
	templateParams = null, reportName = null, reportParams = aa.util.newHashMap(), reportModule = null;
	if (arguments.length > 2) templateParams = arguments[2];
	if (arguments.length > 3) reportName = arguments[3];
	if (arguments.length > 4) reportParams = arguments[4];
	if (arguments.length > 5) reportModule = arguments[5];
    try {
        var emailToArray = [], emailCCArray = [];
		var capContacts = [];

		// Add License Professional to email
		if (contactTypes && contactTypes.indexOf("License Professional")) {
			var lpName = "", lpPhone = "", lpEmail = "";
			lpa = getLicenseProfessional(capId);
			for (x in lpa) {
				if (lpa[x].getLicenseType().substring(0,10) == "Contractor") {
					lpName = lpa[x].getBusinessName();
					if (lpName == null) lpName = (lpa[x].getContactFirstName()? lpa[x].getContactFirstName()+" ":"") + (lpa[x].getContactLastName()? lpa[x].getContactLastName():"");
					lpPhone = lpa[x].getPhone1();
					lpEmail = lpa[x].getEmail();
					if (lpa[x].getPrintFlag() == "Y") break; // Use Primary if found.
				}
			}
            if (lpEmail != "") emailToArray.push(lpEmail);
		}

        // Get array of Contact Email Addresses based on contact type(s)
		var capContacts = [];
		if (contactTypes) var capContacts = getContactByTypes_TPS(contactTypes, capId);
        if (!capContacts) { logDebug(contactTypes + " was not found."); return false; }
        for (c in capContacts) {
            var capContact = capContacts[c];
            var contactType = capContact.contactType;
            var contactEmail = capContact.getEmail();
            if (contactEmail == null || contactEmail == "") { logDebug(contactType + " email was not found."); continue; }
            if (!exists(contactEmail,emailToArray)) emailToArray.push(contactEmail);
        }

        // Set templateParams if not set.
        if (templateParams == null) {
            templateParams = aa.util.newHashtable();
            getParams4Notification(templateParams, []); // Add Standard Notification Parameters
            if (templateName && templateName == "UPDATE INFORMATION BY CITIZEN ON RECORD NOTIFICATION") getACARecordActionParam4Notification(templateParams, acaUrl, 1011);
            if (templateName && templateName == "UPDATE RECEIVED ON RECORD NOTIFICATION") addParameter(params, "$$aaRecordUrl$$", (avUrl? getAARecordUrl(avUrl) : ""));
        }

		var emailTo = "", emailCC = "", emailFrom = sysFromEmail;
        if (templateName) {
			var emailTemplateTo = null, emailTemplateCC = null,emailTemplateFrom = null;
            // Default to Template Mail From, To & CC if found.
            tmplResult = aa.communication.getNotificationTemplate(templateName);
            if (!tmplResult.getSuccess()) {
                logDebug("ERROR: Retrieving Email Template " + templateName + ". Reason: " + templResult.getErrorMessage());
                emailTemplate = null;
            } else if (!tmplResult.getOutput()) {
                logDebug("ERROR: Retrieving Email Template " + templateName + ". Reason: Template not found " + tmplResult.getOutput());
                emailTemplate = null;
            } else {
                emailTemplateModel = tmplResult.getOutput().getEmailTemplateModel();
                emailTemplateName = emailTemplateModel.getTemplateName();
                emailTemplateFrom = emailTemplateModel.getFrom();
                emailTemplateTo = emailTemplateModel.getTo();
                emailTemplateCC = emailTemplateModel.getCc();
                emailTemplateTitle = emailTemplateModel.getTitle();
                emailTemplateContentText = emailTemplateModel.getContentText();
				
				if (emailTemplateTo && emailTemplateTo != "") { // Add any missing Email TO Addresses
					var emailAddresses = emailTemplateTo;
					logDebug("emailTo: " + emailAddresses);
					if (emailAddresses.indexOf("$$") >= 0) { // Replace Parameters with values in text
						var keys = templateParams.keys();
						while (keys.hasMoreElements()) {
							key = keys.nextElement();
							keyValue = templateParams.get(key);
							if (emailAddresses.indexOf(key) >= 0) {
								emailAddresses = emailAddresses.split(key).join(keyValue); // Replace key with keyValue
								logDebug("emailTO substituted (1):  [" + key + "] = " + keyValue + " " + emailAddresses);
							}
						}
					}
					logDebug("emailTo: " + emailAddresses);
					emailAddresses = emailAddresses.split(";");
					for (ee in emailAddresses) {
						var emailAddress = emailAddresses[ee];
						if (emailAddress && emailAddress != "") {
							if (!exists(emailAddress.toLowerCase(),emailToArray)) // Do not add duplicate email addresses
								emailToArray.push(emailAddress);
								//emailToArray.push(emailAddress.toLowerCase())
						}
					}
				}
				if (emailTemplateCC && emailTemplateCC != "") { // Add any missing Email CC Addresses
					var emailAddresses = emailTemplateCC;
					logDebug("emailCC: " + emailAddresses);
					if (emailAddresses.indexOf("$$") >= 0) { // Replace Parameters with values in text
						var keys = templateParams.keys();
						while (keys.hasMoreElements()) {
							key = keys.nextElement();
							keyValue = templateParams.get(key);
							if (emailAddresses.indexOf(key) >= 0) {
								emailAddresses = emailAddresses.split(key).join(keyValue); // Replace key with keyValue
								logDebug("emailCC substituted (1):  [" + key + "] = " + keyValue + " " + emailAddresses);
							}
						}
					}
					logDebug("emailCC: " + emailAddresses);
					emailAddresses = emailAddresses.split(";");
					for (ee in emailAddresses) {
						var emailAddress = emailAddresses[ee];
						if (emailAddress && emailAddress != "") {
							if (!exists(emailAddress.toLowerCase(),emailToArray) && !exists(emailAddress.toLowerCase(),emailCCArray)) // Do not add duplicate email addresses
								emailCCArray.push(emailAddress.toLowerCase())
						}
					}
				}
				if (emailTemplateFrom && emailTemplateFrom != "") emailFrom = emailTemplateFrom;
			}
        }

		// Check for Report
		var reportFile = [];
		if (reportName) {
			var reportResult = aa.reportManager.getReportInfoModelByName(reportName);
			if (!reportResult.getSuccess()) {
				logDebug("Problem generating Report " + reportName + " Reason: " + (reportResult.getErrorMessage() ? reportResult.getErrorMessage() : "Unknown" + (reportResult.getOutput() ? " Output:" + reportResult.getOutput() : "")));
				reportName = null;
			} else if (!reportResult.getOutput()) {
				logDebug("Problem generating Report " + reportName + " Reason: " + "Unknown " + (reportResult.getOutput() ? " Output:" + reportResult.getOutput() : ""));
				reportName = null;
			}
			// Generate Report
			var report = generateReport(itemCap, reportName, reportModule, reportParams);
			if (report) reportFile.push(report);
		}
		
		if (templateName && (emailToArray.join(";") != "" || emailCCArray.join(";") != "")) {
			logDebug("Sending Notification Template: " + templateName + ", From: " + emailFrom + (emailToArray.join(";") != ""? ", To: " + emailToArray.join(";"):"") + (emailCCArray.join(";") != ""? ", CC: " + emailCCArray.join(";"):""));
			sentEmail = sendNotification(emailFrom, emailToArray.join(";"), emailCCArray.join(";"), templateName, templateParams, reportFile);
            return sentEmail
		} else {
			logDebug("ERROR: Unable to send Notification Template: " + templateName + ", to: " + emailToArray.join(";") + ", cc: " + emailCCArray.join(";"))
            return false;
        }
    } catch (err) {
        var context = "sendNotificationTemplate" + (typeof (scriptName) == "undefined" ? "" : " of Script: " + scriptName);
        logDebug("ERROR: An error occured in " + context + " Line " + err.lineNumber + " Error:  " + err.message);
        logDebug("Stack: " + err.stack);
    }

    return false;
}

 
