function updateFeeItemInvoiceFlag(feeSeq,finvoice)
{    // Standard INCLUDES_ACCELA_FUNCTION version 9.2
	if(feeSeq == null)
		return;
	if(publicUser && !cap.isCompleteCap())
	{
		var feeItemScript = aa.finance.getFeeItemByPK(capId,feeSeq);
		if(feeItemScript.getSuccess)
		{
			var feeItem = feeItemScript.getOutput().getF4FeeItem();
			feeItem.setAutoInvoiceFlag(finvoice);
			aa.finance.editFeeItem(feeItem);
		}
	}
}

