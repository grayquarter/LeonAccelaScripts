function createPendingInspection_TPS(iGroup, iType) { // optional Cap ID
    var itemCap = capId;
    if (arguments.length > 2 && arguments[2]) itemCap = arguments[2]; // use cap ID specified in args
    var iRequired = false;
    if (arguments.length > 3 && arguments[3]) iRequired = arguments[3]; // use required inspection flag specified in args
    var requestComment = null;
    if (arguments.length > 4 && arguments[4]) requestComment = arguments[4]; // use Request Comment specified in args
    var requestorUserID = null;
    if (arguments.length > 5 && arguments[5]) requestorUserID = arguments[5]; // use Requestor User ID specified in args
    var requestorPhone = null;
    if (arguments.length > 6 && arguments[6]) requestorPhone = arguments[6]; // use Requestor Phone specified in args

    var itmResult = aa.inspection.getInspectionType(iGroup, iType)
    if (!itmResult.getSuccess()) {
        logDebug("**WARNING error retrieving inspection types: " + itmResult.getErrorMessage);
        return false;
    }

    var itmArray = itmResult.getOutput();
    if (!itmArray) {
        logDebug("**WARNING could not find any matches for inspection group " + iGroup + " and type " + iType);
        return false;
    }

    var itmSeq = null;
    for (thisItm in itmArray) {
        var it = itmArray[thisItm];
        if (it.getGroupCode().toUpperCase().equals(iGroup.toUpperCase()) && it.getType().toUpperCase().equals(iType.toUpperCase()))
            itmSeq = it.getSequenceNumber();
    }

    if (!itmSeq) {
        logDebug("**WARNING could not find an exact match for inspection group " + iGroup + " and type " + iType);
        return false;
    }

    var inspModel = aa.inspection.getInspectionScriptModel().getOutput().getInspection();
    var activityModel = inspModel.getActivity();
    activityModel.setInspSequenceNumber(itmSeq);
    activityModel.setCapIDModel(itemCap);
    if (iRequired) activityModel.setRequiredInspection("Y");
	if (requestorUserID) activityModel.setRequestorUserID(requestorUserID); 
//	if (requestorUserID) activityModel.setAuditID(requestorUserID); // This does not work.
	if (requestorPhone) activityModel.setReqPhoneNum(requestorPhone);
	if (requestComment) inspModel.getRequestComment().setText(requestComment); // Update Request Comment to indicate added by Script.

    pendingResult = aa.inspection.pendingInspection(inspModel)
    if (pendingResult.getSuccess()) {
        logDebug("Successfully created pending inspection group " + iGroup + " and type " + iType);
    } else {
        logDebug("**WARNING could not create pending inspection group " + iGroup + " and type " + iType + " Message: " + pendingResult.getErrorMessage());
        return false;
    }

    iNumber = pendingResult.getOutput();
    iObjResult = aa.inspection.getInspection(itemCap, iNumber);
    if (!iObjResult.getSuccess()) {
        logDebug("**WARNING retrieving inspection " + iNumber + " : " + iObjResult.getErrorMessage());
        return false;
    }

    iObj = iObjResult.getOutput();
    return iObj.getInspection()
}

 
