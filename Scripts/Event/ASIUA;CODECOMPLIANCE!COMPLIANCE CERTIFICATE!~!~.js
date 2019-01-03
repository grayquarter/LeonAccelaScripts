
//replaced branch(EMSE: APO Load Attributes)
loadAPOAttributes();
if (AInfo['ParcelAttribute.VIR_BLD_CD_NUM'] != null && capStatus == 'Received') {
	editAppSpecific('Open Code Bld #', AInfo['ParcelAttribute.VIR_BLD_CD_NUM']);
	editAppSpecific('Open Code Bld Status', AInfo['ParcelAttribute.VIR_BLD_CD_STAT']);
	editAppSpecific('Open Code Bld Balance', AInfo['ParcelAttribute.VIR_BLD_CD_BAL']);
} else {
	editAppSpecific('Open Code Bld Balance', 0);
}

if (AInfo['ParcelAttribute.VIR_ENV_CD_NUM'] != null && capStatus == 'Received') {
	editAppSpecific('Open Code Env #', AInfo['ParcelAttribute.VIR_ENV_CD_NUM']);
	editAppSpecific('Open Code Env Status', AInfo['ParcelAttribute.VIR_ENV_CD_STAT']);
	editAppSpecific('Open Code Env Balance', AInfo['ParcelAttribute.VIR_ENV_CD_BAL']);
} else {
	editAppSpecific('Open Code Env Balance', 0);
}

if (AInfo['ParcelAttribute.VIR_ZON_CD_NUM'] != null && capStatus == 'Received') {
	editAppSpecific('Open Code Zoning #', AInfo['ParcelAttribute.VIR_ZON_CD_NUM']);
	editAppSpecific('Open Code Zoning Status', AInfo['ParcelAttribute.VIR_ZON_CD_STAT']);
	editAppSpecific('Open Code Zoning Balance', AInfo['ParcelAttribute.VIR_ZON_CD_BAL']);
} else {
	editAppSpecific('Open Code Zoning Balance', 0);
}

if (AInfo['ParcelAttribute.VIR_JUNK_CD_NUM'] != null && capStatus == 'Received') {
	editAppSpecific('Open Code Junk #', AInfo['ParcelAttribute.VIR_JUNK_CD_NUM']);
	editAppSpecific('Open Code Junk Status', AInfo['ParcelAttribute.VIR_JUNK_CD_STAT']);
	editAppSpecific('Open Code Junk Balance', AInfo['ParcelAttribute.VIR_JUNK_CD_BAL']);
} else {
	editAppSpecific('Open Code Junk Balance', 0);
}

if (AInfo['ParcelAttribute.VIR_ADD_CD_NUM'] != null && capStatus == 'Received') {
	editAppSpecific('Open Code Addressing #', AInfo['ParcelAttribute.VIR_ADD_CD_NUM']);
	editAppSpecific('Open Code Addressing Status', AInfo['ParcelAttribute.VIR_ADD_CD_STAT']);
	editAppSpecific('Open Code Addressing Balance', AInfo['ParcelAttribute.VIR_ADD_CD_BAL']);
} else {
	editAppSpecific('Open Code Addressing Balance', 0);
}

if (AInfo['ParcelAttribute.VIR_FIRE_CD_NUM'] != null && capStatus == 'Received') {
	editAppSpecific('Open Code Fire #', AInfo['ParcelAttribute.VIR_FIRE_CD_NUM']);
	editAppSpecific('Open Code Fire Status', AInfo['ParcelAttribute.VIR_FIRE_CD_STAT']);
	editAppSpecific('Open Code Fire Balance', AInfo['ParcelAttribute.VIR_FIRE_CD_BAL']);
} else {
	editAppSpecific('Open Code Fire Balance', 0);
}

if (AInfo['ParcelAttribute.VIR_FFL_CD_NUM'] != null && capStatus == 'Received') {
	editAppSpecific('Open Code Filthy Fluids #', AInfo['ParcelAttribute.VIR_FFL_CD_NUM']);
	editAppSpecific('Open Code Filthy Fluids Status', AInfo['ParcelAttribute.VIR_FFL_CD_STAT']);
	editAppSpecific('Open Code Filthy Fluids Balance', AInfo['ParcelAttribute.VIR_FFL_CD_BAL']);
} else {
	editAppSpecific('Open Code Filthy Fluids Balance', 0);
}

if (AInfo['ParcelAttribute.VIR_MOW_CD_NUM'] != null && capStatus == 'Received') {
	editAppSpecific('Open Code Mowing #', AInfo['ParcelAttribute.VIR_MOW_CD_NUM']);
	editAppSpecific('Open Code Mowing Status', AInfo['ParcelAttribute.VIR_MOW_CD_STAT']);
	editAppSpecific('Open Code Mowing Balance', AInfo['ParcelAttribute.VIR_MOW_CD_BAL']);
} else {
	editAppSpecific('Open Code Mowing Balance', 0);
}

if (AInfo['ParcelAttribute.VIR_RAP_CD_NUM'] != null && capStatus == 'Received') {
	editAppSpecific('Open Code Refueling Assistance Program #', AInfo['ParcelAttribute.VIR_RAP_CD_NUM']);
	editAppSpecific('Open Code Refueling Assistance Program Status', AInfo['ParcelAttribute.VIR_RAP_CD_STAT']);
	editAppSpecific('Open Code Refueling Assistance Program Balance', AInfo['ParcelAttribute.VIR_RAP_CD_BAL']);
} else {
	editAppSpecific('Open Code Refueling Assistance Program Balance', 0);
}

if (AInfo['ParcelAttribute.VIR_APR_CD_NUM'] != null && capStatus == 'Received') {
	editAppSpecific('Open Code Abandoned Property Registry #', AInfo['ParcelAttribute.VIR_APR_CD_NUM']);
	editAppSpecific('Open Code Abandoned Property Registry Status', AInfo['ParcelAttribute.VIR_APR_CD_STAT']);
	editAppSpecific('Open Code Abandoned Property Registry Balance', AInfo['ParcelAttribute.VIR_APR_CD_BAL']);
} else {
	editAppSpecific('Open Code Abandoned Property Registry Balance', 0);
}

var totalLCC;
totalLCC = 0 * 1;
var boac;
boac = 0 * 1;
if (AInfo['Open Code Bld #'] != null) {
	totalLCC = totalLCC + 1;
	boac = boac + (1 * AInfo['Open Code Bld Balance']);
}

if (AInfo['Open Code Env #'] != null) {
	totalLCC = totalLCC + 1;
	boac = boac + (1 * AInfo['Open Code Env Balance']);
}

if (AInfo['Open Code Zoning #'] != null) {
	totalLCC = totalLCC + 1;
	boac = boac + (1 * AInfo['Open Code Zoning Balance']);
}

if (AInfo['Open Code Junk #'] != null) {
	totalLCC = totalLCC + 1;
	boac = boac + (1 * AInfo['Open Code Junk Balance']);
}

if (AInfo['Open Code Addressing #'] != null) {
	totalLCC = totalLCC + 1;
	boac = boac + (1 * AInfo['Open Code Addressing Balance']);
}

if (AInfo['Open Code Fire #'] != null) {
	totalLCC = totalLCC + 1;
	boac = boac + (1 * AInfo['Open Code Fire Balance']);
}

if (AInfo['Open Code Filthy Fluids #'] != null) {
	totalLCC = totalLCC + 1;
	boac = boac + (1 * AInfo['Open Code Filthy Fluids Balance']);
}

if (AInfo['Open Code Mowing #'] != null) {
	totalLCC = totalLCC + 1;
	boac = boac + (1 * AInfo['Open Code Mowing Balance']);
}

if (AInfo['Open Code Refueling Assistance Program #'] != null) {
	totalLCC = totalLCC + 1;
	boac = boac + (1 * AInfo['Open Code Refueling Assistance Program Balance']);
}

if (AInfo['Open Code Abandoned Property Registry #'] != null) {
	totalLCC = totalLCC + 1;
	boac = boac + (1 * AInfo['Open Code Abandoned Property Registry Balance']);
}

totalLCC = editAppSpecific('Number of Cases', totalLCC);
editAppSpecific('Balance of All Cases', boac);
if (AInfo['ParcelAttribute.VIR_APR_NUM'] != null && capStatus == 'Received') {
	editAppSpecific('APR #', AInfo['ParcelAttribute.VIR_APR_NUM']);
	editAppSpecific('Mortgage Company', AInfo['ParcelAttribute.VIR_APR_MC']);
	editAppSpecific('APR Status', AInfo['ParcelAttribute.VIR_APR_STAT']);
}
