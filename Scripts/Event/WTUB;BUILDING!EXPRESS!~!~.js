
logDebug('Script: WTUB:Building/Express/*/*' + ', wfTask: ' + wfTask + ', wfStatus: ' + wfStatus);
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	var result = checkWorkflowTaskUpdate_BLD(wfTask,wfStatus,false);
	}

if (wfTask == 'Certificate of Completeness' && wfStatus == 'CC Issued') {
	var result = checkWorkflowTaskUpdate_BLD(wfTask,wfStatus,false);
	}

