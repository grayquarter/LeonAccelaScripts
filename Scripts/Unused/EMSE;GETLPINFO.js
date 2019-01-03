
LPInfo = capLicArr[eachLP];
if (LPInfo !=null) {
	stateLicNbr=LPInfo['licenseNbr'];
	primStatus=LPInfo['printFlag'];
	}

comment('<Font Color = Red><Bold> State Lic # = '+ stateLicNbr + '</Font></Bold>');
// DISABLED: EMSE:GetLPInfo:10
// contrType = lookup('BLD_LUCON', stateLicNbr);
// DISABLED: EMSE:GetLPInfo:11
// if (contrType == null) {
// 	contNum1 = lookup('BLD_LUCON', stateLicNbr.substring(0,1));
// 	contNum2 = lookup('BLD_LUCON', stateLicNbr.substring(0,2));
// 	contNum3 = lookup('BLD_LUCON', stateLicNbr.substring(0,3));
// 	contNum4 = lookup('BLD_LUCON', stateLicNbr.substring(0,4));
// 	}

// DISABLED: EMSE:GetLPInfo:12
// if (contNum1 = 'C') {
// 	contrType = lookup('BLD_LUCON', stateLicNbr.substring(0,3));
// 	}

// DISABLED: EMSE:GetLPInfo:13
// if (contNum1 = 'D') {
// 	contrType = lookup('BLD_LUCON', stateLicNbr.substring(0,3));
// 	}

// DISABLED: EMSE:GetLPInfo:14
// if (contNum1 = 'E') {
// 	contrType = lookup('BLD_LUCON', stateLicNbr.substring(0,2));
// 	}

// DISABLED: EMSE:GetLPInfo:15
// if (contNum1 = 'G') {
// 	contrType = lookup('BLD_LUCON', stateLicNbr.substring(0,1));
// 	}

// DISABLED: EMSE:GetLPInfo:16
// if (contNum1 = 'I') {
// 	contrType = lookup('BLD_LUCON', stateLicNbr.substring(0,2));
// 	}

// DISABLED: EMSE:GetLPInfo:17
// if (contNum1 = 'L'  && contNum2 != 'LP') {
// 	contrType = lookup('BLD_LUCON', stateLicNbr.substring(0,4));
// 	}

// DISABLED: EMSE:GetLPInfo:18
// if (contNum2 == 'LP') {
// 	contrType = lookup('BLD_LUCON', stateLicNbr.substring(0,2));
// 	}

// DISABLED: EMSE:GetLPInfo:19
// if (contNum1 = 'R') {
// 	contrType = lookup('BLD_LUCON', stateLicNbr.substring(0,2));
// 	}

// DISABLED: EMSE:GetLPInfo:20
// if (contNum1 = 'S') {
// 	contrType = lookup('BLD_LUCON', stateLicNbr.substring(0,3));
// 	}

// DISABLED: EMSE:GetLPInfo:21
// if (appMatch('Building/Web/Door-Windows/NA') && contrType != 'GARAGE DOOR') {
// 	showMessage = true;
// 	comment('<Font Color = Red><Bold> Not Licensed for This Permit Type</Font></Bold>');
// 	cancel = true;
// 	}

// DISABLED: EMSE:GetLPInfo:22
// if (appMatch('Building/Web/Electrical/NA') && contrType != 'ELEC') {
// 	showMessage = true;
// 	comment('<Font Color = Red><Bold> Not Licensed for This Permit Type</Font></Bold>');
// 	cancel = true;
// 	}

// DISABLED: EMSE:GetLPInfo:23
// if (appMatch('Building/Web/Mechanical/NA') && contrType != 'MECH') {
// 	showMessage = true;
// 	comment('<Font Color = Red><Bold> Not Licensed for This Permit Type</Font></Bold>');
// 	cancel = true;
// 	}

// DISABLED: EMSE:GetLPInfo:24
// if (appMatch('Building/Web/Plumbing/NA') && contrType != 'PLM') {
// 	showMessage = true;
// 	comment('<Font Color = Red><Bold> Not Licensed for This Permit Type</Font></Bold>');
// 	cancel = true;
// 	}

// DISABLED: EMSE:GetLPInfo:25
// if (appMatch('Building/Web/Poo/\NA') && contrType != 'POOL') {
// 	showMessage = true;
// 	comment('<Font Color = Red><Bold> Not Licensed for This Permit Type</Font></Bold>');
// 	cancel = true;
// 	}

// DISABLED: EMSE:GetLPInfo:26
// if (appMatch('Building/Web/Roof/NA') && contrType != 'ROOF') {
// 	showMessage = true;
// 	comment('<Font Color = Red><Bold> Not Licensed for This Permit Type</Font></Bold>');
// 	cancel = true;
// 	}

// DISABLED: EMSE:GetLPInfo:27
// if (appMatch('Building/Web/Solor Photovoltaic/NA') && contrType != 'SOLAR') {
// 	showMessage = true;
// 	comment('<Font Color = Red><Bold> Not Licensed for This Permit Type</Font></Bold>');
// 	cancel = true;
// 	}

// DISABLED: EMSE:GetLPInfo:28
// if (appMatch('Building/Web/Solar Thermal Hot Water/NA') && contrType != 'PLM') {
// 	showMessage = true;
// 	comment('<Font Color = Red><Bold> Not Licensed for This Permit Type</Font></Bold>');
// 	cancel = true;
// 	}

// DISABLED: EMSE:GetLPInfo:29
// if (appMatch('Building/Web/Solar Swimming Pool/NA') && contrType !=  'PLM') {
// 	showMessage = true;
// 	comment('<Font Color = Red><Bold> Not Licensed for This Permit Type</Font></Bold>');
// 	cancel = true;
// 	}

// DISABLED: EMSE:GetLPInfo:30
// if (appMatch('Building/Web/Vinyl/NA') && contrType != 'VINYL') {
// 	showMessage = true;
// 	comment('<Font Color = Red><Bold> Not Licensed for This Permit Type</Font></Bold>');
// 	cancel = true;
// 	}

showMessage = true;
comment('<Font Color = Red><Bold> THIS MESSAGE SHOULD SHOW IN ACA</Font></Bold>');
cancel = true;

