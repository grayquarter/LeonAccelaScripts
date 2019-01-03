function getContactByType(conType, capId) {
    // Standard INCLUDES_ACCELA_FUNCTION version 9.2
    var contactArray = getPeople(capId);
    for (thisContact in contactArray) {
        if ((contactArray[thisContact].getPeople().contactType).toUpperCase() == conType.toUpperCase())
            return contactArray[thisContact].getPeople();
    }
    return false;
}

 
