
// DISABLED: ASUA:Building/*/*/*:0010
// if (appTypeArray[1] == 'VelocityHall' && (AInfo['Inspections Added'] == 'null' || AInfo['Inspections Added'] == 'UNCHECKED')) {
// 	br_nch('EMSE:Add-Inspections-VelocityHall');
// 	}

if (matches(capStatus, 'Void')) {
	taskCloseAllExcept('Void', 'Permit has been Voided', '');
	setTask('Payment', 'N', 'N');
	setTask('Addressing Review', 'N', 'N');
	setTask('Completeness Check', 'N', 'N');
	setTask('Driveway Review', 'N', 'N');
	setTask('Septic Sewer', 'N', 'N');
	setTask('Building Plans Review', 'N', 'N');
	setTask('Environmental Inspection Review', 'N', 'N');
	setTask('Contractor License Review', 'N', 'N');
	setTask('Fire Review', 'N', 'N');
	setTask('Environmental Plans Review', 'N', 'N');
	setTask('Quality Check', 'N', 'N');
	setTask('Issuance', 'N', 'N');
	setTask('Zoning Setback Review', 'N', 'N');
	setTask('Certificate of Occupancy', 'N', 'N');
	setTask('Certificate of Completion', 'N', 'N');
	setTask('Fiscal Initial Payment', 'N', 'N');
	setTask('Fiscal', 'N', 'N');
	setTask('Closed', 'N', 'N');
	setTask('Development Service Sign', 'N', 'N');
	setTask('Fiscal Initial Payment', 'N', 'N');
	setTask('Off Site Sign Inventory Permit', 'N', 'N');
	setTask('Permit Issuance', 'N', 'N');
	setTask('Tallahassee Historic Trust', 'N', 'N');
	setTask('Complete', 'N', 'N');
	setTask('Applicant/Resite', 'N', 'N');
	setTask('Applicant/Zoning Setback Review', 'N', 'N');
	setTask('Applicant/Building', 'N', 'N');
	setTask('Applicant/Env-Insp', 'N', 'N');
	setTask('Applicant/Contractor License', 'N', 'N');
	setTask('Flood Indeminty Check', 'N', 'N');
	setTask('Flood Indemnity', 'N', 'N');
	setTask('Intake', 'N', 'N');
}

if (matches(capStatus, 'Withdrawn')) {
	taskCloseAllExcept('Withdrawn', 'Permit has been Withdrawn', '');
	setTask('Payment', 'N', 'N');
	setTask('Addressing Review', 'N', 'N');
	setTask('Completeness Check', 'N', 'N');
	setTask('Driveway Review', 'N', 'N');
	setTask('Septic Sewer', 'N', 'N');
	setTask('Building Plans Review', 'N', 'N');
	setTask('Environmental Inspection Review', 'N', 'N');
	setTask('Contractor License Review', 'N', 'N');
	setTask('Fire Review', 'N', 'N');
	setTask('Environmental Plans Review', 'N', 'N');
	setTask('Quality Check', 'N', 'N');
	setTask('Issuance', 'N', 'N');
	setTask('Zoning Setback Review', 'N', 'N');
	setTask('Certificate of Occupancy', 'N', 'N');
	setTask('Certificate of Completion', 'N', 'N');
	setTask('Fiscal Initial Payment', 'N', 'N');
	setTask('Fiscal', 'N', 'N');
	setTask('Closed', 'N', 'N');
	setTask('Development Service Sign', 'N', 'N');
	setTask('Fiscal Initial Payment', 'N', 'N');
	setTask('Off Site Sign Inventory Permit', 'N', 'N');
	setTask('Permit Issuance', 'N', 'N');
	setTask('Tallahassee Historic Trust', 'N', 'N');
	setTask('Complete', 'N', 'N');
	setTask('Applicant/Resite', 'N', 'N');
	setTask('Applicant/Zoning Setback Review', 'N', 'N');
	setTask('Applicant/Building', 'N', 'N');
	setTask('Applicant/Env-Insp', 'N', 'N');
	setTask('Applicant/Contractor License', 'N', 'N');
	setTask('Flood Indeminty Check', 'N', 'N');
	setTask('Flood Indemnity', 'N', 'N');
	setTask('Intake', 'N', 'N');
}
