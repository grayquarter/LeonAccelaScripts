
pArr = new Array();
loadParcelAttributesFromValidated(ParcelValidatedNumber, pArr);
if (pArr['ParcelAttribute.PARCEL_CITY_CNTY'] == 'City' || pArr['ParcelAttribute.T_R_A'] == '1' || pArr['ParcelAttribute.USE_CODE'] == 'IN') {
	showMessage = true;
	comment('<font color = red>You may not apply for permits on addresses located within the City limits. Please check your address or contact the City of Tallahassee to process a permit.</font>');
	cancel = true;
}
