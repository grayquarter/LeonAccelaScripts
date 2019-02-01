function describe_TPS(obj) {
	// Modified from describe to also include typeof & class of object; seperate Properties from Functions; Sort them; additional arguments.
	var newLine = "\n";
	//	var newLine = br;
	var newLine = "<BR>";
	var ret = "";
	var oType = null;
	var oNameRegEx = /(^set.*$)/; // find set functions
	var oNameRegEx = /(^get.*$)/; // find get functions
	var oNameRegEx = null;
	var verbose = false;
	if (arguments.length > 1)
		oType = arguments[1];
	if (arguments.length > 2)
		oNameRegEx = arguments[2];
	if (arguments.length > 3)
		verbose = arguments[3];
	if (obj == null) {
		ret += ": null";
		return ret;
	}
	try {
		ret += "typeof(): " + typeof(obj) + (obj && obj.getClass ? ", class: " + obj.getClass() : "") + newLine;
		var oPropArray = new Array();
		var oFuncArray = new Array();
		if (oType == null)
			oType = "*";
		for (var i in obj) {
			if (oNameRegEx && !oNameRegEx.test(i)) {
				continue;
			}
			if ((oType == "*" || oType == "function") && typeof(obj[i]) == "function") {
				oFuncArray.push(i);
			} else if ((oType == "*" || oType == "property") && typeof(obj[i]) != "function") {
				oPropArray.push(i);
			}
		}
		// List Properties
		oPropArray.sort();
		for (var i in oPropArray) {
			n = oPropArray[i];
			oValue = obj[n];
			if (oValue && oValue.getClass) {
				//				logDebug(n + " " + oValue.getClass());
				if (oValue.getClass().toString().equals("class com.accela.aa.emse.dom.ScriptDateTime"))
					oValue += " " + (new Date(oValue.getEpochMilliseconds()));
				if (oValue.getClass().toString().equals("class com.accela.aa.emse.util.ScriptDateTime"))
					oValue += " " + (new Date(oValue.getEpochMilliseconds()));
				// if (oValue.getClass().toString().equals("class java.util.Date")) oValue += " " + convertDate(oValue);
			}
			ret += "property:" + n + " = " + oValue + newLine;
		}
		// List Functions
		oFuncArray.sort();
		for (var i in oFuncArray) {
			n = oFuncArray[i];
			oDef = String(obj[n]).replace("\n", " ").replace("\r", " ").replace(String.fromCharCode(10), " ").replace(String.fromCharCode(10), " ")
				x = oDef.indexOf(n + "()", n.length + 15);
			if (x > 15)
				x = x + n.length + 1;
			oName = (verbose ? oDef : "function:" + n + "()"); // Include full definition of function if verbose
			oValue = ((n.toString().indexOf("get") == 0 && x > 0) ? obj[n]() : ""); // Get function value if "Get" function and no parameters.
			if (oValue && oValue.getClass) {
				//				logDebug(n + " " + oValue.getClass());
				if (oValue.getClass().toString().equals("class com.accela.aa.emse.dom.ScriptDateTime"))
					oValue += " " + (new Date(oValue.getEpochMilliseconds()));
				if (oValue.getClass().toString().equals("class com.accela.aa.emse.util.ScriptDateTime"))
					oValue += " " + (new Date(oValue.getEpochMilliseconds()));
				// if (oValue.getClass().toString().equals("class java.util.Date")) oValue += " " + convertDate(oValue);
			}
			ret += oName + " = " + oValue + newLine;
		}
	} catch (err) {
		showDebug = 3;
		var context = "describe_TPS(" + obj + ")";
		logDebug("ERROR: An error occured in " + context + " Line " + err.lineNumber + " Error:  " + err.message);
		logDebug("Stack: " + err.stack);
	}
	return ret;
}
