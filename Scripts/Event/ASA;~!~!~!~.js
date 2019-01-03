
// extracted from custom ApplicationSubmitAfter master script

logDebug('----Add/Update License Professional Script----');

var tlcEnv = 'live';

if (capName && capStatus && appTypeString && capStatus == 'void' && appTypeString == 'Licenses/Contractor/General/License' && capName.startsWith('LICENSENUMBER::') && capName.endsWith('::')) {
    var oLicenseNumber = capName.replace('LICENSENUMBER::', '').replace('::', '');

    logDebug('The cap name is: ' + capName);
    logDebug('The cap status is: ' + capStatus);
    logDebug('The cap type is: ' + appTypeString);
    logDebug('The license number is: ' + oLicenseNumber);

    if (oLicenseNumber != null && oLicenseNumber != '' && oLicenseNumber.length != 0) {
        var response = getTlcResponse('GET', 'v2/LicensedProfessional/get?ln=' + oLicenseNumber, tlcEnv);

        if (response !== null && response.trim() !== '') {
            var didAllStepsSucceed = true;
            var contractor = JSON.parse(response);

            logDebug(response);

            if (contractor) {
                var dateToIgnore = '1900-01-01T00:00:00';
                var shouldContinue = true;
                var myLic = licenseProfObject(oLicenseNumber);

                logDebug('-- Expiration Display Date Values --');
                logDebug(contractor['License Expiration']);
                logDebug(contractor['Work Comp Expiration']);
                logDebug(contractor['Liability Expiration']);
                logDebug('-- Expiration Display Completed --');

                if (myLic.refLicModel) {
                    // DO NOTHING
                }
                else {
                    if (contractor['License Expiration'] && contractor['Work Comp Expiration'] && contractor['Liability Expiration'] && contractor['License Expiration'] != dateToIgnore && contractor['Work Comp Expiration'] != dateToIgnore && contractor['Liability Expiration'] != dateToIgnore) {
                        logDebug('Adding new license');

                        var rlpObj = aa.licenseScript.createLicenseScriptModel();

                        rlpObj.setStateLicense(oLicenseNumber);
                        rlpObj.setLicState('FL');
                        rlpObj.setLicenseType(contractor['Contractor Type']['Accela License Description']);
                        rlpObj.setAgencyCode(aa.getServiceProviderCode());

                        var tempScriptResult = aa.licenseScript.createRefLicenseProf(rlpObj);

                        if (!tempScriptResult.getSuccess()) {
                            throw 'Error saving Licensed Professional:' + tempScriptResult.getErrorType() + ':' + tempScriptResult.getErrorMessage();
                        }

                        myLic = licenseProfObject(oLicenseNumber);

                        if (myLic.refLicModel) {
                            // DO NOTHING
                        }
                        else {
                            throw 'Cannot create license';
                        }
                    }
                    else {
                        shouldContinue = false;
                    }
                }

                if (shouldContinue) {
                    if (contractor['Data Status'] && contractor['Data Status'].equals('ACTIVE')) {
                        myLic.enable();
                    }
                    else {
                        myLic.disable();
                    }

                    if (contractor['License Expiration'] && contractor['License Expiration'] !== dateToIgnore) {
                        myLic.refLicModel.setLicenseExpirationDate(aa.date.parseDate(contractor['License Expiration']));
                    }

                    if (contractor['Work Comp Expiration'] && contractor['Work Comp Expiration'] !== dateToIgnore) {
                        myLic.refLicModel.setWcExpDate(aa.date.parseDate(contractor['Work Comp Expiration']));
                    }

                    if (contractor['Liability Expiration'] && contractor['Liability Expiration'] !== dateToIgnore) {
                        myLic.refLicModel.setInsuranceExpDate(aa.date.parseDate(contractor['Liability Expiration']));
                    }

                    if (contractor['File Maintenance Date']) {
                        myLic.refLicModel.setBusinessLicExpDate(aa.date.parseDate(contractor['File Maintenance Date']));
                    }
                    else {
                        myLic.refLicModel.setBusinessLicExpDate(null);
                    }

                    myLic.refLicModel.setBusinessName(contractor['Business Name']);
                    myLic.refLicModel.setEMailAddress(contractor['Email']);
                    myLic.refLicModel.setPhone1(contractor['Work Phone']); // Re-purposed as Main Phone
                    myLic.refLicModel.setAddress1(contractor['Address Line 1']);
                    myLic.refLicModel.setAddress2(contractor['Address Line 2']);
                    myLic.refLicModel.setCity(contractor['City']);
                    myLic.refLicModel.setState(contractor['State']);
                    myLic.refLicModel.setZip(contractor['Zip']);
                    myLic.refLicModel.setBusinessName2(contractor['Qualifier']); // Re-purposed
                    myLic.refLicModel.setPhone2(contractor['Mobile Phone']); // Re-purposed
                    myLic.refLicModel.setPhone3(contractor['Work Phone Extension']); // Re-purposed

                    if (myLic.validTables) {
                        if (myLic.removeTable("AUTHORIZED AGENTS")) {
                            // Remove Table
                            if (myLic.updateRecord()) {
                                // Update Record
                                var newArray = new Array();

                                myLic.refreshTables();

                                if (contractor['Agents'] != null) {
                                    for (var a = 0; a < contractor['Agents'].length; a++) {
                                        newArray['Name'] = contractor['Agents'][a];

                                        if (myLic.addTableRow('AUTHORIZED AGENTS', newArray)) {
                                            // DO NOTHING
                                        }
                                        else {
                                            throw 'Unable to add Agent';
                                        }
                                    }
                                }
                            }
                        }
                    }

                    var updateReslt = myLic.updateRecord();

                    if (!updateReslt) {
                        didAllStepsSucceed = false;
                    }

                    // Check conditions
                    var conditions = [];
                    var isAccelaLocked = false;
                    var scriptResultCaeConditions = aa.caeCondition.getCAEConditions(myLic.refLicModel.getLicSeqNbr());

                    logDebug('TLC Locked: ' + contractor['Locked']);
                    logDebug('Ref License #:' + myLic.refLicModel.getStateLicense());
                    logDebug('Ref License Seq #:' + myLic.refLicModel.getLicSeqNbr());

                    if (scriptResultCaeConditions.getSuccess()) {
                        var tlcConditions = scriptResultCaeConditions.getOutput();

                        logDebug('Current Accela Conditions: ' + tlcConditions.length);

                        if (tlcConditions && tlcConditions.length > 0) {
                            for (var cndtn in tlcConditions) {
                                var tmpCondition = tlcConditions[cndtn];
                                var getConditionResult = aa.caeCondition.getCAECondition(tmpCondition.getConditionNumber(), myLic.refLicModel.getLicSeqNbr());

                                if (getConditionResult.getSuccess()) {
                                    var caeCondtion = getConditionResult.getOutput();
                                    var caeConditionTempModel = caeCondtion.getTemplateModel();
                                    var caeConditionSource = getConditionTemplateModelValue(caeConditionTempModel, 'CND_EXTD_ID', 'I', 'Source');

                                    logDebug('Condition #: ' + caeCondtion.getConditionNumber() + ', Audit Status: ' + caeCondtion.getAuditStatus() + ', Status: ' + caeCondtion.getConditionStatus() + ', Type: ' + caeCondtion.getConditionType() + ', Status Type: ' + caeCondtion.getConditionStatusType() + ', Group: ' + caeCondtion.getConditionGroup());
                                    logDebug('Template Model - Condition ID: ' + getConditionTemplateModelValue(caeConditionTempModel, 'CND_EXTD_ID', 'I', 'Condition Id') + ', LicenseNumber: ' + getConditionTemplateModelValue(caeConditionTempModel, 'CND_EXTD_ID', 'I', 'License Number') + ', Source: ' + caeConditionSource);

                                    if (caeCondtion.getConditionGroup() != null && caeCondtion.getConditionType() != null && caeCondtion.getConditionGroup().equals('ALL') && (caeCondtion.getConditionType().equals('Hold') || caeCondtion.getConditionType().equals('Lock'))) {
                                        if (caeCondtion.getConditionStatus() != null && caeCondtion.getConditionStatus().startsWith('Applied')) {
                                            isAccelaLocked = true;
                                        }

                                        conditions.push(caeCondtion);
                                    }
                                }
                                else {
                                    logDebug('Unable to load Condition: ' + tmpCondition.getConditionNumber());
                                }
                            }
                        }
                    }

                    logDebug('Is Accela contractor locked? ' + isAccelaLocked);

                    if (!isAccelaLocked && contractor['Locked'] && contractor['Locked By'] && contractor['Locked By'].equals('AA') && contractor.Conditions) {
                        // Go through all the conditions in TLC and update them to inactive
                        logDebug('Current TLC Accela Audit Conditions: ' + contractor.Conditions.length);

                        for (var c = 0; c < contractor.Conditions.length; c++) {
                            logDebug('TLC Condition ID: ' + contractor.Conditions[c]['Condition Id'] + ', Status: ' + contractor.Conditions[c]['Status'] + ', Type: ' + contractor.Conditions[c]['Type'] + ', Group: ' + contractor.Conditions[c]['Group'] + ', ImpactCode: ' + contractor.Conditions[c]['Impact Code'] + ', Source: ' + contractor.Conditions[c]['Source']);

                            var strStatus = new String(contractor.Conditions[c]['Status']);

                            try {
                                if (contractor.Conditions[c]['Active'] !== 'I' &&
                                    contractor.Conditions[c]['Group'] && contractor.Conditions[c]['Group'].toUpperCase() === 'ALL' &&
                                    contractor.Conditions[c]['Status'] && strStatus.indexOf('Applied') === 0 &&
                                    contractor.Conditions[c]['Type'] && (contractor.Conditions[c]['Type'] === 'Hold' || contractor.Conditions[c]['Type'] === 'Lock') &&
                                    contractor.Conditions[c]['Source'] && contractor.Conditions[c]['Source'].trim() !== '' && contractor.Conditions[c]['Source'].toUpperCase() === 'AA') {
                                    contractor.Conditions[c]['Active'] = 'I'; // Set activity to I for inactive

                                    var bodyNewConditions = JSON.stringify(contractor.Conditions[c]);
                                    var responseNewConditions = getTlcResponse('POST', 'v2/Condition/', tlcEnv, bodyNewConditions);

                                    logDebug(bodyNewConditions);
                                    logDebug(responseNewConditions);
                                }
                            }
                            catch (e) {
                                logDebug(e.message);
                                logDebug(e.description);
                            }
                        }
                    }
                    else if (isAccelaLocked && !contractor['Locked']) {
                        // Send update notification to TLC for each Accela condition
                        for (var cnd in conditions) {
                            var tmpConditionAccelaNotify = conditions[cnd];
                            var caeConditionTempModelAccelaNotify = tmpConditionAccelaNotify.getTemplateModel();
                            var caeConditionSourceAccelaNotify = getConditionTemplateModelValue(caeConditionTempModelAccelaNotify, 'CND_EXTD_ID', 'I', 'Source');

                            if (caeConditionSourceAccelaNotify && !caeConditionSourceAccelaNotify.equals('AA')) {
                                // Update all conditions from external locks to inactive and send update TLC
                                tmpConditionAccelaNotify.setAuditStatus('I');

                                var editRsltAccelaNotify = aa.caeCondition.editCAECondition(tmpConditionAccelaNotify);

                                if (!editRsltAccelaNotify.getSuccess()) {
                                    logDebug(editRsltAccelaNotify.getSuccess() + ':ErrorType=' + editRsltAccelaNotify.getErrorType() + ' :ErrorMessage=' + editRsltAccelaNotify.getErrorMessage());
                                }
                                else {
                                    logDebug(editRsltAccelaNotify.getSuccess() + ':' + editRsltAccelaNotify.getOutput());
                                }
                            }

                            var bodyObjectAccelaNotify = {};

                            // Send condition to TLC /API/condition
                            bodyObjectAccelaNotify['License Number'] = new String(oLicenseNumber);
                            bodyObjectAccelaNotify['Condition Id'] = tmpConditionAccelaNotify.getConditionNumber();
                            bodyObjectAccelaNotify['Type'] = new String(tmpConditionAccelaNotify.getConditionType());
                            bodyObjectAccelaNotify['Group'] = new String(tmpConditionAccelaNotify.getConditionGroup());
                            bodyObjectAccelaNotify['Issue Date'] = dateTimeToJsonString(tmpConditionAccelaNotify.getIssuedDate());
                            bodyObjectAccelaNotify['Effective Date'] = dateTimeToJsonString(tmpConditionAccelaNotify.getEffectDate());
                            bodyObjectAccelaNotify['Expiration Date'] = dateTimeToJsonString(tmpConditionAccelaNotify.getExpireDate());
                            bodyObjectAccelaNotify['Impact Code'] = new String(tmpConditionAccelaNotify.getImpactCode());
                            bodyObjectAccelaNotify['Status'] = new String(tmpConditionAccelaNotify.getConditionStatusType());
                            bodyObjectAccelaNotify['Status Date'] = dateTimeToJsonString(tmpConditionAccelaNotify.getStatusDate());
                            bodyObjectAccelaNotify['Source'] = new String(caeConditionSourceAccelaNotify);
                            bodyObjectAccelaNotify['Active'] = new String(tmpConditionAccelaNotify.getAuditStatus());

                            var bodyAccelaNotify = JSON.stringify(bodyObjectAccelaNotify);
                            var responseAccelaNotify = getTlcResponse('POST', 'v2/Condition/', tlcEnv, bodyAccelaNotify);

                            logDebug(bodyAccelaNotify);
                            logDebug(responseAccelaNotify);
                        }
                    }
                }

                if (didAllStepsSucceed) {
                    // Notify TLC solution that the update successfully updated but only in the case that the update in TLC was not from Accela
                    if (contractor['Updated By'] != 'AA') {
                        var bodyObjectTLCNotify = {};

                        bodyObjectTLCNotify['License Number'] = new String(oLicenseNumber);
                        bodyObjectTLCNotify['Updated By'] = contractor['Updated By'];
                        bodyObjectTLCNotify['Updated Datetime'] = contractor['Updated Datetime'];

                        var bodyTLCNotify = JSON.stringify(bodyObjectTLCNotify);
                        var responseTLCNotify = getTlcResponse('POST', 'v2/ContractorAudit/', tlcEnv, bodyTLCNotify);

                        logDebug(bodyTLCNotify);
                        logDebug('Contractor Audit Response:' + responseTLCNotify);
                    }
                }
                else {
                    throw 'Unable to add/update Reference Licensed Professional';
                }
            }
        }
    }
}

logDebug('----End Script--------------------------------');
