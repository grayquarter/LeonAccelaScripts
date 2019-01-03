function isLicensedProfessionalEnabled(lpStatus) {
    if (lpStatus == 'A' || lpStatus == 'a') {
        return 'ACTIVE';
    }
    return 'INACTIVE';
}
 
