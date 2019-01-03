var lst = LicenseModel.toLicenseProfessional(); //com.accela.aa.aamain.people.LicenseProfessionalModel
var bodyObject = {};

bodyObject['License Number'] = new String(LicenseModel.getStateLicense());
bodyObject['Data Status'] = isLicensedProfessionalEnabled(lst.getAuditStatus());
bodyObject['License Expiration'] = dateTimeToJsonString(LicenseModel.getLicenseExpirationDate());
bodyObject['Work Comp Expiration'] = dateTimeToJsonString(LicenseModel.getWcExpDate());
bodyObject['Liability Expiration'] = dateTimeToJsonString(LicenseModel.getInsuranceExpDate());
bodyObject['File Maintenance Date'] = dateTimeToJsonString(LicenseModel.getBusinessLicExpDate());
bodyObject['Business Name'] = new String(LicenseModel.getBusinessName());
bodyObject['Email'] = new String(LicenseModel.getEMailAddress());
bodyObject['Work Phone'] = new String(LicenseModel.getPhone1());
bodyObject['Work Phone Extension'] = new String(LicenseModel.getPhone3());
bodyObject['Mobile Phone'] = new String(LicenseModel.getPhone2());
bodyObject['Address Line 1'] = new String(LicenseModel.getAddress1());
bodyObject['Address Line 2'] = new String(LicenseModel.getAddress2());
bodyObject['City'] = new String(LicenseModel.getCity());
bodyObject['State'] = new String(LicenseModel.getState());
bodyObject['Zip'] = new String(LicenseModel.getZip());
bodyObject['Qualifier'] = new String(LicenseModel.getBusName2());
bodyObject['Agents'] = [];
bodyObject['Conditions'] = [];

if (lst != null) {
    var lpobj = licenseProfObject(lst.getLicenseNbr(), lst.getLicenseType());

    if (lpobj.validTables) {
        for (table in lpobj.infoTables) {
            if (table == 'AUTHORIZED AGENTS') {
                for (row in lpobj.infoTables[table]) {
                    for (col in lpobj.infoTables[table][row]) {
                        bodyObject['Agents'].push(new String(lpobj.infoTables[table][row][col].getValue()));
                    }
                }
            }
        }
    }
}

var body = JSON.stringify(bodyObject);
var response = getTlcResponse('POST', 'v2/LicensedProfessional/', 'live', body);

aa.print(body);
aa.print(response);