
// DISABLED: EMSE:LP_VERIFY:01
// showDebug = false;
var issueCount = 0;
fileMaintIssue = 0;
workCompIssue = 0;
if (capHasExpiredLicProf('EXPIRE')) {
	issueCount = issueCount + 1;
	}

if (capHasExpiredLicProf('INSURANCE')) {
	issueCount = issueCount + 1;
	}

if (capHasExpiredLicProf('BUSINESS')) {
	issueCount = issueCount + 1;
	}

capLicArr2 = aa.licenseScript.getLicenseProf(capId).getOutput();
if (capLicArr2 && capLicArr2.length > 0) {
	for (eachLP in capLicArr2) 
//start replaced branch: EMSE:GetLPDates
 {
fileLP = capLicArr2[eachLP];
if (fileLP !=null) {
	stateLicNbr=fileLP['licenseNbr'];
	primStatus=fileLP['printFlag'];
	licType=fileLP['licenseType'];
	}

if (fileLP !=null) {
	fileExp = getRefLicenseProf(stateLicNbr).getLicenseModel().getBirthDate();
	}

if (fileLP !=null) {
	bdYear = String(fileExp).substring(0,4);
	bdMonth = String(fileExp).substring(5,7);
	bdDay = String(fileExp).substring(8,10);
	}

if (fileLP !=null) {
	fileExpDate = bdMonth + '/' + bdDay + '/' + bdYear;
	}

if (fileLP !=null) {
	fileCompare = new Date(dateAdd(fileExpDate,1));
	thisDate = new Date();
	}

if (fileCompare < thisDate) {
	fileMaintIssue = fileMaintIssue + 1;
	}

if (fileLP !=null) {
	var wcDate = getRefLicenseProf(stateLicNbr).getLicenseModel().getWcExpDate();
	}

if (fileLP !=null) {
	bdYear2 = String(wcDate).substring(0,4);
	bdMonth2 = String(wcDate).substring(5,7);
	bdDay2 = String(wcDate).substring(8,10);
	}

if (fileLP !=null) {
	wcDate1 = bdMonth2 + '/' + bdDay2 + '/' + bdYear2;
	}

if (fileLP !=null) {
	wcCompare = new Date(dateAdd(wcDate1,1));
	}

if (wcCompare < thisDate) {
	workCompIssue = workCompIssue + 1;
	}

}
//end replaced branch: EMSE:GetLPDates;
	}

issueCount = issueCount + fileMaintIssue + workCompIssue;
if (issueCount > 0) {
	showMessage = true;
	comment('<Font Color = Red><Strong>ONE OF THE ATTACHED CONTRACTORS HAS A LICENSE OR INSURANCE ISSUE - PLEASE RESOLVE BEFORE CONTINUING</Font></Strong>');
	}

