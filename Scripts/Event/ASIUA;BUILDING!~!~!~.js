
var myCapId = capId.getCustomID();
aa.finance.reCalculateFees(capId, 'CONT', AInfo['Valuation of Work Performed']);
// DISABLED: ASIUA:Building/*/*/*:0040 ProjectDox
// if (appTypeArray[0] == 'Building') {
// 	br_nch('EMSE: ProjectDox');
// 	}


//replaced branch(EMSE:Fees-Building)
feesBuilding();
// DISABLED: ASIUA:Building/*/*/*:0060
// if (appMatch('Building/VelocityHall/*/*')) {
// 	br_nch('EMSE:Add-Inspections-VelocityHall');
// 	}

if ((appMatch('Building/Residential/*/*') || appMatch('Building/Commercial/*/*')) && isTaskStatus('Quality Check', 'Ready to Issue') == 'True' && (AInfo['Inspections Added'] == null || AInfo['Inspections Added'] == 'UNCHECKED')) {

	//replaced branch(EMSE:Add-Inspections-Building)
	addInspectionsBuilding();
	showMessage = true;
	comment('<font color = red>Branched to EMSE:Add-Inspections-Building</font>');
}

// DISABLED: ASIUA:Building/*/*/*:0080
// if ((appMatch('Building/Commercial/New/*') || appMatch('Building/Commercial/Multi-Family/*')) && AInfo['Driveway Permit Required'] != 'No') {
// 	showMessage = true;
// 	comment('<B><Font Color=BLUE>Note:  Driveway permit may be required.</Font></B>');
// 	}

// DISABLED: ASIUA:Building/*/*/*:0090
// if ((appMatch('Building/Residential/*/*') || appMatch('Building/Commercial/*/*')) && isTaskStatus('Quality Check','Ready to Issue') == true && AInfo['Application Status'] == 'Issued' && AInfo['Inspections Added'] |= CHECKED) {
// 	br_nch('EMSE:Add-Inspections-Building');
// 	}

// DISABLED: ASIUA:Building/*/*/*:0100 Verify LP
// if (matches(appTypeArray[1], 'Commercial','Residential', 'Quick Turn') || matches(appTypeArray[2], 'Demolition')) {
// 	br_nch('EMSE:LP_VERIFY');
// 	}

// DISABLED: ASIUA:Building/*/*/*:0110
// if (myCapId == 'LB1700150') {
// 	br_nch('EMSE:Add-Inspections-Building');
// 	}

if (appTypeArray[0] == 'Building' && appTypeArray[1] == 'Residential' && isTaskActive('Flood Indemnity') == 'True' && getAppSpecific('Flood Declarations Covenent Received') == 'Yes' && getAppSpecific('Flood Indemnity Required') == 'CHECKED') {
	closeTask('Flood Indemnity', 'Flood Indemnity Completed', 'Auto Complete of Flood Indemnity- Updated by Script', '');
	activateTask('Quality Check');
	updateTask('Quality Check', 'In Progress', 'Started by Script', '');
}

// DISABLED: ASIUA:Building/*/*/*:0130 Add VCH Insp
// if (appMatch('Building/VelocityHall/*/*') && getAppSpecific('Valuation of Work Performed') >= 1 && getAppSpecific('Inspections Added') == 'null') {
// 	br_nch('EMSE:Add-Inspections-VelocityHall');
// 	}

// DISABLED: ASIUA:Building/*/*/*:0150 - For Testing
// br_nch('ASB:Building/Web/*/*');
// && AInfo['ProjectDox Review'] == 'CHECKED' && [ProjectDox Project Created] |= CHECKED && AInfo['ProjectDox Email Number'] == Null || AInfo['ProjectDox Email Number'] ==;
// DISABLED: ASIUA:Building/*/*/*:0160 - For Testing
// br_nch('ASB:Building/Web/*/*');
// && AInfo['ProjectDox Review'] == 'CHECKED' && [ProjectDox Project Created] |= CHECKED && AInfo['ProjectDox Email Number'] == Null || AInfo['ProjectDox Email Number'] ==;
