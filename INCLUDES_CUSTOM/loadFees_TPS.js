function loadFees_TPS() {  // option CapId
	//  load the fees into an array of objects.  Does not
	var itemCap = capId
	if (arguments.length > 0) {
		ltcapidstr = arguments[0]; // use cap ID specified in args
		if (typeof(ltcapidstr) == "string") {
			var ltresult = aa.cap.getCapID(ltcapidstr);
 			if (ltresult.getSuccess())
				itemCap = ltresult.getOutput();
	  		else
				{ logMessage("**ERROR: Failed to get cap ID: " + ltcapidstr + " error: " +  ltresult.getErrorMessage()); return false; }
		} else
			itemCap = ltcapidstr;
	}
	feeStatusList = null;					// Optional: Array of Fee Status to included: NEW, INVOICED. Default is all.
	if (arguments.length > 1 && arguments[1]) feeStatusList = arguments[1];

	var feeArrayType = "List";
	if (arguments.length > 2 && (arguments[2],["By Sequence","By Code"])) feeArrayType = arguments[2];

  	var feeArr = new Array();
	var feeResult=aa.fee.getFeeItems(itemCap);
	if (feeResult.getSuccess())
		{ var feeObjArr = feeResult.getOutput(); }
	else
		{ logDebug( "**ERROR: getting fee items: " + feeResult.getErrorMessage()); return false }

	for (ff in feeObjArr) {
		fFee = feeObjArr[ff];
		if (feeStatusList && !exists(fFee.getFeeitemStatus(),feeStatusList)) continue; // Ignore if not in Fee Status List.
		var myFee = new Fee_TPS(fFee);
		if (feeArrayType == "List") feeArr.push(myFee);
		if (feeArrayType == "By Sequence") feeArr[fFee.getFeeSeqNbr()] = myFee;
		if (feeArrayType == "By Code") feeArr[fFee.getFeeCod()] = myFee; // Warning: Using this option may cause some fees to not be included if they are a duplicate fee code of an existing fee.
	}

	return feeArr;
}

//////////////////
/*------------------------------------------------------------------------------------------------------/
|  New function: loadParcelAttributesFromValidated
|  Used to bring back all parcel attributes, including before a record is created
|  Added by IK Consulting - 8/1/16
/------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------/
/ Function to look up parcel attributes for ASB
/ IK Consulting, LLC, 3/23/17
/------------------------------------------------------------------------------------------------------*/
