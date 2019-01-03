function include(s) {
	try {
	    var thisDate = new Date();
		var thisTime = thisDate.getTime();
		var st = getScriptText(s);
		if (st.length) {
			logDebug("Executing script : " + s + ", Elapsed Time: " + ((thisTime - startTime) / 1000) + " Seconds")
			eval(st);
			}
		}
	catch (err) { handleError(err,s);	}
	}
 
/*------------------------------------------------------------------------------------------------------/
|  Author: Pedro Luis Montoya
|  Created: 2016/11/21
|  Function: isLicensedProfessionalEnabled
|  Summary: Determines whether an LP is enabled (A) or disabled (I) and returns a value of ACTIVE/INACTIVE.
/------------------------------------------------------------------------------------------------------*/
