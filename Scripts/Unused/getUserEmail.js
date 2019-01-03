function getUserEmail() {
	// Standard INCLUDES_ACCELA_FUNCTION version 9.2
    //optional parameter for userid
    var userId = currentUserID;
    if (arguments.length > 0)
        userId = arguments[0];

    var systemUserObjResult = aa.person.getUser(userId.toUpperCase());

    if (systemUserObjResult.getSuccess()) {
        var systemUserObj = systemUserObjResult.getOutput();

        var userEmail = systemUserObj.getEmail();

        if (userEmail)
            return userEmail;
        else
            return false; 

    } else {
        aa.print(systemUserObjResult.getErrorMessage());
        return false;
    }
}

/**
* Add Workflow Task Update After Parameters for use in Notification Templates. 
* This should be called from WorkflowTaskUpdateAfter Event
*
* @param params {HashMap}
* @return {HashMap}
*/

