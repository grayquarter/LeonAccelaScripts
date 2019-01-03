function setcontactRelationship() {

if (matches(currentUserID,'ADMIN')) {
	showDebug = false;
	showMessage= false;
	}

iCont = null;
contactArray = new Array();
contactArray = getContactArray();
if (contactArray.length > 0) {
	for (iCont in contactArray) 
//start replaced branch: EMSE:SetContactRelationshipToContactTypeLoop
 {
showDebug = 1;
tContact = contactArray[iCont];
aa.print('ContactName: ' + tContact['firstName'] + ' ' + tContact['lastName'] + ' ' + tContact['contactType']);
contactSetRelation(tContact['contactSeqNumber'], tContact['contactType']);

}
//end replaced branch: EMSE:SetContactRelationshipToContactTypeLoop;
	}

}
