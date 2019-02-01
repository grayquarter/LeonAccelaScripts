function discoverVariableDefinitions(testVariable) {

	if (testVariable) {
		aa.print("=========================================");
		aa.print("Class Information");
		try {
			aa.print("\n" + testVariable.getClass() + "\n");
		} catch (e) {
			aa.print("\nClass <i>unknown</i>");
		}

		for (tsdt in testVariable) {
			if (typeof(testVariable[tsdt]) == "function") {
				aa.print(testVariable[tsdt]);
			} else {
				aa.print(tsdt + " " + typeof(testVariable[tsdt]) + "\n");
			}
		}
		aa.print("Done");
		aa.print("=========================================");
	} else {
		aa.print("=========================================");
		aa.print("Test object is null. Check script to correctly use variable");
		aa.print("=========================================");
	}
}
