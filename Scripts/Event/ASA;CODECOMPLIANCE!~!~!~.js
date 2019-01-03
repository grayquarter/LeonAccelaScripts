
//replaced branch(EMSE:Fees-CodeCompliance)
feesCodeCompliance();

if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint') {
	editAppSpecific('Violation Type', appTypeArray[2]);
}

if (matches(appTypeArray[1], 'Code Complaint', 'Abandoned Property Registry')) {
	editAppSpecific('Commission District', AInfo['ParcelAttribute.COMMISSION_DIST']);
}

if (matches(appTypeArray[1], 'Compliance Certificate')) {
	addFee('8160-010', 'CODE_COMPLIANCE', 'FINAL', 1, 'Y');
	//replaced branch(EMSE: APO Load Attributes)
	loadAPOAttributes();
}
