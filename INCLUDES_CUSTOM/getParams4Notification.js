function getParams4Notification(params) {
	// Modified 7/3/2018 to include parcelId, lpName, lpPhone, lpEmail
    var templateParams = ((params) ? params : aa.util.newHashtable());
    var contactTypes = ((arguments.length > 1) ? arguments[1] : null); // Optional Contact Type
    var itemCap = ((arguments.length > 2) ? arguments[2] : capId); // Optional CapId
    var licenseCapId = ((arguments.length > 3) ? arguments[3] : null); // Optional License CapId
	logDebug("getParams4Notification("+params+","+contactTypes+","+licenseCapId+")");

    // Add Standard Notification Parameters
	var cap = null,
	capIDString = "",
	appTypeResult = null,
	appTypeAlias = "",
	appTypeString = "",
	appTypeArray = new Array(),
	capName = null,
	capStatus = null,
	partialCap = false,
	fileDateObj = null,
	fileDate = null,
	fileDateYYYYMMDD = null,
	parcelArea = 0,
	estValue = 0,
	calcValue = 0,
	houseCount = 0,
	feesInvoicedTotal = 0,
	payTotal = 0,
	balanceDue = 0,
	houseCount = 0,
	feesInvoicedTotal = 0,
	capDetail = "",
	feeFactor = "",
	parentCapId = null;
		
    if (itemCap != null) {
		capIDString = itemCap.getCustomID();
		cap = aa.cap.getCap(itemCap).getOutput();
		appTypeResult = cap.getCapType();
		appTypeAlias = appTypeResult.getAlias();
		appTypeString = appTypeResult.toString();
		appTypeArray = appTypeString.split("/");
		capName = cap.getSpecialText();
		capStatus = cap.getCapStatus();
		partialCap = !cap.isCompleteCap();
		fileDateObj = cap.getFileDate();
		fileDate = "" + fileDateObj.getMonth() + "/" + fileDateObj.getDayOfMonth() + "/" + fileDateObj.getYear();
		fileDateYYYYMMDD = dateFormatted(fileDateObj.getMonth(),fileDateObj.getDayOfMonth(),fileDateObj.getYear(),"YYYY-MM-DD");
		var valobj = aa.finance.getContractorSuppliedValuation(capId,null).getOutput();	
		if (valobj.length) {
			estValue = valobj[0].getEstimatedValue();
			calcValue = valobj[0].getCalculatedValue();
			feeFactor = valobj[0].getbValuatn().getFeeFactorFlag();
		}
		var capDetailObjResult = aa.cap.getCapDetail(itemCap);
        if (capDetailObjResult.getSuccess()) {
            capDetail = capDetailObjResult.getOutput();
            houseCount = capDetail.getHouseCount();
            payTotal = capDetail.getTotalPay();
            feesInvoicedTotal = capDetail.getTotalFee();
            balanceDue = capDetail.getBalance();
            if (Number(payTotal) != 'NaN') {
                payTotal = Number(payTotal).toFixed(2);
            }
            if (Number(feesInvoicedTotal) != 'NaN') {
                feesInvoicedTotal = Number(feesInvoicedTotal).toFixed(2);
            }
            if (Number(balanceDue) != 'NaN') {
                balanceDue = Number(balanceDue).toFixed(2);
            }
        }
		var capModule = cap.getCapModel().getModuleName();

        // getRecordParams4Notification(templateParams); // Add Record related parameters: altID, capName, recordTypeAlias, capStatus, fileDate, balanceDue, workDesc
		addParameter(templateParams, "$$today$$", jsDateToASIDate(new Date ()));
		addParameter(templateParams, "$$envName$$", (typeof(envName) != "undefined"? envName:null));
		addParameter(templateParams, "$$envText$$", (typeof(envText) != "undefined"? envText:null));
        addParameter(templateParams, "$$altId$$", capIDString);				// From getRecordParams4Notification
        addParameter(templateParams, "$$capIDString$$", capIDString);
        addParameter(templateParams, "$$capType$$", appTypeString);
        addParameter(templateParams, "$$capTypeAlias$$", appTypeAlias);
        addParameter(templateParams, "$$appTypeAlias$$", appTypeAlias);
        addParameter(templateParams, "$$capName$$", capName);				// From getRecordParams4Notification
        addParameter(templateParams, "$$capStatus$$", capStatus);			// From getRecordParams4Notification
		addParameter(templateParams, "$$fileDate$$", fileDate);				// From getRecordParams4Notification
        addParameter(templateParams, "$$shortNotes$$", getShortNotes(itemCap));
		addParameter(templateParams, "$$workDesc$$", workDescGet(itemCap));
        addParameter(templateParams, "$$estValue$$", "$" + (estValue && Number(estValue) != "NaN" ? parseFloat(estValue).toFixed(2) : ""));
        addParameter(templateParams, "$$calcValue$$", "$" + (calcValue && Number(calcValue) != "NaN" ? parseFloat(calcValue).toFixed(2) : ""));
        addParameter(templateParams, "$$feeFactor$$", feeFactor);
        addParameter(templateParams, "$$feesInvoicedTotal$$", "$" + (feesInvoicedTotal && Number(feesInvoicedTotal) != "NaN" ? parseFloat(feesInvoicedTotal).toFixed(2) : ""));
        addParameter(templateParams, "$$payTotal$$", "$" + (payTotal && Number(payTotal) != "NaN" ? parseFloat(payTotal).toFixed(2) : ""));
        addParameter(templateParams, "$$balanceDue$$", "$" + (balanceDue && Number(balanceDue) != "NaN" ? parseFloat(balanceDue).toFixed(2) : ""));
        if (parentCapId) {
            addParameter(templateParams, "$$parentCapId$$", parentCapId.getCustomID());
        }
        if (acaUrl) {
            addParameter(templateParams, "$$acaUrl$$", acaUrl);
            addParameter(templateParams, "$$acaRecordUrl$$", getACARecordURL(acaUrl,itemCap));
        }
        if (typeof(avUrl) != "undefined" && avUrl) addParameter(templateParams, "$$aaRecordUrl$$", getAARecordUrl(avUrl,itemCap));

		getPrimaryParcelParam4Notification_TPS(templateParams,itemCap);		// Add Parcel related parameters: parcelId
        getPrimaryAddressLineParam4Notification_TPS(templateParams,itemCap);  // Add address related parameter: addressLine
        getPrimaryOwnerParams4Notification_TPS(templateParams,itemCap); // Add Primary Owner related parameters: ownerFullName, ownerPhone
        if (contactTypes && contactTypes.length > 0) {
            getContactParams4Notification_TPS(templateParams, contactTypes);
        }
        getLPParams4Notification_TPS(templateParams, itemCap);				// License Professional related parameters: lpName, lpPhone, lpEmail
	
		capCreator = capDetail.getCreateBy();
		logDebug("capCreator: " + capCreator);
		var capCreatorEmail = null;
		if (capCreator)	capCreatorEmail = getUserEmail(capCreator);
        addParameter(templateParams, "$$capCreatorEmail$$", capCreatorEmail);
		capAssigned = capDetail.getAsgnStaff();
		logDebug("capAssigned: " + capAssigned);
		var capAssignedStaffEmail = null;
		if (capAssigned) capAssignedStaffEmail = getUserEmail(capAssigned);
		if (!capAssignedStaffEmail) capAssignedStaffEmail = null;
        addParameter(templateParams, "$$capAssignedStaffEmail$$", capAssignedStaffEmail);

	}
    if (licenseCapId) {
        var expDate = null, b1ExpDate = null, b1ExpStatus = null, b1ExpUnit = null, b1ExpInterval = null;
        try {
            var b1ExpResult = aa.expiration.getLicensesByCapID(licenseCapId);
            if (b1ExpResult.getSuccess()) {
                var b1Exp = b1ExpResult.getOutput();
                //Get expiration details
                var b1ExpUnit = b1Exp.getExpUnit();
                var b1ExpInterval = b1Exp.getExpInterval();
                var b1ExpStatus = b1Exp.getExpStatus();
                var expDate = b1Exp.getExpDate();
                if (expDate) {
                    var b1ExpDate = expDate.getMonth() + "/" + expDate.getDayOfMonth() + "/" + expDate.getYear();
                }
                addParameter(templateParams, "$$licenseCapId$$", licenseCapId.getCustomID());
                addParameter(templateParams, "$$expirationDate$$", b1ExpDate);
                addParameter(templateParams, "$$expirationStatus$$", b1ExpStatus);
            }
        } catch (err) {
            logDebug("Could not get expiration information.");
        }
    }

    // Add Event Specific notification parameters
    if (typeof (inspResult) != "undefined") {
        if (typeof (inspComment) == "undefined") inspComment = inspResultComment;
		getInspectionParams4Notification_TPS(templateParams,itemCap);
        // getInspectionResultParams4Notification(templateParams);     // Add Resulted Inspection related parameters: inspId, inspResult, inspComment, inspResultDate, inspType, inspSchedDate
    } else if (typeof (inspId) != "undefined") {
		getInspectionParams4Notification_TPS(templateParams,itemCap);
        // getInspectionScheduleParams4Notification(templateParams)    // Add Scheduled Inspection related parameters: inspId, inspInspector, InspectorFirstName, InspectorMiddleName, InspectorLastName, inspGroup, inspType, inspSchedDate
	}
    if (typeof (wfTask) != "undefined")
        getWorkflowParams4Notification(templateParams); 		    // Add Workflow related parameters: wfTask, wfStatus, wfDate, wfComment, wfStaffUserID, wfHours

    // Get Current user information
	addParameter(templateParams, "$$currentUserID$$", currentUserID);
	addParameter(templateParams, "$$currentUserGroup$$", currentUserGroup);
	var currentUserFullName = "", currentUserFirstName = "", currentUserLastName = "", currentUserTitle = "", currentUserEmail = "";
	if (currentUserID && systemUserObj == null) {
		systemUserObj = aa.person.getUser(currentUserID).getOutput();  	// Current User Object
	}

    if (!publicUser && systemUserObj) {
        currentUserEmail = systemUserObj.getEmail();
        currentUserFullName = systemUserObj.getFullName();
        currentUserFirstName = systemUserObj.getFirstName();
        currentUserLastName = systemUserObj.getLastName();
		currentUserTitle = systemUserObj.getTitle(); 			// This is usually null so get it from the User's personModel.
		userObj = getUser(currentUserID);
		if (userObj) {
			currentUserTitle  = userObj.getTitle();
		}
		if (currentUserFullName == null) currentUserFullName = ((currentUserFirstName? currentUserFirstName+ " ":"") + (currentUserLastName? currentUserLastName:"")).trim();
		logDebug("currentUserID: " + currentUserID + ", Name: " + currentUserFullName + ", Title:" + currentUserTitle + ", Email: " + currentUserEmail);
    }
	addParameter(templateParams, "$$currentUserEmail$$", currentUserEmail);
	addParameter(templateParams, "$$currentUserFullName$$", currentUserFullName);
	addParameter(templateParams, "$$currentUserFirstName$$", currentUserFirstName);
	addParameter(templateParams, "$$currentUserLastName$$", currentUserLastName);
	addParameter(templateParams, "$$currentUserTitle$$", currentUserTitle);
    logDebug("emailTemplateParams: " + templateParams);
    addParameter(templateParams, "$$emailTemplateParams$$", templateParams.toString());
	return templateParams;
}

 
