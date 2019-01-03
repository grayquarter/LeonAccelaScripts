function sendNotificationEmail(emailFrom, emailTo, emailCC, templateName, templateParams, reportFile) {
    // Modified from sendNotification in INCLUDES_ACCELA_FUNCTIONS.
    // Adds more information to debug messages 
    // Check parameters: emailFrom, emailTo, Template Name. 
    // Handles case where HTML tags are passed using templateParams. This will remove other Notification Template functionality like BCC, Priority, Display as Alert, Display in ACA, Save as Attachment.
    var itemCap = capId;
    if (arguments.length > 6) itemCap = arguments[6]; // use cap ID specified in args
    var sendEmailDup = true;
    if (arguments.length > 7) sendEmailDup = arguments[7];  // Check if email was already sent.

    if (matches(emailFrom, null, "", undefined)) emailFrom = "";
    if (matches(emailTo, null, "", undefined)) emailTo = "";
    if (matches(emailCC, null, undefined)) emailCC = "";
    emailBCC = "";
    emailPriority = null;

    var emailTitle = "";
    var emailContent = "";

try {
    // Get email addresses from template configuration if not specified
    if (templateName && templateName != "") {
        templateResult = aa.communication.getNotificationTemplate(templateName);
        if (templateResult.getSuccess()) {
            tmpl = templateResult.getOutput();
            templateModel = tmpl.getEmailTemplateModel();
            if ((emailFrom == "" && templateModel.getFrom()) || (emailTo == "" && templateModel.getTo()) || (emailCC == "" && templateModel.getCc()))
                logDebug("Defaulting email address to template ones. " + (emailFrom == "" ? "From " + templateModel.getFrom() : "") + (emailTo == "" ? ", To: " + templateModel.getTo() + "," : "") + (emailCC == "" ? ", CC:" + templateModel.getCc() : ""));
            if (emailFrom == "" && templateModel.getFrom()) emailFrom = templateModel.getFrom();
            if (emailTo == "" && templateModel.getTo()) emailTo = templateModel.getTo();
            if (emailCC == "" && templateModel.getCc()) emailCC = templateModel.getCc();
            if (emailBCC == "" && templateModel.getBcc()) emailBCC = templateModel.getBcc();
            emailPriority = templateModel.getPriority();
            emailTitle = templateModel.getTitle();
            emailContent = templateModel.getContentText();
        }
    }
    if (matches(emailFrom, null, "", undefined)) emailFrom = systemMailFrom;
    // Check Parameters
    var paramErrors = [];
    if (matches(templateName, null, "", undefined)) paramErrors.push("Template Name");
    if (matches(emailFrom, null, "", undefined)) paramErrors.push("From email address");
    if (matches(emailTo, null, "", undefined)) paramErrors.push("TO email address");
    if (paramErrors.length > 0) {
        logDebug("Failed to send " + templateName + " email to " + emailTo + " Reason: " + paramErrors.join(", "));
        return false;
    }

    // Replace Parameters with values in text
    var keys = templateParams.keys();
    var key = null;
    var templateParamsHaveHTML = true;
    while (keys.hasMoreElements()) {
        key = keys.nextElement();
        keyValue = templateParams.get(key);
        KeyValueOnly = String(keyValue).replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, ""); // Strip HTML from Key Value
        if (keyValue != KeyValueOnly) templateParamsHaveHTML = true;
        logDebug("Email Template Params[" + key + "] = " + keyValue);
        emailTo = emailTo.split(key).join(keyValue); // Replace in To
        emailCC = emailCC.split(key).join(keyValue); // Replace in CC
        emailTitle = emailTitle.split(key).join(keyValue); // Replace in Title (Subject)
        emailTitle = emailTitle.replace(key, keyValue);
        emailContent = emailContent.split(key).join(keyValue); // Replace in Content (Body)
        emailContent = emailContent.replace(key, keyValue);
    }

    var skipSendEmail = false;
    if (!sendEmailDup) { // Check if email already sent.
        logDebug("Checking for previous email.");
        sentEmails = getSentEmail(templateName, emailTitle, capId, null, "Oracle");
        if (sentEmails.length > 0) skipSendEmail = true;
    }
    if (skipSendEmail) { logDebug("<font color=red>Skipping previously sent email:</font> " + emailTitle); return false; }

    var oMsg = "";
    if (emailTitle && emailTitle != "") oMsg += ", Title: " + emailTitle;
    if (emailTo && emailTo != "") oMsg += ", To: " + emailTo;
    if (emailCC && emailCC != "") oMsg += ", CC: " + emailCC;
    if (emailBCC && emailBCC != "") oMsg += ", BCC: " + emailBCC;
    var result = null;
    if (templateParamsHaveHTML) { // template parameters have HTML tags that will not come across using standard method for sending notification templates
        var emailMessageScriptModel = aa.communication.getEmailMessageScriptModel().getOutput();
        // Build Contacts Array
        var emailContacts = new Array();
        emailFromList = emailFrom.split(";");
        emailToList = emailTo.split(";");
        emailCCList = emailCC.split(";");
        emailBCCList = emailBCC.split(";");
        for (i in emailFromList) { if (emailFromList[i] != "") emailContacts.push([emailFromList[i], "FROM"]); }
        for (i in emailToList) { if (emailToList[i] != "") emailContacts.push([emailToList[i], "TO"]); }
        for (i in emailCCList) { if (emailCCList[i] != "") emailContacts.push([emailCCList[i], "CC"]); }
        for (i in emailBCCList) { if (emailBCCList[i] != "") emailContacts.push([emailBCCList[i], "BCC"]); }
        var contacts = aa.communication.getContactList(emailContacts, 'EMAIL').getOutput();
        emailMessageScriptModel.setContacts(contacts);
        emailMessageScriptModel.setTitle(emailTitle);
        emailMessageScriptModel.setContent(emailContent);
        // emailMessageScriptModel.setContentType(emailContentType);
        // emailMessageScriptModel.setComments(emailComments);
        emailMessageScriptModel.setAttachments(reportFile);
        emailMessageScriptModel.setTriggerEvent(templateName);
        if (emailPriority) emailMessageScriptModel.setPriority(emailPriority);
        result = aa.communication.sendMessage(emailMessageScriptModel);
        // result = aa.sendEmailWithAttachedFiles(emailFrom, emailTo, emailCC, emailTitle, emailContent, reportFile);
    } else {
        var id1 = itemCap.ID1;
        var id2 = itemCap.ID2;
        var id3 = itemCap.ID3;
        var capIDScriptModel = aa.cap.createCapIDScriptModel(id1, id2, id3);
        result = aa.document.sendEmailAndSaveAsDocument(emailFrom, emailTo, emailCC, templateName, templateParams, capIDScriptModel, reportFile);
    }
    if (result.getSuccess()) {
        var cmId = true;
        if (templateParamsHaveHTML) {
            var cmId = result.getOutput();
            if (cmId) {
                var altId = capId.getCustomID();
                logDebug("altId: " + altId);
                if (altId) { // Associate email to Record.
                    resultAssociateR = aa.communication.associateEnities(cmId, altId, "RECORD");
                    if (resultAssociateR.getSuccess()) {
                        oMsg += ", Associated to record: " + altId;
                    } else {
                        logDebug("Failed to associated email to record. Reason: " + resultAssociateR.getErrorMessage());
                    }
                }
                /* Currently Accela does not allow for Emails to be associated to Licenses Professionals or adding an Activity to a License Professional.
                var lpLicNbr = templateParams.get("$$lpLicNbr$$");
                logDebug("lpLicNbr: " + lpLicNbr);
                if (lpLicNbr && false) { // Associate email to License Professional. Currently Accela does not associate email to Professionals
                    resultAssociateLP = aa.communication.associateEnities(cmId, lpLicNbr, "PROFESSIONAL");
                    if (resultAssociateLP.getSuccess()) {
                        oMsg += ", Associated to LP: " + lpLicNbr;
                    } else {
                        logDebug("Failed to associated email to LP. Reason: " + resultAssociateLP.getErrorMessage());
                    }
                }
                if (lpLicNbr && false) { // Add Activity to License Professional indicating email
                    addActivityLP("Communication", templateName, emailTitle, null, lpLicNbr, "Y");
                }
                */
            }
        }
        logDebug("Successfully sent " + templateName + " email" + oMsg);
        // associateEnities(java.lang.String communicationId, java.lang.String entityId, java.lang.String entityType) 
        return cmId;
    } else {
        logDebug("Failed to send " + templateName + " email" + oMsg + " Reason: " + result.getErrorType());
        return false;
    }
} catch (err) {
	var context = "sendNotificationEmail" + (typeof (scriptName) == "undefined" ? "" : " of Script: " + scriptName);
	logDebug("ERROR: An error occured in " + context + " Line " + err.lineNumber + " Error:  " + err.message);
	logDebug("Stack: " + err.stack);
}
}

 
