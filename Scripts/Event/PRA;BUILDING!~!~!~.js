
// DISABLED: PRA:Building/*/*/*:0010
// br_nch('EMSE:Add-Inspections-Building');
// DISABLED: PRA:Building/*/*/*:0015
// if (cap.isCreatedByACA() && appTypeArray[1] == 'VelocityHall') {
// 	br_nch('EMSE:Add-Inspections-VelocityHall');
// 	}

// DISABLED: PRA:Building/*/*/*:0020
// if (appTypeArray[1] == 'VelocityHall' && appTypeArray[2] == 'Mechanical' && !isScheduled('903: Mechanical Final') && getAppSpecific('Valuation of Work Performed') >= 7500) {
// 	}

if (matches(appTypeArray[1], 'Residential', 'Commercial') && appTypeArray[2] != 'Quick Turn' && isTaskActive('Payment') == 'True' && balanceDue == 0 && PaymentTotalPaidAmount >= .01) {
	closeTask('Payment', 'Payment Processed', 'Updated by Script', '');
}

if (matches(appTypeArray[2], 'Quick Turn') && isTaskActive('Payment') == 'True' && balanceDue == 0 && PaymentTotalPaidAmount >= .01) {
	closeTask('Payment', 'Payment Processed', 'Updated by Script', '');
	email("garrisong@leoncountyfl.gov;" + AInfo['Assigned To'] + "@leoncountyfl.gov", "noreply@leoncountyfl.gov", "Quick Turn Permit " + capIDString + " Permit Issuance Task is Ready for action by you", "The following permit, " + capIDString + " is ready for your review");
	activateTask('Permit Issuance');
}

if (matches(appTypeArray[1], 'VelocityHall') && isTaskActive('Inspections') == 'True' && balanceDue == 0 && PaymentTotalPaidAmount >= .01 && capStatus == 'Fees Due') {
	updateAppStatus('Issued', 'Additional Fees Paid');
}

if (matches(appTypeArray[1], 'Residential') && isTaskActive('Inspections') == 'True' && balanceDue == 0 && PaymentTotalPaidAmount >= .01 && capStatus == 'Fees Due' && AInfo['Redact Record'] == 'Yes') {
	updateAppStatus('Issued Redacted', 'Additional Fees Paid');
}

if (matches(appTypeArray[1], 'Residential', 'Commercial') && isTaskActive('Inspections') == 'True' && balanceDue == 0 && PaymentTotalPaidAmount >= .01 && capStatus == 'Fees Due' && (AInfo['Redact Record'] == 'No' || AInfo['Redact Record'] == null)) {
	updateAppStatus('Issued', 'Additional Fees Paid');
}
