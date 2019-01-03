function getPrimaryParcelParam4Notification_TPS(params) {
	// pass in a hashtable and it will add the additional parameters to the table
    var itemCap = capId;
	if (arguments.length > 1 && arguments[1]) itemCap = arguments[1]; // Optional CapId

	// Get Parcel ID
	var parcelId = null;
	var capParcelResult = aa.parcel.getParcelandAttribute(itemCap, null);
	if (capParcelResult.getSuccess()) {
		var parcels = capParcelResult.getOutput().toArray();
		for (pp in parcels) {
			parcelId = parcels[pp].getParcelNumber();
			if (parcels[pp].getPrimaryParcelFlag() == "Y") break; // Use Primary if found.
		}
	}
	addParameter(params, "$$parcelId$$", parcelId);

	return params;
}
 
