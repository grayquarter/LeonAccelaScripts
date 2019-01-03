
showDebug = 1;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
EMSE:GlobalFlags();
branch('FEA:' + appTypeArray[0] + '/*/*/*');
branch('FEA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('FEA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('FEA:' + appTypeString);

//start replaced branch: ApplicationSubmitAfter
 {
copyParcelGisObjects();
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
EMSE:GlobalFlags();
branch('ASA:' + appTypeArray[0] + '/*/*/*');
branch('ASA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('ASA:' + appTypeArray[0] + '/*/*/' + appTypeArray[3]);
branch('ASA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('ASA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
branch('ASA:' + appTypeString);
// DISABLED: ApplicationSubmitAfter:75
// showDebug = 1;
// logDebug('currentUserID: ' + currentUserID);
// DISABLED: ApplicationSubmitAfter:80
// if (matches(currentUserID,'PUBLICUSER153')) {
// 	br_nch('EMSE:TESTDRIVE_ASA');
// 	}

}
//end replaced branch: ApplicationSubmitAfter;

