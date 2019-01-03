
bldFee = 0*1;
mechFee = 0*1;
gasFee = 0*1;
plumbFee = 0*1;
electFee = 0*1;
pvFee = 0*1;
dwFee = 0*1;
mhFee = 0*1;
poolFee = 0*1;
roofFee = 0*1;
signFee = 0*1;
vinylFee = 0*1;
gdFee = 0*1;
aluminumFee = 0*1;
housemoverFee = 0*1;
dockFee = 0*1;
if (AInfo['MECH FEES'] > 0  || AInfo['Mech Retro Existing Install'] > 0) {
	editAppSpecific('Mechanical Final Required',CHECKED);
	editAppSpecific('Mechanical Required',CHECKED);
	}

if (AInfo['Gas Issuance'] == CHECKED) {
	editAppSpecific('Gas Final Required',CHECKED);
	editAppSpecific('Gas Required',CHECKED);
	}

