function getInspectionParams4Notification_TPS(params) {
	// pass in a hashtable and it will add the additional parameters to the table
	// Tries to add parameters based on existing Globals then uses inspection object if available.
	var itemCap = capId;
	if (arguments.length > 1 && arguments[1])
		itemCap = arguments[1]; // Optional itemCap to retrieve inspection data.
	if (typeof(inspId) == "undefined")
		return params;

	var inspObjResult = aa.inspection.getInspection(itemCap, inspId);
	if (inspObjResult.getSuccess())
		var inspObj = inspObjResult.getOutput();
	else
		var inspObj = null;

	if (typeof(inspInspector) == "undefined")
		inspInspector = (inspObj ? inspObj.getInspector() : null);
	var inspInspectorName = (inspInspector ? inspInspector.toString() : "");
	var inspInspectorFirstName = "",
	inspInspectorLastName = inspInspectorName,
	inspInspectorTitle = "",
	inspInspectorEmail = "",
	inspInspectorPhone = "";
	var inspInspectorObj = ((inspInspector && inspInspector.getClass() == "class com.accela.aa.aamain.people.SysUserModel") ? inspInspector : (inspInspector ? aa.person.getUser(inspInspector).getOutput() : null));
	if (inspInspectorObj) {
		inspInspectorName = (inspInspectorObj.getDistinguishedName() == null ? "" : inspInspectorObj.getDistinguishedName());
		if (inspInspectorName == "") {
			inspInspectorName = (inspInspectorObj.getFirstName() == null ? "" : inspInspectorObj.getFirstName());
			inspInspectorName += (inspInspectorObj.getLastName() == null ? "" : " " + inspInspectorObj.getLastName());
		}
		inspInspectorFirstName = inspInspectorObj.getFirstName();
		inspInspectorLastName = inspInspectorObj.getLastName();
		inspInspectorTitle = inspInspectorObj.getTitle(); // This is usually null so get it from the User's personModel.
		userObj = getUser(inspInspectorObj.getUserID());
		if (userObj) {
			inspInspectorTitle = userObj.getTitle();
		}

		inspInspectorEmail = inspInspectorObj.getEmail();
		inspInspectorPhone = inspInspectorObj.getPhoneNumber();
		inspInspector = inspInspectorObj.getUserID();
	}

	addParameter(params, "$$inspId$$", inspId);
	addParameter(params, "$$inspGroup$$", inspGroup);
	addParameter(params, "$$inspType$$", inspType);
	addParameter(params, "$$inspInspector$$", inspInspector);
	addParameter(params, "$$inspInspectorName$$", inspInspectorName);
	addParameter(params, "$$inspInspectorFirstName$$", inspInspectorFirstName);
	addParameter(params, "$$inspInspectorLastName$$", inspInspectorLastName);
	addParameter(params, "$$inspInspectorTitle$$", inspInspectorTitle);
	addParameter(params, "$$inspInspectorEmail$$", inspInspectorEmail);
	addParameter(params, "$$inspInspectorPhone$$", inspInspectorPhone);
	addParameter(params, "$$inspSchedDate$$", inspSchedDate);
	// addParameter(params, "$$inspSchedDateF$$", aa.util.formatDate(inspSchedDate, "MM/dd/yyyy"));
	addParameter(params, "$$inspTime$$", (typeof(inspTime) == "undefined" ? "" : inspTime));
	//  addParameter(params, "$$inspTimeF$$", aa.util.formatDate(inspTime, "hh:mm a"));
	logDebug("inspection     : " + params.get("$$inspId$$") + " " + params.get("$$inspGroup$$") + "." + params.get("$$inspType$$"));
	logDebug("inspInspector  : " + params.get("$$inspInspector$$") + ", " + params.get("$$inspInspectorName$$") + ", title: " + params.get("$$inspInspectorTitle$$") + ", email:" + params.get("$$inspInspectorEmail$$") + ", phone:" + params.get("$$inspInspectorPhone$$"));
	logDebug("inspSchedDate  : " + params.get("$$inspSchedDate$$") + " " + params.get("$$inspTime$$"));
	// Add Inspection Estimated Start Time if available
	if (typeof(inspEstStartTime) != "undefined") {
		addParameter(params, "$$inspEstStartTime$$", inspEstStartTime);
	} else if (inspObj) {
		addParameter(params, "$$inspEstStartTime$$", inspObj.getInspection().getActivity().getEstimatedStartTime());
	} else {
		addParameter(params, "$$inspEstStartTime$$", "");
	}
	// Add Inspection Result Parameters if available
	if (typeof(inspResult) != "undefined") {
		addParameter(params, "$$inspResult$$", inspResult);
		addParameter(params, "$$inspResultDate$$", inspResultDate);
		addParameter(params, "$$inspResultComment$$", (typeof(inspResultComment) == "undefined" ? inspComment : inspResultComment));
		addParameter(params, "$$inspTotalTime$$", inspTotalTime);
	} else if (inspObj) {
		addParameter(params, "$$inspResult$$", inspObj.getInspection().getInspectionStatus());
		if (inspObj.getInspectionStatusDate())
			inspResultDateF = inspObj.getInspectionStatusDate().getMonth() + "/" + inspObj.getInspectionStatusDate().getDayOfMonth() + "/" + inspObj.getInspectionStatusDate().getYear();
		else
			inspResultDateF = null;
		addParameter(params, "$$inspResultDate$$", inspResultDateF);
		addParameter(params, "$$inspResultComment$$", inspObj.getInspection().getResultComment());
		addParameter(params, "$$inspTotalTime$$", inspObj.getTimeTotal());
	} else {
		addParameter(params, "$$inspResult$$", "");
		addParameter(params, "$$inspResultDate$$", "");
		addParameter(params, "$$inspResultComment$$", "");
	}
	logDebug("inspResult     : " + params.get("$$inspResultDate$$") + " " + params.get("$$inspResult$$") + "; " + params.get("$$inspResultComment$$"));

	var inspObjResult = aa.inspection.getInspection(itemCap, inspId);
	if (inspObjResult.getSuccess()) {
		var inspObj = inspObjResult.getOutput();
		addParameter(params, "$$inspSpecialInfo$$", inspObj.getInspection().getSpecialInfo());
		addParameter(params, "$$inspRequestor$$", inspObj.getInspection().getActivity().getRequestor());
		addParameter(params, "$$inspReqPhoneNum$$", inspObj.getInspection().getActivity().getReqPhoneNum());
		addParameter(params, "$$inspRequestComment$$", inspObj.getInspection().getRequestComment());
		addParameter(params, "$$inspUnitNBR$$", inspObj.getInspection().getActivity().getUnitNBR());
		addParameter(params, "$$inspEstimatedStartTime$$", inspObj.getInspection().getActivity().getEstimatedStartTime());
		var inspRequired = inspObj.getInspection().getActivity().getRequiredInspection();
		addParameter(params, "$$inspRequired$$", (inspRequired == "Y" ? "Required" : ""));
		var inspBillable = inspObj.getInspection().getActivity().getInspBillable();
		addParameter(params, "$$inspBillable$$", (inspBillable == "Y" ? "Billable" : ""));
		var inspOvertime = inspObj.getInspection().getActivity().getOvertime();
		addParameter(params, "$$inspOvertime$$", (inspOvertime == "Y" ? "Overtime" : ""));
		addParameter(params, "$$inspResultType$$", inspObj.getInspection().getActivity().getInspResultType());

		logDebug("inspRequestor  : " + params.get("$$inspRequestor$$") + " " + params.get("$$inspReqPhoneNum$$"));
		logDebug("inspRequestComment: " + params.get("$$inspRequestComment$$"));
		logDebug("inspRequired   : " + params.get("$$inspRequired$$"));
		logDebug("inspResultType : " + params.get("$$inspResultType$$"));
		// Uncomment as necessary
		//        addParameter(params, "$$inspLatitude$$", inspObj.getInspection().getActivity().getLatitude());
		//        addParameter(params, "$$inspLongitude$$", inspObj.getInspection().getActivity().getLongitude());
		//        logDebug("inspLatitude   : " + params.get("$$inspLatitude$$"));
		//        logDebug("inspLongitude  : " + params.get("$$inspLongitude$$"));
		//        addParameter(params, "$$inspGrade$$", inspObj.getInspection().getActivity().getGrade());
		//        logDebug("inspGrade      : " + params.get("$$inspGrade$$"));
		//        addParameter(params, "$$inspTotalScore$$", inspObj.getInspection().getActivity().getTotalScore());
		//        addParameter(params, "$$inspMaxPoints$$", inspObj.getInspection().getActivity().getMaxPoints());
		//        logDebug("inspTotalScore : " + params.get("$$inspTotalScore$$") + " of " + params.get("$$inspMaxPoints$$"));
		//        addParameter(params, "$$inspMajorViolation$$", inspObj.getInspection().getActivity().getMajorViolation());
		//        logDebug("inspMajorViolation : " + params.get("$$inspMajorViolation$$"));
	}

	return params;
}
