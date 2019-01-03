
pArr = new Array();
loadParcelAttributesFromValidated(ParcelValidatedNumber, pArr);
if (appTypeArray[1] |= 'Driveway Permit' && pArr['ParcelAttribute.PARCEL_CITY_CNTY'] == 'City') {
	showMessage = true;
	comment('<font color = red>You may not apply for permits on addresses located within the City limits. Please check your address or contact the City of Tallahassee to process a permit.</font>');
	cancel = true;
	}

// DISABLED: ASB:EnvManagement/*/*/*:0050
// if (appMatch('EnvManagement/Driveway Permit/*/NA') && String(pArr['ParcelAttribute.VIR_DW_ACCESS']).toUpperCase() != 'COUNTY') {
// 	showMessage = true;
// 	comment('<font color = red>Driveway access is not County. You may not apply for a Driveway Permit on this parcel.</font>');
// 	cancel = true;
// 	}

// DISABLED: ASB:EnvManagement/*/*/*:0060
// if (appMatch('EnvManagement/Driveway Permit/*/NA') && String(pArr['ParcelAttribute.VIR_DW_ACCESS']).toUpperCase() == 'COUNTY') {
// 	br_nch('ASB_Check_Driveway');
// 	}

// DISABLED: ASB:EnvManagement/*/*/*:0070
// if ((String(pArr['ParcelAttribute.PARCEL_CITY_CNTY']).toUpperCase() == 'CITY' && !appMatch('EnvManagement/Driveway Permit/*/NA')) || (String(pArr['ParcelAttribute.PARCEL_CITY_CNTY']).toUpperCase() == '' && !String(pArr['ParcelAttribute.PARCEL_CITY_CNTY']) == '2')) {
// 	showMessage = true;
// 	comment('<font color = red>You may not apply for permits on addresses located within a City.  Please check your address or contact the City in which your address is located.</font>');
// 	cancel = true;
// 	}

