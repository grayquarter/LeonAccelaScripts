function getTaskAssignedUser(wfstr) { // optional process name.
// returns SysUserModel
    var useProcess = false;
    var processName = "";
    if (arguments.length == 2) {
        processName = arguments[1]; // subprocess
        useProcess = true;
    }

    var taskDesc = wfstr;
    if (wfstr == "*") {
        taskDesc = "";
    }
    var workflowResult = aa.workflow.getTaskItems(capId, taskDesc, processName, null, null, null);
    if (workflowResult.getSuccess())
        wfObj = workflowResult.getOutput();
    else {
        logMessage("**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage());
        return false;
    }

    for (i in wfObj) {
        var fTask = wfObj[i];
        if ((fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase()) || wfstr == "*") && (!useProcess || fTask.getProcessCode().equals(processName))) {
			var assignedStaff = fTask.getAssignedStaff();
			var staffUser = null, staffUserResult = null;
            if (assignedStaff) {
				if(assignedStaff.getFirstName() || assignedStaff.getLastName() || assignedStaff.toString() != assignedStaff.getDeptOfUser()) {
					logDebug("Looking up " + fTask.getTaskDescription() + " task Assigned Staff: " + assignedStaff.getFirstName() + " " + assignedStaff.getLastName() + " " + assignedStaff.toString());
					staffUserResult = aa.cap.getStaffByUser(assignedStaff.getFirstName(), assignedStaff.getMiddleName(), assignedStaff.getLastName(), assignedStaff.toString());
				} else if (assignedStaff.getGaUserID()) {
					logDebug("Looking up " + fTask.getTaskDescription() + " task Assigned Staff: " + assignedStaff.getGaUserID());
					staffUserResult = aa.person.getUser(assignedStaff.getGaUserID().toUpperCase());
				}
				if (staffUserResult && staffUserResult.getSuccess()) {
					staffUser = staffUserResult.getOutput();
				}
            }
			logDebug(fTask.getTaskDescription() + " task Assigned Staff: " + assignedStaff + (staffUser? ", staffUser: " + staffUser:""));
            return staffUser;
        }
    }
    return false;
}

 
/*------------------------------------------------------------------------------------------------------/
|  Author: Pedro Luis Montoya
|  Created: 2017/05/22
|  Function: getTlcResponse
|  Summary: Provides custom communications to our web service. Accepts three parameters necessary for
|           successful communications and returns a JSON string from the response body.
/------------------------------------------------------------------------------------------------------*/
