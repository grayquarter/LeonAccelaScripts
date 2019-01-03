
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
EMSE:GlobalFlags();
branch('DUA:' + appTypeArray[0] + '/*/*/*');
branch('DUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('DUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('DUA:' + appTypeString);

