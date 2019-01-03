
if (publicUser && appMatch('Building/*/*/*') && !matches(capStatus, 'Issued', 'Temp Certificate of Occupancy', 'TCO Issued', 'ISSUED')) {
	cancel = true;
	showMessage = true;
	comment('You may not schedule this inspection until the Permit has been Issued');
}
