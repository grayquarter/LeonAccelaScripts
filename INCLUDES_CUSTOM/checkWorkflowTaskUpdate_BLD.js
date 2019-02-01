function checkWorkflowTaskUpdate_BLD(taskName, taskStatus, addConditionSupervisorOverride) {
	var checks = new Array();
	var conditionType = "";
	var allowedDeferredFees = null;
	var excludeInspectionTypes = [];
	var checkTaskNames = null;
	var checkTaskStatuses = null;
	var childCapType = "Building/*/*/*";
	var childCapType = "*/*/*/*";
	var childCapStatusesExcluded = null;
	var checkChildBalanceDue = null;

	if (taskName && !exists(taskStatus, ["", "Note", "Pending", "License Update Requested", "Additional Information Received", "Additional Informatin Required"])) {
		if (appMatch("Building/Express/*/*")) {
			if (exists(taskName, ["Quality Check", "Permit Issuance"])) {
				conditionType = "Permit Issuance";
				allowedDeferredFees = null;
				checks = ["Balance Due", "Valid License"];
			} else if (exists(taskName, ["Inspections"])) {
				conditionType = "";
				allowedDeferredFees = null;
				checks = ["Required Inspections Complete"];
			} else if (exists(taskName, ["Certificate of Completeness", "Certificate"])) {
				conditionType = "Certificate of Occupancy";
				allowedDeferredFees = null;
				var childCapType = "*/*/*/*";
				var childCapStatusesExcluded = ["Closed", "Void", "Withdrawn"];
				var checkChildBalanceDue = true;
				checks = ["Balance Due", "Required Inspections Complete"];
			}
		} else {
			if (exists(taskName, ["Application Submittal", "Intake", "Completeness Check"])) {
				conditionType = "Application Submittal";
				checks = ["Balance Due", "No Invoiced Fees"];
			} else if (exists(taskName, ["Quality Check", "Permit Issuance"])) {
				conditionType = "Permit Issuance";
				allowedDeferredFees = null;
				checkTaskNames = ["Zoning Setback Review", "Building Plans Review", "Environmental Inspection Review", "Addressing Review", "Septic Sewer", "Contractor License Review", "Additional Review", "Concurrency", "Fiscal Review"];
				if (exists(AInfo["Driveway Permit Required"], ["Y", "Yes"]))
					checkTaskNames.push("Driveway Review"); // Add Driveway Review if Required
				checkTaskStatuses = ["Approved", "Approved with Conditions", "Not Required", "Env Supr Approved", "Sewer Permit Recieved", "Sewer Tap Received"];
				checks = ["Balance Due", "No Invoiced Fees", "UnInvoiced Fees", "Tasks Check", "Valid License"];
			} else if (exists(taskName, ["Inspections"])) {
				conditionType = "";
				allowedDeferredFees = null;
				checks = ["Required Inspections Complete"];
			} else if (exists(taskName, ["Certificate of Occupancy", "Certificate of Completeness", "Certificate"])) {
				conditionType = "Certificate of Occupancy";
				allowedDeferredFees = null;
				var childCapType = "*/*/*/*";
				var childCapStatusesExcluded = ["Closed", "Void", "Withdrawn"];
				var checkChildBalanceDue = true;
				checks = ["Balance Due", "No Invoiced Fees", "UnInvoiced Fees", "Required Inspections Complete", "Child Status"];
			} else if (exists(taskName, ["Contractor License Review"])) {
				checks = ["Valid License"];
			}
		}
	}
	result = checkWorkflowTaskUpdate(taskName, taskStatus, checks, conditionType, allowedDeferredFees, excludeInspectionTypes, checkTaskNames, checkTaskStatuses, childCapType, childCapStatusesExcluded, checkChildBalanceDue);
	if (result && result.getSuccess()) {
		if (addConditionSupervisorOverride && result.getErrorType() == "Supervisor Override") {
			cType = result.getErrorType();
			cDesc = "Supervisor Override allowing update " + wfTask + (wfStatus == "" ? "" : " with " + wfStatus)
				cStatus = "Condition Met";
			cComment = result.getErrorMessage();
			logDebug("Adding Condition: " + cDesc);
			addAppCondition(cType, cStatus, cDesc, cComment, "Notice");
		}
	} else
		cancel = true;
	return result;
}
