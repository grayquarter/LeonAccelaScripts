function feesDevServices() {

	// DISABLED: EMSE:Fees-DevelopmentSvc:0005
	// showMessage = true;
	// showDebug = 1;
	if (appMatch('DevelopmentSvc/Concurrency/*/*')) {
		concurGroup1 = 0 * 1;
	}

	if (appMatch('DevelopmentSvc/Concurrency/*/*')) {
		removeFee('8040-010', 'FINAL');
		removeFee('8041-010', 'FINAL');
		removeFee('8040-015', 'FINAL');
		removeFee('8044-010', 'FINAL');
		removeFee('8046-010', 'FINAL');
	}

	if (appMatch('DevelopmentSvc/Concurrency/*/*') && feeExists('8040-010', 'INVOICED') == true) {
		concurGroup1 = concurGroup1 + (feeAmount('8040-010', 'INVOICED') * 1);
	}

	if (appMatch('DevelopmentSvc/Concurrency/*/*') && feeExists('8041-010', 'INVOICED') == true) {
		concurGroup1 = concurGroup1 + (feeAmount('8041-010', 'INVOICED') * 1);
	}

	if (appMatch('DevelopmentSvc/Concurrency/*/*') && getAppSpecific('Number Residential Dwelling Units') > 0 && feeExists('8040-010', 'INVOICED') == false) {
		removeFee('8040-010', 'FINAL');
		addFee('8040-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Number Residential Dwelling Units'), 'N');
	}

	if (appMatch('DevelopmentSvc/Concurrency/*/*') && getAppSpecific('Commercial Sq Footage') > 0 && feeExists('8041-010', 'INVOICED') == false) {
		removeFee('8041-010', 'FINAL');
		addFee('8041-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Commercial Sq Footage'), 'N');
	}

	if (appMatch('DevelopmentSvc/Concurrency/*/*') && getAppSpecific('Other Fee Amount') > 0 && feeExists('8040-015', 'INVOICED') == false) {
		removeFee('8040-015', 'FINAL');
		addFee('8040-015', 'DEVELOPMENT', 'FINAL', getAppSpecific('Other Fee Amount'), 'N');
	}

	if (appMatch('DevelopmentSvc/Concurrency/*/*') && getAppSpecific('Extension of Concurrency Certif 2yrs') > 0 && feeExists('8044-010', 'INVOICED') == false) {
		removeFee('8044-010', 'FINAL');
		addFee('8044-010', 'DEVELOPMENT', 'FINAL', concurGroup1 * getAppSpecific('Extension of Concurrency Certif 2yrs'), 'N');
	}

	if (appMatch('DevelopmentSvc/Concurrency/*/*') && getAppSpecific('Revision of Apv Concurrency Certif') > 0 && feeExists('8046-010', 'INVOICED') == false) {
		removeFee('8046-010', 'FINAL');
		addFee('8046-010', 'DEVELOPMENT', 'FINAL', concurGroup1 * getAppSpecific('Revision of Apv Concurrency Certif'), 'N');
	}

	devrGroup1 = 0 * 1;
	dnGroup1 = 0 * 1;
	dnGroup2 = 0 * 1;
	dnGroup3 = 0 * 1;
	if (appMatch('DevelopmentSvc/Land Development Review/*/*')) {
		removeFee('8065-010', 'FINAL');
		removeFee('8061-010', 'FINAL');
		removeFee('8069-010', 'FINAL');
		removeFee('8057-010', 'FINAL');
		removeFee('8058-010', 'FINAL');
		removeFee('8059-010', 'FINAL');
		removeFee('8064-010', 'FINAL');
		removeFee('8062-010', 'FINAL');
		removeFee('8100-010', 'FINAL');
		removeFee('8100-015', 'FINAL');
		removeFee('8095-010', 'FINAL');
		removeFee('8096-010', 'FINAL');
		removeFee('8060-010', 'FINAL');
		removeFee('8060-015', 'FINAL');
		removeFee('8064-010', 'FINAL');
		removeFee('8042-010', 'FINAL');
		removeFee('8056-010', 'FINAL');
		removeFee('8063-010', 'FINAL');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/Project Status Determination/*') && getAppSpecific('Project Status Site Built') == 'CHECKED' && feeExists('8060-010', 'INVOICED') == false) {
		removeFee('8060-010', 'FINAL');
		addFee('8060-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/*/*') && getAppSpecific('Project Status Other') == 'CHECKED' && feeExists('8061-010', 'INVOICED') == false) {
		removeFee('8061-010', 'FINAL');
		addFee('8061-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/Land Use Determination/*') && getAppSpecific('Land Use Determination') == 'CHECKED' && feeExists('8065-010', 'INVOICED') == false) {
		removeFee('8065-010', 'FINAL');
		addFee('8065-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Address or Street Name Change/Street Renaming/*') && getAppSpecific('Street Name Change') == 'CHECKED' && feeExists('8095-010', 'INVOICED') == false) {
		removeFee('8095-010', 'FINAL');
		addFee('8095-010', 'DEVELOPMENT', 'FINAL', 1, 'Y');
		dnGroup1 = dnGroup1 + 1;
	}

	if (appMatch('DevelopmentSvc/Address or Street Name Change/Address Assignment/*') && getAppSpecific('Address Only') == 'CHECKED' && feeExists('8096-010', 'INVOICED') == false) {
		removeFee('8096-010', 'FINAL');
		addFee('8096-010', 'DEVELOPMENT', 'FINAL', 1, 'Y');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/BOAA/*') && getAppSpecific('Board of Adjustment and Appeals Variance Request') == 'CHECKED' && feeExists('8062-010', 'INVOICED') == false) {
		removeFee('8062-010', 'FINAL');
		addFee('8062-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
		dnGroup1 = dnGroup1 + 1;
	}

	if (appTypeArray[2] == 'Alcoholic Beverage Lic Rev' && getAppSpecific('Alcoholic Beverage License Review') == 'CHECKED' && feeExists('8069-010', 'INVOICED') == false) {
		removeFee('8069-010', 'FINAL');
		addFee('8069-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/*/*') && getAppSpecific('Temp Sign Application/Review') == 'CHECKED' && feeExists('8056-010', 'INVOICED') == false) {
		removeFee('8056-010', 'FINAL');
		addFee('8056-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/*/*') && getAppSpecific('Other Sign Permit Compliance Review') == 'CHECKED' && feeExists('8057-010', 'INVOICED') == false) {
		removeFee('8057-010', 'FINAL');
		addFee('8057-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/*/*') && getAppSpecific('Temporary Use Site Plan Review') == 'CHECKED' && feeExists('8058-010', 'INVOICED') == false) {
		removeFee('8058-010', 'FINAL');
		addFee('8058-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/Annexation or De-Annexation/*') && getAppSpecific('Annexation/De-annexation Review') == 'CHECKED' && feeExists('8059-010', 'INVOICED') == false) {
		removeFee('8059-010', 'FINAL');
		addFee('8059-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/*/*') && getAppSpecific('Other Jurisdiction Comp Plan Amendment Review') == 'CHECKED' && feeExists('8064-010', 'INVOICED') == false) {
		removeFee('8064-010', 'FINAL');
		addFee('8064-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/*/*') && getAppSpecific('Other Jurisdiction Concurrency Application Review') == 'CHECKED' && feeExists('8042-010', 'INVOICED') == false) {
		removeFee('8042-010', 'FINAL');
		addFee('8042-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/*/*') && getAppSpecific('Other Fee') > 0 && feeExists('8060-015', 'INVOICED') == false) {
		removeFee('8060-015', 'FINAL');
		addFee('8060-015', 'DEVELOPMENT', 'FINAL', getAppSpecific('Other Fee'), 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/*/*') && dnGroup1 >= 1 && feeExists('8100-010', 'INVOICED') == false || appMatch('DevelopmentSvc/Address-Street Name Change/*/*') && dnGroup1 >= 1 && feeExists('8100-010', 'INVOICED') == false) {
		removeFee('8100-010', 'FINAL');
		addFee('8100-010', 'DEVELOPMENT', 'FINAL', dnGroup1, 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/*/*') && dnGroup2 >= 1 && feeExists('8100-015', 'INVOICED') == false) {
		removeFee('8100-015', 'FINAL');
		addFee('8100-015', 'DEVELOPMENT', 'FINAL', dnGroup2, 'N');
	}

	if (appMatch('DevelopmentSvc/Exempt Subdivision/*/*')) {
		removeFee('7080-010', 'FINAL');
		removeFee('8081-010', 'FINAL');
		removeFee('8079-010', 'FINAL');
		removeFee('8071-010', 'FINAL');
		removeFee('8072-010', 'FINAL');
		removeFee('8073-010', 'FINAL');
		removeFee('8074-010', 'FINAL');
		removeFee('8076-010', 'FINAL');
		removeFee('8077-010', 'FINAL');
		removeFee('8078-010', 'FINAL');
		removeFee('8092-010', 'FINAL');
	}

	// DISABLED: EMSE:Fees-DevelopmentSvc:0320  NFI w/219 Fee
	// if (appMatch('DevelopmentSvc/Exempt Subdivision/*/*') && getAppSpecific('NFI Required') == 'CHECKED' && feeExists('7080-010','INVOICED') == false) {
	// 	removeFee('7080-010','FINAL');
	// 	addFee('7080-010','DEVELOPMENT','FINAL',1,'N');
	// 	}

	if (appMatch('DevelopmentSvc/Exempt Subdivision/*/*') && getAppSpecific('Policy 2.1.9 Review') == 'CHECKED' && feeExists('8081-010', 'INVOICED') == false) {
		removeFee('8081-010', 'FINAL');
		addFee('8081-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Exempt Subdivision/*/*') && getAppSpecific('Judicial Exception') == 'CHECKED' && feeExists('8079-010', 'INVOICED') == false) {
		removeFee('8079-010', 'FINAL');
		addFee('8079-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Exempt Subdivision/*/*') && getAppSpecific('Boundary Settlement') == 'CHECKED' && feeExists('8071-010', 'INVOICED') == false) {
		removeFee('8071-010', 'FINAL');
		addFee('8071-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Exempt Subdivision/*/*') && getAppSpecific('Conveyance to Govt') == 'CHECKED' && feeExists('8072-010', 'INVOICED') == false) {
		removeFee('8072-010', 'FINAL');
		addFee('8072-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Exempt Subdivision/*/*') && getAppSpecific('Equal or Larger') == 'CHECKED' && feeExists('8073-010', 'INVOICED') == false) {
		removeFee('8073-010', 'FINAL');
		addFee('8073-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Exempt Subdivision/*/*') && getAppSpecific('Corrective Instrument') == 'CHECKED' && feeExists('8074-010', 'INVOICED') == false) {
		removeFee('8074-010', 'FINAL');
		addFee('8074-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Exempt Subdivision/*/*') && getAppSpecific('Affidavit for Additional Dwelling Unit') == 'CHECKED' && feeExists('8076-010', 'INVOICED') == false) {
		removeFee('8076-010', 'FINAL');
		addFee('8076-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Additional Dwelling Units'), 'N');
	}

	if (appMatch('DevelopmentSvc/Exempt Subdivision/*/*') && getAppSpecific('Letter of Exception') == 'CHECKED' && feeExists('8077-010', 'INVOICED') == false) {
		removeFee('8077-010', 'FINAL');
		addFee('8077-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Exempt Subdivision/*/*') && getAppSpecific('Unity of Title') == 'CHECKED' && feeExists('8078-010', 'INVOICED') == false) {
		removeFee('8078-010', 'FINAL');
		addFee('8078-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Exempt Subdivision/*/*') && getAppSpecific('Release Unity of Title') == 'CHECKED' && feeExists('8092-010', 'INVOICED') == false) {
		removeFee('8092-010', 'FINAL');
		addFee('8092-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	// DISABLED: EMSE:Fees-DevelopmentSvc:0450
	// updateRefParcelToCap     && feeExists('8203-010','INVOICED') == false;
	// DISABLED: EMSE:Fees-DevelopmentSvc:0460
	// editAppSpecific('Current Zoning','R1');
	if (appMatch('DevelopmentSvc/*/*/*')) {
		siteGroup1 = 0 * 1;
		typeACap1 = 0 * 1;
		typeBCap1 = 0 * 1;
		typeCCap1 = 0 * 1;
		typeDCap1 = 0 * 1;
		typeBothAll1 = 0 * 1;
		typeResAmt = 0 * 1;
		typeNResAmt = 0 * 1;
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*')) {
		removeFee('8089-010', 'FINAL');
		removeFee('8100-010', 'FINAL');
		removeFee('8100-015', 'FINAL');
		removeFee('8100-020', 'FINAL');
		removeFee('8102-010', 'FINAL');
		removeFee('8101-010', 'FINAL');
		removeFee('8102-010', 'FINAL');
		removeFee('8103-010', 'FINAL');
		removeFee('8104-010', 'FINAL');
		removeFee('8105-010', 'FINAL');
		removeFee('8106-010', 'FINAL');
		removeFee('8107-010', 'FINAL');
		removeFee('8111-010', 'FINAL');
		removeFee('8112-010', 'FINAL');
		removeFee('8082-010', 'FINAL');
		removeFee('8083-010', 'FINAL');
		removeFee('8086-010', 'FINAL');
		removeFee('8085-010', 'FINAL');
		removeFee('8084-010', 'FINAL');
		removeFee('8068-010', 'FINAL');
		removeFee('8100-025', 'FINAL');
		removeFee('8100-020', 'FINAL');
		removeFee('8120-010', 'FINAL');
		removeFee('8121-010', 'FINAL');
		removeFee('8122-010', 'FINAL');
		removeFee('8123-010', 'FINAL');
		removeFee('8124-010', 'FINAL');
		removeFee('8309-010', 'FINAL');
		removeFee('8310-010', 'FINAL');
		removeFee('8311-010', 'FINAL');
		removeFee('8312-010', 'FINAL');
		removeFee('8313-010', 'FINAL');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Units') > 0 && getAppSpecific('Square Feet') > 0 && getAppSpecific('Charge Fees') == 'CHECKED') {
		typeBothAll1 = typeBothAll1 + 1;
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/ASAP/*') && getAppSpecific('Square Feet') < 1) {
		editAppSpecific('Non-Residential Amount', 0);
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/ASAP/*') && getAppSpecific('Units') < 1) {
		editAppSpecific('Residential Amount', 0);
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/ASAP/*') && feeExists('8090-010', 'INVOICED') == false) {
		addFee('8089-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/FDPA - Type A/*') || appMatch('DevelopmentSvc/Site Plan Review/CPA - Type A/*')) {
		typeACap1 = typeACap1 + 1;
		editAppSpecific('Residential Amount', 0);
		editAppSpecific('Non-Residential Amount', 0);
	}

	if (typeACap1 > 0 && getAppSpecific('Units') > 0 && getAppSpecific('Charge Fees') == 'CHECKED') {
		editAppSpecific('Residential Amount', 4476 + (getAppSpecific('Units') * 96));
	}

	if (typeACap1 > 0 && getAppSpecific('Square Feet') > 0 && getAppSpecific('Charge Fees') == 'CHECKED') {
		editAppSpecific('Non-Residential Amount', 2436 + (getAppSpecific('Square Feet') * .85));
	}

	if (typeACap1 > 0) {
		editAppSpecific('Res-NRes Amount', (getAppSpecific('Residential Amount') * 1 + getAppSpecific('Non-Residential Amount') * 1));
	}

	if (typeACap1 > 0 && getAppSpecific('Res-NRes Amount') >= 6000 && typeBothAll1 > 0) {
		editAppSpecific('Residential Amount', 3900);
		editAppSpecific('Non-Residential Amount', 2100);
	}

	if (typeACap1 > 0 && getAppSpecific('Direct Legal Notice') == 'CHECKED' && feeExists('8100-015', 'INVOICED') == false) {
		addFee('8100-015', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (typeACap1 > 0 && getAppSpecific('Units') > 0 && getAppSpecific('Charge Fees') == 'CHECKED' && feeExists('8102-010', 'INVOICED') == false) {
		addFee('8102-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Residential Amount'), 'N');
	}

	if (typeACap1 > 0 && getAppSpecific('Square Feet') > 0 && getAppSpecific('Charge Fees') == 'CHECKED' && feeExists('8101-010', 'INVOICED') == false) {
		addFee('8101-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Non-Residential Amount'), 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/FDPA - Type B/*') || appMatch('DevelopmentSvc/Site Plan Review/CPA - Type B/*')) {
		typeBCap1 = typeBCap1 + 1;
		editAppSpecific('Residential Amount', 0);
		editAppSpecific('Non-Residential Amount', 0);
	}

	if (typeBCap1 > 0 && getAppSpecific('Units') > 0 && getAppSpecific('Charge Fees') == 'CHECKED') {
		editAppSpecific('Residential Amount', 6024 + (getAppSpecific('Units') * 78));
	}

	if (typeBCap1 > 0 && getAppSpecific('Square Feet') > 0 && getAppSpecific('Charge Fees') == 'CHECKED') {
		editAppSpecific('Non-Residential Amount', 3828 + (getAppSpecific('Square Feet') * .56));
	}

	if (typeBCap1 > 0) {
		editAppSpecific('Res-NRes Amount', (getAppSpecific('Residential Amount') * 1 + getAppSpecific('Non-Residential Amount') * 1));
	}

	if (typeBCap1 > 0 && getAppSpecific('Res-NRes Amount') >= 12000 && typeBothAll1 > 0) {
		editAppSpecific('Residential Amount', 7320);
		editAppSpecific('Non-Residential Amount', 4680);
	}

	if (typeBCap1 > 0 && getAppSpecific('Direct Legal Notice') == 'CHECKED' && feeExists('8100-025', 'INVOICED') == false) {
		addFee('8100-025', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (typeBCap1 > 0 && getAppSpecific('Units') > 0 && getAppSpecific('Charge Fees') == 'CHECKED' && feeExists('8104-010', 'INVOICED') == false) {
		addFee('8104-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Residential Amount'), 'N');
	}

	if (typeBCap1 > 0 && getAppSpecific('Square Feet') > 0 && getAppSpecific('Charge Fees') == 'CHECKED' && feeExists('8103-010', 'INVOICED') == false) {
		addFee('8103-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Non-Residential Amount'), 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/FDPA - Type C/*') || appMatch('DevelopmentSvc/Site Plan Review/CPA - Type C/*')) {
		typeCCap1 = typeCCap1 + 1;
		editAppSpecific('Residential Amount', 0);
		editAppSpecific('Non-Residential Amount', 0);
	}

	if (typeCCap1 > 0 && getAppSpecific('Units') > 0 && getAppSpecific('Charge Fees') == 'CHECKED') {
		editAppSpecific('Residential Amount', 4500 + (getAppSpecific('Units') * 48));
	}

	if (typeCCap1 > 0 && getAppSpecific('Square Feet') > 0 && getAppSpecific('Charge Fees') == 'CHECKED') {
		editAppSpecific('Non-Residential Amount', 3756 + (getAppSpecific('Square Feet') * .55));
	}

	if (typeCCap1 > 0) {
		editAppSpecific('Res-NRes Amount', (getAppSpecific('Residential Amount') * 1 + getAppSpecific('Non-Residential Amount') * 1));
	}

	if (typeCCap1 > 0 && getAppSpecific('Res-NRes Amount') >= 12000 && typeBothAll1 > 0) {
		editAppSpecific('Residential Amount', 6600);
		editAppSpecific('Non-Residential Amount', 5400);
	}

	if (typeCCap1 > 0 && getAppSpecific('Direct Legal Notice') == 'CHECKED' && feeExists('8100-020', 'INVOICED') == false) {
		addFee('8100-020', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (typeCCap1 > 0 && getAppSpecific('Units') > 0 && getAppSpecific('Charge Fees') == 'CHECKED' && feeExists('8106-010', 'INVOICED') == false) {
		addFee('8106-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Residential Amount'), 'N');
	}

	if (typeCCap1 > 0 && getAppSpecific('Square Feet') > 0 && getAppSpecific('Charge Fees') == 'CHECKED' && feeExists('8105-010', 'INVOICED') == false) {
		addFee('8105-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Non-Residential Amount'), 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Units') > 0 && getAppSpecific('Acreage') > 0 && getAppSpecific('Charge Fees') == 'CHECKED') {
		typeBothAll1 = typeBothAll1 + 1;
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/Type D/*')) {
		typeDCap1 = typeDCap1 + 1;
		editAppSpecific('Residential Amount', 0);
		editAppSpecific('Non-Residential Amount', 0);
	}

	if (typeDCap1 > 0 && getAppSpecific('Units') > 0 && getAppSpecific('Charge Fees') == 'CHECKED') {
		editAppSpecific('Residential Amount', 3000 + (getAppSpecific('Units') * 2));
	}

	if (typeDCap1 > 0 && getAppSpecific('Acreage') * 1 > 0 && getAppSpecific('Charge Fees') == 'CHECKED') {
		editAppSpecific('Non-Residential Amount', 3000 + (getAppSpecific('Acreage') * 12));
	}

	if (typeDCap1 > 0) {
		editAppSpecific('Res-NRes Amount', (getAppSpecific('Residential Amount') * 1 + getAppSpecific('Non-Residential Amount') * 1));
	}

	if (typeDCap1 > 0 && getAppSpecific('Res-NRes Amount') >= 6000 && typeBothAll1 > 0) {
		editAppSpecific('Residential Amount', 3000);
		editAppSpecific('Non-Residential Amount', 3000);
	}

	if (typeDCap1 > 0 && getAppSpecific('Direct Legal Notice') == 'CHECKED' && feeExists('8100-020', 'INVOICED') == false) {
		addFee('8100-020', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (typeDCap1 > 0 && getAppSpecific('Units') > 0 && getAppSpecific('Charge Fees') == 'CHECKED' && feeExists('8107-010', 'INVOICED') == false) {
		addFee('8107-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Residential Amount'), 'N');
	}

	if (typeDCap1 > 0 && getAppSpecific('Acreage') > 0 && getAppSpecific('Charge Fees') == 'CHECKED' && feeExists('8111-010', 'INVOICED') == false) {
		addFee('8111-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Non-Residential Amount'), 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Major Modification to Approved Site Development') == 'CHECKED' && feeExists('8083-010', 'INVOICED') == false) {
		addFee('8083-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Minor Modification to Approved Site Development') == 'CHECKED' && feeExists('8082-010', 'INVOICED') == false) {
		addFee('8082-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Parking Standards Committee Review') == 'CHECKED' && feeExists('8085-010', 'INVOICED') == false) {
		addFee('8085-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Request for Deviation From Development Standards') == 'CHECKED' && feeExists('8086-010', 'INVOICED') == false) {
		addFee('8086-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Site and Development Plan Approval Extention 3 Yrs') == 'CHECKED' && feeExists('8084-010', 'INVOICED') == false) {
		addFee('8084-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Additional (continued DRC Meeting)') > 0 && feeExists('8068-010', 'INVOICED') == false) {
		addFee('8068-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Additional (continued DRC Meeting)'), 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Fee in lieu of Sidwalks Comm District 1') > 0 && feeExists('8120-010', 'INVOICED') == false) {
		addFee('8120-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Fee in lieu of Sidwalks Comm District 1'), 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Fee in lieu of Sidwalks Comm District 2') > 0 && feeExists('8121-010', 'INVOICED') == false) {
		addFee('8121-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Fee in lieu of Sidwalks Comm District 2'), 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Fee in lieu of Sidwalks Comm District 3') > 0 && feeExists('8122-010', 'INVOICED') == false) {
		addFee('8122-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Fee in lieu of Sidwalks Comm District 3'), 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Fee in lieu of Sidwalks Comm District 4') > 0 && feeExists('8123-010', 'INVOICED') == false) {
		addFee('8123-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Fee in lieu of Sidwalks Comm District 4'), 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Fee in lieu of Sidwalks Comm District 5') > 0 && feeExists('8124-010', 'INVOICED') == false) {
		addFee('8124-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Fee in lieu of Sidwalks Comm District 5'), 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Transportation Fund District 1') > 0 && feeExists('8310-010', 'INVOICED') == false) {
		addFee('8310-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Transportation Fund District 1'), 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Transportation Fund District 2') > 0 && feeExists('8309-010', 'INVOICED') == false) {
		addFee('8309-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Transportation Fund District 2'), 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Transportation Fund District 3') && feeExists('8311-010', 'INVOICED') == false > 0) {
		addFee('8311-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Transportation Fund District 3'), 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Transportation Fund District 4') > 0 && feeExists('8312-010', 'INVOICED') == false) {
		addFee('8312-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Transportation Fund District 4'), 'N');
	}

	if (appMatch('DevelopmentSvc/Site Plan Review/*/*') && getAppSpecific('Transportation Fund District 5') > 0 && feeExists('8313-010', 'INVOICED') == false) {
		addFee('8313-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Transportation Fund District 5'), 'N');
	}

	if (appMatch('DevelopmentSvc/*/*/*')) {
		typePuvCap1 = 0 * 1;
		typeLozCap1 = 0 * 1;
		typePuvRCap1 = 0 * 1;
		typeRccCap1 = 0 * 1;
	}

	if (appMatch('DevelopmentSvc/Permitted Use Verification/*/*')) {
		removeFee('8090-010', 'FINAL');
		removeFee('8090-015', 'FINAL');
		removeFee('8090-020', 'FINAL');
		removeFee('8091-010', 'FINAL');
		removeFee('8203-010', 'FINAL');
	}

	if (appMatch('DevelopmentSvc/Permitted Use Verification/PUV/*') && getAppSpecific('Type') == 'PUV') {
		typePuvCap1 = typePuvCap1 + 1;
	}

	if (appMatch('DevelopmentSvc/Permitted Use Verification/PUV/*') && getAppSpecific('Type') == 'PUV-R') {
		typePuvRCap1 = typePuvRCap1 + 1;
	}

	if (appMatch('DevelopmentSvc/Permitted Use Verification/LOZ/*') && getAppSpecific('Type') == 'LOZ') {
		typeLozCap1 = typeLozCap1 + 1;
	}

	if (appMatch('DevelopmentSvc/Permitted Use Verification/RCC/*') && getAppSpecific('Type') == 'RCC') {
		typeRccCap1 = typeRccCap1 + 1;
	}

	if (typePuvCap1 > 0 && getAppSpecific('Change of Use') == 'CHECKED' && feeExists('8090-010', 'INVOICED') == false) {
		addFee('8090-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (typePuvCap1 > 0 && getAppSpecific('New Development') == 'CHECKED' && feeExists('8090-015', 'INVOICED') == false) {
		addFee('8090-015', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (typeRccCap1 > 0 && getAppSpecific('Residential Compliance Certificate') == 'CHECKED' && feeExists('8090-020', 'INVOICED') == false) {
		addFee('8090-020', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (typePuvRCap1 > 0 && getAppSpecific('Revision to PUV') > 0 && feeExists('8091-010', 'INVOICED') == false) {
		addFee('8091-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Revision to PUV'), 'N');
	}

	if (typeLozCap1 > 0 && getAppSpecific('Letter of Zoning Certification') == 'CHECKED' && feeExists('8203-010', 'INVOICED') == false) {
		addFee('8203-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Pre-Application*/*/*') || appMatch('DevelopmentSvc/Development/*/*') || appMatch('DevelopmentSvc/Off Site Sign/*/*')) {
		removeFee('8088-010', 'FINAL');
		removeFee('8400-010', 'FINAL');
		removeFee('8405-010', 'FINAL');
		removeFee('8410-010', 'FINAL');
		removeFee('8415-010', 'FINAL');
		removeFee('8420-010', 'FINAL');
		removeFee('8425-010', 'FINAL');
		removeFee('8195-010', 'FINAL');
		removeFee('8196-010', 'FINAL');
	}

	if (appMatch('DevelopmentSvc/Pre-Application*/*/*') && getAppSpecific('PreApp Fee') == 'CHECKED' && feeExists('8088-010', 'INVOICED') == false) {
		addFee('8088-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/Development Agreement/*') && getAppSpecific('Development Agreement') == 'CHECKED' && feeExists('8400-010', 'INVOICED') == false) {
		addFee('8400-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/Development Agreement/*') && getAppSpecific('Revision to Development Agreement') > 0 && feeExists('8405-010', 'INVOICED') == false) {
		addFee('8405-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Revision to Development Agreement'), 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/Regional Activity Center Desig/*') && getAppSpecific('Regional Activity Center Designation') == 'CHECKED' && feeExists('8410-010', 'INVOICED') == false) {
		addFee('8410-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/DRI Development Agreement/*') && getAppSpecific('DRI Application for Development Agreement ADA') == 'CHECKED' && feeExists('8415-010', 'INVOICED') == false) {
		addFee('8415-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/DRI Development Agreement/*') && getAppSpecific('DRI Substantial Deviation') > 0 && feeExists('8420-010', 'INVOICED') == false) {
		addFee('8420-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('DRI Substantial Deviation'), 'N');
	}

	if (appMatch('DevelopmentSvc/Land Development Review/DRI Development Agreement/*') && getAppSpecific('DRI Notice of Proposed Change with no substantial change') > 0 && feeExists('8425-010', 'INVOICED') == false) {
		addFee('8425-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('DRI Notice of Proposed Change with no substantial change'), 'N');
	}

	if (appMatch('DevelopmentSvc/Off Site Sign - Billboards/*/*') && getAppSpecific('Plan Review') == 'CHECKED' && feeExists('8195-010', 'INVOICED') == false) {
		addFee('8195-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Off Site Sign/*/*') && getAppSpecific('Modification to Apv Plan') > 0 && feeExists('8196-010', 'INVOICED') == false) {
		addFee('8196-010', 'DEVELOPMENT', 'FINAL', getAppSpecific('Modification to Apv Plan'), 'N');
	}

	// DISABLED: EMSE:Fees-DevelopmentSvc:1630 Misc Simplifile fee
	// if (appMatch('DevelopmentSvc/Miscellaneous/NA/NA') && getAppSpecific('Qty Simplifile Transactions') > 0  && feeExists('6200-010','INVOICED') == false) {
	// 	addFee('6200-010','DEVELOPMENT','FINAL',getAppSpecific('Qty Simplifile Transactions'),'N');
	// DISABLED: EMSE:Fees-DevelopmentSvc:1630001
	// 	addFee('6201-010','DEVELOPMENT','FINAL',getAppSpecific('Qty Simplifile Transactions'),'N');
	// 	}

	// DISABLED: EMSE:Fees-DevelopmentSvc:1630005
	// if (appMatch('DevelopmentSvc/Miscellaneous/NA/NA') && getAppSpecific('Related to Easement') == 'CHECKED && getAppSpecific('Qty Pages Recorded') >0 && feeExists('6203-010','INVOICED') == false) {
	// 	addFee('6203-010','DEVELOPMENT','FINAL',getAppSpecific('1'),'N');
	// 	}

	if (appMatch('DevelopmentSvc/Miscellaneous/NA/NA') && getAppSpecific('Notice of Intent Number of Petitioners') == 1 && feeExists('8063-010', 'INVOICED') == false) {
		removeFee('8063-010', 'FINAL');
		addFee('8063-010', 'DEVELOPMENT', 'FINAL', 90, 'N');
	}

	if (appMatch('DevelopmentSvc/Miscellaneous/NA/NA') && getAppSpecific('Notice of Intent Number of Petitioners') > 1 && feeExists('8063-010', 'INVOICED') == false) {
		removeFee('8063-010', 'FINAL');
		addFee('8063-010', 'DEVELOPMENT', 'FINAL', ((getAppSpecific('Notice of Intent Number of Petitioners') - 1) * 30) + 90, 'N');
	}

	if (appMatch('DevelopmentSvc/Miscellaneous/NA/NA') && (getAppSpecific('Notice of Intent Number of Petitioners') == 0 || getAppSpecific('Notice of Intent Number of Petitioners') == null) && feeExists('8063-010', 'INVOICED') == false) {
		removeFee('8063-010', 'FINAL');
	}

	// DISABLED: EMSE:Fees-DevelopmentSvc:1700
	// showMessage = true;
	// comment('<Font Color = red>accGroup1 Count = '+ accGroup1 +'</Font>');
	if (appMatch('DevelopmentSvc/Planning/Rezoning/NA')) {
		removeFee('8801-010', 'FINAL');
		removeFee('8801-015', 'FINAL');
	}

	if (appMatch('DevelopmentSvc/Planning/Rezoning/NA') && feeExists('8801-010', 'INVOICED') == false) {
		removeFee('8801-010', 'FINAL');
		addFee('8801-010', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Planning/Rezoning/NA') && feeExists('8801-010', 'INVOICED') == false && getAppSpecific('Waive Fee') == 'CHECKED') {
		removeFee('8801-010', 'FINAL');
		removeFee('8801-015', 'FINAL');
	}

	if (appMatch('DevelopmentSvc/Planning/Rezoning/NA') && feeExists('8801-015', 'INVOICED') == false && AInfo['Comp Plan Review Filed'] == 'CHECKED') {
		removeFee('8801-010', 'FINAL');
		removeFee('8801-015', 'FINAL');
		addFee('8801-015', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Planning/Comprehensive Plan/Map Amendment')) {
		removeFee('8801-020', 'FINAL');
		removeFee('8801-020', 'FINAL');
	}

	if (appMatch('DevelopmentSvc/Planning/Comprehensive Plan/Map Amendment') && feeExists('8801-020', 'INVOICED') == false) {
		removeFee('8801-020', 'FINAL');
		addFee('8801-020', 'DEVELOPMENT', 'FINAL', getAppSpecific('Acres'), 'N');
	}

	if (appMatch('DevelopmentSvc/Planning/Comprehensive Plan/Map Amendment') && feeExists('8801-020', 'INVOICED') == false && getAppSpecific('Waive Fee') == 'CHECKED') {
		removeFee('8801-010', 'FINAL');
		removeFee('8801-020', 'FINAL');
	}

	if (appMatch('DevelopmentSvc/Planning/Comprehensive Plan/Text Amendment')) {
		removeFee('8801-025', 'FINAL');
	}

	if (appMatch('DevelopmentSvc/Planning/Comprehensive Plan/Text Amendment') && feeExists('8801-025', 'INVOICED') == false) {
		removeFee('8801-025', 'FINAL');
		addFee('8801-025', 'DEVELOPMENT', 'FINAL', 1, 'N');
	}

	if (appMatch('DevelopmentSvc/Planning/Comprehensive Plan/Text Amendment') && feeExists('8801-025', 'INVOICED') == false && getAppSpecific('Waive Fee') == 'CHECKED') {
		removeFee('8801-025', 'FINAL');
	}

}
