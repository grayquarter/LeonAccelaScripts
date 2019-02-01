function licProfLookup() {

	logDebug('Using LICENSESTATE = ' + LICENSESTATE + ' from EMSE:GlobalFlags');
	//Issue State;
	LICENSETYPE = '';
	//License Type to be populated;
	licCapId = null;
	isNewLic = false;
	licIDString = null;
	licObj = null;
	licCap = null;

	//replaced branch(EMSE:LicProfLookup:getLicenses)
	licProfLookupGetLicense();
	//Get License CAP;
	if (licCapId != null) {

		//start replaced branch: EMSE:LicProfLookup:getLicenseType
		{
			if (licCapId != null) {
				licIDString = licCapId.getCustomID();
			}

			if (licCapId != null) {
				licCap = aa.cap.getCap(licCapId).getOutput();
				licCapType = licCap.getCapType().toString();
				licCapTypeArr = licCapType.split('/');
				licCapStatus = licCap.getCapStatus();
			}

			if (licCapId != null) {
				if (licCapTypeArr[1] == 'Contractor')
					LICENSETYPE = getAppSpecific('License Type', licCapId) + '';
			}

		}
		//end replaced branch: EMSE:LicProfLookup:getLicenseType;
		stateLicense = getAppSpecific('State License Number', licCapId);
	}

	licObj = licenseProfObject(stateLicense, LICENSETYPE);
	//Get LicArray;
	if (!licObj.valid && lookup('LICENSED PROFESSIONAL TYPE', LICENSETYPE) != null) {

		//start replaced branch: EMSE:LicProfLookup:CreateLP
		{
			var vNewLic = aa.licenseScript.createLicenseScriptModel();
			vNewLic.setAgencyCode(aa.getServiceProviderCode());
			vNewLic.setAuditDate(sysDate);
			vNewLic.setAuditID(currentUserID);
			vNewLic.setAuditStatus('A');
			vNewLic.setLicenseType(LICENSETYPE);
			vNewLic.setLicState(LICENSESTATE);
			vNewLic.setStateLicense(stateLicense);
			aa.licenseScript.createRefLicenseProf(vNewLic);
			var tmpLicObj = licenseProfObject(stateLicense, LICENSETYPE);
			if (tmpLicObj.valid) {
				isNewLic = true;
			}

			if (tmpLicObj.valid && licIDString) {
				associatedRefContactWithRefLicProf(licCapId, licObj.refLicModel.getLicSeqNbr(), aa.getServiceProviderCode(), currentUserID);
			}

			var mycap = aa.cap.getCap(capId).getOutput();
			if (tmpLicObj.valid && mycap.getCapModel().getCreatedByACA() == 'Y') {
				associatedLicensedProfessionalWithPublicUser(licObj.refLicModel.getLicSeqNbr(), mycap.getCapModel().getCreatedBy().toString());
			}

		}
		//end replaced branch: EMSE:LicProfLookup:CreateLP;
		licObj = licenseProfObject(stateLicense, LICENSETYPE);
	}

	if (licObj.valid) {

		//start replaced branch: EMSE:LicProfLookup:UpdateLP
		{

			//start replaced branch: EMSE:LicProfLookup:UpdateLP:BaseFields
			{
				licObj.refLicModel.setState(LICENSESTATE);
				licObj.refLicModel.setLicenseBoard(LICENSETYPE);
				licObj.refLicModel.setLicenseIssueDate(licCap.getFileDate());
				var expObj = null;
				var expDt = null;
				var expObjRes = aa.expiration.getLicensesByCapID(licCapId);
				if (expObjRes.getSuccess())
					var expObj = expObjRes.getOutput();
				if (expObj != null) {
					expDt = aa.date.parseDate(expObj.getExpDateString());
				}

				if (expDt != null) {
					licObj.refLicModel.setBusinessLicExpDate(expDt);
					//Expiration Date;
				}

				if (licCapTypeArr[1] == 'Business') {
					licObj.refLicModel.setLicenseBoard(getAppSpecific('Business Type', licCapId));
				} else {
					licObj.refLicModel.setLicenseBoard(LICENSETYPE);
				}

				if (licObj.updateFromRecordContactByType(licCapId, '', true, true); ) {
					logDebug('LP Updated from Primary Contact');
				} else {
					logDebug('LP Failed to Update from Primary Contact trying License Holder');
					if (licObj.updateFromRecordContactByType(licCapId, 'License Holder', true, true))
						logDebug('Updated from License Holder');
					else
						logDebug("Couldn't Update Contact Info");
				}

				// DISABLED: EMSE:LicProfLookup:UpdateLP:BaseFields:09
				// if (licObj.updateFromAddress(licCapId)) {
				// 	logDebug('LP Address Updated from License Address');
				//	} else {
				// 	logDebug('LP Address Failed to update from License Address');
				// 	}

				if (getAppSpecific('Doing Business As (DBA) Name', licCapId)) {
					licObj.refLicModel.setBusinessName(getAppSpecific('Doing Business As (DBA) Name', licCapId));
				}

				// DISABLED: EMSE:LicProfLookup:UpdateLP:BaseFields:11
				// if (getAppSpecific('State License Number',licCapId)) {
				// 	licObj.refLicModel.setStateLicense(getAppSpecific('State License Number',licCapId) );
				// 	}

				if (getAppSpecific('State License Expiration Date', licCapId)) {
					var expDate = getAppSpecific('State License Expiration Date', licCapId);
					licObj.refLicModel.setLicenseExpirationDate(aa.date.parseDate(expDate));
				}

				licObj.refLicModel.setBusinessLicense(licCap.getCapModel().getAltID());
				logDebug('BaseFields setBusinessLicense =' + licCap.getCapModel().getAltID());

			}
			//end replaced branch: EMSE:LicProfLookup:UpdateLP:BaseFields;

			//start replaced branch: EMSE:LicProfLookup:UpdateLP:ApplicationStatus
			{
				licObj.refLicModel.setBusinessName2(licCapStatus);
				logDebug('Lic Cap Status: ' + licCapStatus);

			}
			//end replaced branch: EMSE:LicProfLookup:UpdateLP:ApplicationStatus;
			if (licObj.updateRecord()) {
				logDebug('LP Updated Successfully');
			} else {
				logDebug('LP Update Failed');
			}

		}
		//end replaced branch: EMSE:LicProfLookup:UpdateLP;
	} else {
		logDebug('LP Not found to update');
	}

}
