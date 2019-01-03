
if (matches(appStatus, 'Certificate of Occupancy', 'Certificate of Completion', 'Certificate of Occupancy Redac', 'Certificate of Completion Reda', 'Finaled') && (AInfo['Environmental Management Do Not COFO'] == 'CHECKED' || AInfo['Building Plans Review Do Not COFO'] == 'CHECKED' || AInfo['Code Compliance-License Do Not COFO'] == 'CHECKED' || AInfo['Development Services Do Not COFO'] == 'CHECKED')) {
	cancel = true;
	// endBranch() disabled during script migration
	// endBranch();
}

if (matches(appStatus, 'Issued', 'Issued Redacted') && (AInfo['Environmental Management Do Not Issue'] == 'CHECKED' || AInfo['Building Plans Review Do Not Issue'] == 'CHECKED' || AInfo['Code Compliance-License Do Not Issue'] == 'CHECKED' || AInfo['Development Services Do Not Issue'] == 'CHECKED')) {
	cancel = true;
	// endBranch() disabled during script migration
	// endBranch();
}
