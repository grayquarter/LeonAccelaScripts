function utilityReleases() {

	showMessage = true;
	var today = new Date();
	today = Date(aa.date.currentDate);
	var aName;
	var aPh;
	var lpaName;
	var lpaPhone;
	var ownerInfo;
	var aName;
	var sp5 = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	var par = aa.parcel.getParcelandAttribute(capId, null);
	if (par.getSuccess()) {
		parcels = par.getOutput().toArray();
		for (x in parcels)
			pid = parcels[x].getParcelNumber();
		logDebug(pid);
	}

	capAltId = capId.getCustomID();
	addr = getCapAddress(capId);
	// DISABLED: EMSE:Utility_Releases:0060
	// ca = new Array();
	// ca = getContactArray();
	// for (x in ca) if(ca[x]['contactType'] == 'Applicant') aName = ca[x]['fullName'];
	// DISABLED: EMSE:Utility_Releases:0070
	// for (x in ca) if (ca[x]['contactType'] == 'Applicant') aPh = ca[x]['phone1'];
	lpa = getLicenseProfessional(capId);
	for (x in lpa)
		if (lpa[x].getLicenseType().substring(0, 10) == 'Contractor' && lpa[x].getPrintFlag() == 'Y')
			lpaName = lpa[x].getBusinessName();
	lpa = getLicenseProfessional(capId);
	for (x in lpa)
		if (lpa[x].getLicenseType().substring(0, 10) == 'Contractor' && lpa[x].getPrintFlag() == 'Y')
			lpaPhone = lpa[x].getPhone1();
	ownerMod = aa.owner.getOwnerByCapId(capId);
	if (ownerMod.getSuccess())
		ownerObj = ownerMod.getOutput();
	for (x in ownerObj)
		ownerInfo = ownerObj[x].getOwnerFullName();
	logDebug(ownerInfo);
	var params = aa.util.newHashtable();
	if (aName == null)
		aName = '';
	if (aPh == null)
		aPh = '';
	if (lpaName == null)
		lpaName = '';
	if (lpaPhone == null)
		lpaPhone = '';
	if (ownerInfo == null)
		ownerInfo = '';
	if ((matches(inspType.substr(0, 3), '400') && matches(appTypeArray[1], 'Commercial', 'Residential', 'Quick Turn')) || (inspType.substr(0, 3) == '400' && matches(appTypeArray[1], 'VelocityHall'))) {
		emailSubject = capAltId + ' City of Tallahassee Sewer Connection Notice';
	}

	if ((matches(inspType.substr(0, 3), '400') && matches(appTypeArray[1], 'Commercial', 'Residential', 'Quick Turn')) || (inspType.substr(0, 3) == '400' && matches(appTypeArray[1], 'VelocityHall'))) {
		emailBody = '<b>CITY OF TALLAHASSEE SEWER CONNECTION NOTICE<br><br>DATE:  </B>' + today;
	}

	if (matches(inspType.substr(0, 3), '905') && matches(appTypeArray[1], 'Commercial', 'Residential', 'Quick Turn') && AInfo['Sewer System Type'] == 'Sewer' && checkInspectionResult('400: Building Sewer', 'Approved') == false) {
		emailSubject = 'City of Tallahassee Sewer Connection Notice';
	} else {
		emailSubject = capAltId + ' City of Tallahassee Sewer Connection Notice';
	}

	if (matches(inspType.substr(0, 3), '905') && matches(appTypeArray[1], 'Commercial', 'Residential', 'Quick Turn') && AInfo['Sewer System Type'] == 'Sewer') {
		emailBody = '<b>CITY OF TALLAHASSEE SEWER CONNECTION NOTICE<br><br>DATE:  </B>' + today;
	}

	if (inspType.substr(0, 3) == '502') {
		emailSubject = capAltId + ' City of Tallahassee Gas Release';
	}

	if (inspType.substr(0, 3) == '502') {
		emailBody = '<b>LEON COUNTY GAS METER RELEASE<br><br>DATE:  </B>' + today;
	}

	if (inspType.substr(0, 3) == '503') {
		emailSubject = capAltId + ' City of Tallahassee Gas Release';
	}

	if (inspType.substr(0, 3) == '503') {
		emailBody = '<b>LEON COUNTY GAS METER RELEASE<br><br>DATE:  </B>' + today;
	}

	if (matches(inspType.substr(0, 3), '507', '508', '509', '510', '511', '512', '513', '514')) {
		emailSubject = capAltId + ' Talquin Electrical Release';
	}

	if (matches(inspType.substr(0, 3), '507', '508', '509', '510', '511', '512', '513', '514')) {
		emailBody = '<b>TALQUIN ELECTRICAL RELEASE<br><br>DATE:  </B>' + today;
	}

	if (matches(inspType.substr(0, 3), '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533')) {
		emailSubject = capAltId + ' City of Tallahassee Electrical Release';
	}

	if (matches(inspType.substr(0, 3), '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533')) {
		emailBody = '<b>CITY ELECTRICAL RELEASE<br><br>DATE:  </B>' + today;
	}

	if (inspType.substr(0, 3) == '534') {
		emailSubject = capAltId + ' City of Tallahassee Electric Photovoltaic System Release';
	}

	if (inspType.substr(0, 3) == '534') {
		emailBody = '<b>CITY PHOTOVOLTAIC RELEASE<br><br>DATE:  </B>' + today;
	}

	if (inspType.substr(0, 3) == '535') {
		emailSubject = capAltId + ' Talquin Electric Photovoltaic System Release';
	}

	if (inspType.substr(0, 3) == '535') {
		emailBody = '<b>TALQUIN PHOTOVOLTAIC RELEASE<br><br>DATE:  </B>' + today;
	}

	emailBody = emailBody + '<br><br>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
	emailBody = emailBody + '<br><b>PERMIT NUMBER</b>' + sp5 + capAltId + sp5 + '<b>PID</b> ' + pid;
	emailBody = emailBody + '<br><b>INSPECTOR  </b>' + sp5 + sp5 + sp5 + currentUserID + ' ' + inspResultDate;
	emailBody = emailBody + '<br><b>ADDRESS </b>' + sp5 + sp5 + sp5 + sp5 + addr;
	// TODO: strange characters in extract, check standard choice
	emailBody = emailBody + '<br><b>DATAGö¼+íGö¼+íGö¼+í' + sp5 + sp5 + sp5 + sp5 + sp5 + inspType + '</b>';
	// DISABLED: EMSE:Utility_Releases:0370
	// emailBody = emailBody+'<br><b>APPLICANT </b>'+sp5+sp5+sp5+aName+';
	// '+aPh;
	emailBody = emailBody + '<br><b>CONTRACTOR </b>' + sp5 + sp5 + lpaName + ' ' + lpaPhone;
	emailBody = emailBody + '<br><b>OWNER</b>' + sp5 + sp5 + sp5 + sp5 + sp5 + ownerInfo;
	emailBody = emailBody + '<br>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
	// DISABLED: EMSE:Utility_Releases:0420
	// email('clint.mills@ikcpartners.com','autosender@leoncountyfl.gov',emailSubject,emailBody);
	// DISABLED: EMSE:Utility_Releases:0430
	// email('garrisong@leoncountyfl.gov','autosender@leoncountyfl.gov',emailSubject,emailBody);
	if (matches(inspType.substr(0, 3), '502', '503', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '527', '533', '534', '535')) {
		email('garrisong@leoncountyfl.gov', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '502', '503', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534')) {
		email('sarah.crosby@talgov.com', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '502', '503', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534')) {
		email('james.jackson@talgov.com', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	// DISABLED: EMSE:Utility_Releases:0470 Rhonda Reaves
	// if (matches(inspType.substr(0,3),'502','503','515','516','517','518','519','520','521','522','523','524','525','526','527','528','529','530','531','532','533','534')) {
	// 	email('rhonda.reaves-smith@talgov.com','autosender@leoncountyfl.gov',emailSubject,emailBody);
	// 	}

	if (matches(inspType.substr(0, 3), '502', '503', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534')) {
		email('william.hawkins@talgov.com', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '502', '503', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534')) {
		email('deborah.mccullers@talgov.com', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '502', '503', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534')) {
		email('kimberly.meeks@talgov.com', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '502', '503', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534')) {
		email('heather.beary@talgov.com', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '502', '503', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534')) {
		email('tom.gillman@talgov.com', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '502', '503', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534')) {
		email('bob.seaton@talgov.com', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '502', '503', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534')) {
		email('jeremy.nelson@talgov.com', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '502', '503', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534')) {
		email('garret.young@talgov.com', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '502', '503', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534')) {
		email('kristie.tadlock@talgov.com', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '502', '503', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534')) {
		email('Courtney.mckendree@talgov.com', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '502', '503', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534')) {
		email('Marcus.booker@talgov.com', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '507', '508', '509', '510', '511', '512', '513', '514', '535')) {
		email('releases@talquinelectric.com', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '502', '503', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '527', '533', '534', '535')) {
		email('mumfordc@leoncountyfl.gov', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
		email('walkerp@leoncountyfl.gov', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
		// DISABLED: EMSE:Utility_Releases:0600 John Morgan
		// 	email('morganjo@leoncountyfl.gov','autosender@leoncountyfl.gov',emailSubject,emailBody);
		email('perdued@leoncountyfl.gov', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
		email('estesje@leoncountyfl.gov', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if ((matches(inspType.substr(0, 3), '400') && matches(appTypeArray[1], 'Commercial', 'Residential', 'Quick Turn')) || (inspType.substr(0, 3) == '400' && matches(appTypeArray[1], 'VelocityHall'))) {
		email('kimberly.meeks@talgov.com', 'energysvccallbacks.com', 'garrisong@leoncountyfl.gov', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	if (matches(inspType.substr(0, 3), '905') && matches(appTypeArray[1], 'Commercial', 'Residential', 'Quick Turn') && AInfo['Sewer System Type'] == 'Sewer' && checkInspectionResult('400: Building Sewer', 'Approved') == false) {
		email('kimberly.meeks@talgov.com', 'energysvccallbacks.com', 'garrisong@leoncountyfl.gov', 'autosender@leoncountyfl.gov', emailSubject, emailBody);
	}

	showMessage = false;

}
