
if (wfTask == 'Plans Coordination' && wfStatus == 'Ready to Issue') {
	editAppSpecific('Plan Review Expiration Date', dateAdd(null, 180));
}

if (wfTask == 'Plan Review' && wfStatus == 'Approved') {
	editAppSpecific('Plan Review Expiration Date', dateAdd(null, 180));
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	editAppSpecific('Permit Issued Date', sysDateMMDDYYYY);
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	editAppSpecific('Permit Expiration Date', dateAdd(null, 180));
}

if (wfTask == 'Permit Status' && wfStatus == 'Ready to Issue') {
	editAppSpecific('Plan Review Expiration Date', dateAdd(null, 180));
}

if (wfTask == 'Permit Status' && wfStatus == 'Permit Issued') {
	editAppSpecific('Permit Issued Date', sysDateMMDDYYYY);
}

if (wfTask == 'Permit Status' && wfStatus == 'Permit Issued') {
	editAppSpecific('Permit Expiration Date', dateAdd(null, 180));
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	licEditExpInfo(null, AInfo['Permit Expiration Date']);
}

if (wfTask == 'Permit Status' && wfStatus == 'Permit Issued') {
	licEditExpInfo(null, AInfo['Permit Expiration Date']);
}
