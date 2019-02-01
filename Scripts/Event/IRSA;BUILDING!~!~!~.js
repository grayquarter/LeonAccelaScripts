// TODO: confirm sequence order
showMessage = true;
if (!checkInspectionResult(inspType, 'Pending') && inspResult != 'Approved') {
	createPendingInspection('L-INSP_ALL', inspType);
}

if (appMatch('Building/VelocityHall/Solar Photovoltaic/*') && !checkInspectionResult(inspType, 'Pending') && inspResult != 'Approved') {
	createPendingInspection('L-WebSolarPV', inspType);
}

if (appMatch('Building/VelocityHall/Solar Thermal Hot Water/*') && !checkInspectionResult(inspType, 'Pending') && inspResult != 'Approved') {
	createPendingInspection('L-WebSolarSP', inspType);
}

if (appMatch('Building/VelocityHall/Solar Swimming Pool/*') && !checkInspectionResult(inspType, 'Pending') && inspResult != 'Approved') {
	createPendingInspection('L-WebSolarTH', inspType);
}

if (appMatch('Building/VelocityHall/Electical/*') && !checkInspectionResult(inspType, 'Pending') && inspResult != 'Approved') {
	createPendingInspection('L-Web_Elec', inspType);
}

if (appMatch('Building/VelocityHall/Mechanical/*') && !checkInspectionResult(inspType, 'Pending') && inspResult != 'Approved') {
	createPendingInspection('L-Web_Mech', inspType);
}

if (appMatch('Building/VelocityHall/Plumbing/*') && !checkInspectionResult(inspType, 'Pending') && inspResult != 'Approved') {
	createPendingInspection('L-Web_Plumb', inspType);
}

if (appMatch('Building/VelocityHall/Pool Reliner/*') && !checkInspectionResult(inspType, 'Pending') && inspResult != 'Approved') {
	createPendingInspection('L-Web_Pool', inspType);
}

if (appMatch('Building/VelocityHall/Reroof/*') && !checkInspectionResult(inspType, 'Pending') && inspResult != 'Approved') {
	createPendingInspection('L-Web_Roof', inspType);
}

if (appMatch('Building/VelocityHall/Vinyl Siding/*') && !checkInspectionResult(inspType, 'Pending') && inspResult != 'Approved') {
	createPendingInspection('L-Web_Vinyl', inspType);
}

if (appMatch('Building/VelocityHall/Door-Windows/*') && !checkInspectionResult(inspType, 'Pending') && inspResult != 'Approved') {
	createPendingInspection('L-WebDoorWin', inspType);
}

if (inspResult == 'Approved' && matches(inspType.substr(0, 3), '400', '502', '503', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '527', '533', '534', '535')) {
	utilityReleases();
}
if (inspResult == 'Approved' && matches(inspType.substr(0, 3), '905') && matches(appTypeArray[1], 'Commercial', 'Residential', 'Quick Turn') && AInfo['Sewer System Type'] == 'Sewer' && checkInspectionResult('400: Building Sewer', 'Approved') == false) {
	utilityReleases();
}

// DISABLED: IRSA:Building/*/*/*:0160
// if (appMatch('Building/VelocityHall/Door-Windows/*')  && checkInspectionResult('900: Building Final','Approved')) {
// 	}

// DISABLED: IRSA:Building/*/*/*:0170
// if (appMatch('Building/VelocityHall/Electrical/*') && checkInspectionResult('901: Electrical Final','Approved')) {
// 	}

// DISABLED: IRSA:Building/*/*/*:0180
// if (appMatch('Building/VelocityHall/Mechanical/*') && (checkInspectionResult('903: Mechanical Final','Approved')) {
// 	}

// DISABLED: IRSA:Building/*/*/*:0190
// if (appMatch('Building/VelocityHall/Plumbing/*') && (checkInspectionResult('905: Plumbing Final','Approved')) {
// 	}

// DISABLED: IRSA:Building/*/*/*:0200
// if (appMatch('Building/VelocityHall/Pool Reliner/*') && checkInspectionResult('916: Swimming Pool Final','Approved')) {
// 	}

// DISABLED: IRSA:Building/*/*/*:0210
// if (appMatch('Building/VelocityHall/Reroof/*') && (checkInspectionResult('917: Roofing Final','Approved')) {
// 	}

// DISABLED: IRSA:Building/*/*/*:0220
// if (appMatch('Building/VelocityHall/Vinyl Siding/*') && checkInspectionResult('900: Building Final','Approved')) {
// 	}

showMessage = false;
if (inspResult == 'Charge' && matches(inspType.substr(0, 3), '595')) {
	addFee('5044-010', 'BUILDING', 'FINAL', 1, 'Y');
	addFee('5015-000', 'BUILDING', 'FINAL', 3.60, 'Y');
	addFee('5043-015', 'BUILDING', 'FINAL', .4, 'Y');
	updateAppStatus('Fees Due', 'Reinspection Fee Added');
}

if (inspResult == 'Charge' && matches(inspType.substr(0, 3), '596')) {
	var aftHrsFee;
	aftHrsFee = 82.24;
}

if (inspResult == 'Charge' && matches(inspType.substr(0, 3), '596') && inspTotalTime == null || inspTotalTime <= 1.99) {
	inspTotalTime = 2;
}

if (inspResult == 'Charge' && matches(inspType.substr(0, 3), '596')) {
	addFee('5027-001', 'BUILDING', 'FINAL', inspTotalTime, 'Y');
	addFee('5015-000', 'BUILDING', 'FINAL', (aftHrsFee * inspTotalTime) * .027, 'Y');
	addFee('5043-015', 'BUILDING', 'FINAL', (aftHrsFee * inspTotalTime) * .003, 'Y');
	updateAppStatus('Fees Due', 'After Hours Inspection Fees Added');
}
