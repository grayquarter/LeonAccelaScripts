
// DISABLED: IRSA:Enforcement/*/*/*:01
// disableTokens = true;
// DISABLED: IRSA:Enforcement/*/*/*:02
// holdCapId = capId;
// parentArray = getParents('*/*/*/*');
// DISABLED: IRSA:Enforcement/*/*/*:03
// if (inspType == 'Initial Investigation' && inspResult == 'Compliant') {
// 	br_nchTask('Initial Investigation','No Violation','Updated by Inspection Result','Note');
// 	closeTask('Case Closed','Closed','','');
// 	if (parentArray && parentArray.length > 0) for (thisParent in parentArray) if (parentArray[thisParent]) AInfo['capId = parentArray[thisParent];
// 	closeTask('Investigation','No Violation Found','','');
// 	capId = holdCapId;
// 	'];
// 	}

// DISABLED: IRSA:Enforcement/*/*/*:04
// if (inspType == 'Initial Investigation' && inspResult == 'In Violation') {
// 	closeTask('Initial Investigation','In Violation','Updated by Inspection Result','Note');
// 	}

// DISABLED: IRSA:Enforcement/*/*/*:05
// if (inspType == 'Initial Investigation' && inspResult == 'Citation') {
// 	loopTask('Initial Investigation','Recommend Citation','Updated by Inspection Result','Note');
// 	}

// DISABLED: IRSA:Enforcement/*/*/*:06
// if (inspType == 'Follow-Up Investigation' && inspResult == 'Compliant') {
// 	br_nchTask('Follow-Up Investigation','Violation Corrected','Updated by Inspection Result','Note');
// 	closeTask('Case Closed','Closed','','');
// 	if (parentArray && parentArray.length > 0) for (thisParent in parentArray) if (parentArray[thisParent]) AInfo['capId = parentArray[thisParent];
// 	closeTask('Investigation','Corrected','','');
// 	capId = holdCapId;
// 	'];
// 	}

// DISABLED: IRSA:Enforcement/*/*/*:07
// if (inspType == 'Follow-Up Investigation' && inspResult == 'Citation') {
// 	closeTask('Follow-Up Investigation','Recommend Citation','Updated by Inspection Result','Note');
// 	}

// DISABLED: IRSA:Enforcement/*/*/*:08
// if (inspType == 'Follow-Up Investigation' && inspResult == 'Abated') {
// 	br_nchTask('Follow-Up Investigation','Violation Abaated','Updated by Inspection Result','Note');
// 	closeTask('Case Closed','Closed','','');
// 	if (parentArray && parentArray.length > 0) for (thisParent in parentArray) if (parentArray[thisParent]) AInfo['capId = parentArray[thisParent];
// 	closeTask('Investigation','Corrected','','');
// 	capId = holdCapId;
// 	'];
// 	}

// DISABLED: IRSA:Enforcement/*/*/*:09
// if (inspType == 'Initial Investigation' && inspResult == 'Compliant') {
// 	updateTask('Incident Status','No Violation','Updated by Inspection Result','Note');
// 	closeTask('Incident Status','Closed','','');
// 	}

// DISABLED: IRSA:Enforcement/*/*/*:10
// if (inspType == 'Initial Investigation' && inspResult == 'In Violation') {
// 	updateTask('Incident Status','In Violation','Updated by Inspection Result','Note');
// 	}

// DISABLED: IRSA:Enforcement/*/*/*:11
// if (inspType == 'Initial Investigation' && inspResult == 'Citation') {
// 	updateTask('Incident Status','Citation Issued','Updated by Inspection Result','Note');
// 	}

// DISABLED: IRSA:Enforcement/*/*/*:12
// if (inspType == 'Follow-Up Investigation' && inspResult == 'Compliant') {
// 	updateTask('Incident Status','Violation Corrected','Updated by Inspection Result','Note');
// 	closeTask('Incident Status','Closed','','');
// 	}

// DISABLED: IRSA:Enforcement/*/*/*:13
// if (inspType == 'Follow-Up Investigation' && inspResult == 'Citation') {
// 	updateTask('Incident Status','Citation Issued','Updated by Inspection Result','Note');
// 	}

// DISABLED: IRSA:Enforcement/*/*/*:14
// if (inspType == 'Follow-Up Investigation' && inspResult == 'Abated') {
// 	updateTask('Incident Status','Violation Abated','Updated by Inspection Result','Note');
// 	closeTask('Incident Status','Closed','','');
// 	}

