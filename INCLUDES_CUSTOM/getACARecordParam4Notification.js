function getACARecordParam4Notification(params, acaUrl) {
	// Standard INCLUDES_ACCELA_FUNCTION version 9.2

	itemCap = (arguments.length == 3) ? arguments[2] : capId;

	addParameter(params, "$$acaRecordUrl$$", getACARecordURL(acaUrl, itemCap));

	return params;

}

