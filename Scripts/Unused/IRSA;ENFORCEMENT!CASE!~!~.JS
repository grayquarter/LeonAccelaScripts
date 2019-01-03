
if (inspResult == 'Invalid') {
	branchTask('Open','Invalid','Updated by Inspection Result Script','');
	closeTask('Closed','Closed','Updated by Inspection Result Script','');
	}

// DISABLED: IRSA:Enforcement/Case/*/*:05
// if (inspResult != 'Invalid' && inspResult != 'In Compliance') {
// 	createPendingInspection(inspGroup,inspType);
// 	}

