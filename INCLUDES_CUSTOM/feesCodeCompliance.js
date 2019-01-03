function feesCodeCompliance() {

	var today = new Date();
	today = Date(aa.date.currentDate);
	calcDays = 0 * 1;
	AInfo['Fine Calculation Date'] = today;
	totalFine = 0 * 1;
	// DISABLED: EMSE:Fees-CodeCompliance:0020 Calc Days Fine Running
	// if (appMatch('CodeCompliance/Code Complaint/*/*') && AInfo['Complete'] == null  && AInfo['capStatus'] == 'CEB LIEN' && AInfo['Start Date'] != null && AInfo['End Date'] == null) {
	// 	calcDays = (diffDate(AInfo['Start Date'],today));
	// 	}

	// DISABLED: EMSE:Fees-CodeCompliance:0030 Calc Days Fine Stopped
	// if (appMatch('CodeCompliance/Code Complaint/*/*') && AInfo['Complete'] == null  && AInfo['capStatus'] == 'CEB LIEN' && AInfo['Start Date'] != null && AInfo['End Date'] != null) {
	// 	calcDays = diffDate(AInfo['Start Date'],AInfo['End Date']);
	// 	}

	// DISABLED: EMSE:Fees-CodeCompliance:0040 Set totalFine
	// if (appMatch('CodeCompliance/Code Complaint/*/*') && AInfo['Complete'] == null  && AInfo['capStatus'] == 'CEB LIEN' && AInfo['Start Date'] != null && calcDays >= 1) {
	// 	totalFine = (((calcDays * AInfo['Per Day Fee']) + AInfo['Initial Fee']) - AInfo['Board Adjustment to Fees']);
	// 	AInfo['Total Fees and Fines']=totalFine;
	// 	}

	// DISABLED: EMSE:Fees-CodeCompliance:0050 Set Total Calc Fees Amt
	// if (appMatch('CodeCompliance/Code Complaint/*/*') && AInfo['Complete'] == null  && AInfo['capStatus'] == 'CEB LIEN' && feeExists('8030-015','INVOICED') == false) {
	// 	removeFee('8030-015','FINAL');
	// 	addFee('8030-015','LEC_CASE','FINAL',totalFine,'N');
	// 	}

	// DISABLED: EMSE:Fees-CodeCompliance:0070
	// if (appMatch('CodeCompliance/Code Complaint/*/*') && AInfo['Complete'] == null  && AInfo['capStatus'] == 'CEB LIEN' && AInfo['Start Date'] != null) {
	// 	AInfo['Total Fees and Fines'] = totalFine;
	// 	}

	// DISABLED: EMSE:Fees-CodeCompliance:0080
	// AInfo['Total Fees and Fines'] = totalFine;
	if (appMatch('CodeCompliance/Code Complaint/*/*') && AInfo['Complete'] == null && capStatus == 'CEB LIEN' && AInfo['Complete'] == null && feeExists('8030-005', 'INVOICED') == false) {
		removeFee('8030-005', 'FINAL');
		addFee('8030-005', 'LEC_CASE', 'FINAL', 1, 'N');
	}

	if (appMatch('CodeCompliance/Code Complaint/*/*') && AInfo['Complete'] == null && capStatus == 'CEB LIEN' && feeExists('8030-001', 'INVOICED') == false) {
		removeFee('8030-001', 'FINAL');
		addFee('8030-001', 'LEC_CASE', 'FINAL', 1, 'N');
	}

	if (appMatch('CodeCompliance/Code Complaint/*/*') && AInfo['Complete'] == null && capStatus == 'CEB LIEN' && AInfo['Env After the Fact Fee'] >= .01 && feeExists('7018-001', 'INVOICED') == false) {
		removeFee('7018-015', 'FINAL');
		addFee('7018-001', 'LEC_CASE', 'FINAL', 1, 'N');
	}
}
