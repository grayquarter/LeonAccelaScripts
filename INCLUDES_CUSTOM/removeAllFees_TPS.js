function removeAllFees_TPS(itemCap) { // Removes all non-invoiced fee items for a CAP ID
	var feeSeq_L = new Array();
	var paymentPeriod_L = new Array();
	var removedFees = new Array();

	exceptionFeeList = [];						// Optional: Array of Fee Codes to exclude
	if (arguments.length > 1 && arguments[1]) exceptionFeeList = arguments[1];
	feeStatusList = ["NEW"];					// Optional: Array of Fee Status to included: NEW, INVOICED. Default is NEW (non-invoiced)
	if (arguments.length > 2 && arguments[2]) feeStatusList = arguments[2];
	logDebug("removeAllFees_TPS("+ itemCap + (arguments.length > 1? ",["+exceptionFeeList.join(",")+"]":",null") + (arguments.length > 2? ",["+feeStatusList.join(",")+"]":"") + ") " + arguments.length);

    var feeResult = aa.fee.getFeeItems(itemCap);
    if (!feeResult.getSuccess())
    { logDebug("**ERROR: getting fee items: " + feeResult.getErrorMessage()); return false; }

	var feeList = feeResult.getOutput();
	for (feeNum in feeList) {
		var feeScriptModel = feeList[feeNum]; // F4FeeItemScriptModel
		var feeSeq = feeList[feeNum].getFeeSeqNbr();
		var feeCode = feeList[feeNum].getFeeCod();
		var feeStatus = feeList[feeNum].getFeeitemStatus();
		var feePeriod = feeList[feeNum].getPaymentPeriod();
		if (exists(feeList[feeNum].getFeeCod(),exceptionFeeList)) 		continue;	// Skip Fees based on Fee Code
		if (!exists(feeList[feeNum].getFeeitemStatus(),feeStatusList)) 	continue;	// Skip Fees based on Fee Status
		if (feeList[feeNum].getFeeitemStatus().equals("NEW")) {
			var editResult = aa.finance.removeFeeItem(itemCap, feeSeq);
			if (editResult.getSuccess()) {
				removedFees.push(feeList[feeNum]);
				logDebug("Removed existing Fee Item: " + feeSeq + " " + feeList[feeNum].getFeeCod() + " " + feeList[feeNum].getFeeDescription());
			} else {
				logDebug("**ERROR: removing fee item: " + feeSeq + " " + feeList[feeNum].getFeeCod() + "): " + editResult.getErrorMessage());
				break;
			}
		} else if (feeList[feeNum].getFeeitemStatus().equals("INVOICED")) {
			voidResult = aa.finance.voidFeeItem(itemCap, feeSeq);
			if (voidResult.getSuccess()) {
				removedFees.push(feeList[feeNum]);
				logDebug("Voided existing Fee Item: " + feeSeq + " " + feeList[feeNum].getFeeCod() + " " + feeList[feeNum].getFeeDescription());
			} else {
				logDebug("**ERROR: voiding fee item: " + feeSeq + " " + feeList[feeNum].getFeeCod() + "): " + voidResult.getErrorMessage());
				break;
			}

			// Add to Invoice List
			feeSeq_L.push(feeSeq);
			paymentPeriod_L.push(feePeriod);
		} else {
			logDebug("Ignoring existing Fee Item: " + feeSeq + " " + feeList[feeNum].getFeeCod() + " " + feeList[feeNum].getFeeDescription() + ", Status: " + feeList[feeNum].getFeeitemStatus() + ", Period: " + feeList[feeNum].getPaymentPeriod());
		}
	}
	// Invoice Voided Fees
	if (feeSeq_L.length) {
		invoiceResult = aa.finance.createInvoice(itemCap, feeSeq_L, paymentPeriod_L);
		if (invoiceResult.getSuccess())
			logMessage("Invoicing assessed fee items is successful.");
		else
			logMessage("**ERROR: Invoicing voided fee items to app # " + itemCap.getCustomID() + " was not successful.  Reason: " +  invoiceResult.getErrorMessage());
	}
	return removedFees;
}

 
