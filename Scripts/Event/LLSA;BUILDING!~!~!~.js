
if (matches(appTypeArray[1], 'Commercial', 'Residential', 'Quick Turn')) {
	for (i in licenseList)
		updateRefLPExpirationDates(licenseList[i].getStateLicense());
}

sendLPExpiredNotification(capId);
