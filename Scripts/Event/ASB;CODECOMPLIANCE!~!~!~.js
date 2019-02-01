
pArr = new Array();
// TODO: syntax error next line
loadParcelAttributesFromValidated(ParcelValidatedNumber, pArr;
	if (pArr['ParcelAttribute.PARCEL_CITY_CNTY'] == 'City') {
		showMessage = true;
		comment('<font color = red>You may not apply for permits on addresses located within the City limits. Please check your address or contact the City of Tallahassee to process a permit.</font>');
		cancel = true;
	}
