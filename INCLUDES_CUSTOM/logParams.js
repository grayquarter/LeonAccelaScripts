function logParams() {
	var params = aa.env.getParamValues();
	var keys = params.keys();
	var key = null;
	while (keys.hasMoreElements()) {
		key = keys.nextElement();
		aa.print("Env Variable: " + key + " = " + aa.env.getValue(key) + newLine);
	}
}
