var today = new Date();
today = Date(aa.date.currentDate);
username = currentUserID;
if (wfTask == 'Request Submittal' && wfStatus == 'Fees Due Notice') {
	editAppSpecific('Send Fees Due', 'CHECKED');
	editAppSpecific('Send Fees Due Date', today);
	cclEmailRpt();
}

if (wfTask == 'CCL Review' && wfStatus == 'Send No Information Found Letter Email') {
	editAppSpecific('Send No Information Found EM', 'CHECKED');
	editAppSpecific('Send No Information Found EM Date', today);
	cclEmailRpt();
	closeTask('Complete', 'Closed', 'Updated by Script', '');
	editAppSpecific('Complete', 'CHECKED');
	editAppSpecific('Complete Date', today);
	updateAppStatus('Complete');
}

if (wfTask == 'CCL Review' && wfStatus == 'Send Parcel in City Email') {
	editAppSpecific('Send Parcel in City Limits EM', 'CHECKED');
	editAppSpecific('Send Parcel in City Limits EM Date', today);
	cclEmailRpt();
	closeTask('Complete', 'Closed', 'Updated by Script', '');
	editAppSpecific('Complete', 'CHECKED');
	editAppSpecific('Complete Date', today);
	updateAppStatus('Complete');
}

if ((wfTask == 'CCL Review' && wfStatus == 'Send Parcel/Address Do Not Match Email' || wfTask == 'Request Submittal' && wfStatus == "Parcel and Address Don't Match Notice")) {
	editAppSpecific('Send Address/Parcel Do Not Match', 'CHECKED');
	editAppSpecific('Send Address/Parcel Do Not Match Date', today);
	cclEmailRpt();

}

if (wfTask == 'CCL Review' && wfStatus == 'Send Results Letter Email') {
	editAppSpecific('Send Results Letter/EM', 'CHECKED');
	editAppSpecific('Send Results Letter/EM Date', today);
	cclEmailRpt();
	closeTask('Complete', 'Closed', 'Updated by Script', '');
	editAppSpecific('Complete', 'CHECKED');
	editAppSpecific('Complete Date', today);
	updateAppStatus('Complete');
}
