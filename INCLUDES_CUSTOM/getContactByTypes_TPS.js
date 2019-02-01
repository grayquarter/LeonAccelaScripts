function getContactByTypes_TPS(conTypes, capId) {
	var conTypeArray = conTypes.split(",");
	var conTypesAll = conTypes.indexOf("ALL") >= 0 || conTypes.indexOf("All") >= 0 || conTypes.indexOf("all") >= 0;
	var conTypesPrimary = conTypes.indexOf("PRIMARY") >= 0 || conTypes.indexOf("Primary") >= 0 || conTypes.indexOf("primary") >= 0;
	// create an array of contact people
	var contactArray = getPeople(capId);
	// filter based on business rules in params
	var conArray = [];
	for (thisContact in contactArray) {
		var c = contactArray[thisContact];
		// if ((c.primary && conTypesPrimary) || conTypesAll || conTypeArray.indexOf(c.type) >= 0) sendContact = true;
		sendContact = false;
		if (conTypesAll || (conTypesPrimary && c.getPeople().getFlag() == "Y"))
			sendContact = true;
		else {
			for (ct in conTypeArray) {
				conType = conTypeArray[ct];
				if ((contactArray[thisContact].getPeople().contactType).toUpperCase() == conType.toUpperCase())
					sendContact = true;
			}
		}
		logDebug("Checking for contact types: " + conTypeArray.join(",") + " for " + (c.getPeople().getFlag() == "Y" ? "Primary" : "") + " " + c.getPeople().contactType + ": " + sendContact + " " + conTypesAll + " " + conTypesPrimary);
		if (sendContact) {
			logDebug("Including Contact[" + thisContact + "]: " + (c.getPeople().getFlag() == "Y" ? "Primary" : "") + " " + c.getPeople().contactType + " " + c.getPeople().getEmail());
			conArray.push(contactArray[thisContact].getPeople());
		}
	}

	return conArray;
}
