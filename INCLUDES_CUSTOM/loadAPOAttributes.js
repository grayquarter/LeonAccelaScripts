function loadAPOAttributes() {

	showMessage = true;
	showDebug = 1;
	var today = new Date();
	today = Date(aa.date.currentDate);
	var aName;
	var aPh;
	var lpaName;
	var lpaPhone;
	var ownerInfo;
	var feeTotal;
	var aName;
	var par = aa.parcel.getParcelandAttribute(capId, null);
	feeTotal = AInfo['Env After the Fact Fee'] + AInfo['Initial Fee'] + AInfo['Board Adjustment to Fees'] + (AInfo['Number of Days'] * AInfo['Per Day Fee']);
	if (par.getSuccess()) {
		parcels = par.getOutput().toArray();
		for (x in parcels)
			pid = parcels[x].getParcelNumber();
		logDebug(pid);
	}

	capAltId = capId.getCustomID();
	addr = getCapAddress(capId);
	BalanceDue = AInfo['Total Fees and Fines'];
	if (appTypeArray[1] == 'Code Complaint' && getAppSpecific('Complete') == null && getAppSpecific('FEE_INTITIAL - INITIAL FEE CHARGED') != null && getAppSpecific('Initial Fee') == null) {
		editAppSpecific('Initial Fee', AInfo['FEE_INTITIAL - INITIAL FEE CHARGED']);
	}

	if (appTypeArray[1] == 'Code Complaint' && getAppSpecific('Complete') == null && getAppSpecific('FEE_PERDAY - FEE AMOUNT PER DAY') != null && getAppSpecific('Per Day Fee') == null) {
		editAppSpecific('Per Day Fee', AInfo['FEE_PERDAY - FEE AMOUNT PER DAY']);
	}

	// DISABLED: EMSE: APO Load Attributes:00080 UpDate from PP Data Flds
	// if (appTypeArray[1] == 'Code Complaint' && AInfo['Total Fees and Fines']>= 1 && feeExists('8030-015','INVOICED') == false) {
	// 	removeFee('8030-015','FINAL');
	// 	addFee('8030-015','LEC_CASE','FINAL',getAppSpecific('Total Fees and Fines'),'N');
	// 	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Junk' && getAppSpecific('Complete') == null && (AInfo['ParcelAttribute.VIR_JUNK_CD_NUM'] == null || AInfo['ParcelAttribute.VIR_JUNK_CD_NUM'] == capIDString)) {
		editRefParcelAttribute('VIR_JUNK_CD_NUM', capIDString, pid);
		editRefParcelAttribute('VIR_Y/N_JUNK_CMP', 'Y', pid);
		editRefParcelAttribute('VIR_JUNK_CD_STAT', capStatus, pid);
		editRefParcelAttribute('VIR_JUNK_CD_BAL', AInfo['Total Fees and Fines'], pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Mowing' && getAppSpecific('Complete') == null && (AInfo['ParcelAttribute.VIR_MOW_CD_NUM'] == null || AInfo['ParcelAttribute.VIR_MOW_CD_NUM'] == capIDString)) {
		editRefParcelAttribute('VIR_MOW_CD_NUM', capIDString, pid);
		editRefParcelAttribute('VIR_Y/N_MOW_CMPT', 'Yes', pid);
		editRefParcelAttribute('VIR_MOW_CD_STAT', capStatus, pid);
		editRefParcelAttribute('VIR_MOW_CD_BAL', AInfo['Total Fees and Fines'], pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Abandoned Property Registry' && getAppSpecific('Complete') == null && (AInfo['ParcelAttribute.VIR_APR_CD_NUM'] == null || AInfo['ParcelAttribute.VIR_APR_CD_NUM'] == capIDString)) {
		editRefParcelAttribute('VIR_APR_CD_NUM', capIDString, pid);
		editRefParcelAttribute('VIR_Y/N_APR_CMPT', 'Yes', pid);
		editRefParcelAttribute('VIR_APR_CD_STAT', capStatus, pid);
		editRefParcelAttribute('VIR_APR_CD_BAL', AInfo['Total Fees and Fines'], pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Address Posting' && getAppSpecific('Complete') == null && (AInfo['ParcelAttribute.VIR_ADD_CD_NUM'] == null || AInfo['ParcelAttribute.VIR_ADD_CD_NUM'] == capIDString)) {
		editRefParcelAttribute('VIR_ADD_CD_NUM', capIDString, pid);
		editRefParcelAttribute('VIR_Y/N_ADD_CMPT', 'Yes', pid);
		editRefParcelAttribute('VIR_ADD_CD_STAT', capStatus, pid);
		editRefParcelAttribute('VIR_ADD_CD_BAL', AInfo['Total Fees and Fines'], pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Building Code' && getAppSpecific('Complete') == null && (AInfo['ParcelAttribute.VIR_BLD_CD_NUM'] == null || AInfo['ParcelAttribute.VIR_BLD_CD_NUM'] == capIDString)) {
		editRefParcelAttribute('VIR_BLD_CD_NUM', capIDString, pid);
		editRefParcelAttribute('VIR_Y/N_BLD_CMPT', 'Yes', pid);
		editRefParcelAttribute('VIR_BLD_CD_STAT', capStatus, pid);
		editRefParcelAttribute('VIR_BLD_CD_BAL', AInfo['Total Fees and Fines'], pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Environmental' && getAppSpecific('Complete') == null && (AInfo['ParcelAttribute.VIR_ENV_CD_NUM'] == null || AInfo['ParcelAttribute.VIR_ENV_CD_NUM'] == capIDString)) {
		editRefParcelAttribute('VIR_ENV_CD_NUM', capIDString, pid);
		editRefParcelAttribute('VIR_Y/N_ENV_CMPT', 'Yes', pid);
		editRefParcelAttribute('VIR_ENV_CD_STAT', capStatus, pid);
		editRefParcelAttribute('VIR_ENV_CD_BAL', AInfo['Total Fees and Fines'], pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Filthy Fluids' && getAppSpecific('Complete') == null && (AInfo['ParcelAttribute.VIR_FFL_CD_NUM'] == null || AInfo['ParcelAttribute.VIR_FFL_CD_NUM'] == capIDString)) {
		editRefParcelAttribute('VIR_FFL_CD_NUM', capIDString, pid);
		editRefParcelAttribute('VIR_Y/N_FFL_CMPT', 'Yes', pid);
		editRefParcelAttribute('VIR_FFL_CD_STAT', capStatus, pid);
		editRefParcelAttribute('VIR_FFL_CD_BAL', AInfo['Total Fees and Fines'], pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Fire Code' && getAppSpecific('Complete') == null && (AInfo['ParcelAttribute.VIR_FIRE_CD_NUM'] == null || AInfo['ParcelAttribute.VIR_FIRE_CD_NUM'] == capIDString)) {
		editRefParcelAttribute('VIR_FIRE_CD_NUM', capIDString, pid);
		editRefParcelAttribute('VIR_Y/N_FIRE_CMP', 'Yes', pid);
		editRefParcelAttribute('VIR_FIRE_CD_STAT', capStatus, pid);
		editRefParcelAttribute('VIR_FIRE_CD_BAL', AInfo['Total Fees and Fines'], pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Refueling Assistance' && getAppSpecific('Complete') == null && (AInfo['ParcelAttribute.VIR_RAP_CD_NUM'] == null || AInfo['ParcelAttribute.VIR_RAP_CD_NUM'] == capIDString)) {
		editRefParcelAttribute('VIR_RAP_CD_NUM', capIDString, pid);
		editRefParcelAttribute('VIR_Y/N_RAP_CMPT', 'Yes', pid);
		editRefParcelAttribute('VIR_RAP_CD_STAT', capStatus, pid);
		editRefParcelAttribute('VIR_RAP_CD_BAL', AInfo['Total Fees and Fines'], pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Zoning' && getAppSpecific('Complete') == null && (AInfo['ParcelAttribute.VIR_ZON_CD_NUM'] == null || AInfo['ParcelAttribute.VIR_ZON_CD_NUM'] == capIDString)) {
		editRefParcelAttribute('VIR_ZON_CD_NUM', capIDString, pid);
		editRefParcelAttribute('VIR_Y/N_ZON_CMPT', 'Y', pid);
		editRefParcelAttribute('VIR_ZON_CD_STAT', capStatus, pid);
		editRefParcelAttribute('VIR_ZON_CD_BAL', AInfo['Total Fees and Fines'], pid);
	}

	// DISABLED: EMSE: APO Load Attributes:00200 Post Sign Data to Parcel
	// if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Sign' && getAppSpecific('Complete') == null && (AInfo['ParcelAttribute.VIR_ZON_CD_NUM'] == null || AInfo['ParcelAttribute.VIR_ZON_CD_NUM'] == capIDString )) {
	// 	editRefParcelAttribute('VIR_ZON_CD_NUM', capIDString, pid);
	// 	editRefParcelAttribute('VIR_Y/N_ZON_CMPT', 'Y', pid);
	// 	editRefParcelAttribute('VIR_ZON_CD_STAT',capStatus , pid);
	// 	editRefParcelAttribute('VIR_ZON_CD_BAL',AInfo['Total Fees and Fines'] , pid);
	// 	}

	// DISABLED: EMSE: APO Load Attributes:00210 Post ROW Data to Parcel
	// if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Right of Way' && getAppSpecific('Complete') == null && (AInfo['ParcelAttribute.VIR_ZON_CD_NUM'] == null || AInfo['ParcelAttribute.VIR_ZON_CD_NUM'] == capIDString )) {
	// 	editRefParcelAttribute('VIR_ZON_CD_NUM', capIDString, pid);
	// 	editRefParcelAttribute('VIR_Y/N_ZON_CMPT', 'Y', pid);
	// 	editRefParcelAttribute('VIR_ZON_CD_STAT',capStatus , pid);
	// 	editRefParcelAttribute('VIR_ZON_CD_BAL',AInfo['Total Fees and Fines'] , pid);
	// 	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Zoning' && getAppSpecific('Complete') != null && (AInfo['ParcelAttribute.VIR_ZON_CD_NUM'] == capIDString || AInfo['ParcelAttribute.VIR_ZON_CD_NUM'] == null)) {
		editRefParcelAttribute('VIR_ZON_CD_NUM', null, pid);
		editRefParcelAttribute('VIR_Y/N_ZON_CMPT', null, pid);
		editRefParcelAttribute('VIR_ZON_CD_STAT', null, pid);
		editRefParcelAttribute('VIR_ZON_CD_BAL', null, pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Junk' && getAppSpecific('Complete') != null && AInfo['ParcelAttribute.VIR_JUNK_CD_NUM'] == capIDString) {
		editRefParcelAttribute('VIR_JUNK_CD_NUM', null, pid);
		editRefParcelAttribute('VIR_Y/N_JUNK_CMP', null, pid);
		editRefParcelAttribute('VIR_JUNK_CD_STAT', null, pid);
		editRefParcelAttribute('VIR_JUNK_CD_BAL', null, pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Address Posting' && getAppSpecific('Complete') != null && AInfo['ParcelAttribute.VIR_ADD_CD_NUM'] == capIDString) {
		editRefParcelAttribute('VIR_ADD_CD_NUM', null, pid);
		editRefParcelAttribute('VIR_Y/N_ADD_CMPT', null, pid);
		editRefParcelAttribute('VIR_ADD_CD_STAT', null, pid);
		editRefParcelAttribute('VIR_ADD_CD_BAL', null, pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Abandoned Property Registry' && getAppSpecific('Complete') != null && AInfo['ParcelAttribute.VIR_APR_CD_NUM'] == capIDString) {
		editRefParcelAttribute('VIR_APR_CD_NUM', null, pid);
		editRefParcelAttribute('VIR_Y/N_APR_CMPT', null, pid);
		editRefParcelAttribute('VIR_APR_CD_STAT', null, pid);
		editRefParcelAttribute('VIR_APR_CD_BAL', null, pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Building Code' && getAppSpecific('Complete') != null && AInfo['ParcelAttribute.VIR_BLD_CD_NUM'] == capIDString) {
		editRefParcelAttribute('VIR_BLD_CD_NUM', null, pid);
		editRefParcelAttribute('VIR_Y/N_BLD_CMPT', null, pid);
		editRefParcelAttribute('VIR_BLD_CD_STAT', null, pid);
		editRefParcelAttribute('VIR_BLD_CD_BAL', null, pid);

	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Environmental' && getAppSpecific('Complete') != null && AInfo['ParcelAttribute.VIR_ENV_CD_NUM'] == capIDString) {
		editRefParcelAttribute('VIR_ENV_CD_NUM', null, pid);
		editRefParcelAttribute('VIR_Y/N_ENV_CMPT', null, pid);
		editRefParcelAttribute('VIR_ENV_CD_STAT', null, pid);
		editRefParcelAttribute('VIR_ENV_CD_BAL', null, pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Filthy Fluids' && getAppSpecific('Complete') != null && AInfo['ParcelAttribute.VIR_FFL_CD_NUM'] == capIDString) {
		editRefParcelAttribute('VIR_FFL_CD_NUM', null, pid);
		editRefParcelAttribute('VIR_Y/N_FFL_CMPT', null, pid);
		editRefParcelAttribute('VIR_FFL_CD_STAT', null, pid);
		editRefParcelAttribute('VIR_FFL_CD_BAL', null, pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Mowing' && getAppSpecific('Complete') != null && AInfo['ParcelAttribute.VIR_MOW_CD_NUM'] == capIDString) {
		editRefParcelAttribute('VIR_MOW_CD_NUM', null, pid);
		editRefParcelAttribute('VIR_Y/N_MOW_CMPT', null, pid);
		editRefParcelAttribute('VIR_MOW_CD_STAT', null, pid);
		editRefParcelAttribute('VIR_MOW_CD_BAL', null, pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Fire Code' && getAppSpecific('Complete') != null && AInfo['ParcelAttribute.VIR_FIRE_CD_NUM'] == capIDString) {
		editRefParcelAttribute('VIR_FIRE_CD_NUM', null, pid);
		editRefParcelAttribute('VIR_Y/N_FIRE_CMP', null, pid);
		editRefParcelAttribute('VIR_FIRE_CD_STAT', null, pid);
		editRefParcelAttribute('VIR_FIRE_CD_BAL', null, pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Refueling Assistance' && getAppSpecific('Complete') != null && AInfo['ParcelAttribute.VIR_RAP_CD_NUM'] == capIDString) {
		editRefParcelAttribute('VIR_RAP_CD_NUM', null, pid);
		editRefParcelAttribute('VIR_Y/N_RAP_CMPT', null, pid);
		editRefParcelAttribute('VIR_RAP_CD_STAT', null, pid);
		editRefParcelAttribute('VIR_RAP_CD_BAL', null, pid);
	}

	// DISABLED: EMSE: APO Load Attributes:00330 Delete PID Data ROW Comp
	// if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Right of Way' && getAppSpecific('Complete') != null && AInfo['ParcelAttribute.VIR_MOW_CD_NUM'] == capIDString) {
	// 	editRefParcelAttribute('VIR_MOW_CD_NUM', null, pid);
	// 	editRefParcelAttribute('VIR_Y/N_MOW_CMPT', null, pid);
	// 	editRefParcelAttribute('VIR_MOW_CD_STAT',null, pid);
	// 	editRefParcelAttribute('VIR_MOW_CD_BAL',null, pid);
	// 	}

	// DISABLED: EMSE: APO Load Attributes:00340 Delete PID Data SIGN Comp
	// if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Code Complaint' && appTypeArray[2] == 'Sign' && getAppSpecific('Complete') != null && AInfo['ParcelAttribute.VIR_MOW_CD_NUM'] == capIDString) {
	// 	editRefParcelAttribute('VIR_MOW_CD_NUM', null, pid);
	// 	editRefParcelAttribute('VIR_Y/N_MOW_CMPT', null, pid);
	// 	editRefParcelAttribute('VIR_MOW_CD_STAT',null, pid);
	// 	editRefParcelAttribute('VIR_MOW_CD_BAL',null, pid);
	// 	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Abandoned Property Registry' && capStatus != 'Closed') {
		var lpaName;
		var myLicNum;
		lpa = getLicenseProfessional(capId);
		for (x in lpa)
			if (lpa[x].getLicenseType().substring(0, 16) == 'Mortgage Company' && lpa[x].getPrintFlag() == 'Y')
				lpaName = lpa[x].getBusinessName();
		myLicNum = lpa[x].getLicenseNbr();
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Abandoned Property Registry' && capStatus != 'Closed' && (AInfo['ParcelAttribute.VIR_APR_NUM'] == null || AInfo['ParcelAttribute.VIR_APR_NUM'] == capIDString)) {
		editRefParcelAttribute('VIR_APR_NUM', capIDString, pid);
		editRefParcelAttribute('VIR_APR_MC', lpaName, pid);
		editRefParcelAttribute('VIR_APR_STAT', capStatus, pid);
		editRefParcelAttribute('VIR_APR_LICNUM', myLicNum, pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Abandoned Property Registry' && capStatus == 'Closed' && (AInfo['ParcelAttribute.VIR_APR_NUM'] == null || AInfo['ParcelAttribute.VIR_APR_NUM'] == capIDString)) {
		editRefParcelAttribute('VIR_APR_NUM', null, pid);
		editRefParcelAttribute('VIR_APR_MC', null, pid);
		editRefParcelAttribute('VIR_APR_STAT', null, pid);
		editRefParcelAttribute('VIR_APR_LICNUM', null, pid);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Compliance Certificate' && AInfo['ParcelAttribute.VIR_BLD_CD_NUM'] == null) {
		editAppSpecific('Open Code Bld Balance', 0);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Compliance Certificate' && AInfo['ParcelAttribute.VIR_ENV_CD_NUM'] == null) {
		editAppSpecific('Open Code Env Balance', 0);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Compliance Certificate' && AInfo['ParcelAttribute.VIR_ZON_CD_NUM'] == null) {
		editAppSpecific('Open Code Zoning Balance', 0);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Compliance Certificate' && AInfo['ParcelAttribute.VIR_JUNK_CD_NUM'] == null) {
		editAppSpecific('Open Code Junk Balance', 0);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Compliance Certificate' && AInfo['ParcelAttribute.VIR_ADD_CD_NUM'] == null) {
		editAppSpecific('Open Code Addressing Balance', 0);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Compliance Certificate' && AInfo['ParcelAttribute.VIR_FIRE_CD_NUM'] == null) {
		editAppSpecific('Open Code Fire Balance', 0);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Compliance Certificate' && AInfo['ParcelAttribute.VIR_FFL_CD_NUM'] == null) {
		editAppSpecific('Open Code Filthy Fluids Balance', 0);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Compliance Certificate' && AInfo['ParcelAttribute.VIR_MOW_CD_NUM'] == null) {
		editAppSpecific('Open Code Mowing Balance', 0);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Compliance Certificate' && AInfo['ParcelAttribute.VIR_RAP_CD_NUM'] == null) {
		editAppSpecific('Open Code Refueling Assistance Program Balance', 0);
	}

	if (appTypeArray[0] == 'CodeCompliance' && appTypeArray[1] == 'Compliance Certificate' && AInfo['ParcelAttribute.VIR_APR_CD_NUM'] == null) {
		editAppSpecific('Open Code Abandoned Property Registry Balance', 0);
	}

}
