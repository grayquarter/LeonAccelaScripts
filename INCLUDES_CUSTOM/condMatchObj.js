function condMatchObj() {
	this.objType = null;
	this.object = null;
	this.contactObj = null;
	this.addressObj = null;
	this.licenseObj = null;
	this.parcelObj = null;
	this.status = null;
	this.type = null;
	this.impact = null;
	this.description = null;
	this.comment = null;
	this.arObject = null;
	this.arDescription = null;
	this.arComment = null;
	this.expireDate = null;
}
 
/*------------------------------------------------------------------------------------------------------/
|  Author: Pedro Luis Montoya
|  Created: 2016/10/31
|  Function: getConditionTemplateModelValue
|  Summary: Accepts a template model from a CAE Condition, with group name, sub group name, and field 
|           name. The function will search through the template model by transversing the groups and 
|           sub groups to find the correct field and returns the value in the field.
/------------------------------------------------------------------------------------------------------*/
