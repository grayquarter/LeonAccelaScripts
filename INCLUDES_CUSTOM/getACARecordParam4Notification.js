function getACARecordParam4Notification(params,acaUrl) {
	// Standard INCLUDES_ACCELA_FUNCTION version 9.2

	itemCap = (arguments.length == 3) ? arguments[2] : capId;

	addParameter(params, "$$acaRecordUrl$$", getACARecordURL(acaUrl,itemCap));

	return params;	

}

/**
 * Builds a URL path for the record in ACA
 * Site URL
 * 
 * @param acaUrl
 *			ACA URL Path to append
 * @param {capId}
 *			capId - optional capId object
 * @returns {string}
 *			acaUrl - URL path for the record in ACA
 *
 */
 
