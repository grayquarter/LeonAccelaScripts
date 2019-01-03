if (ConditionGroup != null && ConditionGroup.equals('ALL')) {
    // Save condition id and license number to ASI (template attributes)
    var rslt = aa.caeCondition.getCAECondition(ConditionId, CAELienseNumber);

    if (rslt.getSuccess()) {
        var condition = rslt.getOutput(); // com.accela.aa.emse.dom.CAEConditionScriptModel
        var templateModel = condition.getTemplateModel();

        if (templateModel) {
            templateModel = updateConditionTemplateModel(templateModel, 'CND_EXTD_ID', 'I', 'Condition Id', ConditionId);
            templateModel = updateConditionTemplateModel(templateModel, 'CND_EXTD_ID', 'I', 'License Number', CAEValidatedNumber);
            templateModel = updateConditionTemplateModel(templateModel, 'CND_EXTD_ID', 'I', 'Source', 'AA');
            condition.setTemplateModel(templateModel);

            var editRslt = aa.caeCondition.editCAECondition(condition);

            if (!editRslt.getSuccess()) {
                aa.print(editRslt.getSuccess() + ':ErrorType=' + editRslt.getErrorType() + ' :ErrorMessage=' + editRslt.getErrorMessage());
            }
            else {
                aa.print(editRslt.getSuccess() + ':' + editRslt.getOutput());
            }
        }

        var bodyObject = {}; 

        bodyObject['License Number'] = new String(CAEValidatedNumber ? CAEValidatedNumber : '');
        bodyObject['Condition Id'] = condition.getConditionNumber();
        bodyObject['Type'] = new String(condition.getConditionType());
        bodyObject['Group'] = new String(condition.getConditionGroup());
        bodyObject['Issue Date'] = dateTimeToJsonString(condition.getIssuedDate());
        bodyObject['Effective Date'] = dateTimeToJsonString(condition.getEffectDate());
        bodyObject['Expiration Date'] = dateTimeToJsonString(condition.getExpireDate());
        bodyObject['Impact Code'] = new String(condition.getImpactCode());
        bodyObject['Status'] = new String(condition.getConditionStatusType());
        bodyObject['Status Date'] = dateTimeToJsonString(condition.getStatusDate());
        bodyObject['Source'] = "AA";
        bodyObject['Active'] = "A";

        var body = JSON.stringify(bodyObject);
        var response = getTlcResponse('POST', 'v2/Condition/', 'live', body);

        aa.print(body);
        aa.print(response);
    }
}