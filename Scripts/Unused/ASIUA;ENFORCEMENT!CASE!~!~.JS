
removeFee('7018-001','FINAL');
removeFee('8030-005','FINAL');
removeFee('8030-001','FINAL');
removeFee('8030-010','FINAL');
removeFee('8031-000','FINAL');
removeFee('8031-001','FINAL');
removeFee('8031-005','FINAL');
removeFee('8031-010','FINAL');
if (AInfo['Env After the Fact Fee']!=null && AInfo['Amnesty Used']!='CHECKED') {
	updateFee('7018-001','LEC_CASE','FINAL',1,'N','N');
	}

if (AInfo['Env After the Fact Fee']!=null && AInfo['Amnesty Used']=='CHECKED') {
	updateFee('8031-000','LEC_CASE','FINAL',1,'N','N');
	}

if (AInfo['Initial Fee']!=null && AInfo['Amnesty Used']!='CHECKED') {
	updateFee('8030-001','LEC_CASE','FINAL',1,'N','N');
	}

if (AInfo['Initial Fee']!=null && AInfo['Amnesty Used']=='CHECKED') {
	updateFee('8031-001','LEC_CASE','FINAL',1,'N','N');
	}

if (AInfo['Start Date']!=null && AInfo['Amnesty Used']=='CHECKED') {
	updateFee('8031-005','LEC_CASE','FINAL',1,'N','N');
	}

if (AInfo['Start Date']!=null && AInfo['Amnesty Used']!='CHECKED') {
	updateFee('8030-005','LEC_CASE','FINAL',1,'N','N');
	}

if (AInfo['Board Adjustment to Fees']!=null && AInfo['Amnesty Used']!='CHECKED') {
	updateFee('8030-010','LEC_CASE','FINAL',1,'N','N');
	}

if (AInfo['Board Adjustment to Fees']!=null && AInfo['Amnesty Used']=='CHECKED') {
	updateFee('8030-010','LEC_CASE','FINAL',1,'N','N');
	}

// DISABLED: ASIUA:Enforcement/Case/*/*:070
// AInfo['ParcelAttribute.VIR_JUNK_CD_STAT']='Happy Friday';
// comment('<Font Color =Red><Bold>Connie</Font><Bold>');

