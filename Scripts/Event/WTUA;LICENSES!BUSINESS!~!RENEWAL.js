
if (wfTask == 'License Issuance' && wfStatus == 'Renewed') {
	aa.runScriptInNewTransaction('WorkflowTaskUpdateAfter4Renew');
}
