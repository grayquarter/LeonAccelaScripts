function convertContactAddressModelArr(contactAddressScriptModelArr) {
    // Standard INCLUDES_ACCELA_FUNCTION version 9.2
    var contactAddressModelArr = null;
    if (contactAddressScriptModelArr != null && contactAddressScriptModelArr.length > 0) {
        contactAddressModelArr = aa.util.newArrayList();
        for (loopk in contactAddressScriptModelArr) {
            contactAddressModelArr.add(contactAddressScriptModelArr[loopk].getContactAddressModel());
        }
    }
    return contactAddressModelArr;
}

 
