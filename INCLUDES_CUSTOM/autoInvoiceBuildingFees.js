function autoInvoiceBuildingFees()
	//start replaced branch: EMSE:AutoInvoiceBuildingFees
	{
		showMessage = true;
		feeItemArray = aa.fee.getFeeItems(capId, null, 'NEW').getOutput();
		if (feeItemArray) {
			for (FI in feeItemArray)
				//start replaced branch: EMSE:InvoiceTheFee
			{
				thisFeeCode = feeItemArray[FI].getFeeCod();
				thisFeeStatus = feeItemArray[FI].getFeeitemStatus();
				comment('Fee Code = ' + thisFeeCode);
				comment('Fee Status = ' + thisFeeStatus);
				if (thisFeeStatus == 'NEW') {
					invoiceFee(thisFeeCode, 'FINAL');
				}

			}
			//end replaced branch: EMSE:InvoiceTheFee;
		}

		childrenCapId = getChildren('*/*/*/*', capId);
		if (typeof(childrenCapId) == 'object') {
			for (eachchild in childrenCapId)
				invoiceCapFees(childrenCapId[eachchild]);
		}

	}
	//end replaced branch: EMSE:AutoInvoiceBuildingFees;
}
