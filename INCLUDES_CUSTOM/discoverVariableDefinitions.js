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
            if (typeof (testVariable[tsdt]) == "function") {
                aa.print(testVariable[tsdt]);
            }
            else {
                aa.print(tsdt + " " + typeof (testVariable[tsdt]) + "\n");
            }
        }
        aa.print("Done");
        aa.print("=========================================");
    }
    else {
        aa.print("=========================================");
        aa.print("Test object is null. Check script to correctly use variable");
        aa.print("=========================================");
    }
}

/*---------------------------------------------------------------------------------------------------------/
| Function Intent: 
|	This function is intended to update reference parcel attribues and refresh the parcel information on the record.
| 	If no parcel number is provided, it will update all parcels that contain the attributeName with the supplied attributeValue
|
| Call Example:
|	editRefParcelAttribute("DELINQUENT TAXES","No","048072002");	
|
| 11/05/2015 - Jason Plaisted
|	Version 1 Created
|
| Required parameters in order:
|	attributeName - String
|	attributeValue - String
|
| Optional paramaters:
|	parcelNumber - String
|	capId
|
| Output:
|	Success : true - Successfully updated Reference Parcel
|	Failure : false - Could not update Reference Parcel
|
/----------------------------------------------------------------------------------------------------------*/
