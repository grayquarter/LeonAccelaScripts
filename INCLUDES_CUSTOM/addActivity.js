function addActivity(actType, actName, actDescription) {
	//Optional 4 parameter = Assigned to User ID must match an AA user
	//Optional 5 parameter = CapID
	//Optional 6 parameter = Internal only Valid Values Y=Yes N=No
	//Optional 7 parameter = Activity Status [String(30)]
	//Optional 8 parameter = Priority [String(30)]
	//Optional 9 parameter = Due Date [aa.util.date]
	var itemCap = capId;
	var thisUser = currentUserID;
	var thisInternalOnly = "Y"
		var actStatus = null;
	var actPriority = null;
	var actDueDate = null;
	if (arguments.length > 3 && arguments[3])
		thisUser = arguments[3];
	if (arguments.length > 4 && arguments[4])
		itemCap = arguments[4];
	if (arguments.length > 5 && arguments[5])
		thisInternalOnly = arguments[5];
	if (arguments.length > 6 && arguments[6])
		actStatus = arguments[6];
	if (arguments.length > 7 && arguments[7])
		actPriority = arguments[7];
	if (arguments.length > 8 && arguments[8])
		actDueDate = arguments[8];
	//Validate Activity Name to 30 characters since it will abort the EMSE thread if it fails
	if (actName.length > 30) {
		logDebug("Activity Name longer than 30 characters truncated to 30");
		actName = actName.substring(0, 30);
	}
	if (actStatus && !matches(actStatus, "Not Started", "In Process", "Completed", "Waiting on someone else", "Deferred")) {
		logDebug("Invalid Activity Status ignored");
		actStatus = null;
	}
	if (actPriority && !matches(actPriority, "Low", "Normal", "High")) {
		logDebug("Invalid Activity Priority ignored");
		actPriority = null;
	}
	// Get assigned user if not specified from USER_ACTIVITY.
	if (!thisUser) {
		var thisUser = lookup("USER_ACTIVITY", actType)
	}
	if (!thisUser) {
		thisUser = lookup("USER_ACTIVITY", actType + ":" + actName)
	}
	var userObj = null;
	var pUser = null;
	if (thisUser) {
		userObj = aa.person.getUser(thisUser);
		if (!userObj.getSuccess()) { //Validate User
			logDebug("Could not find user to assign to");
			return false;
		} else {
			pUser = userObj.getOutput();
		}
	}

	// var myAct = aa.proxyInvoker.newInstance("com.accela.aa.aamain.servicerequest.ActivityModel").getOutput();
	var myAct = aa.activity.getNewActivityModel().getOutput();
	var pUser = userObj.getOutput();
	myAct.setCapID(itemCap);
	myAct.setServiceProviderCode(itemCap.getServiceProviderCode());
	myAct.setActivityName(actName);
	myAct.setActivityDescription(actDescription);
	myAct.setActivityType(actType);
	myAct.setActDate(aa.util.now());
	myAct.setAuditID((thisUser ? thisUser : currentUserID));
	myAct.setAuditDate(aa.util.now());
	myAct.setAuditStatus("A");
	if (pUser)
		myAct.setAssignedDeptNumber(pUser.getDeptOfUser());
	if (thisUser)
		myAct.setAssignedStaffID(thisUser);
	myAct.setInternalOnly(((thisInternalOnly && thisInternalOnly == "N") ? "N" : "Y"));
	if (actStatus)
		myAct.setActStatus(actStatus);
	if (actPriority)
		myAct.setPriority(actPriority);
	if (actDueDate)
		myAct.setActDueDate(actDueDate);

	// var actObj = aa.proxyInvoker.newInstance("com.accela.aa.aamain.servicerequest.ActivityBusiness").getOutput();
	var actNbr = null;
	var actResult = aa.activity.createActivity(myAct);
	if (actResult) {
		logDebug("Added Activity: " + actType + " " + actName);
		actNbr = actResult.getOutput();
	} else {
		logDebug("ERROR: Failed to create activity of type: " + aType + ", name: " + aName + " : " + actResult.getErrorMessage());
	}
	return actNbr; // returns Activity Number if activity was created.
}
