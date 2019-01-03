
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
EMSE:GlobalFlags();
branch('PRA:' + appTypeArray[0] + '/*/*/*');
branch('PRA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('PRA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
if (aa.env.getValue('isBizFireEMSE') != 'YES' || currentUserID.startsWith('PUBLICUSER')) {
	branch('PRA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
	}

branch('PRA:' + appTypeArray[0] + '/*/*/' + appTypeArray[3]);
branch('PRA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/' + appTypeArray[3]);
branch('PRA:' + appTypeString);
// DISABLED: PaymentReceiveAfter:99-05
// br_nch('PRA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);

