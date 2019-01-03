function getLPParams4Notification_TPS(params) {
	// pass in a hashtable and it will add the additional parameters to the table
	// -- Allows for optional capId
    var itemCap = capId;
	if (arguments.length > 1 && arguments[1]) itemCap = arguments[1]; // Optional CapId

	// Get License Professional
	var lpName = "", lpPhone = "", lpEmail = "";
	lpa = getLicenseProfessional(itemCap);
	for (x in lpa) {
		if (lpa[x].getLicenseType().substring(0,10) == "Contractor") {
			lpName = lpa[x].getBusinessName();
			if (lpName == null) lpName = (lpa[x].getContactFirstName()? lpa[x].getContactFirstName()+" ":"") + (lpa[x].getContactLastName()? lpa[x].getContactLastName():"");
			lpPhone = lpa[x].getPhone1();
			lpEmail = lpa[x].getEmail();
			if (lpa[x].getPrintFlag() == "Y") break; // Use Primary if found.
		}
	}
	logDebug("Contractor: " + lpName + ", Phone: " +  lpPhone + ", Email: " +  lpEmail);
	addParameter(params, "$$lpName$$", lpName);
	addParameter(params, "$$lpPhone$$", lpPhone);
	addParameter(params, "$$lpEmail$$", lpEmail);

	return params;
}
 
