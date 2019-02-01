function checkWorkflowTaskUpdate(taskName, taskStatus, checks, conditionType, allowedDeferredFees, excludeInspectionTypes, checkTaskNames, checkTaskStatuses, childCapType, childCapStatusesExcluded, checkChildBalanceDue) {
	var checksPassed = true;
	var reasons = new Array();
	var warnings = new Array();
	if (conditionType)
		checks.push("Required Conditions");
	logDebug("Checking Task Name: " + taskName + ", Status: " + taskStatus + ", perform checks: " + checks.join(","));

	// Perform Checks
	// Check Conditions
	var conditionStatus = "Applied";
	var conditions = new Array();
	if (conditionType == "*") {
		logDebug("Checking for any Required conditions with status " + conditionStatus);
		conditions = getConditions(null, conditionStatus, null, "Required");
	} else if (conditionType != "") {
		logDebug("Checking for any Required conditions with type: " + conditionType + ", status " + conditionStatus);
		conditions = getConditions(conditionType, conditionStatus, null, "Required");
	}
	var conditionsList = new Array();
	for (c in conditions) {
		conditionsList.push((conditions[c].objType == "Record" ? "" : "[" + conditions[c].objType + "]") + conditions[c].comment);
	}
	if (conditionsList.length > 0) {
		reasons.push("Required Conditions have not been met: " + br + "  -  " + conditionsList.join("," + br + "  -  "));
	}

	// Check Balance > 0
	if (exists("Balance Due", checks) && balanceDue > 0) {
		reasons.push("Fees Outstanding: " + balanceDue);
	}

	// Check No Invoiced Fees
	if (exists("No Invoiced Fees", checks) && feesInvoicedTotal <= 0) {
		reasons.push("No Fees Invoiced");
	}

	// Check unInvoiced Fees
	if (exists("UnInvoiced Fees", checks)) {
		fees = feeExists_TPS(null, ["New"], allowedDeferredFees);
		if (fees && fees.length > 0) {
			reasons.push("Uninvoiced Fees");
		}
	}

	// Check Valid Address
	if (exists("Valid Address", checks)) { // Still needs to be implemented
	}

	// Check Valid Parcel
	if (exists("Valid Parcel", checks)) { // Still needs to be implemented.
	}

	// Check Valid License
	if (exists("Valid License", checks)) {
		var reasonDetails = checkValidLicenses(capId);
		if (reasonDetails && reasonDetails.length > 0) {
			reasons.push("Check Professionals: " + br + " - " + reasonDetails.join("," + br + " - "));
		}
	}

	// Check Required inspections completed.
	if (exists("Required Inspections Complete", checks)) {
		logDebug("Checking Required Inspections:");
		var requiredInspections = getInspectionsLatestStatus(capId, true, excludeInspectionTypes);
		if (requiredInspections) {
			reasonDetails = new Array();
			for (xx in requiredInspections) {
				if (exists(requiredInspections[xx].getInspectionStatus(), [null, "Pending", "Scheduled"])) {
					reasonDetails.push(requiredInspections[xx].getInspectionType() + (requiredInspections[xx].getInspectionStatus() ? ": " + requiredInspections[xx].getInspectionStatus() : ""));
				}
			}
			if (reasonDetails && reasonDetails.length > 0) {
				reasons.push("Check Required Inspections: " + br + " - " + reasonDetails.join("," + br + " - "));
			}
		}
	}

	// Check Tasks completed
	if (exists("Tasks Complete", checks)) {
		logDebug("Checking Tasks Complete:");
		activeTasks = getActiveTasks(null, checkTaskNames);
		if (activeTasks && activeTasks.length > 0) {
			reasonDetails = new Array();
			for (ff in activeTasks)
				reasonDetails.push(activeTasks[ff].getTaskDescription());
			reasons.push("Active Tasks: " + reasonDetails.join(","));
		}
	}

	// Check (Review) Task Statuses
	if (exists("Tasks Check", checks)) {
		logDebug("Checking Tasks Statuses:");
		activeTasks = checkTasks(null, checkTaskNames, checkTaskStatuses);
		if (activeTasks && activeTasks.length > 0) {
			reasonDetails = new Array();
			for (ff in activeTasks)
				reasonDetails.push(activeTasks[ff].getTaskDescription() + (activeTasks[ff].getDisposition() ? " " + activeTasks[ff].getDisposition() : ""));
			reasons.push("Check Tasks: " + reasonDetails.join(","));
		}
	}

	// Check Children's Cap Status, needs childCapType, childCapStatuesExcluded, checkChildBalanceDue
	if (exists("Child Status", checks)) {
		logDebug("Checking Children CAP Status:");
		var children = getChildren(childCapType, capId);
		if (children) {
			reasonDetails = new Array();
			for (cc in children) {
				childCapId = children[cc];
				childCap = aa.cap.getCap(childCapId).getOutput();
				childTypeResult = childCap.getCapType();
				childTypeAlias = childTypeResult.getAlias();
				childTypeString = childTypeResult.toString(); // Convert child cap type to string ("Building/A/B/C")
				childCapStatus = childCap.getCapStatus();
				partialChildCap = !childCap.isCompleteCap();
				var childBalanceDue = 0;
				var childCapDetailObjResult = aa.cap.getCapDetail(childCapId);
				if (childCapDetailObjResult.getSuccess()) {
					childCapDetail = childCapDetailObjResult.getOutput();
					childBalanceDue = childCapDetail.getBalance();
				}
				reasonDetails.push(childCapId.getCustomID() + (childCapStatusesExcluded && !exists(childCapStatus, childCapStatusesExcluded) ? " " + childCapStatus : "") + (checkChildBalanceDue && childBalanceDue > 0 ? " $" + childBalanceDue : ""));
			}
			reasons.push("Check Children: " + br + reasonDetails.join("," + br));
		}
	}

	srSuccess = true;
	srErrorType = "";
	srErrorMessage = "";
	srOutput = reasons;
	if (reasons.length > 0) {
		if (supervisor) {
			checksPassed = true;
			srSuccess = true;
			srErrorType = "Supervisor Override";
			srErrorMessage = srErrorType + " allowing update of " + taskName + (taskStatus == "" ? "" : " with " + taskStatus) + "." + br + "ERRORS:" + br + reasons.join(";" + br);
			showMessage = true;
			logMessage("<font color=redbrick>" + srErrorType + "</font> allowing update of " + taskName + (taskStatus == "" ? "" : " with " + taskStatus) + "." + br + "ERRORS:" + br + reasons.join(";" + br));
		} else {
			checksPassed = false;
			srSuccess = false;
			srErrorType = "Cannot update " + taskName + (taskStatus == "" ? "" : " with " + taskStatus) + ".";
			srErrorMessage = srErrorType + br + "ERRORS:" + br + reasons.join(";" + br);
			showMessage = true;
			logMessage(srErrorMessage);
		}
	}
	returnScriptResult = new scriptResult_TPS(srSuccess, srErrorType, srErrorMessage, srOutput);

	if (warnings.length > 0) {
		showMessage = true;
		logMessage("WARNINGS:" + br + warnings.join(";" + br));
	}
	return returnScriptResult;
}
