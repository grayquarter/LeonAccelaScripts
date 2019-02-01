function getPrimaryAddressLineParam4Notification_TPS(params) {
	// pass in a hashtable and it will add the additional parameters to the table
	// Modified from INCLUDES_ACCELA_FUNCTIONS v9.3.0
	// -- Allows for optional capId
	var itemCap = capId;
	if (arguments.length > 1 && arguments[1])
		itemCap = arguments[1]; // Optional CapId

	var addressLine = "";
	adResult = aa.address.getPrimaryAddressByCapID(itemCap, "Y");
	if (adResult.getSuccess()) {
		ad = adResult.getOutput().getAddressModel();
		addParameter(params, "$$addressLine$$", ad.getDisplayAddress());
	}

	return params;
}
