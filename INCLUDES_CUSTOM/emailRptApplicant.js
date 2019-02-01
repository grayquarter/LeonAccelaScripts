function emailRptApplicant()
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
