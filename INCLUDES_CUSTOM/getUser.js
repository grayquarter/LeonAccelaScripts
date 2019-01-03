function getUser(userID) {
    var userObj = null;
    var userObjResult = aa.person.getUser(userID);
    if (userObjResult.getSuccess()) {
        userObj = userObjResult.getOutput();
	}
	return userObj
}

