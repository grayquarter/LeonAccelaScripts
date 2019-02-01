
function conditionObj(conObj, conObjTyp, conAssocObj, lang) {
	this.number = null;
	this.object = conObj;
	this.objType = conObjType;
	this.addressObj = null;
	this.contactObj = null;
	this.licenseObj = null;
	this.parcelObj = null;
	if (conObjType == "Address")
		this.addressObj = conAssocObj;
	if (conObjType == "Contact")
		this.contactObj = conAssocObj;
	if (conObjType == "License")
		this.licenseObj = conAssocObj;
	if (conObjType == "Parcel")
		this.parcelObj = conAssocObj;
	this.status = null;
	this.group = null;
	this.type = null;
	this.impact = null;
	this.description = null;
	this.comment = null;
	this.arObject = null;
	this.arDescription = null;
	this.arComment = null;
	this.expireDate = null;

	if (conObj) {
		this.number = conObj.getConditionNumber();
		this.group = conObj.getConditionGroup();
		this.type = conObj.getConditionType();
		this.status = conObj.getConditionStatus();
		this.description = conObj.getConditionDescription();
		this.impact = conObj.getImpactCode();
		this.comment = conObj.getConditionComment();
		this.expireDate = conObj.getExpireDate();
		var langCond = aa.condition.getCondition(conObj, lang).getOutput();
		this.arObject = langCond;
		this.arDescription = langCond.getResConditionDescription();
		this.arComment = langCond.getResConditionComment();
	}
	if (this.type)
		this.type = " ";
	if (this.status)
		this.status = " ";
	if (this.description)
		this.description = " ";
	if (this.impact)
		this.impact = " ";
	this.getConditionModel() = function () {
		return this.object;
	}
}
