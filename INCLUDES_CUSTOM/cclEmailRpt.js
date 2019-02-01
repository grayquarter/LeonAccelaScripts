function cclEmailRpt() {
	//start replaced branch: EMSE:CCLEmailRpt

	showMessage = true;
	var today = new Date();
	today = Date(aa.date.currentDate);
	var aName;
	var aPh;
	var emailAddr;
	var conType;
	var targetAddr;
	var addr;
	var capAltId;
	var parcels;
	var pid;
	var altID;
	var rptName;
	var BldCd;
	var EnvCd;
	var ZonCd;
	var JunkCd;
	var AddrCd;
	var FireCd;
	var FFLCd;
	var MowCd;
	var RapCd;
	var AprCd;
	var CaseCd;
	var AprReqCd;
	var aName;
	var paraGraph1_01;
	var paraGraph1_2;
	var sp5 = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	var sp1 = '&nbsp;';
	var conArray;
	var ccAddress;
	ca = new Array();
	ca = getContactArray();
	for (x in ca)
		if (ca[x]['contactType'] == 'Applicant')
			aName = ca[x]['fullName'];
	for (x in ca)
		if (ca[x]['contactType'] == 'Applicant')
			emailAddr = ca[x]['email'];
	conType = 'Applicant';
	for (x in ca)
		if (ca[x]['contactType'] == 'Applicant')
			emailAddr = ca[x]['email'];
	altId = capId.getCustomID();
	capAltId = capId.getCustomID();
	addr = getCapAddress(capId);
	targetAddr = getCapAddress(capId);
	var par = aa.parcel.getParcelandAttribute(capId, null);
	if (par.getSuccess()) {
		parcels = par.getOutput().toArray();
		for (x in parcels)
			pid = parcels[x].getParcelNumber();
		logDebug(pid);
	}

	// DISABLED: EMSE:CCLEmailRpt:0080
	// conType = conArray[y].getPeople().contactType;
	// emailAddr = conArray[y].getPeople().email;
	if (emailAddr != undefined && conType == 'Applicant') {
		var myHashMap = aa.util.newHashMap();
		myHashMap.put('LCC_No', capIDString);
	}

	if (AInfo['Send Fees Due'] == 'CHECKED') {
		rptName = 'Code Compliance Letter Not Paid';
	}

	if (AInfo['Send Results Letter/EM'] == 'CHECKED') {
		rptName = 'Code Compliance Letter Info';
	}

	if (AInfo['Send Parcel in City Limits EM'] == 'CHECKED') {
		rptName = 'Code Compliance Letter COT';
	}

	if (AInfo['Send No Information Found EM'] == 'CHECKED') {
		rptName = 'Code Compliance Letter Info';
	}

	if ((AInfo['ParcelAttribute.PARCEL_CITY_CNTY'] != 'County' || AInfo['ParcelAttribute.USE_CODE'] != 'OUT' || AInfo['ParcelAttribute.T_R_A'] != 2)) {
		var Jurisdiction = 'City';
	} else {
		var Jurisdiction = 'County';
	}

	if (balanceDue == 0 && feesInvoicedTotal != 0) {
		var feesPaid = '';
	} else {
		var feesPaid = 'In order to process your request, a non-refundable $90.00 payment is now due and payable to Leon County.  Please remit payment by Check or Money Order to Leon County DSEM, 435 N. Macomb St,. Tallahassee FL 32301.<br><br>';
	}

	var rptSubject = 'Compliance Certification - ' + targetAddr + ' Tallahassee Fl. and Parcel # ' + pid;
	if ((AInfo['Send Fees Due'] == 'CHECKED' || AInfo['Send Results Letter/EM'] == 'CHECKED' || AInfo['Send Parcel in City Limits EM'] == 'CHECKED' || AInfo['Send No Information Found EM'] == 'CHECKED')) {
		var paraGraph1 = 'Hello ' + aName + ',<br><br>This is to acknowledge receipt of your outstanding code and lien search request ' + capAltId + ' processed on ' + fileDate + ' for the property located at <Font><Strong>' + targetAddr + ' on Parcel ID # ' + pid + '</Font></Strong><br><br>';
	}

	if (AInfo['Send Address/Parcel Do Not Match'] == 'CHECKED') {
		var paraGraph1_01 = 'Hello ' + aName + ',<br><br>The Parcel ID and Address that you provided do not not match.  Please verify the provided information and the Code Compliance Program will respond accordingly.<br><br>';
	}

	if ((AInfo['Send Results Letter/EM'] == 'CHECKED' || AInfo['Send No Information Found EM'] == 'CHECKED')) {
		var paraGraph1_1 = 'The Open Code Violations and Lien Research results for the above referenced property are as follows:<br><br>';
	}

	if (AInfo['Send Parcel in City Limits EM'] == 'CHECKED') {
		var paraGraph1_2 = '<Font><Strong>This property is located within the Tallahassee City Limits.  Please contact the City of Tallahassee Code Enforcement Office at (850) 891-6500.<br><br></Font></Strong>';
	}

	var paraGraph2 = '<br>Leon County understands there is a time line for the information needed for any open code violations, complaints, and or outstanding liens that is being requested form your office.  When sending any correspondences to Leon County Code Compliance Program, please include all staff members listed below, to ensure your request is answered in a timely manner.<br><br>';
	var paraInfo = 'If you need additonal information, please feel free to contact staff via email or call us at (850) 606-1300.<br><br>';
	var paraEMBlock = 'Donald Allen -- AllenD@leoncountyfl.gov<br>Jessical Lowe -- LoweJ@leoncountyfl.gov<br>Darnell Ward -- WardD@leoncountyfl.gov<br>Eunice Johnson-Shepherd-- JohnsonE@leoncountyfl.gov<br><br>Sincerely,';
	if (AInfo['Open Code Bld #'] != null && AInfo['Send Results Letter/EM'] == 'CHECKED') {
		BldCd = 'Building Code Case #:' + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp1 + sp1 + sp5 + sp1 + sp1 + sp1 + AInfo['Open Code Bld #'] + sp5 + ' Status: ' + AInfo['Open Code Bld Status'] + sp5 + ' Fine Balance: $' + AInfo['Open Code Bld Balance'] + '<br>';
	} else {
		BldCd = '';
	}

	if (AInfo['Open Code Env #'] != null && AInfo['Send Results Letter/EM'] == 'CHECKED') {
		EnvCd = 'Environmental Code Case #:' + sp5 + sp5 + sp5 + sp5 + sp5 + sp1 + sp1 + sp1 + sp1 + sp1 + AInfo['Open Code Env #'] + sp5 + ' Status: ' + AInfo['Open Code Env Status'] + sp5 + ' Fine Balance: $' + AInfo['Open Code Env Balance'] + '<br>';
	} else {
		EnvCd = '';
	}

	if (AInfo['Open Code Zoning #'] != null && AInfo['Send Results Letter/EM'] == 'CHECKED') {
		ZonCd = 'Zoning Code Case #:' + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp1 + sp1 + AInfo['Open Code Zoning #'] + sp5 + ' Status: ' + AInfo['Open Code Zoning Status'] + sp5 + ' Fine Balance: $' + AInfo['Open Code Zoning Balance'] + '<br>';
	} else {
		ZonCd = '';
	}

	if (AInfo['Open Code Junk #'] != null && AInfo['Send Results Letter/EM'] == 'CHECKED') {
		JunkCd = 'Junk Code Case #:' + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp1 + sp1 + sp1 + sp1 + sp1 + sp1 + AInfo['Open Code Junk #'] + sp5 + ' Status: ' + AInfo['Open Code Junk Status'] + sp5 + ' Fine Balance: $' + AInfo['Open Code Junk Balance'] + '<br>';
	} else {
		JunkCd = '';
	}

	if (AInfo['Open Code Addressing #'] != null && AInfo['Send Results Letter/EM'] == 'CHECKED') {
		AddrCd = 'Address Code Case #:' + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp1 + sp1 + sp1 + sp1 + sp1 + AInfo['Open Code Addressing #'] + sp5 + ' Status: ' + AInfo['Open Code Addressing Status'] + sp5 + ' Fine Balance: $' + AInfo['Open Code Addressing Balance'] + '<br>';
	} else {
		AddrCd = '';
	}

	if (AInfo['Open Code Fire #'] != null && AInfo['Send Results Letter/EM'] == 'CHECKED') {
		FireCd = 'Fire Code Case #:' + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp1 + sp5 + sp1 + sp1 + sp1 + sp1 + sp1 + sp1 + AInfo['Open Code Fire #'] + sp5 + ' Status: ' + AInfo['Open Code Fire Status'] + sp5 + ' Fine Balance: $' + AInfo['Open Code Fire Balance'] + '<br>';
	} else {
		FireCd = '';
	}

	if (AInfo['Open Code Filthy Fluids #'] != null && AInfo['Send Results Letter/EM'] == 'CHECKED') {
		FFLCd = 'Filthy Fluids Code Case #:' + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp1 + sp1 + sp1 + AInfo['Open Code Filthy Fluids #'] + sp5 + ' Status: ' + AInfo['Open Code Filthy Fluids Status'] + sp5 + ' Fine Balance: $' + AInfo['Open Code Filthy Fluids Balance'] + '<br>';
	} else {
		FFLCd = '';
	}

	if (AInfo['Open Code Mowing #'] != null && AInfo['Send Results Letter/EM'] == 'CHECKED') {
		MowCd = 'Mowing Code Case #:' + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + AInfo['Open Code Mowing #'] + sp5 + ' Status: ' + AInfo['Open Code Mowing Status'] + sp5 + ' Fine Balance: $' + AInfo['Open Code Mowing Balance'] + '<br>';
	} else {
		MowCd = '';
	}

	if (AInfo['Open Code Refueling Assistance Program #'] != null && AInfo['Send Results Letter/EM'] == 'CHECKED') {
		RapCd = 'Refueling Assistance Program Code Case #:' + sp5 + AInfo['Open Code Refueling Assistance Program #'] + sp5 + ' Status: ' + AInfo['Open Code Refueling Assistance Program Status'] + sp5 + ' Fine Balance: $' + AInfo['Open Code Refueling Assistance Program Balance'] + '<br>';
	} else {
		RapCd = '';
	}

	if (AInfo['Open Code Abandoned Property Registry #'] != null && AInfo['Send Results Letter/EM'] == 'CHECKED') {
		AprCd = 'Abandoned Property Registry Code Case #:' + sp5 + sp1 + AInfo['Open Code Abandoned Property Registry #'] + sp5 + ' Status: ' + AInfo['Open Code Abandoned Property Registry Status'] + sp5 + ' Fine Balance: $' + AInfo['Open Code Abandoned Property Registry Balance'] + '<br>';
	} else {
		AprCd = '';
	}

	if (AInfo['Number of Cases'] >= 1 && AInfo['Send Results Letter/EM'] == 'CHECKED') {
		CaseCd = '<br>As of ' + fileDate + ' the Number of Code Case(s):' + sp5 + AInfo['Number of Cases'] + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp5 + sp1 + sp1 + ' Total Fine Balance: $' + getAppSpecific('Balance of All Cases') + '<br><br>';
	} else {
		CaseCd = '<br>';
	}

	if (AInfo['Send Results Letter/EM'] == 'CHECKED') {
		AprPara = 'Leon County Requires that property that is subject to foreclosure proceedings be registered, and also requires that the mortgagee appoint a local representative.<br><br>';
	} else {
		AprPara = ;
	}

	if (AInfo['APR Req'] == 'Yes') {
		AprReqCd = 'Case # ' + AInfo['ParcelAttribute.VIR_APR_NUM'] + '<br>Case Status: ' + AInfo['ParcelAttribute.VIR_APR_STAT'] + '<br><br><Font><Strong>It appears that the referenced property may require Abandoned Property Registration.</Font></Strong><br>';
	} else {
		AprReqCd = '<Font><Strong>At this time there is no Abandoned Property Registration required.</Font></Strong><br>';
	}

	if (balanceDue >= 1 && AInfo['Send Fees Due'] == 'CHECKED' && wfTask == 'Request Submittal' && wfStatus == 'Fees Due Notice') {
		sendEmailwAttchmnt('autosender@leoncountyfl.gov', emailAddr, '', rptSubject, paraGraph1 + feesPaid + paraGraph2 + paraInfo + paraEMBlock, rptName, myHashMap);
	}

	// DISABLED: EMSE:CCLEmailRpt:0401
	// if (balanceDue >= 1 && AInfo['Send Fees Due'] == 'CHECKED' && wfTask == 'Request Submittal' && wfStatus == 'Fees Due Notice') {
	// 	sendEmailwAttchmnt('autosender@leoncountyfl.gov',emailAddr,'',rptSubject,paraGraph1+feesPaid+paraGraph2+paraInfo+paraEMBlock,rptName,myHashMap);
	// 	}

	if ((AInfo['Send Results Letter/EM'] == 'CHECKED' || AInfo['Send No Information Found EM'] == 'CHECKED') && balanceDue == 0) {
		sendEmailwAttchmnt('autosender@leoncountyfl.gov', emailAddr, '', rptSubject, paraGraph1 + paraGraph1_1 + BldCd + EnvCd + ZonCd + JunkCd + AddrCd + FireCd + FFLCd + MowCd + RapCd + AprCd + CaseCd + AprPara + AprReqCd + paraGraph2 + paraInfo + paraEMBlock, rptName, myHashMap);
	}

	if (AInfo['Send Address/Parcel Do Not Match'] == 'CHECKED') {
		email(emailAddr, 'autosender@leoncountyfl.gov', rptSubject, paraGraph1_01 + paraGraph2 + paraInfo + paraEMBlock);
	}

	if (AInfo['Send Parcel in City Limits EM'] == 'CHECKED') {
		sendEmailwAttchmnt('autosender@leoncountyfl.gov', emailAddr, '', rptSubject, paraGraph1 + paraGraph1_2 + paraGraph2 + paraInfo + paraEMBlock, rptName, myHashMap);
	}

	if (AInfo['Send Fees Due'] == 'CHECKED') {
		editAppSpecific('Send Fees Due', 'UNCHECKED');
	}

	if (AInfo['Send No Information Found EM'] == 'CHECKED') {
		editAppSpecific('Send No Information Found EM', 'UNCHECKED');
	}

	if (AInfo['Send Parcel in City Limits EM'] == 'CHECKED') {
		editAppSpecific('Send Parcel in City Limits EM', 'UNCHECKED');
	}

	if (AInfo['Send Address/Parcel Do Not Match'] == 'CHECKED') {
		editAppSpecific('Send Address/Parcel Do Not Match', 'UNCHECKED');
	}

	if (AInfo['Send Results Letter/EM'] == 'CHECKED') {
		editAppSpecific('Send Results Letter/EM', 'UNCHECKED');
	}

	// DISABLED: EMSE:CCLEmailRpt:0610
	// if (AInfo['Send Results Letter/EM'] == 'CHECKED' && balanceDue == 0) {
	// 	sendEmailwAttchmntCC('autosender@leoncountyfl.gov',emailAddr,'',rptSubject,paraGraph1+paraGraph1_1+BldCd+EnvCd+ZonCd+JunkCd+AddrCd+FireCd+FFLCd+MowCd+RapCd+AprCd+CaseCd+AprPara+AprReqCd+paraGraph2+paraInfo+paraEMBlock,rptName,myHashMap);
	// 	}

}
//end replaced branch: EMSE:CCLEmailRpt;
