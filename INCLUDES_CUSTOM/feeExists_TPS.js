function feeExists_TPS() { // optional statuses to check for
	var feeCodeArray = null;
	var feeCodeExceptArray = null;
	var feeStatusArray = null;
	var hasBalance = false;
	var feeArray = new Array();
	//get optional arguments
	if (arguments.length > 0 && arguments[0] != null) feeCodeArray = arguments[0];
	if (arguments.length > 1 && arguments[1] != null) feeStatusArray = arguments[1];
	if (arguments.length > 2 && arguments[0] != null) feeCodeExceptArray = arguments[2];
	if (arguments.length > 3 && arguments[0] != null) hasBalance = arguments[3];

	var feeResult = aa.fee.getFeeItems(capId, null, null);
	if (feeResult.getSuccess()) {
		var feeObjArr = feeResult.getOutput();
	} else {
		logDebug("**ERROR: getting fee items: " + feeResult.getErrorMessage());
		return false
	}
	
	var amtFee = 0, amtPaid = 0;
	for (ff in feeObjArr) {
		if (feeCodeArray && !exists(feeObjArr[ff].getFeeCod(), feeCodeArray)) continue; // Include fees with these fee codes
		if (feeStatusArray && !exists(feeObjArr[ff].getFeeitemStatus(), feeStatusArray)) continue; // Include fees with these fee statuses
		if (feeCodeExceptArray && !exists(feeObjArr[ff].getFeeCod(), feeCodeExceptArray)) continue; // Exclude fees with these fee codes
		if (hasBalance) {																			// Include only fees with a balance.
			amtFee = feeObjArr[ff].getFee();
			amtPaid = 0;
			var pfResult = aa.finance.getPaymentFeeItems(capId, null);
			if (pfResult.getSuccess()) {
				var pfObj = pfResult.getOutput();
				for (ij in pfObj)
					if (feeObjArr[ff].getFeeSeqNbr() == pfObj[ij].getFeeSeqNbr())
						amtPaid += pfObj[ij].getFeeAllocation()
			}
			if ((amtFee - amtPaid) <= 0) continue
		}
		feeArray.push(feeObjArr[ff]);
	}
	return feeArray;
}

