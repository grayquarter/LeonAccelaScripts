function getPrimaryLP(itemCap) {
	var capLicenseArr = getLicenseProfessional(itemCap);
	if (!capLicenseArr)
		return null;
	// Check License Professional
	for (capLic in capLicenseArr) {
		var lpLicState = null,
		lpLicExpDate = null,
		lpBusLicExpDate = null,
		lpInsExpDate = null,
		lpWCExpDate = null;
		var licProfScriptModel = capLicenseArr[capLic];
		if (licProfScriptModel.getAuditStatus() != "A")
			continue; // Inactive LP
		if (licProfScriptModel.getPrintFlag != "Y")
			continue; // Is Primary LP
		return licProfScriptModel.getEmail();
	}
	return false;
}
