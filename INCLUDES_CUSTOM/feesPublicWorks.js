function feesPublicWorks() {

surchgCntr = 0*1;
if (AInfo['Road Pavement Disturbance'] > 0 && feeExists('8700-010','INVOICED') == false) {
	removeFee('8700-010','FINAL');
	addFee('8700-010','PUBLICWORKS','FINAL',getAppSpecific('Road Pavement Disturbance'),'N');
	surchgCntr = surchgCntr +1;
	}

if (AInfo['Unpaved Right of Way'] > 0  && feeExists('8700-030','INVOICED') == false) {
	removeFee('8700-030','FINAL');
	addFee('8700-030','PUBLICWORKS','FINAL', getAppSpecific('Unpaved Right of Way'),'N');
	surchgCntr = surchgCntr +1;
	}

if (AInfo['Power Pole Installation']  > 0  && feeExists('8700-020','INVOICED') == false) {
	removeFee('8700-020','FINAL');
	addFee('8700-020','PUBLICWORKS','FINAL',getAppSpecific('Power Pole Installation'),'N');
	surchgCntr = surchgCntr +1;
	}

if (AInfo['Aerial Line Installation (per Permit / per Job Site)'] > 0 && feeExists('8700-040','INVOICED') == false) {
	removeFee('8700-040','FINAL');
	addFee('8700-040','PUBLICWORKS','FINAL',getAppSpecific('Aerial Line Installation (per Permit / per Job Site)'),'N');
	surchgCntr = surchgCntr +1;
	}

if (AInfo['All Other Disturbances'] > 0 && feeExists('8700-050','INVOICED') == false) {
	removeFee('8700-050','FINAL');
	addFee('8700-050','PUBLICWORKS','FINAL',getAppSpecific('All Other Disturbances'),'N');
	surchgCntr = surchgCntr +1;
	}

if (AInfo['Facilities Construction'] > 0 && feeExists('8700-070','INVOICED') == false) {
	removeFee('8700-070','FINAL');
	addFee('8700-070','PUBLICWORKS','FINAL',getAppSpecific('Facilities Construction'),'N');
	surchgCntr = surchgCntr +1;
	}

if (AInfo['Right of Way License'] > 0  && feeExists('8700-080','INVOICED') == false) {
	removeFee('8700-080','FINAL');
	addFee('8700-080','PUBLICWORKS','FINAL',getAppSpecific('Right of Way License'),'N');
	surchgCntr = surchgCntr +1;
	}

if (AInfo['Unpermitted Activity (10 times Permit Fee)'] > 0  && feeExists('8700-060','INVOICED') == false) {
	removeFee('8700-060','FINAL');
	addFee('8700-060','PUBLICWORKS','FINAL',getAppSpecific('Unpermitted Activity (10 times Permit Fee)'),'N');
	surchgCntr = surchgCntr +1;
	}

}
