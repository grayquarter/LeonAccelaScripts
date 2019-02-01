function sendNotification_UtilityRelease(inspTypeID) { // from Standard Choice EMSE:Utility_Releases
	var templateName = "UTILITY_RELEASE",
	templateParams = aa.util.newHashtable(),
	reportName = null,
	reportParams = aa.util.newHashMap(),
	reportModule = "Building";

	/*
	var today = new Date();	today = Date(aa.date.currentDate);
	var parcelId = null;
	var par = aa.parcel.getParcelandAttribute(capId,null);
	if (par.getSuccess()) {
	parcels = par.getOutput().toArray();
	for (x in parcels) parcelId = parcels[x].getParcelNumber();
	logDebug("Parcel ID:" + parcelId);
	}
	capAltId = capId.getCustomID();
	capAddress = getCapAddress(capId);

	// Get Owner Name replaced with getPrimaryOwnerParams4Notification
	var ownerName = "";
	ownerMod = aa.owner.getOwnerByCapId(capId);
	if (ownerMod.getSuccess()) {
	ownerObj = ownerMod.getOutput();
	for (x in ownerObj) ownerName = ownerObj[x].getOwnerFullName();
	}
	logDebug("Owner Name: " + ownerName);
	 */

	//-----------------Begin release emails-----------------
	var utilityReleaseType = null,
	utilityReleaseTypeB = null;
	if (matches(inspTypeID, "400") && matches(appTypeArray[1], "Commercial", "Residential", "Quick Turn", "VelocityHall")) {
		utilityReleaseType = "City of Tallahassee Sewer Connection Notice";
		utilityReleaseTypeB = utilityReleaseType.toUpperCase();
		// emailSubject = capAltId+" City of Tallahassee Sewer Connection Notice";
		// emailBody = "<b>CITY OF TALLAHASSEE SEWER CONNECTION NOTICE<br><br>DATE:  </B>"+today;
	}
	if (matches(inspTypeID, "905") && matches(appTypeArray[1], "Commercial", "Residential", "Quick Turn") && AInfo["Sewer System Type"] == "Sewer") {
		utilityReleaseType = "City of Tallahassee Sewer Connection Notice";
		utilityReleaseTypeB = utilityReleaseType.toUpperCase();
		// if (checkInspectionResult("400: Building Sewer","Approved") == false)
		// emailSubject = capAltId+" City of Tallahassee Sewer Connection Notice";
		// emailBody = "<b>CITY OF TALLAHASSEE SEWER CONNECTION NOTICE<br><br>DATE:  </B>"+today;
	}
	if (matches(inspTypeID, "502", "503")) {
		utilityReleaseType = "City of Tallahassee Gas Release";
		utilityReleaseTypeB = utilityReleaseType.toUpperCase();
		utilityReleaseTypeB = "LEON COUNTY GAS METER RELEASE";
		// emailSubject = capAltId+" City of Tallahassee Gas Release";
		// emailBody = "<b>LEON COUNTY GAS METER RELEASE<br><br>DATE:  </B>"+today;
	}
	if (matches(inspTypeID, "507", "508", "509", "510", "511", "512", "513", "514")) {
		utilityReleaseType = "Talquin Electrical Release";
		utilityReleaseTypeB = utilityReleaseType.toUpperCase();
		//emailSubject = capAltId+" Talquin Electrical Release";
		//emailBody = "<b>TALQUIN ELECTRICAL RELEASE<br><br>DATE:  </B>"+today;
	}
	if (matches(inspTypeID, "515", "516", "517", "518", "519", "520", "521", "522", "523", "524", "525", "526", "527", "528", "529", "530", "531", "532", "533")) {
		utilityReleaseType = "City of Tallahassee Electrical Release";
		utilityReleaseTypeB = utilityReleaseType.toUpperCase();
		//emailSubject = capAltId+" City of Tallahassee Electrical Release";
		//emailBody = "<b>CITY ELECTRICAL RELEASE<br><br>DATE:  </B>"+today;
	}
	if (matches(inspTypeID, "534")) {
		utilityReleaseType = "City of Tallahassee Electric Photovoltaic System Release";
		utilityReleaseTypeB = utilityReleaseType.toUpperCase();
		//emailSubject = capAltId+" City of Tallahassee Electric Photovoltaic System Release";
		//emailBody = "<b>CITY PHOTOVOLTAIC RELEASE<br><br>DATE:  </B>"+today;
	}
	if (matches(inspTypeID, "535")) {
		utilityReleaseType = "Talquin Electric Photovoltaic System Release";
		utilityReleaseTypeB = utilityReleaseType.toUpperCase();
		//emailSubject = capAltId+" Talquin Electric Photovoltaic System Release";
		//emailBody = "<b>TALQUIN PHOTOVOLTAIC RELEASE<br><br>DATE:  </B>"+today;
	}

	/*
	emailSubject = capIDString+" " + utilityReleaseType;
	emailBody = "<b>"+utilityReleaseTypeB+"<br><br>DATE:  </B>"+today;
	emailBody = emailBody+"<br><br>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
	emailBody = emailBody+"<br><b>PERMIT NUMBER</b>"+sp5+capIDString+sp5+"<b>PID</b> "+parcelId;
	emailBody = emailBody+"<br><b>INSPECTOR  </b>"+sp5+sp5+sp5+currentUserID+"	"+inspResultDate;
	emailBody = emailBody+"<br><b>ADDRESS </b>"+sp5+sp5+sp5+sp5+addr;
	emailBody = emailBody+"<br><b>DATA 	"+sp5+sp5+sp5+sp5+sp5+inspType+"</b>";
	emailBody = emailBody+"<br><b>CONTRACTOR </b>"+sp5+sp5+lpaName+"	"+lpaPhone;
	emailBody = emailBody+"<br><b>OWNER</b>"+sp5+sp5+sp5+sp5+sp5+ownerInfo;
	emailBody = emailBody+"<br>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
	 */

	//-----------------Begin sending emails-----------------
	var emailFrom = "autosender@leoncountyfl.gov",
	emailTo = "",
	emailCC = "";
	if (matches(inspTypeID, "502", "503", "515", "516", "517", "518", "519", "520", "521", "522", "523", "524", "525", "526", "527", "528", "529", "530", "531", "532", "533", "534")) {
		emailTo = "sarah.crosby@talgov.com;james.jackson@talgov.com;rhonda.reaves-smith@talgov.com;william.hawkins@talgov.com;"
			 + "deborah.mccullers@talgov.com;kimberly.meeks@talgov.com;heather.beary@talgov.com;tom.gillman@talgov.com"
			 + "bob.seaton@talgov.com;jeremy.nelson@talgov.com;garret.young@talgov.com;kristie.tadlock@talgov.com";
		emailCC = "mumfordc@leoncountyfl.gov;walkerp@leoncountyfl.gov;morganjo@leoncountyfl.gov;perdued@leoncountyfl.gov;estesje@leoncountyfl.gov";
		emailCC += ";garrisong@leoncountyfl.gov";
	}
	if (matches(inspTypeID, "507", "508", "509", "510", "511", "512", "513", "514", "535")) {
		emailTo = "releases@talquinelectric.com";
		emailCC = "mumfordc@leoncountyfl.gov;walkerp@leoncountyfl.gov;morganjo@leoncountyfl.gov;perdued@leoncountyfl.gov;estesje@leoncountyfl.gov";
		emailCC += ";garrisong@leoncountyfl.gov";
	}
	if ((matches(inspTypeID, "400") && matches(appTypeArray[1], "Commercial", "Residential", "Quick Turn")) || (inspTypeID == "400" && matches(appTypeArray[1], "VelocityHall"))) {
		emailTo = "kimberly.meeks@talgov.com;Daniel.Mann@talgov.com;Latosha.Hayes@talgov.com";
		emailCC = "garrisong@leoncountyfl.gov";
	}
	if (matches(inspTypeID, "905") && matches(appTypeArray[1], "Commercial", "Residential", "Quick Turn") && AInfo["Sewer System Type"] == "Sewer" && checkInspectionResult("400: Building Sewer", "Approved") == false) {
		emailTo = "kimberly.meeks@talgov.com;Daniel.Mann@talgov.com;Latosha.Hayes@talgov.com";
	}
	if (!matches(envName, null, "", "PROD")) { // Prevent emails from sending if in none production environment.
		emailTo = emailTo.split(".gov").join(".gov_TURNED_OFF").split(".com").join(".com_TURNED_OFF")
			emailCC = emailCC.split(".gov").join(".gov_TURNED_OFF").split(".com").join(".com_TURNED_OFF")
	}
	logDebug("inspTypeID: " + inspTypeID + ", release type: " + utilityReleaseType);
	var reportFile = new Array();
	if (utilityReleaseType && templateName && (emailTo || emailCC != "")) {
		getParams4Notification(templateParams, []); // Add Standard Notification Parameters
		addParameter(templateParams, "$$utilityReleaseType$$", utilityReleaseType);
		addParameter(templateParams, "$$utilityReleaseTypeB$$", utilityReleaseTypeB);
		logDebug("Sending Notification Template: " + templateName + ", From: " + emailFrom + (emailTo != "" ? ", To: " + emailTo : "") + (emailCC != "" ? ", CC: " + emailCC : ""));
		var sentEmail = sendNotification(emailFrom, emailTo, emailCC, templateName, templateParams, reportFile);
		return sentEmail;
	}
}
