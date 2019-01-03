
showDebug = false;
showMessage= true;

//replaced branch(EMSE:GlobalFlags)
EMSE:GlobalFlags();
branch('IRSA:' + appTypeArray[0] + '/*/*/*');
branch('IRSA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('IRSA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('IRSA:' + appTypeString);
if (matches(currentUserID,'TESTDRIVE')) {
	
//start replaced branch: EMSE:TESTDRIVE_IRSA
 {
if (appMatch('Permits/Residential/Electrical/NA')  && inspType == 'Electrical Final' && inspResult == 'Passed') {
	closeTask('Meter Release','Meter Released','Updated by Inspection Result','Note');
	}

if (appMatch('Licenses/Business/Restaurant/Application')  && inspType == 'Business License Inspection' && inspResult == 'Passed') {
	closeTask('License Issuance','Issued','Updated by Inspection Result','Note');
	}

}
//end replaced branch: EMSE:TESTDRIVE_IRSA;
	}

