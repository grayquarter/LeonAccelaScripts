function checkFeeNeedUpdate_Building(newFeeArray, valuationBasedFees) {
	var feesNeedUpdate = false;
	var valuationOfWorkPerformed = (AInfo["Valuation of Work Performed"] ? parseInt(AInfo["Valuation of Work Performed"]) : null);
	var existingFees = loadFees_TPS(capId, ["NEW", "INVOICED"], "By Code");
	for (ff in newFeeArray) {
		feeCode = newFeeArray[ff];
		if (exists(feeCode, ["5015-010", "5043-010"]))
			continue; // Ignore State Surcharges.
		if (!existingFees[feeCode]) {
			feesNeedUpdate = true;
			logDebug("Fees need updating (Adding Fee): " + feeCode);
		} // Check if adding fee.
	}

	if (!feesNeedUpdate) {
		logDebug("Checking existing fees...");
		for (ff in existingFees) {
			thisFee = existingFees[ff];
			if (!exists(thisFee.status, ["NEW", "INVOICED"]))
				continue; // Ignore fees unless they are NEW or INVOICED.
			if (exists(thisFee.code, ["5015-010", "5043-010"]))
				continue; // Ignore State Surcharges.
			if (!exists(thisFee.code, newFeeArray)) {
				feesNeedUpdate = true;
				logDebug("Fees need update (Remove Fee): " + thisFee.code);
			} // Check if fee exists that doesn't now.
			if (exists(thisFee.code, valuationBasedFees)) { // Valuation Based Fees
				oldValuation = thisFee.unit;
				if (oldValuation != valuationOfWorkPerformed) {
					feesNeedUpdate = true;
					logDebug("Fees need update (Valuation): " + thisFee.code + " qty: " +  + thisFee.unit + " to " + valuationOfWorkPerformed);
				} else {
					logDebug("Found Valuation " + thisFee.unit + " of " + thisFee.code);
				}
			}
		}
	}
	return feesNeedUpdate;
}
