
isAppRenewal = false;
if (matches(appTypeArray[3], 'Application', 'Renewal')) {
	isAppRenewal = true;
}

if (isAppRenewal && publicUser) {
	//replaced branch(LIC Calculate Dog License Fees)
	calcDocLicenseFees();
}

if (matches(appTypeArray[3], 'Application') && !publicUser) {
	//replaced branch(LIC Calculate Dog License Fees)
	calcDocLicenseFees();
}

// DISABLED: ASA:Licenses/Animal/Dog/*:15
// if (isAppRenewal && matches(String(AInfo['Service Dog']),'Yes')) {
// 	addFee('LIC_095','LIC_PET_GENERAL','FINAL',1,'N');
// 	}

// DISABLED: ASA:Licenses/Animal/Dog/*:20
// if (isAppRenewal && matches(String(AInfo['Service Dog']),'No','null') && String(AInfo['License Duration'])==1 && matches(String(AInfo['Spayed/Neutered']),'Yes') && matches(String(AInfo['Senior Citizen']),'No','null')) {
// 	addFee('LIC_010','LIC_PET_GENERAL','FINAL',1,'N');
// 	}

// DISABLED: ASA:Licenses/Animal/Dog/*:25
// if (isAppRenewal && matches(String(AInfo['Service Dog']),'No','null') && String(AInfo['License Duration'])==2 && matches(String(AInfo['Spayed/Neutered']),'Yes') && matches(String(AInfo['Senior Citizen']),'No','null')) {
// 	addFee('LIC_015','LIC_PET_GENERAL','FINAL',1,'N');
// 	}

// DISABLED: ASA:Licenses/Animal/Dog/*:30
// if (isAppRenewal && matches(String(AInfo['Service Dog']),'No','null') && String(AInfo['License Duration'])==3 && matches(String(AInfo['Spayed/Neutered']),'Yes') && matches(String(AInfo['Senior Citizen']),'No','null')) {
// 	addFee('LIC_020','LIC_PET_GENERAL','FINAL',1,'N');
// 	}

// DISABLED: ASA:Licenses/Animal/Dog/*:35
// if (isAppRenewal && matches(String(AInfo['Service Dog']),'No','null') && String(AInfo['License Duration'])==1 && matches(String(AInfo['Spayed/Neutered']),'No', 'null') && matches(String(AInfo['Senior Citizen']),'No','null')) {
// 	addFee('LIC_025','LIC_PET_GENERAL','FINAL',1,'N');
// 	}

// DISABLED: ASA:Licenses/Animal/Dog/*:40
// if (isAppRenewal && matches(String(AInfo['Service Dog']),'No','null') && String(AInfo['License Duration'])==2 && matches(String(AInfo['Spayed/Neutered']),'No', 'null') && matches(String(AInfo['Senior Citizen']),'No','null')) {
// 	addFee('LIC_030','LIC_PET_GENERAL','FINAL',1,'N');
// 	}

// DISABLED: ASA:Licenses/Animal/Dog/*:45
// if (isAppRenewal && matches(String(AInfo['Service Dog']),'No','null') && String(AInfo['License Duration'])==3 && matches(String(AInfo['Spayed/Neutered']),'No', 'null') && matches(String(AInfo['Senior Citizen']),'No','null')) {
// 	addFee('LIC_035','LIC_PET_GENERAL','FINAL',1,'N');
// 	}

// DISABLED: ASA:Licenses/Animal/Dog/*:50
// if (isAppRenewal && matches(String(AInfo['Service Dog']),'No','null') && String(AInfo['License Duration'])==1 && matches(String(AInfo['Spayed/Neutered']),'Yes') && matches(String(AInfo['Senior Citizen']),'Yes')) {
// 	addFee('LIC_040','LIC_PET_GENERAL','FINAL',1,'N');
// 	}

// DISABLED: ASA:Licenses/Animal/Dog/*:55
// if (isAppRenewal && matches(String(AInfo['Service Dog']),'No','null') && String(AInfo['License Duration'])==2 && matches(String(AInfo['Spayed/Neutered']),'Yes') && matches(String(AInfo['Senior Citizen']),'Yes')) {
// 	addFee('LIC_045','LIC_PET_GENERAL','FINAL',1,'N');
// 	}

// DISABLED: ASA:Licenses/Animal/Dog/*:60
// if (isAppRenewal && matches(String(AInfo['Service Dog']),'No','null') && String(AInfo['License Duration'])==3 && matches(String(AInfo['Spayed/Neutered']),'Yes') && matches(String(AInfo['Senior Citizen']),'Yes')) {
// 	addFee('LIC_050','LIC_PET_GENERAL','FINAL',1,'N');
// 	}

// DISABLED: ASA:Licenses/Animal/Dog/*:65
// if (isAppRenewal && matches(String(AInfo['Service Dog']),'No','null') && String(AInfo['License Duration'])==1 && matches(String(AInfo['Spayed/Neutered']),'No', 'null') && matches(String(AInfo['Senior Citizen']),'Yes')) {
// 	addFee('LIC_055','LIC_PET_GENERAL','FINAL',1,'N');
// 	}

// DISABLED: ASA:Licenses/Animal/Dog/*:70
// if (isAppRenewal && matches(String(AInfo['Service Dog']),'No','null') && String(AInfo['License Duration'])==2 && matches(String(AInfo['Spayed/Neutered']),'No', 'null') && matches(String(AInfo['Senior Citizen']),'Yes')) {
// 	addFee('LIC_060','LIC_PET_GENERAL','FINAL',1,'N');
// 	}

// DISABLED: ASA:Licenses/Animal/Dog/*:75
// if (isAppRenewal && matches(String(AInfo['Service Dog']),'No','null') && String(AInfo['License Duration'])==3 && matches(String(AInfo['Spayed/Neutered']),'No', 'null') && matches(String(AInfo['Senior Citizen']),'Yes')) {
// 	addFee('LIC_065','LIC_PET_GENERAL','FINAL',1,'N');
// 	}
