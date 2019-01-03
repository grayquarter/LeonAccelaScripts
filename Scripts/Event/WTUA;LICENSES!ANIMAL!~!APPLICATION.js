
if (wfTask == 'License Issuance' && wfStatus == 'Issued') {

	//replaced branch(LIC Establish Links to Reference Contacts)
	establishLinksToRefContacts();
}

if (wfTask == 'License Issuance' && wfStatus == 'Issued') {
	//start replaced branch: LIC Issue Animal License
	{
		var licenseDuration = AInfo['License Duration'];
		var vaccExpirationDate = AInfo['Vaccination Expiration Date'];
		vaccinationExpirationDate = aa.util.parseDate(vaccExpirationDate);
		newLic = null;
		newLicId = null;
		newLicIdString = null;
		newLicenseType = 'Animal';
		monthsToInitialExpire = licenseDuration * 12;
		newLicId = createParent(appTypeArray[0], appTypeArray[1], appTypeArray[2], 'License', null);
		// create the license record;
		if (newLicId) {
			newLicIdString = newLicId.getCustomID();
			updateAppStatus('Active', 'Originally Issued', newLicId);
			editAppName(AInfo['Pet Name'], newLicId);
			var ignore = lookup('EMSE:ASI Copy Exceptions', 'License/*/*/*');
			var ignoreArr = new Array();
			if (ignore != null)
				ignoreArr = ignore.split('|');
			copyAppSpecific(newLicId, ignoreArr);
		}

		tmpNewDate = dateAddMonths(null, monthsToInitialExpire);
		tmpNewDateTodateAdd = dateAdd(tmpNewDate, 0);
		dateAdds = aa.util.parseDate(tmpNewDateTodateAdd + '');
		var temp = vaccinationExpirationDate.after(dateAdds) ? dateAdds : vaccinationExpirationDate;
		newTemp = aa.util.formatDate(temp, 'MM/dd/YYYY');
		if (newLicId) {
			thisLic = new licenseObject(newLicIdString, newLicId);
			thisLic.setExpiration(newTemp);
			thisLic.setStatus('Active');
		}

		if (newLicId) {
			changeCapContactTypes('Pet Owner', 'License Holder', newLicId);
		}

		if (newLicId) {
			copyOwner(capId, newLicId);
		}

		if (newLicId) {
			copyASITables(capId, newLicId);
		}

		// DISABLED: LIC Issue Animal License:50
		// if (newLicId) {
		// 	thisLic = new licenseObject(newLicIdString,newLicId);
		// 	thisLic.setExpiration(dateAdd(tmpNewDate,0));
		// 	thisLic.setStatus('Active');
		// 	}

		// DISABLED: LIC Issue Animal License:84
		// newLic = null;
		// newLicId = null;
		// newLicIdString = null;
		// newLicenseType = 'Animal';
		// monthsToInitialExpire = licenseDuration*12;
		// DISABLED: LIC Issue Animal License:85
		// tmpNewDate = dateAddMonths(null, monthsToInitialExpire);

	}
	//end replaced branch: LIC Issue Animal License;
}

// DISABLED: WTUA:Licenses/Animal/*/Application:03
// if (wfTask == 'License Issuance' && wfStatus == 'Issued') {
// 	br_nch('EMSE:LicProfLookup');
// 	}
