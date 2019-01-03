function redactRecord() {
	var accessByACA = "N";
	if (arguments.length > 0 && arguments[0]) accessByACA = ((arguments[0] == true || arguments[0] == "Y" || arguments[0] == "Yes")? "N":"Y");
	//Set B1PERMIT.B1_ACCESS_BY_ACA to "N" for partial CAP to not allow that it is searched by ACA user.
	aa.cap.updateAccessByACA(capId, accessByACA);
}

