function addFees_Building() {
	var feesNeedUpdate = null;
	if (arguments.length > 0)
		feesNeedUpdate = arguments[0];
	var feeInvoiced = "Y";
	if (arguments.length > 1)
		feeInvoiced = (arguments[1] ? "Y" : "N");
	var feeSched = "BUILDING";

	var valuationOfWorkPerformed = (AInfo["Valuation of Work Performed"] ? parseInt(AInfo["Valuation of Work Performed"]) : null);
	var newFeeArray = [],
	valuationBasedFees = [],
	inspOptArray = [],
	inspReqArray = [];

	var resultObj = getFees_Inspections_Building(feesNeedUpdate);
	if (resultObj) {
		newFeeArray = resultObj["New Fees"];
		valuationBasedFees = resultObj["Vaulation Based Fees"];
		feesNeedUpdate = resultObj["Need Update"];
		inspOptArray = resultObj["Optional Inspections"];
		inspReqArray = resultObj["Required Inspections"];
	}

	logDebug("New Fees: " + newFeeArray.join(","));
	logDebug("Vaulation Based Fees: " + valuationBasedFees.join(","));

	//	var feesNeedUpdate = false; // Turn this off for now.
	if (!feesNeedUpdate)
		return; // Fees do not need to be updated

	var exceptionFeeList = []; // Exclude Fees Manually added.
	// for (ff in newFeeArray) exceptionFeeList.push(newFeeArray[ff]); // Adjust new Fees instead of removing them.
	// Remove any unnecessary fees
	var removedFees = removeAllFees_TPS(capId, exceptionFeeList, ["NEW", "INVOICED"]);

	// Add Fees
	var recalcFeesFlag = false;
	for (ff in newFeeArray) {
		feeCode = newFeeArray[ff];
		logDebug("Processing new Fee: " + feeCode);
		if (feeCode == "")
			continue;
		feeQty = 1
			if (exists(feeCode, valuationBasedFees)) { // Valuation Based Fees
				feeQty = 0;
				if (valuationOfWorkPerformed)
					feeQty = valuationOfWorkPerformed; // Use Valuation as Fee Quantity
			}
			if (feeQty == 0)
				continue;
			if (!feeExists(feeCode, ["NEW", "INVOICED"])) {
				addFee(feeCode, feeSched, "FINAL", feeQty, feeInvoiced);
			} else if (exists(feeCode, valuationBasedFees)) { // Update Valuation Based Fees.
				updateFee(feeCode, feeSched, "FINAL", feeQty, feeInvoiced);
				recalcFeesFlag = true;
			} else { // Update Valuation Based Fees.
				addFee(feeCode, feeSched, "FINAL", feeQty, feeInvoiced);
				recalcFeesFlag = true;
			}
	}

	if (recalcFeesFlag)
		recalcFees(capId); // Recalculate Fees

	// Check for invoicing of fees
	if (feeSeqList.length && feeInvoiced == "Y") {
		invoiceResult = aa.finance.createInvoice(capId, feeSeqList, paymentPeriodList);
		if (invoiceResult.getSuccess()) {
			logMessage("Invoicing assessed fee items is successful.");
			feeSeqList = new Array();
			paymentPeriodList = new Array();
		} else
			logMessage("**ERROR: Invoicing the fee items assessed to app # " + capIDString + " was not successful.  Reason: " + invoiceResult.getErrorMessage());
	}

	applyPayments(); // Reapply any unapplied payments

	return feesNeedUpdate;
}
