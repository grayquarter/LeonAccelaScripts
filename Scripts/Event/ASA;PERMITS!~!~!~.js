
if (matches(currentUserID, 'ADMIN')) {
	showDebug = false;
	showMessage = false;
}

//replaced branch(EMSE:SetContactRelationshipToContactType)
setcontactRelationship();
// DISABLED: ASA:Permits/*/*/*:03
// if (matches(currentUserID,'PUBLICUSER122')) {
// 	br_nch('EMSE:TESTDRIVE_ASA');
// 	}
