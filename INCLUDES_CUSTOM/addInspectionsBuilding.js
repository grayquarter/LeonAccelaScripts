function addInspectionsBuilding() {

// DISABLED: EMSE:Add-Inspections-Building:00001
// showMessage = true;
// showDebug = 1;
bldInsp = 0*1;
elecInsp = 0*1;
plumbInsp = 0*1;
mechInsp = 0*1;
envInsp = 0*1;
septicInsp = 0*1;
sewerInsp = 0*1;
signInsp = 0*1;
gasInsp = 0*1;
mhInsp = 0*1;
pvInsp = 0*1;
faInsp = 0*1;
poolInsp = 0*1;
demoInsp = 0*1;
fireInsp = 0*1;
drivewayInsp = 0*1;
nocInsp = 0*1;
wElecInsp = 0*1;
wMechInsp = 0*1;
wPlumbInsp = 0*1;
wDoorInsp = 0*1;
wPoolInsp = 0*1;
wRoofInsp = 0*1;
wSolarPVInsp = 0*1;
wSolarTHInsp = 0*1;
wRoofInsp = 0*1;
allInspComplete = 0*1;
allInspReq = 0*1;
var today = new Date();
today = Date(aa.date.currentDate);
if (feeExists('5004-010','INVOICED') == true) {
	mechInsp = mechInsp +1;
	}

if (feeExists('5004-015','INVOICED') == true) {
	mechInsp = mechInsp +1;
	}

if (feeExists('5004-020','INVOICED') == true) {
	mechInsp = mechInsp +1;
	}

if (feeExists('5008-003','INVOICED') == true) {
	gasInsp  = gasInsp  +1;
	}

if (feeExists('5008-005','INVOICED') == true) {
	gasInsp  = gasInsp  +1;
	}

if (feeExists('5008-010','INVOICED') == true) {
	gasInsp  = gasInsp  +1;
	}

if (feeExists('5008-001','INVOICED') == true) {
	gasInsp  = gasInsp  +1;
	}

if (feeExists('5008-015','INVOICED') == true) {
	gasInsp  = gasInsp  +1;
	}

if (feeExists('5006-010','INVOICED') == true) {
	plumbInsp  = plumbInsp  +1;
	}

if (feeExists('5006-025','INVOICED') == true) {
	plumbInsp  = plumbInsp  +1;
	}

if (feeExists('5006-030','INVOICED') == true) {
	plumbInsp  = plumbInsp  +1;
	}

if (feeExists('5006-040','INVOICED') == true) {
	plumbInsp  = plumbInsp  +1;
	}

if (feeExists('5006-045','INVOICED') == true) {
	plumbInsp  = plumbInsp  +1;
	}

if (feeExists('5006-010','INVOICED') == true) {
	plumbInsp  = plumbInsp  +1;
	}

if (feeExists('5002-010','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-050','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-015','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-035','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-030','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-080','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-040','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-085','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-045','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-090','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-095','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-100','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-105','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-110','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-115','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-120','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-125','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-130','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-135','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-140','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-145','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-150','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-155','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-160','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-165','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-170','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-175','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-020','INVOICED') == true) {
	elecInsp  = elecInsp  + 1;
	signInsp = signInsp + 1;
	}

if (feeExists('5002-025','INVOICED') == true) {
	elecInsp  = elecInsp  + 1;
	signInsp = signInsp + 1;
	}

if (feeExists('5002-055','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-,060','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-,065','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-070','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-075','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5002-180','INVOICED') == true) {
	elecInsp  = elecInsp  +1;
	}

if (feeExists('5010-020','INVOICED') == true) {
	bldInsp  = bldInsp  +1;
	}

if (feeExists('5010-010','INVOICED') == true) {
	bldInsp  = bldInsp  +1;
	}

if (feeExists('5010-025','INVOICED') == true) {
	bldInsp  = bldInsp  +1;
	}

if (feeExists('5010-015','INVOICED') == true) {
	bldInsp  = bldInsp  +1;
	}

if (feeExists('5010-055','INVOICED') == true) {
	bldInsp  = bldInsp  +1;
	}

if (feeExists('5010-045','INVOICED') == true) {
	bldInsp  = bldInsp  +1;
	}

if (feeExists('5010-030','INVOICED') == true) {
	bldInsp  = bldInsp  +1;
	}

if (feeExists('5010-050','INVOICED') == true) {
	bldInsp  = bldInsp  +1;
	}

if (feeExists('5010-060','INVOICED') == true) {
	bldInsp  = bldInsp  +1;
	}

if (feeExists('5040-010','INVOICED') == true) {
	mhInsp = mhInsp +1;
	}

if (feeExists('5010-035','INVOICED') == true) {
	poolInsp = poolInsp +1;
	}

if (feeExists('5010-040','INVOICED') == true) {
	poolInsp = poolInsp +1;
	}

if (feeExists('7015-010','INVOICED') == true) {
	envInsp = envInsp +1;
	}

if (feeExists('7015-012','INVOICED') == true) {
	envInsp = envInsp +1;
	}

if (feeExists('7015-013','INVOICED') == true) {
	envInsp = envInsp +1;
	}

if (feeExists('5020-010','INVOICED') == true) {
	fireInsp = fireInsp +1;
	}

if (feeExists('5020-015','INVOICED') == true) {
	fireInsp = fireInsp +1;
	}

if (feeExists('5017-010','INVOICED') == true) {
	nocInsp = nocInsp +1;
	}

if (feeExists('5007-010','INVOICED') == true) {
	wSolarPVInsp = wSolarPVInsp +1;
	}

if (feeExists('5007-015','INVOICED') == true) {
	wSolarTHInsp = wSolarTHInsp +1;
	}

// DISABLED: EMSE:Add-Inspections-Building:0355
// if (feeBalance('5007-010') == 0) {
// 	comment('Gwan');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0360
// if (appTypeArray[0] == 'Building' && !appTypeArray[2] == 'Mechanical' && getAppSpecific('Valuation of Work Performed') >= 2500 && !isScheduled('505: Notice of Commencement')) {
// 	createPendingInspection('L-INSP_ALL','505: Notice of Commencement');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0365
// if (appTypeArray[2] == 'Mechanical' && getAppSpecific('Valuation of Work Performed') >= 7500 && !isScheduled('505: Notice of Commencement')) {
// 	createPendingInspection('L-INSP_ALL','505: Notice of Commencement');
// 	}

if (appTypeArray[0] == 'Building' && !appTypeArray[1] == 'VelocityHall' && getAppSpecific('Improvement Type') != 'Mechanical Only' && getAppSpecific('Valuation of Work Performed') >= 2500 && !isScheduled('505: Notice of Commencement')) {
	createPendingInspection('L-INSP_ALL','505: Notice of Commencement');
	}

if (appTypeArray[0] == 'Building' && !appTypeArray[1] == 'VelocityHall' && getAppSpecific('Improvement Type') == 'Mechanical Only' && getAppSpecific('Valuation of Work Performed') >= 7500 && !isScheduled('505: Notice of Commencement')) {
	createPendingInspection('L-INSP_ALL','505: Notice of Commencement');
	}

// DISABLED: EMSE:Add-Inspections-Building:0370 Fixed Insp
// if (!isScheduled('595: Re-Inspection')) {
// 	createPendingInspection('L-INSP_ALL','595: Re-Inspection');
// 	createPendingInspection('L-INSP_ALL','596: After Hours Inspection');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0375 NOC Req
// if (isScheduled('505: Notice of Commencement')) {
// 	editInspectionRequiredFlag('505: Notice of Commencement',true);
// 	}

if (matches(appTypeArray[2],'New','Addition','Multi-Family','Accessory Structure','Pool','Sign','Manufactured Home','Demolition','New Industrial','Foundation')) {
	envInsp = envInsp +1;
	}

if (AInfo['Driveway Permit Required'] == 'Yes') {
	drivewayInsp = drivewayInsp +1;
	}

if (AInfo['Sewer System Type'] == 'Septic') {
	septicInsp = septicInsp +1;
	}

if (AInfo['Sewer System Type'] == 'Sewer') {
	sewerInsp = sewerInsp +1;
	}

if (AInfo['Photovoltaic System'] == 'CHECKED') {
	pvInsp = pvInsp +1;
	}

if (AInfo['Fire Alarm'] == 'CHECKED') {
	faInsp = faInsp +1;
	}

if (AInfo['Improvement Type'] == 'Signs') {
	signInsp = signInsp + 1;
	}

if (isScheduled('600: Intent to Proceed Environmental')) {
	envInsp = envInsp * 0;
	}

if (checkInspectionResult('900: Building Final','Pending') || checkInspectionResult('900: Building Final','Information') || checkInspectionResult('900: Building Final','Approved') || checkInspectionResult('900: Building Final','Denied') || checkInspectionResult('900: Building Final','Correction Notice') || checkInspectionResult('900: Building Final','Partial Approval') || checkInspectionResult('900: Building Final','Approved By Script') || checkInspectionResult('900: Building Final','Cancelled') || checkInspectionResult('900: Building Final','Scheduled')) {
	bldInsp = 0*1;
	}

if (checkInspectionResult('901: Electrical Final','Pending') ||checkInspectionResult('901: Electrical Final','Information')|| checkInspectionResult('901: Electrical Final','Approved') || checkInspectionResult('901: Electrical Final','Denied') ||checkInspectionResult('901: Electrical Final','Correction Notice') || checkInspectionResult('901: Electrical Final','Partial Approval') || checkInspectionResult('901: Electrical Final','Approved By Script') || checkInspectionResult('901: Electrical Final','Cancelled') || checkInspectionResult('901: Electrical Final','Scheduled')) {
	elecInsp = 0*1;
	}

if (checkInspectionResult('902: Gas Final','Pending') ||checkInspectionResult('902: Gas Final','Information')|| checkInspectionResult('902: Gas Final','Approved') || checkInspectionResult('902: Gas Final','Denied') ||checkInspectionResult('902: Gas Final','Correction Notice') || checkInspectionResult('902: Gas Final','Partial Approval') || checkInspectionResult('902: Gas Final','Approved By Script') || checkInspectionResult('902: Gas Final','Cancelled') || checkInspectionResult('902: Gas Final','Scheduled')) {
	gasInsp = 0*1;
	}

if (checkInspectionResult('903: Mechanical Final','Pending') || checkInspectionResult('903: Mechanical Final','Information') || checkInspectionResult('903: Mechanical Final','Approved') || checkInspectionResult('903: Mechanical Final','Denied') || checkInspectionResult('903: Mechanical Final','Correction Notice') || checkInspectionResult('903: Mechanical Final','Partial Approval') || checkInspectionResult('903: Mechanical Final','Approved By Script') || checkInspectionResult('903: Mechanical Final','Cancelled') || checkInspectionResult('903: Mechanical Final','Scheduled')) {
	mechInsp = 0*1;
	}

if (checkInspectionResult('905: Plumbing Final','Pending') || checkInspectionResult('905: Plumbing Final','Information') || checkInspectionResult('905: Plumbing Final','Approved') || checkInspectionResult('905: Plumbing Final','Denied') || checkInspectionResult('905: Plumbing Final','Correction Notice') || checkInspectionResult('905: Plumbing Final','Partial Approval') || checkInspectionResult('905: Plumbing Final','Approved By Script') || checkInspectionResult('905: Plumbing Final','Cancelled') || checkInspectionResult('905: Plumbing Final','Scheduled')) {
	plumbInsp = 0*1;
	}

if (checkInspectionResult('908: Fire Final','Pending') || checkInspectionResult('908: Fire Final','Information') || checkInspectionResult('908: Fire Final','Approved') || checkInspectionResult('908: Fire Final','Denied') || checkInspectionResult('908: Fire Final','Correction Notice') || checkInspectionResult('908: Fire Final','Partial Approval') || checkInspectionResult('908: Fire Final','Approved By Script') || checkInspectionResult('908: Fire Final','Cancelled') || checkInspectionResult('908: Fire Final','Scheduled')) {
	fireInsp = 0*1;
	}

if (checkInspectionResult('904: Mobile Home Final','Pending') || checkInspectionResult('904: Mobile Home Final','Information') || checkInspectionResult('904: Mobile Home Final','Approved') || checkInspectionResult('904: Mobile Home Final','Denied') || checkInspectionResult('904: Mobile Home Final','Correction Notice') || checkInspectionResult('904: Mobile Home Final','Partial Approval') || checkInspectionResult('904: Mobile Home Final','Approved By Script') || checkInspectionResult('904: Mobile Home Final','Cancelled') || checkInspectionResult('904: Mobile Home Final','Scheduled')) {
	mhInsp = 0*1;
	}

if (checkInspectionResult('916: Swimming Pool Final','Pending') || checkInspectionResult('916: Swimming Pool Final','Information') || checkInspectionResult('916: Swimming Pool Final','Approved') || checkInspectionResult('916: Swimming Pool Final','Denied') || checkInspectionResult('916: Swimming Pool Final','Correction Notice') || checkInspectionResult('916: Swimming Pool Final','Partial Approval') || checkInspectionResult('916: Swimming Pool Final','Approved By Script') || checkInspectionResult('916: Swimming Pool Final','Cancelled') || checkInspectionResult('916: Swimming Pool Final','Scheduled')) {
	poolInsp = 0*1;
	}

if (checkInspectionResult('505: Notice of Commencement','Pending') || checkInspectionResult('505: Notice of Commencement','Information') || checkInspectionResult('505: Notice of Commencement','Approved') || checkInspectionResult('505: Notice of Commencement','Denied') || checkInspectionResult('505: Notice of Commencement','Correction Notice') || checkInspectionResult('505: Notice of Commencement','Partial Approval') || checkInspectionResult('505: Notice of Commencement','Approved By Script') || checkInspectionResult('505: Notice of Commencement','Cancelled') || checkInspectionResult('505: Notice of Commencement','Scheduled')) {
	nocInsp = 0*1;
	}

if (checkInspectionResult('909: Driveway Final','Pending') || checkInspectionResult('909: Driveway Final','Information') || checkInspectionResult('909: Driveway Final','Approved') || checkInspectionResult('909: Driveway Final','Denied') || checkInspectionResult('909: Driveway Final','Correction Notice') || checkInspectionResult('909: Driveway Final','Partial Approval') || checkInspectionResult('909: Driveway Final','Approved By Script') || checkInspectionResult('909: Driveway Final','Cancelled') || checkInspectionResult('909: Driveway Final','Scheduled')) {
	drivewayInsp = 0*1;
	}

if (checkInspectionResult('906: Sign Final','Pending') || checkInspectionResult('906: Sign Final','Information') || checkInspectionResult('906: Sign Final','Approved') || checkInspectionResult('906: Sign Final','Denied') || checkInspectionResult('906: Sign Final','Correction Notice') || checkInspectionResult('906: Sign Final','Partial Approval') || checkInspectionResult('906: Sign Final','Approved By Script') || checkInspectionResult('906: Sign Final','Cancelled') || checkInspectionResult('906: Sign Final','Scheduled')) {
	signInsp = 0*1;
	}

if (checkInspectionResult('911: Fire Alarm Final','Pending') || checkInspectionResult('911: Fire Alarm Final','Information') || checkInspectionResult('911: Fire Alarm Final','Approved') || checkInspectionResult('911: Fire Alarm Final','Denied') || checkInspectionResult('911: Fire Alarm Final','Correction Notice') || checkInspectionResult('911: Fire Alarm Final','Partial Approval') || checkInspectionResult('911: Fire Alarm Final','Approved By Script') || checkInspectionResult('911: Fire Alarm Final','Cancelled') || checkInspectionResult('911: Fire Alarm Final','Scheduled')) {
	faInsp = 0*1;
	}

if (checkInspectionResult('921: Solar PV Final','Pending') || checkInspectionResult('921: Solar PV Final','Information') || checkInspectionResult('921: Solar PV Final','Approved') || checkInspectionResult('921: Solar PV Final','Denied') || checkInspectionResult('921: Solar PV Final','Correction Notice') || checkInspectionResult('921: Solar PV Final','Partial Approval') || checkInspectionResult('921: Solar PV Final','Approved By Script') || checkInspectionResult('921: Solar PV Final','Cancelled') || checkInspectionResult('921: Solar PV Final','Scheduled')) {
	pvInsp = 0*1;
	}

// DISABLED: EMSE:Add-Inspections-Building:04581 WebReRoof CK Insp
// if (appMatch('Building/VelocityHall/Reroof/*') && (checkInspectionResult('917: Roofing Final','Pending') || checkInspectionResult('917: Roofing Final','Information') || checkInspectionResult('917: Roofing Final','Approved') || checkInspectionResult('917: Roofing Finall','Denied') || checkInspectionResult('917: Roofing Final','Correction Notice') || checkInspectionResult('917: Roofing Final','Partial Approval') || checkInspectionResult('917: Roofing Final','Approved By Script') || checkInspectionResult('917: Roofing Final','Cancelled') || checkInspectionResult('917: Roofing Final','Scheduled'))) {
// 	wRoofInsp = wRoofInsp +1;
// 	}

// DISABLED: EMSE:Add-Inspections-Building:04582 WebElec CK Insp
// if (appMatch('Building/VelocityHall/Electrical/*') && (checkInspectionResult('901: Electrical Final','Pending') || checkInspectionResult('901: Electrical Final','Information') || checkInspectionResult('901: Electrical Final','Approved') || checkInspectionResult('901: Electrical Final','Denied') || checkInspectionResult('901: Electrical Final','Correction Notice') || checkInspectionResult('901: Electrical Final','Partial Approval') || checkInspectionResult('901: Electrical Final','Approved By Script') || checkInspectionResult('901: Electrical Final','Cancelled') || checkInspectionResult('901: Electrical Final','Scheduled'))) {
// 	wElecInsp = wElecInsp +1;
// 	}

// DISABLED: EMSE:Add-Inspections-Building:04583 WebMech CK Insp
// if (appMatch('Building/VelocityHall/Mechanical/*') && (checkInspectionResult('903: Mechanical Final','Pending') || checkInspectionResult('903: Mechanical Final','Information') || checkInspectionResult('903: Mechanical Final','Approved') || checkInspectionResult('903: Mechanical Final','Denied') || checkInspectionResult('903: Mechanical Final','Correction Notice') || checkInspectionResult('903: Mechanical Final','Partial Approval') || checkInspectionResult('903: Mechanical Final','Approved By Script') || checkInspectionResult('903: Mechanical Final','Cancelled') || checkInspectionResult('903: Mechanical Final','Scheduled'))) {
// 	wMechInsp = wMechInsp +1;
// 	}

// DISABLED: EMSE:Add-Inspections-Building:04584 WebDoorWin CK Insp
// if (appMatch('Building/VelocityHall/Door-Windows/*') && (checkInspectionResult('900: Building Final','Pending') || checkInspectionResult('900: Building Final','Information') || checkInspectionResult('900: Building Final','Approved') || checkInspectionResult('900: Building Final','Denied') || checkInspectionResult('900: Building Final','Correction Notice') || checkInspectionResult('900: Building Final','Partial Approval') || checkInspectionResult('900: Building Final','Approved By Script') || checkInspectionResult('900: Building Final','Cancelled') || checkInspectionResult('900: Building Final','Scheduled'))) {
// 	wDoorInsp = wDoorInsp +1;
// 	}

// DISABLED: EMSE:Add-Inspections-Building:04585 WebPlumb CK Insp
// if (appMatch('Building/VelocityHall/Plumbing/*') && (checkInspectionResult('905: Plumbing Final','Pending') || checkInspectionResult('905: Plumbing Final','Information') || checkInspectionResult('905: Plumbing Final','Approved') || checkInspectionResult('905: Plumbing Final','Denied') || checkInspectionResult('905: Plumbing Final','Correction Notice') || checkInspectionResult('905: Plumbing Final','Partial Approval') || checkInspectionResult('905: Plumbing Final','Approved By Script') || checkInspectionResult('905: Plumbing Final','Cancelled') || checkInspectionResult('905: Plumbing Final','Scheduled'))) {
// 	wPlumbInsp = wPlumbInsp +1;
// 	}

// DISABLED: EMSE:Add-Inspections-Building:04586 WebPool CK Insp
// if (appMatch('Building/VelocityHall/Pool Reliner/*') && (checkInspectionResult('916: Swimming Pool Final','Pending') || checkInspectionResult('916: Swimming Pool Final','Information') || checkInspectionResult('916: Swimming Pool Final','Approved') || checkInspectionResult('916: Swimming Pool Final','Denied') || checkInspectionResult('916: Swimming Pool Final','Correction Notice') || checkInspectionResult('916: Swimming Pool Final','Partial Approval') || checkInspectionResult('916: Swimming Pool Final','Approved By Script') || checkInspectionResult('916: Swimming Pool Final','Cancelled') || checkInspectionResult('916: Swimming Pool Final','Scheduled'))) {
// 	wPoolInsp = wPoolInsp +1;
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0467 WebReRoof Add Insp
// if (wRoofInsp == 0 && appMatch('Building/VelocityHall/Reroof/*')) {
// 	createPendingInspection('L-WEB_Roof','104: Roof');
// 	createPendingInspection('L-WEB_Roof','115: Roof Deck Re-Nail');
// 	createPendingInspection('L-WEB_Roof','116: Roof Secondart Barrier');
// 	createPendingInspection('L-WEB_Roof','505: Notice of Commencement');
// 	createPendingInspection('L-WEB_Roof','595: Re-Inspection');
// 	createPendingInspection('L-INSP_ALL','596: After Hours Inspection');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:04681 WebElec Add Insp 1
// if (wElecInsp ==  0 && appMatch('Building/VelocityHall/Electrical/*')) {
// 	createPendingInspection('L-WEB_Elec','200: Electric Rough-In');
// 	createPendingInspection('L-WEB_Elec','201: Electric Rough Ceiling');
// 	createPendingInspection('L-WEB_Elec','202: Electric HVAC Changeout');
// 	createPendingInspection('L-WEB_Elec','203: Electric Service Changeout');
// 	createPendingInspection('L-WEB_Elec','204: Pool Electrical Bonding');
// 	createPendingInspection('L-WEB_Elec','205: Underground Electric');
// 	createPendingInspection('L-WEB_Elec','299: Other Electric');
// 	createPendingInspection('L-WEB_Elec','500: Temporary Power');
// 	createPendingInspection('L-WEB_Elec','501: Electrical Release');
// 	createPendingInspection('L-WEB_Elec','506: Notified Electric Provider');
// DISABLED: EMSE:Add-Inspections-Building:04682 WebElec Add Insp 2
// 	createPendingInspection('L-WEB_Elec','507: Talquin Temp Electric Release');
// 	createPendingInspection('L-WEB_Elec','508: Talquin Final Electric Release');
// 	createPendingInspection('L-WEB_Elec','509: Talquin New Cut-In & Res Meter Set');
// 	createPendingInspection('L-WEB_Elec','510: Talquin MH Cut-In & Meter Set');
// 	createPendingInspection('L-WEB_Elec','511: Talquin New Cut-In & Comm Meter Set');
// 	createPendingInspection('L-WEB_Elec','512: Talquin Temp Cut-In');
// 	createPendingInspection('L-WEB_Elec','513: Talquin Increase Service');
// 	createPendingInspection('L-WEB_Elec','514: Talquin Relocate Service');
// DISABLED: EMSE:Add-Inspections-Building:04683 WebElec Add Insp 3
// 	createPendingInspection('L-WEB_Elec','515: City New Cut-In & Residential Meter Set');
// 	createPendingInspection('L-WEB_Elec','516: City MH Cut-In & Meter Set');
// 	createPendingInspection('L-WEB_Elec','517: City Cut-In & Comm Meter Set');
// 	createPendingInspection('L-WEB_Elec','518: City Temp Cut-In');
// 	createPendingInspection('L-WEB_Elec','519: City Increase Service');
// 	createPendingInspection('L-WEB_Elec','520: City Relocate Service');
// 	createPendingInspection('L-WEB_Elec','521: City New Cut-In');
// 	createPendingInspection('L-WEB_Elec','522: City Residential Meter Set');
// 	createPendingInspection('L-WEB_Elec','523: City Comm Meter Set');
// 	createPendingInspection('L-WEB_Elec','524: City MH Meter Set');
// 	createPendingInspection('L-WEB_Elec','525: City Reseal Meter');
// 	createPendingInspection('L-WEB_Elec','526: City Reseal Meter Increase Service');
// 	createPendingInspection('L-WEB_Elec','527: City Reset Meter');
// 	createPendingInspection('L-WEB_Elec','528: City Reset Meter Increase Service');
// DISABLED: EMSE:Add-Inspections-Building:04684 WebElec Add Insp 4
// 	createPendingInspection('L-WEB_Elec','529: City Relocate Increase Service');
// 	createPendingInspection('L-WEB_Elec','530: City Reconnect Service');
// 	createPendingInspection('L-WEB_Elec','531: City Reconnect Increase Service');
// 	createPendingInspection('L-WEB_Elec','532: City House Meter');
// 	createPendingInspection('L-WEB_Elec','533: City New C/I Com Mtr Set W/CTS');
// 	createPendingInspection('L-WEB_Elec','534: City Interconnect Pwr Source');
// 	createPendingInspection('L-WEB_Elec','535: Talquin Interconncet Pwr Source');
// 	createPendingInspection('L-WEB_Elec','901: Electrical Final');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:04685 WebMech Add Insp
// if (wMechInsp == 0 && appMatch('Building/VelocityHall/Mechanical/*')) {
// 	createPendingInspection('L-WEB_Mech','301: Ductwork');
// 	createPendingInspection('L-WEB_Mech','302: Range Hood');
// 	createPendingInspection('L-WEB_Mech','303: Refrigeration');
// 	createPendingInspection('L-WEB_Mech','304: Ventilation');
// 	createPendingInspection('L-WEB_Mech','305: HVAC');
// 	createPendingInspection('L-WEB_Mech','306: HVAC Chageout');
// 	createPendingInspection('L-WEB_Mech','308: Underground Mechanicial');
// 	createPendingInspection('L-WEB_Mech','310: Chill Water/Hot Water/Steam');
// 	createPendingInspection('L-WEB_Mech','399: Other Mechanicial');
// 	createPendingInspection('L-WEB_Mech','903: Mechanical Final');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:04686 WebDoorWin Add Insp
// if (wDoorInsp == 0 && appMatch('Building/VelocityHall/Vinyl Siding/*')) {
// 	createPendingInspection('L-WebDoorWin','107: Framing');
// 	createPendingInspection('L-WebDoorWin','199: Other Building');
// 	createPendingInspection('L-WebDoorWin','505: Notice of Commencement');
// 	createPendingInspection('L-WebDoorWin','595: Re-Inspection');
// 	createPendingInspection('L-WebDoorWin','596: After Hours Inspection');
// 	createPendingInspection('L-WebDoorWin','900: Building Final');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:04687 WebPlumb Add Insp
// if (wPlumbInsp == 0  && appMatch('Building/VelocityHall/Plumbing/*')) {
// 	createPendingInspection('L-WEB_Plumb','400: Building Sewer');
// 	createPendingInspection('L-WEB_Plumb','400: Building Sewer');
// 	createPendingInspection('L-WEB_Plumb','407: Water System');
// 	createPendingInspection('L-WEB_Plumb','410: COT Backflow Device');
// 	createPendingInspection('L-WEB_Plumb','411: Talquin Backflow Device');
// 	createPendingInspection('L-WEB_Plumb','505: Notice of Commencement');
// 	createPendingInspection('L-WEB_Plumb','595: Re-Inspection');
// 	createPendingInspection('L-WEB_Plumb','596: After Hours Inspection');
// 	createPendingInspection('L-WEB_Plumb','905: Plumbing Final');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:04688 WebPool Add Insp
// if (wPoolInsp == 0 && appMatch('Building/VelocityHall/Pool Reliner/*')) {
// 	createPendingInspection('L-WEB_Pool','111: Pool');
// 	createPendingInspection('L-WEB_Pool','112: Pool Fence Gate');
// 	createPendingInspection('L-WEB_Pool','113: Pool Re-Liner');
// 	createPendingInspection('L-WEB_Pool','204: Pool Electrical Bonding');
// 	createPendingInspection('L-WEB_Pool','412: Pool Pressure Test');
// 	createPendingInspection('L-WEB_Pool','916: Swimming Pool Final');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:04689 WebVinyl Add Insp
// if (wDoorInsp == 0 && appMatch('Building/VelocityHall/Vinyl Siding/*')) {
// 	createPendingInspection('L-WEB_Vinyl','106: Exterior Sheathing');
// 	createPendingInspection('L-WEB_Vinyl','199: Other Building');
// 	createPendingInspection('L-WEB_Vinyl','505: Notice of Commencement');
// 	createPendingInspection('L-WEB_Vinyl','595: Re-Inspection');
// 	createPendingInspection('L-WEB_Vinyl','596: After Hours Inspection');
// 	createPendingInspection('L-WEB_Vinyl','900: Building Final');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0480
// if (appMatch('Building/Web/Solar Photovoltaic/*') && wSolarPVInsp > 0 && !isScheduled('921: Solar PV Final')) {
// 	createPendingInspection('L-INSP_ALL','100: Footing');
// 	createPendingInspection('L-INSP_ALL','534: City Interconnect Pwr Source');
// 	createPendingInspection('L-INSP_ALL','535: Talquin Interconncet Pwr Source');
// 	createPendingInspection('L-INSP_ALL','900: Building Final');
// 	createPendingInspection('L-INSP_ALL','921: Solar PV Final');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0495
// bldInsp = 0*1;
// elecInsp = 0*1;
// plumbInsp = 0*1;
// mechInsp = 0*1;
// envInsp = 0*1;
// septicInsp = 0*1;
// sewerInsp = 0*1;
// signInsp = 0*1;
// gasInsp = 0*1;
// mhInsp = 0*1;
// pvInsp = 0*1;
// faInsp = 0*1;
// poolInsp = 0*1;
// demoInsp = 0*1;
// fireInsp = 0*1;
// drivewayInsp = 0*1;
// wElecInsp = 0*1;
// wMechInsp = 0*1;
// wPlumbInsp = 0*1;
// wDoorInsp = 0*1;
// wPoolInsp = 0*1;
// wRoofInsp = 0*1;
// wSolarPVInsp = 0*1;
// wSolarTHInsp = 0*1;
if ((appMatch('Building/Residential/*/*') && bldInsp > 0) || (appMatch('Building/Commercial/*/*') && bldInsp > 0)) {
	createPendingInspection('L-INSP_ALL','100: Footing');
	createPendingInspection('L-INSP_ALL','101: Setbacks');
	createPendingInspection('L-INSP_ALL','102: Re-Bar');
	createPendingInspection('L-INSP_ALL','103: Lintel');
	createPendingInspection('L-INSP_ALL','104: Roof');
	createPendingInspection('L-INSP_ALL','105: Slab');
	createPendingInspection('L-INSP_ALL','106: Exterior Sheathing');
	createPendingInspection('L-INSP_ALL','107: Framing');
	createPendingInspection('L-INSP_ALL','108: Sprinklers');
	createPendingInspection('L-INSP_ALL','109: Insulation');
	createPendingInspection('L-INSP_ALL','110: Drywall');
	createPendingInspection('L-INSP_ALL','115: Roof Deck Re-Nail');
	createPendingInspection('L-INSP_ALL','116: Roof Secondary Barrier');
	createPendingInspection('L-INSP_ALL','199: Other Building');
	createPendingInspection('L-INSP_ALL','900: Building Final');
	}

if (appMatch('Building/*/Alteration/NA') && AInfo['Improvement Type'] == 'Roof') {
	createPendingInspection('L-INSP_ALL','104: Roof');
	createPendingInspection('L-INSP_ALL','115: Roof Deck Re-Nail');
	createPendingInspection('L-INSP_ALL','116: Roof Secondary Barrier');
	createPendingInspection('L-INSP_ALL','505: Notice of Commencement');
	createPendingInspection('L-INSP_ALL','595: Re-Inspection');
	createPendingInspection('L-INSP_ALL','596: After Hours Inspection');
	createPendingInspection('L-INSP_ALL','917: Roofing Final');
	}

if (elecInsp > 0) {
	createPendingInspection('L-INSP_ALL','200: Electric Rough-In');
	createPendingInspection('L-INSP_ALL','201: Electric Rough Ceiling');
	createPendingInspection('L-INSP_ALL','202: Electric HVAC Changeout');
	createPendingInspection('L-INSP_ALL','203: Electric Service Changeout');
	createPendingInspection('L-INSP_ALL','204: Pool Electrical Bonding');
	createPendingInspection('L-INSP_ALL','205: Underground Electric');
	createPendingInspection('L-INSP_ALL','299: Other Electric');
	createPendingInspection('L-INSP_ALL','500: Temporary Power');
	createPendingInspection('L-INSP_ALL','501: Electrical Release');
	createPendingInspection('L-INSP_ALL','506: Notified Electric Provider');
	}

if (elecInsp > 0) {
	createPendingInspection('L-INSP_ALL','507: Talquin Temp Electric Release');
	createPendingInspection('L-INSP_ALL','508: Talquin Final Electric Release');
	createPendingInspection('L-INSP_ALL','509: Talquin New Cut-In & Res Meter Set');
	createPendingInspection('L-INSP_ALL','510: Talquin MH Cut-In & Meter Set');
	createPendingInspection('L-INSP_ALL','511: Talquin New Cut-In & Comm Meter Set');
	createPendingInspection('L-INSP_ALL','512: Talquin Temp Cut-In');
	createPendingInspection('L-INSP_ALL','513: Talquin Increase Service');
	createPendingInspection('L-INSP_ALL','514: Talquin Relocate Service');
	}

if (elecInsp > 0) {
	createPendingInspection('L-INSP_ALL','515: City New Cut-In & Residential Meter Set');
	createPendingInspection('L-INSP_ALL','516: City MH Cut-In & Meter Set');
	createPendingInspection('L-INSP_ALL','517: City Cut-In & Comm Meter Set');
	createPendingInspection('L-INSP_ALL','518: City Temp Cut-In');
	createPendingInspection('L-INSP_ALL','519: City Increase Service');
	createPendingInspection('L-INSP_ALL','520: City Relocate Service');
	createPendingInspection('L-INSP_ALL','521: City New Cut-In');
	createPendingInspection('L-INSP_ALL','522: City Residential Meter Set');
	createPendingInspection('L-INSP_ALL','523: City Comm Meter Set');
	createPendingInspection('L-INSP_ALL','524: City MH Meter Set');
	createPendingInspection('L-INSP_ALL','525: City Reseal Meter');
	createPendingInspection('L-INSP_ALL','526: City Reseal Meter Increase Service');
	createPendingInspection('L-INSP_ALL','527: City Reset Meter');
	createPendingInspection('L-INSP_ALL','528: City Reset Meter Increase Service');
	}

if (elecInsp > 0) {
	createPendingInspection('L-INSP_ALL','529: City Relocate Increase Service');
	createPendingInspection('L-INSP_ALL','530: City Reconnect Service');
	createPendingInspection('L-INSP_ALL','531: City Reconnect Increase Service');
	createPendingInspection('L-INSP_ALL','532: City House Meter');
	createPendingInspection('L-INSP_ALL','533: City New C/I Com Mtr Set W/CTS');
	createPendingInspection('L-INSP_ALL','534: City Interconnect Pwr Source');
	createPendingInspection('L-INSP_ALL','535: Talquin Interconncet Pwr Source');
	createPendingInspection('L-INSP_ALL','901: Electrical Final');
	}

if (appMatch('Building/Residential/*/*') && gasInsp > 0 || appMatch('Building/Commercial/*/*') && gasInsp > 0) {
	createPendingInspection('L-INSP_ALL','300: Gas Piping Test');
	createPendingInspection('L-INSP_ALL','307: Boiler');
	createPendingInspection('L-INSP_ALL','309: Underground Gas');
	createPendingInspection('L-INSP_ALL','310: Chill Water/Hot Water/Steam');
	createPendingInspection('L-INSP_ALL','398: Other Gas');
	createPendingInspection('L-INSP_ALL','502: Gas Meter Set Residential');
	createPendingInspection('L-INSP_ALL','503: Gas Meter Set Commercial');
	createPendingInspection('L-INSP_ALL','902: Gas Final');
	}

if (mechInsp > 0) {
	createPendingInspection('L-INSP_ALL','301: Ductwork');
	createPendingInspection('L-INSP_ALL','302: Range Hood');
	createPendingInspection('L-INSP_ALL','303: Refrigeration');
	createPendingInspection('L-INSP_ALL','304: Ventilation');
	createPendingInspection('L-INSP_ALL','305: HVAC');
	createPendingInspection('L-INSP_ALL','306: HVAC Chageout');
	createPendingInspection('L-INSP_ALL','308: Underground Mechanicial');
	createPendingInspection('L-INSP_ALL','310: Chill Water/Hot Water/Steam');
	createPendingInspection('L-INSP_ALL','399: Other Mechanicial');
	createPendingInspection('L-INSP_ALL','903: Mechanical Final');
	}

if (plumbInsp > 0) {
	createPendingInspection('L-INSP_ALL','400: Building Sewer');
	createPendingInspection('L-INSP_ALL','401: Plumbing Rough-In Slab');
	createPendingInspection('L-INSP_ALL','402: Plumbing Rough-In');
	createPendingInspection('L-INSP_ALL','403: Tub Set');
	createPendingInspection('L-INSP_ALL','404: Water Heater');
	createPendingInspection('L-INSP_ALL','405: Perculation');
	createPendingInspection('L-INSP_ALL','406: Septic');
	createPendingInspection('L-INSP_ALL','407: Water System');
	createPendingInspection('L-INSP_ALL','408: Mobile Home Sewer');
	createPendingInspection('L-INSP_ALL','409: Mobile Home Water');
	}

if (plumbInsp > 0) {
	createPendingInspection('L-INSP_ALL','410: COT Backflow Device');
	createPendingInspection('L-INSP_ALL','411: Talquin Backflow Device');
	createPendingInspection('L-INSP_ALL','412: Pool Pressure Test');
	createPendingInspection('L-INSP_ALL','499: Other Plumbing');
	createPendingInspection('L-INSP_ALL','905: Plumbing Final');
	}

if (envInsp > 0) {
	createPendingInspection('L-INSP_ALL','600: Intent to Proceed Environmental');
	createPendingInspection('L-INSP_ALL','601: Pre-Construction Environmental');
	createPendingInspection('L-INSP_ALL','640: Site Visit/Permit Review');
	createPendingInspection('L-INSP_ALL','660: Environmental Inspection');
	createPendingInspection('L-INSP_ALL','680: Notification/Official Letter');
	createPendingInspection('L-INSP_ALL','690: Consultation/Telephone Call');
	}

if (appMatch('Building/Commercial/*/*') && AInfo['Actual Improvement Area'] > 0) {
	createPendingInspection('L-INSP_ALL','605: Environmental Final Comm');
	}

if (appMatch('Building/Residential/*/*') && envInsp > 0) {
	createPendingInspection('L-INSP_ALL','605: Environmental Final Res');
	}

if (fireInsp > 0) {
	createPendingInspection('L-INSP_ALL','910: Firewalls');
	createPendingInspection('L-INSP_ALL','911: Fire Alarm Final');
	createPendingInspection('L-INSP_ALL','912: Fire Sprinkler Final');
	createPendingInspection('L-INSP_ALL','913: Fire SPR Interior Hydro');
	createPendingInspection('L-INSP_ALL','914: Fire SPR  Underground Hydro');
	createPendingInspection('L-INSP_ALL','908: Fire Final');
	}

if (mhInsp >0) {
	createPendingInspection('L-INSP_ALL','101: Setbacks');
	createPendingInspection('L-INSP_ALL','408: Mobile Home Sewer');
	createPendingInspection('L-INSP_ALL','409: Mobile Home Water');
	createPendingInspection('L-INSP_ALL','510: Talquin MH Cut-In & Meter Set');
	createPendingInspection('L-INSP_ALL','516: City MH Cut-In & Meter Set');
	createPendingInspection('L-INSP_ALL','524: City MH Meter Set');
	createPendingInspection('L-INSP_ALL','605: Environmental Final Res');
	createPendingInspection('L-INSP_ALL','660: Environmental Inspection');
	createPendingInspection('L-INSP_ALL','904: Mobile Home Final');
	}

if (poolInsp >0) {
	createPendingInspection('L-INSP_ALL','100: Footing');
	createPendingInspection('L-INSP_ALL','102: Re-Bar');
	createPendingInspection('L-INSP_ALL','105: Slab');
	createPendingInspection('L-INSP_ALL','111: Pool');
	createPendingInspection('L-INSP_ALL','112: Pool Fence Gate');
	createPendingInspection('L-INSP_ALL','113: Pool Re-Liner');
	createPendingInspection('L-INSP_ALL','204: Pool Electrical Bonding');
	createPendingInspection('L-INSP_ALL','412: Pool Pressure Test');
	createPendingInspection('L-INSP_ALL','916: Swimming Pool Final');
	createPendingInspection('L-INSP_ALL','660: Environmental Inspection');
	}

if (nocInsp >0) {
	createPendingInspection('L-INSP_ALL','505');
	}

if (drivewayInsp > 0) {
	createPendingInspection('L-INSP_ALL','800: Driveway Inspection');
	createPendingInspection('L-INSP_ALL','909: Driveway Final');
	}

if (appMatch('Building/*/Sign/*') && signInsp > 0) {
	createPendingInspection('L-INSP_ALL','100: Footing');
	createPendingInspection('L-INSP_ALL','101: Setbacks');
	createPendingInspection('L-INSP_ALL','102: Re-Bar');
	createPendingInspection('L-INSP_ALL','105: Slab');
	createPendingInspection('L-INSP_ALL','107: Framing');
	createPendingInspection('L-INSP_ALL','114: Sign Footing');
	createPendingInspection('L-INSP_ALL','906: Sign Final');
	}

// DISABLED: EMSE:Add-Inspections-Building:0630 not comp
// if (demoInsp > 0) {
// 	createPendingInspection('L-INSP_ALL','');
// 	createPendingInspection('L-INSP_ALL','');
// 	createPendingInspection('L-INSP_ALL','');
// 	createPendingInspection('L-INSP_ALL','');
// 	createPendingInspection('L-INSP_ALL','');
// 	createPendingInspection('L-INSP_ALL','');
// 	createPendingInspection('L-INSP_ALL','');
// 	createPendingInspection('L-INSP_ALL','');
// 	createPendingInspection('L-INSP_ALL','');
// 	createPendingInspection('L-INSP_ALL','');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0635 Fire Alarm Insp
// if (faInsp > 0) {
// 	createPendingInspection('L-INSP_ALL','911: Fire Alarm Final');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0640 Solar PV Insp
// if (appMatch('Building/Web/Solar Photovoltaic/*') && wSolarPVInsp > 0 && !isScheduled('921: Solar PV Final','Pending')) {
// 	createPendingInspection('L-INSP_ALL','100: Footing');
// 	createPendingInspection('L-INSP_ALL','534: City Interconnect Pwr Source');
// 	createPendingInspection('L-INSP_ALL','535: Talquin Interconncet Pwr Source');
// 	createPendingInspection('L-INSP_ALL','900: Building Final');
// 	createPendingInspection('L-INSP_ALL','921: Solar PV Final');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0645 Solar Therm HW Insp
// if (appMatch('Building/Web/Solar Thermal Hot Water/*') && wSolarTHInsp > 0) {
// 	createPendingInspection('L-INSP_ALL','100: Footing');
// 	createPendingInspection('L-INSP_ALL',900: Building Final');
// 	createPendingInspection('L-INSP_ALL','905: Plumbing Final');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0650 Solar Therm SP Insp
// if (appMatch('Building/Web/Solar Swimming Pool/*') && wSolarTHInsp > 0) {
// 	createPendingInspection('L-INSP_ALL','100: Footing');
// 	createPendingInspection('L-INSP_ALL',900: Building Final');
// 	createPendingInspection('L-INSP_ALL','905: Plumbing Final');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0655
// if (appMatch('Building/Web/Solar PV/*') && wSolarPVInsp > 0) {
// 	createPendingInspection('L-INSP_ALL','100: Footing');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0660
// if (appMatch('Building/Web/Solar Photovoltaic/*') && wSolarPVInsp > 0) {
// 	createPendingInspection('L-INSP_ALL','534: City Interconnect Pwr Source');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0665
// if (inspResult != 'AP') {
// 	createPendingInspection(inspGroup,inspType);
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0670 True
// if (true >0) {
// 	createPendingInspection('L-INSP_ALL','100: Footing');
// 	createPendingInspection('L-INSP_ALL','102: Re-Bar');
// 	createPendingInspection('L-INSP_ALL','105: Slab');
// 	createPendingInspection('L-INSP_ALL','111: Pool');
// 	createPendingInspection('L-INSP_ALL','112: Pool Fence Gate');
// 	createPendingInspection('L-INSP_ALL','113: Pool Re-Liner');
// 	createPendingInspection('L-INSP_ALL','204: Pool Electrical Bonding');
// 	createPendingInspection('L-INSP_ALL','412: Pool Pressure Test');
// 	createPendingInspection('L-INSP_ALL','916: Swimming Pool Final');
// 	createPendingInspection('L-INSP_ALL','660: Environmental Inspection');
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0675
// if (!checkInspectionResult(inspType,'Pending') && inspStatus != 'Approved') {
// 	createPendingInspection('L-INSP_ALL', inspType);
// 	}

if (bldInsp > 0) {
	editAppSpecific('Building Final Required','CHECKED');
	allInspReq = allInspReq +1;
	}

if (checkInspectionResult('900: Building Final','Approved')) {
	editAppSpecific('Building Final Completed', 'CHECKED');
	allInspComplete = allInspComplete +1;
	}

if (drivewayInsp > 0) {
	editAppSpecific('Driveway Final Required', 'CHECKED');
	allInspReq = allInspReq +1;
	}

if (checkInspectionResult('909: Driveway Final','Approved')) {
	editAppSpecific('Driveway Final Completed', 'CHECKED');
	allInspComplete = allInspComplete +1;
	}

if (elecInsp > 0) {
	editAppSpecific('Electrical Final Required', 'CHECKED');
	allInspReq = allInspReq +1;
	}

if (checkInspectionResult('901: Electrical Final','Approved')) {
	editAppSpecific('Electrical Final Completed', 'CHECKED');
	allInspComplete = allInspComplete +1;
	}

if (appMatch('Building/Commercial/*/*') && AInfo['Actual Improvement Area'] > 0) {
	editAppSpecific('Environmental Final Required', 'CHECKED');
	allInspReq = allInspReq +1;
	}

if (checkInspectionResult('605: Environmental Final Comm','Approved') || checkInspectionResult('605: Environmental Final Res','Approved')) {
	editAppSpecific('Environmental Final Completed', 'CHECKED');
	allInspComplete = allInspComplete +1;
	}

if (fireInsp > 0) {
	editAppSpecific('Fire Final Required', 'CHECKED');
	allInspReq = allInspReq +1;
	}

if (checkInspectionResult('908: Fire Final','Approved')) {
	editAppSpecific('Fire Final Completed', 'CHECKED');
	allInspComplete = allInspComplete +1;
	}

if (gasInsp > 0) {
	editAppSpecific('Gas Final Required', 'CHECKED');
	allInspReq = allInspReq +1;
	}

if (checkInspectionResult('902: Gas Final','Approved')) {
	editAppSpecific('Gas Final Completed', 'CHECKED');
	allInspComplete = allInspComplete +1;
	}

if (mechInsp > 0) {
	editAppSpecific('Mechanical Final Required', 'CHECKED');
	allInspReq = allInspReq +1;
	}

if (checkInspectionResult('903: Mechanical Final','Approved')) {
	editAppSpecific('Mechanical Final Completed', 'CHECKED');
	allInspComplete = allInspComplete +1;
	}

if (nocInsp >0) {
	editAppSpecific('Notice of Commencement Required', 'CHECKED');
	allInspReq = allInspReq +1;
	}

if (checkInspectionResult('505: Notice of Commencement','Approved')) {
	editAppSpecific('Notice of Commencement Completed', 'CHECKED');
	allInspComplete = allInspComplete +1;
	}

if (plumbInsp > 0) {
	editAppSpecific('Plumbing Final Required', 'CHECKED');
	allInspReq = allInspReq +1;
	}

if (checkInspectionResult('905: Plumbing Final','Approved')) {
	editAppSpecific('Plumbing Final Completed', 'CHECKED');
	allInspComplete = allInspComplete +1;
	}

if (poolInsp >0) {
	editAppSpecific('Pool Final Required', 'CHECKED');
	allInspReq = allInspReq +1;
	}

if (checkInspectionResult('916: Swimming Pool Final','Approved')) {
	editAppSpecific('Pool Final Completed', 'CHECKED');
	allInspComplete = allInspComplete +1;
	}

if (appMatch('Building/*/Alteration/NA') && AInfo['Improvement Type'] == 'Roof') {
	editAppSpecific('Roof Final Required', 'CHECKED');
	allInspReq = allInspReq +1;
	}

if (checkInspectionResult('917: Roofing Final','Approved')) {
	editAppSpecific('Roof Final Completed', 'CHECKED');
	allInspComplete = allInspComplete +1;
	}

if (mhInsp >0) {
	editAppSpecific('Mobile Home Final Required', 'CHECKED');
	allInspReq = allInspReq +1;
	}

if (checkInspectionResult('904: Mobile Home Final','Approved')) {
	editAppSpecific('Mobile Home Final Completed', 'CHECKED');
	allInspComplete = allInspComplete +1;
	}

if (checkInspectionResult('906: Sign Final','Approved')) {
	editAppSpecific('Sign Final Completed', 'CHECKED');
	allInspComplete = allInspComplete +1;
	}

if (checkInspectionResult('911: Fire Alarm Final','Approved')) {
	editAppSpecific('Fire Alarm Final Completed', 'CHECKED');
	allInspComplete = allInspComplete +1;
	}

editAppSpecific('Inspections Added','CHECKED');
// DISABLED: EMSE:Add-Inspections-Building:0860
// if (allInspComplete == allInspReq && isTaskStatus('Inspections','Final Inspection Complete') == false && (AInfo['Application Status'] == 'Issued' || AInfo['Application Status'] == 'Issued Redac')) {
// 	editAppSpecific('All Required Final Inspections Completed', 'CHECKED');
// 	closeTask('Inspections','Final Inspection Complete','Updated by Script','');
// 	editAppSpecific('Final Date',today);
// 	editAppSpecific('COFO Date',today);
// 	}

if (AInfo['Final Date'] == null) {
	editAppSpecific('COFO Date',today);
	}

// DISABLED: EMSE:Add-Inspections-Building:0890
// if (isScheduled('505: Notice of Commencement')) {
// 	editInspectionRequiredFlag('505: Notice of Commencement',true);
// 	allInspComplete  allInspReq;
// 	}

// DISABLED: EMSE:Add-Inspections-Building:0900
// if (appMatch('Building/Commercial/*/*') && AInfo['Actual Improvement Area'] > 0) {
// 	createPendingInspection('L-INSP_ALL','605: Environmental Final Comm');
// 	}

}
