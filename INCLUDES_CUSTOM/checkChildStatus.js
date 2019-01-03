function checkChildStatus(parentCapId, childCapType, childCapStatusesExcluded, checkChildBalanceDue) {
	// Returns capId object of first child of pParentCapId whose cap type matches pCapType parameter
	// Wildcard * may be used in pCapType, e.g. "Building/Commercial/*/*"
	// Optional 3rd parameter pChildCapIdSkip: capId of child to skip
	var children = new Array();
	var itemCap = capId;
	if (parentCapId) itemCap = parentCapId;
	var childCapIdsSkip = null;
	if (arguments.length > 4)	var childCapIdsSkip = arguments[4];

	var typeArray = childCapType.split("/");
	if (typeArray.length != 4) {
		logDebug("**ERROR in checkChildStatus function parameter.  The following cap type parameter is incorrectly formatted: " + childCapType);
		return false;
	}

	var getCapResult = aa.cap.getChildByMasterID(itemCap);
	if (!getCapResult.getSuccess()) {
		logDebug( "**WARNING: checkChildStatus function found no children: " + getCapResult.getErrorMessage());
		return false;
	}

	var childArray = getCapResult.getOutput();
	if (!childArray || childArray.length == 0) {
		logDebug( "**WARNING: checkChildStatus function found no children");	
		return false;
	}

	var childCapId;
	var capTypeStr = "";
	var childTypeArray;
	var isMatch;
	for (xx in childArray) {
		childCapId = childArray[xx].getCapID();
		if (childCapIdSkip && exists(childCapId,childCapIdsSkip)) continue; //skip over this child
		childCap = aa.cap.getCap(childCapId).getOutput();
		childTypeResult = childCap.getCapType();
		childTypeAlias = childTypeResult.getAlias();
		childTypeString = childTypeResult.toString();	// Convert child cap type to string ("Building/A/B/C")
		childTypeArray = childTypeString.split("/");
		capName = cap.getSpecialText();
		childCapStatus = childCap.getCapStatus();
		partialChildCap = !childCap.isCompleteCap();

		isMatch = true;
		for (yy in childTypeArray) { //looking for matching cap type
			if (!typeArray[yy].equals(childTypeArray[yy]) && !typeArray[yy].equals("*")) {
				isMatch = false;
				break;
			}
		}
		if (!isMatch) continue;

		if (checkChildBalanceDue) {
			var childBalanceDue = 0;
			var childCapDetailObjResult = aa.cap.getCapDetail(childCapId);		
			if (childCapDetailObjResult.getSuccess()) {
				childCapDetail = childCapDetailObjResult.getOutput();
				childBalanceDue = childCapDetail.getBalance();
			}
			if (childBalanceDue > 0) { children.push(childCapId); continue }
		}
		if (childCapStatusesExcluded && exists(childCapStatus,childCapStatusesExcluded)) continue; //skip over children with these statuses
		children.push(childCapId);
	}
	return children;
}

