function getPrimaryOwnerParams4Notification_TPS(params) {
	// pass in a hashtable and it will add the additional parameters to the table
	// Modified from INCLUDES_ACCELA_FUNCTIONS v9.3.0
	// -- Allows for optional capId
	// -- If primary owner is not found uses first one if finds.
    var itemCap = capId;
	if (arguments.length > 1 && arguments[1]) itemCap = arguments[1]; // Optional CapId

	thisOwner = null;
	capOwnerResult = aa.owner.getOwnerByCapId(itemCap);
	if (capOwnerResult.getSuccess()) {
		owner = capOwnerResult.getOutput();
		for (o in owner) {
			thisOwner = owner[o];
			if (thisOwner.getPrimaryOwner() == "Y") {
				break;	
			}
		}
	}
	if (thisOwner) {
		addParameter(params, "$$ownerFullName$$", thisOwner.getOwnerFullName());
		addParameter(params, "$$ownerPhone$$", thisOwner.getPhone()); // 07/18/2018 RS Fixed getPhone.
		addParameter(params, "$$ownerEmail$$", thisOwner.getEmail()); // 07/18/2018 RS Added.
	}

	return params;
}
 

/*------------------------------------------------------------------------------------------------------/
/ Function to retrieve primary parcel number
/ IK Consulting, LLC, 3/23/17
/------------------------------------------------------------------------------------------------------*/
