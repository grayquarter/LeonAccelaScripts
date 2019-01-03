
// DISABLED: WTUA:DevelopmentSvc/Permited Use Verification/*/*:0010
// if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
// 	editAppSpecific('Permit Issued Date', sysDateMMDDYYYY);
// 	}

if (wfTask == 'Planner' && wfStatus == 'Approved') {
	editAppSpecific('Released Date', sysDateMMDDYYYY);
}
