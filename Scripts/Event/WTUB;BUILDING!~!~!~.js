
// DISABLED: WTUB:Building/*/*/*:000005
// showMessage = true;
// showDebug = 1;
if (matches(appTypeArray[1],'Residential','Commercial') && wfTask == 'Inspections' && wfStatus == 'Final Inspection Complete' && matches(capStatus,'Issued','Issued Redacted','Certificate of Occupancy','Certificate of Completion','Certificate of Occupancy Redac','Certificate of Completion Reda','Finaled') && (AInfo['Environmental Management Do Not COFO'] == 'CHECKED' || AInfo['Building Plans Review Do Not COFO'] == 'CHECKED' || AInfo['Code Compliance-License Do Not COFO'] == 'CHECKED' || AInfo['Development Services Do Not COFO'] == 'CHECKED')) {
	cancel = true;
	// endBranch() disabled during script migration
	//endBranch();
	}

if (matches(appTypeArray[1],'Residential','Commercial') && wfTask == 'Permit Issuance' && wfStatus == 'Issued' && matches(capStatus, 'Approved Notified','Issued','Issued Redacted') && (AInfo['Environmental Management Do Not Issue'] == 'CHECKED' || AInfo['Building Plans Review Do Not Issue'] == 'CHECKED' || AInfo['Code Compliance-License Do Not Issue'] == 'CHECKED' || AInfo['Development Services Do Not Issue'] == 'CHECKED')) {
	cancel = true;
	// endBranch() disabled during script migration
	endBranch();
	}

// DISABLED: WTUB:Building/*/*/*:000040 Do Not issue with Balance
// if (matches(appTypeArray[1],'Residential','Commercial') && wfTask == 'Permit Issuance' && wfStatus == 'Issued' && balanceDue > 0) {
// 	showMessage = true;
// 	cancel = true;
// 	comment('Cannot issue this permit with a balance greater than zero');
// 	}

// DISABLED: WTUB:Building/*/*/*:000060 Lu
// if ((wfTask.equals('Contractor License Review') && wfStatus.equals('Approved'))) {
// 	var contChk = checkContractorsForIssuance();
// 	if (!contChk) cancel = true;
// 	}

// DISABLED: WTUB:Building/*/*/*:000080 This is active in test
// if (wfTask == 'Inspections' && wfStatus == 'Final Inspection Complete'  && (AInfo['Environmental Management Do Not COFO'] =='CHECKED' || AInfo['Development Services Do Not COFO'] =='CHECKED' || AInfo['Building Plans Review Do Not COFO'] =='CHECKED' || AInfo['Code Compliance-License Do Not COFO'] =='CHECKED')) {
// 	showMessage = true;
// 	cancel = true;
// 	comment('One or more divisions have restricted this permit from receiving a COFO or CC, see Conditions and ProjectData for more information');
// 	wfStatus == 'Note';
// 	updateTask('Inspections','Issued');
// 	}

