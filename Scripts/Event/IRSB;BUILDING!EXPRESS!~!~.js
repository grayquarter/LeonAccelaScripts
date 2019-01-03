
if (typeof(formatErrorB) == 'undefined') {
	var formatErrorB = '<font color=Red>';
	var formatErrorE = '</font>';
	// formatting for custom error messages;
}

if (balanceDue > 0) {
	showMessage = true;
	comment(formatErrorB + 'ALERT: No inspections can be scheduled or resulted until all the fees are paid in full' + formatErrorE);
	cancel = true;
}

if (!isTaskStatus('Permit Issuance', 'Issued')) {
	showMessage = true;
	comment(formatErrorB + 'ALERT: No inspections can be scheduled or resulted until Permit has been issued' + formatErrorE);
	cancel = true;
}

if (isTaskStatus('Permit Issuance', 'Issued') && !isTaskActive('Inspections')) {
	showMessage = true;
	comment(formatErrorB + 'ALERT: No inspections can be scheduled or resulted unless Inspections Task is active' + formatErrorE);
	cancel = true;
}
