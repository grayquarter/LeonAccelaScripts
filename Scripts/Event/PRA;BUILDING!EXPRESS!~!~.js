
if (balanceDue <= 0 && exists(capStatus, ['Fees Due']) && isTaskStatus('Permit Issuance', 'Issued')) {
	newCapStatus = 'Issued' + (AInfo['Redact Record'] == 'Yes' ? ' Redacted' : '');
	updateAppStatus(newCapStatus);
}
