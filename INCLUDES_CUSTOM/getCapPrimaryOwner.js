function getCapPrimaryOwner() {

	var oName;
	var oPhone;
	var oInfo;
	capOwnerResult = aa.owner.getOwnerByCapId(capId);

	if (capOwnerResult.getSuccess()) {
		owner = capOwnerResult.getOutput();

		for (o in owner) {
			thisOwner = owner[o];
			if (thisOwner.getPrimaryOwner() == "Y") {
				oName = thisOwner.getOwnerFullName();
				oPhone = thisOwner.getPhone().toString();
				oInfo = oName + "; " + oPhone;
				break;
			}
		}
	}
	return oInfo;
}
