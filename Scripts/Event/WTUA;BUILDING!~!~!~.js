
// DISABLED: WTUA:Building/*/*/*:0001
// if (matches(capStatus, 'Certificate of Occupancy','Certificate of Completion', 'Certificate of Occupancy Redac', 'Certificate of Completion Reda', 'Finaled') && (AInfo['Environmental Management Do Not COFO'] == 'CHECKED' || AInfo['Building Plans Review Do Not COFO'] == 'CHECKED' || AInfo['Code Compliance-License Do Not COFO'] == 'CHECKED' || AInfo['Development Services Do Not COFO'] == 'CHECKED')) {
// 	cancel = true;
// 	endBranch();
// 	}

// DISABLED: WTUA:Building/*/*/*:0002
// if (matches(capStatus, 'Issued','Issued Redacted') && (AInfo['Environmental Management Do Not Issue'] == 'CHECKED' || AInfo['Building Plans Review Do Not Issue'] == 'CHECKED' || AInfo['Code Compliance-License Do Not Issue'] == 'CHECKED' || AInfo['Development Services Do Not Issue'] == 'CHECKED')) {
// 	cancel = true;
// 	endBranch();
// 	}

// DISABLED: WTUA:Building/*/*/*:0010
// if (wfTask == 'Building Plans Review' && wfStatus == 'Approved') {
// 	editAppSpecific('Plan Review Expiration Date',dateAdd(null,180));
// 	}

if (wfTask == 'Quality Check' && wfStatus == 'Ready to Issue') {
	//replaced branch(EMSE:Fees-Building)
	feesBuilding();
}

if (wfTask == 'Application Submittal' && wfStatus == 'Accepted') {
	//replaced branch(EMSE:Fees-Building)
	feesBuilding();
}

if (wfTask == 'Quality Check' && wfStatus == 'Invoice Fees') {
	//start replaced branch: EMSE:AutoInvoiceBuildingFees
	{
		showMessage = true;
		feeItemArray = aa.fee.getFeeItems(capId, null, 'NEW').getOutput();
		if (feeItemArray) {
			for (FI in feeItemArray)
				//start replaced branch: EMSE:InvoiceTheFee
			{
				thisFeeCode = feeItemArray[FI].getFeeCod();
				thisFeeStatus = feeItemArray[FI].getFeeitemStatus();
				comment('Fee Code = ' + thisFeeCode);
				comment('Fee Status = ' + thisFeeStatus);
				if (thisFeeStatus == 'NEW') {
					invoiceFee(thisFeeCode, 'FINAL');
				}

			}
			//end replaced branch: EMSE:InvoiceTheFee;
		}

		childrenCapId = getChildren('*/*/*/*', capId);
		if (typeof(childrenCapId) == 'object') {
			for (eachchild in childrenCapId)
				invoiceCapFees(childrenCapId[eachchild]);
		}

	}
	//end replaced branch: EMSE:AutoInvoiceBuildingFees;
}

showMessage = true;
// DISABLED: WTUA:Building/*/*/*:0050
// if (wfTask == 'Building Plans Review' && wfStatus == 'Approved' && wfTask == 'Contractor License Review' && wfStatus |= 'Approved') {
// 	}

if (wfTask == 'Quality Check' && wfStatus == 'Ready to Issue') {

	//replaced branch(EMSE:Add-Inspections-Building)
	addInspectionsBuilding();
}

// DISABLED: WTUA:Building/*/*/*:0070
// if (appTypeArray[1] == 'Residential' && AInfo['Sewer System Type'] == 'Septic' && wfTask == 'Completeness Check'  && wfStatus == 'Routed for Review' && wfTask == 'Septic Sewer'  && wfStatus |= 'Approved'  && (AInfo['Health Department Notified'] == null || AInfo['Health Department Notified'] == 'UNCHECKED')) {
// 	var sp5 = 'Gö¼+íGö¼+íGö¼+íGö¼+íGö¼+í';
// 	capAltId = capId.getCustomID();
// DISABLED: WTUA:Building/*/*/*:0080
// 	emailSubject = 'Health Department Permit Review '+sp5+'<br><b>PERMIT NUMBER</b>'+sp5+capAltId+sp5+';
// DISABLED: WTUA:Building/*/*/*:0090
// 	emailBody = emailBody+'<br><b>PERMIT NUMBER</b>'+sp5+capAltId+sp5+'This permit has a residential permit review task assigned to be completed by the Leon County Department of Health.';
// DISABLED: WTUA:Building/*/*/*:0100
// 	email('garrisong@leoncountyfl.gov','autosender@leoncountyfl.gov',emailSubject,emailBody);
// DISABLED: WTUA:Building/*/*/*:0110
// 	editAppSpecific('Health Department Notified','CHECKED');
// DISABLED: WTUA:Building/*/*/*:0130
// 	emailBody = emailBody+'<br><b>PERMIT NUMBER</b>'+sp5+capAltId+sp5+'<b>PID</b> '+pid;
// DISABLED: WTUA:Building/*/*/*:0150
// 	emailBody = emailBody+'<br><b>PERMIT NUMBER</b>'+sp5+capAltId+sp5+'<b>PID</b> '+pid;
// 	}

// DISABLED: WTUA:Building/*/*/*:0170
// if (wfTask == 'Application Submittal' && wfStatus == 'Accepted' && AInfo['Driveway Permit Required '] == No) {
// 	closeTask('Driveway Review','NA','Driveway Review Not Required - Updated by Script','');
// 	}

// DISABLED: WTUA:Building/*/*/*:0210
// showMessage = true;
// showDebug = 1;
if (wfTask == 'Application Submittal' && wfStatus == 'Accepted' && AInfo['ParcelAttribute.VIR_LC_AREA'] != null) {
	var inspArea;
	var envArea;
	var wfsr;
	var wfstr1;
	var wfstr2;
	var username;
	inspArea = AInfo['ParcelAttribute.VIR_LC_AREA'];
	envArea = inspArea.substr(1, 1);
	username = lookup('InspArea_LookupEnv', envArea);
	wfstr = 'Environmental Inspection Review';
	assignTask(wfstr, username);
}

if (wfTask == 'Application Submittal' && wfStatus == 'Accepted' && AInfo['ParcelAttribute.VIR_LC_AREA'] != null) {
	wfstr = 'Applicant/Env-Insp';
	assignTask(wfstr, username);
	wfstr = 'Driveway Review';
}

if (wfTask == 'Application Submittal' && wfStatus == 'Accepted' && AInfo['Driveway Permit Required'] == 'Yes' && AInfo['ParcelAttribute.VIR_DW_ACCESS'] == 'COUNTY') {
	assignTask(wfstr, username);
}

if (wfTask == 'Application Submittal' && wfStatus == 'Accepted' && AInfo['Driveway Permit Required'] == 'No') {
	closeTask('Driveway Review', 'NA', 'Driveway Review Not Required - Updated by Script', '');
	deactivateTask('Contractor License Review');
	deactivateTask('Driveway Review');
}

if (wfTask == 'Application Submittal' && wfStatus == 'Accepted') {
	sendLPExpiredNotification(capId);
}

if (wfTask == 'Application Submittal' && wfStatus == 'Accepted' && AInfo['Sewer System Type'] == 'Sewer') {
	username = currentUserID;
	wfstr = ('Septic Sewer');
	assignTask(wfstr, username);
}

if (AInfo['Sewer System Type'] == 'N/A') {
	var wfstr;
	wfstr = ('Septic Sewer');
	deactivateTask(wfstr);
}

if (wfTask == 'Completeness Check' && wfStatus == 'Routed for Review') {
	username = currentUserID;
	wfstr = ('Quality Check');
	assignTask(wfstr, username);
}

if (wfTask == 'Environmental Inspection Review' && (wfStatus == 'Env Insp Resubmittal Requested' || wfStatus == 'Resite Required')) {
	username = currentUserID;
	wfstr = ('Applicant/Env-Insp');
	assignTask(wfstr, username);
	setTask('Environmental Inspection Review', 'Y', 'N');
}

if (wfTask == 'Zoning Setback Review' && wfStatus == 'Additional Information Required') {
	username = currentUserID;
	wfstr = ('Applicant/Zoning Setback Review');
	assignTask(wfstr, username);
}

if (wfTask == 'Completeness Check' && wfStatus == 'Additional Information Required') {
	username = currentUserID;
	wfstr = ('Applicant/Completeness Check');
	assignTask(wfstr, username);
	setTask('Completeness Check', 'Y', 'N');
}

if (wfTask == 'Building Plans Review' && (wfStatus == 'Building Resubmittal Requested' || wfStatus == 'Resite Required')) {
	username = currentUserID;
	wfstr = ('Applicant/Building');
	assignTask(wfstr, username);
	setTask('Building Plans Review', 'Y', 'N');
}

if (wfTask == 'Environmental Inspection Review' && wfStatus == 'Env Supv Apv Requested') {
	assignTask('Environmental Inspection Review', 'BASSR');
}

if (wfTask == 'Driveway Review' && wfStatus == 'Env Supv Apv Requested') {
	assignTask('Driveway Review', 'BASSR');
}

if (appTypeArray[1] == 'Residential' && matches(appTypeArray[2], 'New', 'Addition') && isTaskStatus('Application Submittal', 'Accepted') == true && feeExists('7015-012', 'NEW') == true) {
	invoiceFee('7015-012', 'FINAL');
}

if (appTypeArray[1] == 'Residential' && matches(appTypeArray[2], 'New', 'Addition') && isTaskStatus('Application Submittal', 'Accepted') == true && feeExists('5041-015', 'NEW') == true) {
	invoiceFee('5041-015', 'FINAL');
}

if (appTypeArray[1] == 'Residential' && matches(appTypeArray[2], 'New', 'Addition') && isTaskStatus('Application Submittal', 'Accepted') == true && feeExists('8096-010', 'NEW') == true) {
	invoiceFee('8096-010', 'FINAL');
}

if (wfTask == 'Building Plans Review' && wfStatus == 'Approved') {
	sendLPExpiredNotification(capId);
}

if (wfTask == 'Contractor License Review' && wfStatus == 'Approved' && getAppSpecific('Flood Indemnity Required') == 'CHECKED' && (getAppSpecific('Flood Declarations Covenent Received') == 'No' || getAppSpecific('Flood Declarations Covenent Received') == null) && getAppSpecific('Flood Declarations Covenent Received Date') == null) {
	closeTask('Flood Indemnity Check', 'Flood Indemnity Required', 'Auto Check of Flood Indemnity- Updated by Script', '');
	activateTask('Flood Indemnity');
	deactivateTask('Quality Check');
}

if (wfTask == 'Contractor License Review' && wfStatus == 'Approved' && (getAppSpecific('Flood Indemnity Required') == 'UNCHECKED' || getAppSpecific('Flood Indemnity Required') == null)) {
	closeTask('Flood Indemnity Check', 'Flood Indemnity Not Required', 'Auto Check of Flood Indemnity- Updated by Script', '');
}

if (wfTask == 'Contractor License Review' && wfStatus == 'Approved' && getAppSpecific('Flood Indemnity Required') == 'CHECKED' && getAppSpecific('Flood Declarations Covenent Received') == 'Yes' && getAppSpecific('Flood Declarations Covenent Received Date') >= '01/01/1999') {
	closeTask('Flood Indemnity Check', 'Flood Indemnity Completed', 'Auto Check of Flood Indemnity- Updated by Script', '');
	closeTask('Flood Indemnity', 'Flood Indemnity Completed', 'Auto Check of Flood Indemnity- Updated by Script', '');
	activateTask('Quality Check');
}

if (wfTask == 'Zoning Setback Review' && matches(wfStatus, 'Additional Information Required', 'Zoning Setback Resite Required')) {
	setTask('Zoning Setback Review', 'Y', 'N');
}

if (wfTask == 'Completeness Check' && wfStatus == 'Additional Information Required') {
	setTask('Completeness Check', 'Y', 'N');
}

if (wfTask == 'Environmental Inspection Review' && wfStatus == 'Env Insp Resubmittal Requested') {
	setTask('Environmental Inspection Review', 'Y', 'N');
}

if (wfTask == 'Environmental Inspection Review' && wfStatus == 'Env Insp Resite Required') {
	setTask('Environmental Inspection Review', 'Y', 'N');
}

if (wfTask == 'Completeness Check' && wfStatus == 'Routed for Review') {
	deactivateTask('Applicant/Completeness Check');
}

if (isTaskStatus('Addressing Review', 'Approved') == 'True' && wfTask == 'Applicant/Completeness Check' && wfStatus == 'Completeness Check Additional Information Received') {
	deactivateTask('Addressing Review');
}

if (wfTask == 'Completeness Check' && wfStatus == 'Routed for Review' && AInfo['Driveway Permit Required'] == 'No') {
	deactivateTask('Driveway Review');
}

if (wfTask == 'Completeness Check' && wfStatus == 'Routed for Review' && AInfo['Sewer Tap Receipt Received'] == 'CHECKED') {
	closeTask('Septic Sewer', 'Sewer Tap Receipt Received', 'Updated by Script', '');
}

if (isTaskActive('Driveway Review') == 'True' && AInfo['Driveway Permit Required'] == 'No') {
	deactivateTask('Driveway Review');
}

if (wfTask == 'Contractor License Review' && wfStatus == 'License Update Requested') {
	setTask('Contractor License Review', 'Y', 'N');
}

// TODO: there is a syntax error on this standard choice line 0410.  Fixed for now.
if (wfTask == 'Applicant/Contractor License' && matches(wfStatus, 'in progress', 'License Update Received')) {
	username = currentUserID;
	assignTask('Applicant/Contractor License', 'username');
}

if (isTaskStatus('Zoning Setback Review', 'Resite Routed for Review') == 'True') {
	updateTask('Environmental Inspection Review', 'Resite Received');
	updateTask('Building Plans Review', 'Resite Received');
}

if (isTaskStatus('Zoning Setback Review', 'Resite Routed for Review') == 'True' && AInfo['Driveway Permit Required'] == 'Yes') {
	updateTask('Driveway Review', 'Resite Received');
}

if (isTaskStatus('Zoning Setback Review', 'Resite Routed for Review') == 'True' && AInfo['Sewer System Type'] == 'Septic') {
	updateTask('Septic Sewer', 'Resite Received');
}

// DISABLED: WTUA:Building/*/*/*:0510
// var contCheck = checkContractorsForIssuance();
// DISABLED: WTUA:Building/*/*/*:0520
// if (isTaskActive('Contractor License Review')) {
// 	if (!contCheck) updateTask('Contractor License Review','Contractor Review Required','Updated via EMSE','');
// 	if (contCheck) updateTask('Contractor License Review','Contractors Automatically Verified','Updated via EMSE','');
// 	}

// DISABLED: WTUA:Building/*/*/*:0530
// if (isTaskActive('Permit Issuance') && !contCheck) {
// 	deactivateTask('Permit Issuance');
// 	activateTask('Contractor License Review');
// 	updateTask('Contractor License Review','Contractor Review Required','Updated via EMSE','');
// 	}

if (!appMatch('Building/*/Demolition/*') && appTypeArray[2] != 'Quick Turn' && wfTask == 'Contractor License Review' && wfStatus == 'Approved') {
	email('GarrisonG@leoncountyfl.gov;GunterL@leoncountyfl.gov', 'noreply@leoncountyfl.gov', 'Quality Check Ready for Review ' + capIDString + '.', 'The following permit, ' + capIDString + ' is ready for your review');
}

if (matches(appTypeArray[1], 'Residential', 'Commercial') && appTypeArray[2] != 'Quick Turn' && wfTask == 'Quality Check' && wfStatus == 'Ready to Issue') {
	capContactResult = aa.people.getCapContactByCapID(capId);
	conArray = capContactResult.getOutput();
	for (y in conArray)
		//start replaced branch: EMSE:EmailRptApplicant
	{
		conType = conArray[y].getPeople().contactType;
		emailAddr = conArray[y].getPeople().email;
		// DISABLED: EMSE:EmailRptApplicant:02 Old Text
		// if (emailAddr != undefined && conType =='Applicant') {
		// 	var myHashMap = aa.util.newHashMap();
		// 	myHashMap.put('altID',capIDString);
		// 	sendEmailwAttchmnt('autosender@leoncountyfl.gov',emailAddr,'','APPLICANT NOTIFICATION: The Review for '+capIDString+' is Approved','Permit Applicant,<br><br>Please contact Development Support and Environmental Management Intake Staff at (850) 606-1300 to schedule a time to pick up your permit. Any total fees due are detailed on the Attached report.<br><br>Please call if you have any questions. Thank You.','Project Fee Summary',myHashMap);
		// 	comment('Email Address is : '+emailAddr);
		// 	}

		if (emailAddr != undefined && conType == 'Applicant') {
			var myHashMap = aa.util.newHashMap();
			myHashMap.put('altID', capIDString);
			sendEmailwAttchmnt('autosender@leoncountyfl.gov', emailAddr, '', 'APPLICANT NOTIFICATION: The Review for ' + capIDString + ' is Approved', 'Permit Applicant,<br><br>Your permit is ready for pick up and we are located at 435 N. Macomb St 2nd floor. Any total fees due are detailed on the Attached report.<br><br>Please call if you have any questions. Thank You.', 'Project Fee Summary', myHashMap);
			comment('Email Address is : ' + emailAddr);
		}

	}
	//end replaced branch: EMSE:EmailRptApplicant;
}

// DISABLED: WTUA:Building/*/*/*:0620 Fee Sum Rpt pDox
// if (matches(appTypeArray[1],'Residential','Commercial') && appTypeArray[2] != 'Quick Turn' && wfTask == 'Quality Check' && wfStatus == 'Ready to Issue' && AInfo['ProjectDox Email Number'] != 'null') {
// 	var myHashMap = aa.util.newHashMap();
// 	myHashMap.put('altID',capIDString);
// 	sendEmailwAttchmnt('autosender@leoncountyfl.gov',AInfo['ProjectDox Email Number']+'@leoncountyfl.gov','','APPLICANT NOTIFICATION: The Review for '+capIDString+' is Approved','Permit Applicant,<br><br>Please contact Development Support and Environmental Management Intake Staff at (850) 606-1300 to schedule a time to pick up your permit. Any total fees due are detailed on the Attached report.<br><br>Please call me if you have any questions. Thank You.','Project Fee Summary',myHashMap);
// 	}

if (matches(appTypeArray[2], 'Quick Turn')) {
	var qtIntake;
	var qtBld;
	var qtBldE;
	var qtAddr;
	var qtLic;
	var qtQc;
	var qtFiscal;
	qtIntake = 'boggsk@leoncountyfl.gov,dunklinc@leoncountyfl.gov,jakese@leoncountyfl.gov,mooresh@leoncountyfl.gov,oneals@leoncountyfl.gov';
	qtBld = 'greenjo@leoncountyfl.gov,gunterl@leoncountyfl.gov,swainm@leoncountyfl.gov';
	qtBldE = 'gunterl@leoncountyfl.gov,greenjo@leoncountyfl.gov';
	qtLic = 'allend@leoncountyfl.gov,lowej@leoncountyfl.gov,johnsone@leoncountyfl.gov,wardd@leoncountyfl.gov';
	qtAddr = 'scottl@leoncountyfl.gov,harpth@leoncountyfl.gov,PritzlM@leoncountyfl.gov';
	qtFiscal = 'mooresh@leoncountyfl.gov,boggsk@leoncountyfl.gov';
	qtQc = 'dunklinc@leoncountyfl.gov,boggsk@leoncountyfl.gov';
}

if (matches(appTypeArray[2], 'Quick Turn') && wfTask == 'Application Submittal' && wfStatus == 'Accepted') {
	username = currentUserID;
	assignID = currentUserID;
	wfstr = ('Permit Issuance');
	assignTask(wfstr, username);
	assignCap(assignID);
	editAppSpecific('Assigned To', assignID);
}

if (matches(appTypeArray[2], 'Quick Turn') && wfTask == 'Application Submittal' && wfStatus == 'Accepted' && isTaskActive('Addressing Review')) {
	email(qtAddr, 'noreply@leoncountyfl.gov', 'Quick Turn Permit ' + capIDString + ' Addressing Review is Ready for action by you', 'The following permit, ' + capIDString + ' is ready for your review');
}

if (matches(appTypeArray[2], 'Quick Turn') && appTypeArray[3] != 'Electrical' && wfTask == 'Application Submittal' && wfStatus == 'Accepted' && isTaskActive('Building Plans Review')) {
	email(qtBld, 'noreply@leoncountyfl.gov', 'Quick Turn Permit ' + capIDString + ' Building Plans Review is Ready for action by you', 'The following permit, ' + capIDString + ' is ready for your review');
}

if (matches(appTypeArray[2], 'Quick Turn') && matches(appTypeArray[3], 'Electrical') && wfTask == 'Application Submittal' && wfStatus == 'Accepted' && isTaskActive('Building Plans Review')) {
	email(qtBldE, 'noreply@leoncountyfl.gov', 'Quick Turn Permit ' + capIDString + ' Building Plans Review is Ready for action by you', 'The following permit, ' + capIDString + ' is ready for your review');
}

if (matches(appTypeArray[2], 'Quick Turn') && wfTask == 'Application Submittal' && wfStatus == 'Accepted' && isTaskActive('Contractor License Review')) {
	email(qtLic, 'noreply@leoncountyfl.gov', 'Quick Turn Permit ' + capIDString + ' Contractor License Review is Ready for action by you', 'The following permit, ' + capIDString + ' is ready for your review');
}

if (matches(appTypeArray[2], 'Quick Turn') && taskStatus('Addressing Review') == 'Approved' && taskStatus('Building Plans Review') == 'Approved' && taskStatus('Contractor License Review') == 'Approved' && isTaskActive('Quality Check') && taskStatus('Quality Check') != 'Note') {
	email(qtQc, 'noreply@leoncountyfl.gov', 'Quick Turn Permit ' + capIDString + ' Quality Check Review is Ready for action by you', 'The following permit, ' + capIDString + ' is ready for your review');

	//start replaced branch: EMSE:AutoInvoiceBuildingFees
	{
		showMessage = true;
		feeItemArray = aa.fee.getFeeItems(capId, null, 'NEW').getOutput();
		if (feeItemArray) {
			for (FI in feeItemArray)
				//start replaced branch: EMSE:InvoiceTheFee
			{
				thisFeeCode = feeItemArray[FI].getFeeCod();
				thisFeeStatus = feeItemArray[FI].getFeeitemStatus();
				comment('Fee Code = ' + thisFeeCode);
				comment('Fee Status = ' + thisFeeStatus);
				if (thisFeeStatus == 'NEW') {
					invoiceFee(thisFeeCode, 'FINAL');
				}

			}
			//end replaced branch: EMSE:InvoiceTheFee;
		}

		childrenCapId = getChildren('*/*/*/*', capId);
		if (typeof(childrenCapId) == 'object') {
			for (eachchild in childrenCapId)
				invoiceCapFees(childrenCapId[eachchild]);
		}

	}
	//end replaced branch: EMSE:AutoInvoiceBuildingFees;
}

if (matches(appTypeArray[2], 'Quick Turn') && wfTask == 'Quality Check' && wfStatus == 'Ready to Issue') {

	//start replaced branch: EMSE:AutoInvoiceBuildingFees
	{
		showMessage = true;
		feeItemArray = aa.fee.getFeeItems(capId, null, 'NEW').getOutput();
		if (feeItemArray) {
			for (FI in feeItemArray)
				//start replaced branch: EMSE:InvoiceTheFee
			{
				thisFeeCode = feeItemArray[FI].getFeeCod();
				thisFeeStatus = feeItemArray[FI].getFeeitemStatus();
				comment('Fee Code = ' + thisFeeCode);
				comment('Fee Status = ' + thisFeeStatus);
				if (thisFeeStatus == 'NEW') {
					invoiceFee(thisFeeCode, 'FINAL');
				}

			}
			//end replaced branch: EMSE:InvoiceTheFee;
		}

		childrenCapId = getChildren('*/*/*/*', capId);
		if (typeof(childrenCapId) == 'object') {
			for (eachchild in childrenCapId)
				invoiceCapFees(childrenCapId[eachchild]);
		}

	}
	//end replaced branch: EMSE:AutoInvoiceBuildingFees;
}

if (matches(appTypeArray[2], 'Quick Turn') && wfTask == 'Quality Check' && wfStatus == 'Ready to Issue' && isTaskActive('Payment')) {
	email(qtFiscal, 'noreply@leoncountyfl.gov', 'Quick Turn Permit ' + capIDString + ' Fiscal Processing is Ready for action by you', 'The following permit, ' + capIDString + ' is ready for your review');
}

if (matches(appTypeArray[2], 'Quick Turn') && wfTask == 'Quality Check' && wfStatus == 'Ready to Issue') {
	capContactResult = aa.people.getCapContactByCapID(capId);
	conArray = capContactResult.getOutput();
	for (y in conArray)
		//start replaced branch: EMSE:EmailRptApplicant
	{
		conType = conArray[y].getPeople().contactType;
		emailAddr = conArray[y].getPeople().email;
		// DISABLED: EMSE:EmailRptApplicant:02 Old Text
		// if (emailAddr != undefined && conType =='Applicant') {
		// 	var myHashMap = aa.util.newHashMap();
		// 	myHashMap.put('altID',capIDString);
		// 	sendEmailwAttchmnt('autosender@leoncountyfl.gov',emailAddr,'','APPLICANT NOTIFICATION: The Review for '+capIDString+' is Approved','Permit Applicant,<br><br>Please contact Development Support and Environmental Management Intake Staff at (850) 606-1300 to schedule a time to pick up your permit. Any total fees due are detailed on the Attached report.<br><br>Please call if you have any questions. Thank You.','Project Fee Summary',myHashMap);
		// 	comment('Email Address is : '+emailAddr);
		// 	}

		if (emailAddr != undefined && conType == 'Applicant') {
			var myHashMap = aa.util.newHashMap();
			myHashMap.put('altID', capIDString);
			sendEmailwAttchmnt('autosender@leoncountyfl.gov', emailAddr, '', 'APPLICANT NOTIFICATION: The Review for ' + capIDString + ' is Approved', 'Permit Applicant,<br><br>Your permit is ready for pick up and we are located at 435 N. Macomb St 2nd floor. Any total fees due are detailed on the Attached report.<br><br>Please call if you have any questions. Thank You.', 'Project Fee Summary', myHashMap);
			comment('Email Address is : ' + emailAddr);
		}

	}
	//end replaced branch: EMSE:EmailRptApplicant;
}

if (matches(appTypeArray[2], 'Quick Turn') && wfTask == 'Payment' && matches(wfStatus, 'Payment Processed', 'No Fees Due') && isTaskActive('Permit Issuance')) {
	email(AInfo['Assigned To'] + '@leoncountyfl.gov', 'noreply@leoncountyfl.gov', 'Quick Turn Permit ' + capIDString + ' Permit Issuance Task is Ready for action by you', 'The following permit, ' + capIDString + ' is ready for your review');
}

if (matches(appTypeArray[1], 'Residential', 'Commercial') && !matches(appTypeArray[2], 'Quick Turn') && isTaskActive('Contractor License Review') == 'True' && (isTaskActive('Fire Plans Review') == 'True' || isTaskActive('Driveway Review') == 'True' || isTaskActive('Septic Sewer') == 'True' || isTaskActive('Building Plans Review') == 'True' || isTaskActive('Environmental Inspection Review') == 'True')) {
	setTask('Contractor License Review', 'N', 'N');
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(appTypeArray[1], 'Residential', 'Commercial', 'VelocityHall') && AInfo['Gas Issuance'] == 'CHECKED') {
	capAltId = capId.getCustomID();
	addr = getCapAddress(capId);
	var par = aa.parcel.getParcelandAttribute(capId, null);
	var lpa;
	var lpaPhone;
	var lpaName;
	var lpg;
	var lpgName;
	var lpgPhone;
	var lpp;
	var lppName;
	var lppPhone;
	var gasEmailCon;
	var LPInfo;
	var gasEmailSal;
	var today = new Date();
	today = Date(aa.date.currentDate);
	var aName;
	var aPh;
	var ownerInfo;
	var gasEmailConA;
	var gasEmailConG;
	var gasEmailConP;
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(appTypeArray[1], 'Residential', 'Commercial', 'VelocityHall') && AInfo['Gas Issuance'] == 'CHECKED' && par.getSuccess()) {
	parcels = par.getOutput().toArray();
	for (x in parcels)
		pid = parcels[x].getParcelNumber();
	logDebug(pid);
	lpa = getLicenseProfessional(capId);
	for (x in lpa)
		if (lpa[x].getLicenseType().substring(0, 10) == 'Contractor' && lpa[x].getPrintFlag() == 'Y')
			lpaName = lpa[x].getBusinessName();
	lpa = getLicenseProfessional(capId);
	for (x in lpa)
		if (lpa[x].getLicenseType().substring(0, 10) == 'Contractor' && lpa[x].getPrintFlag() == 'Y')
			lpaPhone = lpa[x].getPhone1();
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(appTypeArray[1], 'Residential', 'Commercial', 'VelocityHall') && AInfo['Gas Issuance'] == 'CHECKED') {
	lpg = getLicenseProfessional(capId);
	for (x in lpg)
		if (lpg[x].getLicenseType().substring(0, 16) == 'Contractor - Gas')
			lpgName = lpg[x].getBusinessName();
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(appTypeArray[1], 'Residential', 'Commercial', 'VelocityHall') && AInfo['Gas Issuance'] == 'CHECKED') {
	lpg = getLicenseProfessional(capId);
	for (x in lpg)
		if (lpg[x].getLicenseType().substring(0, 16) == 'Contractor - Gas')
			lpgPhone = lpg[x].getPhone1();
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(appTypeArray[1], 'Residential', 'Commercial', 'VelocityHall') && AInfo['Gas Issuance'] == 'CHECKED') {
	lpp = getLicenseProfessional(capId);
	for (x in lpp)
		if (lpp[x].getLicenseType().substring(0, 16) == 'Contractor - Plu')
			lppName = lpp[x].getBusinessName();
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(appTypeArray[1], 'Residential', 'Commercial', 'VelocityHall') && AInfo['Gas Issuance'] == 'CHECKED') {
	lpp = getLicenseProfessional(capId);
	for (x in lpp)
		if (lpp[x].getLicenseType().substring(0, 16) == 'Contractor - Plu')
			lppPhone = lpp[x].getPhone1();
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(appTypeArray[1], 'Residential', 'Commercial', 'VelocityHall') && AInfo['Gas Issuance'] == 'CHECKED') {
	gasEmailConA = 'Contractors listed on Permit and Phone Number<br>Primary Contractor ' + lpaName + ' Phone Number ' + lpaPhone + '<br>';
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(appTypeArray[1], 'Residential', 'Commercial', 'VelocityHall') && AInfo['Gas Issuance'] == 'CHECKED') {
	gasEmailConG = 'Gas Contractor ' + lpgName + ' Phone Number ' + lpgPhone + '<br>';
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(appTypeArray[1], 'Residential', 'Commercial', 'VelocityHall') && AInfo['Gas Issuance'] == 'CHECKED') {
	gasEmailConP = 'Plumbing Contractor ' + lppName + ' Phone Number ' + lppPhone + '<br><br>';
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(appTypeArray[1], 'Residential', 'Commercial', 'VelocityHall') && AInfo['Gas Issuance'] == 'CHECKED') {
	var gasEmailText = 'City of Tallahassee Gas Utilities,<br><br>This is to notify you that a ' + AInfo['Improvement Type'] + ' ' + AInfo['Class Type'] + ' building permit ' + capIDString + ' has been issued.  Gas service has been noted on this permit.  In addition to the base Gas Permit fees there may be other gas related items see listed below. <br><br>Gas Piping (Num of Outlets): ' + AInfo['Gas Piping (Num of Outlets)'] + '<br>Conversion Burner: ' + AInfo['Conversion Burner'] + '<br>Floor Furnace: ' + AInfo['Floor Furnace'] + '<br>Incinerator: ' + AInfo['Incinerator'] + '<br>Boiler: ' + AInfo['Boiler'] + '<br>Heating/AC Unit: ' + AInfo['Heating/AC Unit'] + '<br>Vented Wall Furnace: ' + AInfo['Vented Wall Furnace'] + '<br>Gas Water Heater: ' + AInfo['Gas Water Heater'] + '';
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(appTypeArray[1], 'Residential', 'Commercial', 'VelocityHall') && AInfo['Gas Issuance'] == 'CHECKED') {
	var gasEmailSubject = 'GAS UTILITY NOTIFICATION: Permit: ' + capIDString + ' Located at ' + addr + ' on Parcel ID: ' + pid + ' has been Issued';
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(appTypeArray[1], 'Residential', 'Commercial', 'VelocityHall') && AInfo['Gas Issuance'] == 'CHECKED') {
	var gasEmailSal = 'Please call Leon County Building Plans Review at (850) 606-1300 if you have any questions.<br><br>Thank You.';
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(appTypeArray[1], 'Residential', 'Commercial', 'VelocityHall') && AInfo['Gas Issuance'] == 'CHECKED') {
	var gasEmailTo = 'garrisong@leoncountyfl.gov,GasUtilityNotification@talgov.com';
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(appTypeArray[1], 'Residential', 'Commercial', 'VelocityHall') && AInfo['Gas Issuance'] == 'CHECKED' && wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	email(gasEmailTo, 'autosender@leoncountyfl.gov', gasEmailSubject, gasEmailText + '<br><br>' + gasEmailConA + gasEmailConG + gasEmailConP + '<br>' + gasEmailSal);
}

if (wfTask != 'Addressing Review' && isTaskActive('Addressing Review') && isTaskStatus('Addressing Review', 'Approved')) {
	setTask('Addressing Review', 'N', 'Y');
	//Added for Addressing Sewer Cases;
}

showMessage = false;
