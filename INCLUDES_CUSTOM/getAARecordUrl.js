function getAARecordUrl(avUrl) {
    var itemCap = capId;
	if (arguments.length > 1 && arguments[1]) itemCap = arguments[1]; // Optional CapId

    var aaRecordUrl = "";
    var id1 = itemCap.ID1;
    var id2 = itemCap.ID2;
    var id3 = itemCap.ID3;
	var cap = aa.cap.getCap(itemCap).getOutput();
	var capModule = cap.getCapModel().getModuleName();


    aaRecordUrl = avUrl + "/portlets/cap/capsummary/CapTabSummary.do?mode=tabSummary";
    aaRecordUrl += "&serviceProviderCode=" + aa.getServiceProviderCode();
    aaRecordUrl += "&ID1=" + id1 + "&ID2=" + id2 + "&ID3=" + id3;
    aaRecordUrl += "&requireNotice=YES";
    aaRecordUrl += "&clearForm=clearForm";
    aaRecordUrl += "&module=" + capModule;

    logDebug("aaRecordUrl: " + aaRecordUrl);
    return aaRecordUrl;
}

/**
 * Adds a parameter $$acaRecordUrl$$ to a hashtable by buiding a URL path 
 * for the record in ACA
 * 
 * @requires
 * 		addParameter()
 * 		getACARecordURL()
 *
 * @param hashtable
 *			parameters hashtable
 * @param acaUrl
 *			ACA URL Path to append
 * @param {capId}
 *			capId - optional capId object
 * @returns {string}
 *			acaUrl - URL path for the record in ACA
 *
 */

