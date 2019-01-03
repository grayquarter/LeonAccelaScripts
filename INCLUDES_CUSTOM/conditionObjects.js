function conditionObjects() {
	this.conditions = new Array();
	var pType = null;
	var pStatus = null;
	var pDesc = null;
	var pImpact = null;
	this.capId = capId;
	if (arguments.length > 0) pType = arguments[0]; 		// use condition type
	if (arguments.length > 1) pStatus = arguments[1]; 		// use condition status
	if (arguments.length > 2) pDesc = arguments[2]; 		// use condition description
	if (arguments.length > 3) pImpact = arguments[3]; 		// use condition impact
	if (arguments.length > 4) this.capId = arguments[4];	// use cap ID specified in args

	this.lang = "en_US";
	var bizDomainModel4Lang = aa.bizDomain.getBizDomainByValue("I18N_SETTINGS", "I18N_DEFAULT_LANGUAGE");
	if (bizDomainModel4Lang.getSuccess()) this.lang = bizDomainModel4Lang.getOutput().getDescription();
	
	this.getConditions = function() {	// Get Error Message
		return this.conditions;
	}
	this.getCAPConditions = function(pType, pStatus, pDesc, pImpact) {	// Get Error Message
		var itemCap = capId;
		var resultArray = new Array();
		if (arguments.length > 4) itemCap = arguments[4]; // use cap ID specified in args
		if (arguments.length > 5) resultArray = arguments[5]; // use condition array specified in args

		////////////////////////////////////////
		// Check Records
		////////////////////////////////////////

		if (pType == null)
			var condResult = aa.capCondition.getCapConditions(itemCap);
		else
			var condResult = aa.capCondition.getCapConditions(itemCap, pType);
		if (condResult.getSuccess())
			var capConds = condResult.getOutput();
		else {
			var capConds = new Array();
			logDebug("**WARNING: getting cap conditions: " + condResult.getErrorMessage());
		}

		for (cc in capConds) {
			var thisCond = capConds[cc];
			var cStatus = thisCond.getConditionStatus();
			var cDesc = thisCond.getConditionDescription();
			var cImpact = thisCond.getImpactCode();
			var cType = thisCond.getConditionType();
			var cComment = thisCond.getConditionComment();
			var cExpireDate = thisCond.getExpireDate();

			if (cStatus == null)	cStatus = " ";
			if (cDesc == null)		cDesc = " ";
			if (cImpact == null)	cImpact = " ";
			//Look for matching condition

			if ((pStatus == null || pStatus.toUpperCase().equals(cStatus.toUpperCase())) && (pDesc == null || pDesc.toUpperCase().equals(cDesc.toUpperCase())) && (pImpact == null || pImpact.toUpperCase().equals(cImpact.toUpperCase()))) {
				var r = new conditionObj(thisCond,"Record",licArray[thisLic],this.lang);
				resultArray.push(r);
				this.conditions.push(r);
			}
		}

		return resultArray;
	}
	this.getAddressConditions = function(pType, pStatus, pDesc, pImpact) {	// Get Error Message
		var itemCap = capId;
		var resultArray = new Array();
		if (arguments.length > 4) itemCap = arguments[4]; // use cap ID specified in args
		if (arguments.length > 5) resultArray = arguments[5]; // use condition array specified in args

		////////////////////////////////////////
		// Check Address
		////////////////////////////////////////

		var addrResult = aa.address.getAddressByCapId(itemCap);
		if (!addrResult.getSuccess()) {
			logDebug("**WARNING: getting CAP addresses: " + addrResult.getErrorMessage());
			var addrArray = new Array();
		} else {
			var addrArray = addrResult.getOutput();
			if (!addrArray)
				addrArray = new Array();
		}

		for (var thisAddr in addrArray) {
			if (addrArray[thisAddr].getRefAddressId()) {
				addCondResult = aa.addressCondition.getAddressConditions(addrArray[thisAddr].getRefAddressId())
				if (!addCondResult.getSuccess()) {
					logDebug("**WARNING: getting Address Conditions : " + addCondResult.getErrorMessage());
					var addrCondArray = new Array();
				} else {
					var addrCondArray = addCondResult.getOutput();
				}

				for (var thisAddrCond in addrCondArray) {
					var thisCond = addrCondArray[thisAddrCond];
					var cStatus = thisCond.getConditionStatus();
					var cDesc = thisCond.getConditionDescription();
					var cImpact = thisCond.getImpactCode();
					var cType = thisCond.getConditionType();
					var cComment = thisCond.getConditionComment();
					var cExpireDate = thisCond.getExpireDate();

					if (cStatus == null)	cStatus = " ";
					if (cDesc == null)		cDesc = " ";
					if (cImpact == null)	cImpact = " ";
					//Look for matching condition

					if ((pStatus == null || pStatus.toUpperCase().equals(cStatus.toUpperCase())) && (pDesc == null || pDesc.toUpperCase().equals(cDesc.toUpperCase())) && (pImpact == null || pImpact.toUpperCase().equals(cImpact.toUpperCase()))) {
						var r = new conditionObj(thisCond,"Address",addrArray[thisAddr],this.lang);
						resultArray.push(r);
						this.conditions.push(r);
					}
				}
			}
		}

		return resultArray;
	}
	this.getContactConditions = function(pType, pStatus, pDesc, pImpact) {
		var itemCap = capId;
		var resultArray = new Array();
		if (arguments.length > 4) itemCap = arguments[4]; // use cap ID specified in args
		if (arguments.length > 5) resultArray = arguments[5]; // use condition array specified in args

		////////////////////////////////////////
		// Check Contacts
		////////////////////////////////////////

		var capContactResult = aa.people.getCapContactByCapID(itemCap);
		if (!capContactResult.getSuccess()) {
			logDebug("**WARNING: getting CAP contact: " + capContactResult.getErrorMessage());
			var conArray = new Array();
		} else {
			var conArray = capContactResult.getOutput();
			if (!conArray)
				conArray = new Array();
		}

		for (var thisCon in conArray) {
			if (conArray[thisCon].getCapContactModel().getRefContactNumber()) {
				var conCondResult = aa.commonCondition.getCommonConditions("CONTACT", conArray[thisCon].getCapContactModel().getRefContactNumber());

				if (!conCondResult.getSuccess()) {
					logDebug("**WARNING: getting contact Conditions : " + licCondResult.getErrorMessage());
					var conCondArray = new Array();
				} else {
					var conCondArray = conCondResult.getOutput();
				}

				for (var thisConCond in conCondArray) {
					var thisCond = conCondArray[thisConCond];
					var cStatus = thisCond.getConditionStatus();
					var cDesc = thisCond.getConditionDescription();
					var cImpact = thisCond.getImpactCode();
					var cType = thisCond.getConditionType();
					var cComment = thisCond.getConditionComment();
					var cExpireDate = thisCond.getExpireDate();

					if (cStatus == null)	cStatus = " ";
					if (cDesc == null)		cDesc = " ";
					if (cImpact == null)	cImpact = " ";
					//Look for matching condition

					if ((pStatus == null || pStatus.toUpperCase().equals(cStatus.toUpperCase())) && (pDesc == null || pDesc.toUpperCase().equals(cDesc.toUpperCase())) && (pImpact == null || pImpact.toUpperCase().equals(cImpact.toUpperCase()))) {
						var r = new conditionObj(thisCond,"Contact",addrArray[thisAddr],this.lang);
						resultArray.push(r);
						this.conditions.push(r);
					}
				}
			}
		}

		return resultArray;
	}
	this.getLicenseConditions = function(pType, pStatus, pDesc, pImpact) {
		var itemCap = capId;
		var resultArray = new Array();
		if (arguments.length > 4) itemCap = arguments[4]; // use cap ID specified in args
		if (arguments.length > 5) resultArray = arguments[5]; // use condition array specified in args

		////////////////////////////////////////
		// Check License
		////////////////////////////////////////

		var capLicenseResult = aa.licenseScript.getLicenseProf(itemCap);

		if (!capLicenseResult.getSuccess()) {
			logDebug("**WARNING: getting CAP licenses: " + capLicenseResult.getErrorMessage());
			var licArray = new Array();
		} else {
			var licArray = capLicenseResult.getOutput();
			if (!licArray)
				licArray = new Array();
		}

		for (var thisLic in licArray) {
			if (licArray[thisLic].getLicenseProfessionalModel().getLicSeqNbr()) {
				var licCondResult = aa.caeCondition.getCAEConditions(licArray[thisLic].getLicenseProfessionalModel().getLicSeqNbr());
				if (!licCondResult.getSuccess()) {
					logDebug("**WARNING: getting license Conditions : " + licCondResult.getErrorMessage());
					var licCondArray = new Array();
				} else {
					var licCondArray = licCondResult.getOutput();
				}

				for (var thisLicCond in licCondArray) {
					var thisCond = licCondArray[thisLicCond];
					var cStatus = thisCond.getConditionStatus();
					var cDesc = thisCond.getConditionDescription();
					var cImpact = thisCond.getImpactCode();
					var cType = thisCond.getConditionType();
					var cComment = thisCond.getConditionComment();
					var cExpireDate = thisCond.getExpireDate();

					if (cStatus == null)	cStatus = " ";
					if (cDesc == null)		cDesc = " ";
					if (cImpact == null)	cImpact = " ";
					//Look for matching condition

					if ((pStatus == null || pStatus.toUpperCase().equals(cStatus.toUpperCase())) && (pDesc == null || pDesc.toUpperCase().equals(cDesc.toUpperCase())) && (pImpact == null || pImpact.toUpperCase().equals(cImpact.toUpperCase()))) {
						var r = new conditionObj(thisCond,"License",licArray[thisLic],this.lang);
						resultArray.push(r);
						this.conditions.push(r);
					}
				}
			}
		}

		return resultArray;
	}
	this.getParcelConditions = function(pType, pStatus, pDesc, pImpact) {
		var itemCap = capId;
		var resultArray = new Array();
		if (arguments.length > 4) itemCap = arguments[4]; // use cap ID specified in args
		if (arguments.length > 5) resultArray = arguments[5]; // use condition array specified in args

		////////////////////////////////////////
		// Check Parcel
		////////////////////////////////////////

		var parcResult = aa.parcel.getParcelDailyByCapID(itemCap, null);
		if (!parcResult.getSuccess()) {
			logDebug("**WARNING: getting CAP addresses: " + parcResult.getErrorMessage());
			var parcArray = new Array();
		} else {
			var parcArray = parcResult.getOutput();
			if (!parcArray)
				parcArray = new Array();
		}

		for (var thisParc in parcArray) {
			if (parcArray[thisParc].getParcelNumber()) {
				parcCondResult = aa.parcelCondition.getParcelConditions(parcArray[thisParc].getParcelNumber())
				if (!parcCondResult.getSuccess()) {
					logDebug("**WARNING: getting Parcel Conditions : " + parcCondResult.getErrorMessage());
					var parcCondArray = new Array();
				} else {
					var parcCondArray = parcCondResult.getOutput();
				}

				for (var thisParcCond in parcCondArray) {
					var thisCond = parcCondArray[thisParcCond];
					var cStatus = thisCond.getConditionStatus();
					var cDesc = thisCond.getConditionDescription();
					var cImpact = thisCond.getImpactCode();
					var cType = thisCond.getConditionType();
					var cComment = thisCond.getConditionComment();
					var cExpireDate = thisCond.getExpireDate();

					if (cStatus == null)	cStatus = " ";
					if (cDesc == null)		cDesc = " ";
					if (cImpact == null)	cImpact = " ";
					//Look for matching condition

					if ((pStatus == null || pStatus.toUpperCase().equals(cStatus.toUpperCase())) && (pDesc == null || pDesc.toUpperCase().equals(cDesc.toUpperCase())) && (pImpact == null || pImpact.toUpperCase().equals(cImpact.toUpperCase()))) {
						var r = new conditionObj(thisCond,"Parcel",parcArray[thisParc],this.lang);
						resultArray.push(r);
						this.conditions.push(r);
					}
				}
			}
		}

		return resultArray;
	}

	if (arguments.length > 0) { // Object Constructor populate conditions array based on arguments.
		this.conditions = this.getCAPConditions(pType, pStatus, pDesc, pImpact,this.capId,this.conditions);
		this.conditions = this.getAddressConditions(pType, pStatus, pDesc, pImpact,this.capId,this.conditions);
		this.conditions = this.getParcelConditions(pType, pStatus, pDesc, pImpact,this.capId,this.conditions);
		this.conditions = this.getContactConditions(pType, pStatus, pDesc, pImpact,this.capId,this.conditions);
		this.conditions = this.getLicenseConditions(pType, pStatus, pDesc, pImpact,this.capId,this.conditions);
	}

}

