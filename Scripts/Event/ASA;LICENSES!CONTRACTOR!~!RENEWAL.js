
updateFee('LIC_030', 'LIC_CONTRACTOR_GENERAL', 'FINAL', 1, 'Y');

//replaced branch(EMSE:LicProfLookup:getLicenses)
licProfLookupGetLicense();
expDate = aa.expiration.getLicensesByCapID(licCapId).getOutput().getB1Expiration().getExpDate();
now = aa.util.now();
tempDate = aa.util.formatDate(now, 'MM/dd/YYYY');
today = aa.util.parseDate(tempDate);
today.after(expDate) ? updateFee('LIC_040', 'LIC_CONTRACTOR_GENERAL', 'FINAL', 1, 'Y') : now;
