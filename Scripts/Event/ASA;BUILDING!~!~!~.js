
copyParcelGisObjects();
// DISABLED: ASA:Building/*/*/*:012
// aa.finance.reCalculateFees(capId,'CONT',AInfo['Valuation of Work Performed']);
// DISABLED: ASA:Building/*/*/*:013
// br_nch('EMSE: ProjectDox');
// Extra comment

//replaced branch(EMSE:Fees-Building)
feesBuilding();
// DISABLED: ASA:Building/*/*/*:015001 VCH Inspections
// if (appTypeArray[1] == 'VelocityHall') {
// 	br_nch('EMSE:Add-Inspections-VelocityHall');
// 	}

if (appTypeArray[1] == 'Residential' && matches(appTypeArray[2], 'New', 'Manufactured Home') && AInfo['ParcelAttribute.VIR_DW_ACCESS'] == 'COUNTY' && !getChildren('EnvManagement/Driveway Permit/Type1/*')) {
	childId = createChild('EnvManagement', 'Driveway Permit', 'Type1', 'NA', 'Driveway Permit Type1');
	editAppSpecific('Driveway Permit Required', 'Yes');
	editAppSpecific('Driveway Permit Number', childId.getCustomID());
}

sendLPExpiredNotification(capId);
if ((appMatch('Building/Commercial/New/*') || appMatch('Building/Commercial/Multi-Family/*')) && AInfo['Driveway Permit Required'] != 'No') {
	showMessage = true;
	comment('<B><Font Color=BLUE>Note:  Driveway permit may be required.</Font></B>');
}

if (appTypeArray[1] == 'Residential' && matches(appTypeArray[2], 'New', 'Addition', 'Multi-Family', 'Accessory Structure', 'Pool')) {
	LDVchildId = createChild('DevelopmentSvc', 'Land Development Review', 'Project Status Determination', 'NA', 'Project Status Determination');
}

if (appTypeArray[1] == 'Residential' && matches(appTypeArray[2], 'Manufactured Home')) {
	LDVchildId = createChild('DevelopmentSvc', 'Land Development Review', 'Land Use Determination', 'NA', 'Land Use Determination');
}

// DISABLED: ASA:Building/*/*/*:070
// if (matches(appTypeArray[1], 'Commercial','Residential', 'Quick Turn') || matches(appTypeArray[2], 'Demolition')) {
// 	br_nch('EMSE:LP_VERIFY');
// 	}

aa.finance.reCalculateFees(capId, 'CONT', AInfo['Valuation of Work Performed']);
