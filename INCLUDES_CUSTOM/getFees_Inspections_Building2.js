function getFees_Inspections_Building() {
	var feesNeedUpdate = null;
	if (arguments.length > 0) feesNeedUpdate = arguments[0];
	var newFeeArray = [], valuationBasedFees = [], inspOptArray = [], inspReqArray = [];
	var newFeesList = "";
	var inspDispArray = [];
	var valuationOfWorkPerformed = (AInfo["Valuation of Work Performed"]? parseInt(AInfo["Valuation of Work Performed"]) : null);
	if (appMatch("Building/Express/NA/NA")) {
		feeSched = "BLD_EXPRESS";
		var improvementType = AInfo["Improvement Type"];
		if (improvementType) {
			if (improvementType == "Residential Electrical Change-out") {
				logDebug('improvementType: "' + improvementType + '" (1)');
				newFeesList = "5002-010,5002-055,5015-010,5043-010";
				inspOptArray = ["203: Electric Service Changeout",
				"506: Notified Electric Provider","508: Talquin Final Electric Release",
				"509: Talquin New Cut-In & Res Meter Set","510: Talquin MH Cut-In & Meter Set",
				"513: Talquin Increase Service","514: Talquin Relocate Service",
				"515: City New Cut-In & Residential Meter Set","516: City MH Cut-In & Meter Set",
				"519: City Increase Service","520: City Relocate Service","521: City New Cut-In","522: City Residential Meter Set",
				"524: City MH Meter Set","525: City Reseal Meter","526: City Reseal Meter Increase Service","527: City Reset Meter",
				"528: City Reset Meter Increase Service","529: City Relocate Increase Service","530: City Reconnect Service","531: City Reconnect Increase Service",
				"532: City House Meter"
				// 08/15/2018 RS: Removed per email from Susan
//				"507: Talquin Temp Electric Release","511: Talquin New Cut-In & Comm Meter Set","512: Talquin Temp Cut-In",
//				"517: City New Cut-In & Comm Meter Set","518: City Temp Cut-In",
//				"523: City Comm Meter Set",
//				"533: City New C/I Com Mtr Set W/CTS","534: City Interconnect Pwr Source","535: Talquin Interconncet Pwr Source"
				];
				inspReqArray = ["901: Electrical Final"];
			} else if (exists(improvementType,["Plumbing Change-outs (Waterheaters)","Residential Plumbing Change-outs (Waterheaters)","Commercial Plumbing Change-outs (Waterheaters)","Residential and Commercial Plumbing Change-out (Waterheater)"])) {
				logDebug('improvementType: "' + improvementType + '" (2)');
				newFeesList = "5006-010,5006-025,5015-010,5043-010";
				inspOptArray = ["404: Water Heater"];
				inspReqArray = ["905: Plumbing Final"];					// 07/16/2018 RS: Corrected from 901
			} else if (exists(improvementType,["Mechanical Change-out (HVAC)","Residential Mechanical Change-out (HVAC)","Commercial Mechanical Change-out (HVAC)","Residential and Commercial Mechanical Change-out"])) {
				logDebug('improvementType: "' + improvementType + '" (3)');
				newFeesList = "5004-015,5015-010,5043-010";				// 07/16/2018 RS: Removed 5008-003
				inspOptArray = ["306: HVAC Chageout"];					// 07/16/2018 RS: Replaced 306: HVAC Changeout
				inspReqArray = ["903: Mechanical Final"];
			} else if (exists(improvementType,["Residential Gas Change-out (1 outlet only)","Residential Gas Change-out"])) {
				logDebug('improvementType: "' + improvementType + '" (4)');
				newFeesList = "5008-003,5015-010,5043-010";				// 07/16/2018 RS: Removed 5008-001
				inspOptArray = [];
				inspReqArray = ["902: Gas Final"];
			} else if (exists(improvementType,["Residential Garage Door Replacement","Residential Vinyl Siding"])) {
				logDebug('improvementType: "' + improvementType + '" (5 or 6)');
				newFeesList = "5010-015,5015-010,5043-010";
				inspOptArray = [];
				inspReqArray = ["900: Building Final"];
			} else if (exists(improvementType,["Pool Liner Replacement"])) {
				logDebug('improvementType: "' + improvementType + '" (7)');
				newFeesList = "5010-015,5015-010,5043-010";
				inspOptArray = ["113: Pool Re-Liner"];
				inspReqArray = ["916: Pool Final"];						// 07/16/2018 RS: Replaced 900: Building Final
			} else if (exists(improvementType,["Residential Exterior Door Replacement","Residential Window Replacement","Non-structural Deck Replacement"])) {
				logDebug('improvementType: "' + improvementType + '" (8, 9, or 11)');
				newFeesList = "5010-015,5015-010,5043-010";
				inspOptArray = [];
				inspReqArray = ["900: Building Final"];
			} else if (exists(improvementType,["Re-roofs","Residential Re-roofs","Commercial Re-roofs","Non-structural Roof Repair"])) {
				logDebug('improvementType: "' + improvementType + '" (10)');
				newFeesList = "5010-015,5015-010,5043-010";
				inspOptArray = ["115: Roof Deck Re-Nail","116: Roof Secondary Barrier"];
				inspReqArray = ["917: Roofing Final"];
			} else if (exists(improvementType,["Non-structural Roof Repair"])) {
				logDebug('improvementType: "' + improvementType + '" (12)');
				newFeesList = "5010-015,5015-010,5043-010";
				inspOptArray = ["115: Roof Deck Re-Nail","116: Roof Secondary Barrier"];
				inspReqArray = ["917: Roofing Final"];
			} else {
				logDebug('improvementType: "' + improvementType + '" (Default)');
				inspOptArray = [];
				inspReqArray = [];
			}
		}
		inspOptArray.push("595: Re-Inspection"); 						// 07/16/2018 RS: Added 595: Re-Inspection
		inspOptArray.push("596: After Hours Inspection"); 				// 07/16/2018 RS: Added 596: After Hours Inspection
	}

	var valuationBasedFees = ["5010-015"];

	if (newFeesList != "") { 
		newFeeArray = newFeesList.split(",");
		if (valuationOfWorkPerformed >= 7500) {
			newFeeArray.push("5017-010");  // 07/16/2018 RS: Added State Lien Law Fee 5017-010
			inspReqArray.push("505: Notice of Commencement");
		} else if (valuationOfWorkPerformed >= 2500 && !(inspReqArray.length == 1 && exists("903: Mechanical Final", inspReqArray))) {
			newFeeArray.push("5017-010");  // 07/16/2018 RS: Added State Lien Law Fee 5017-010
			inspReqArray.push("505: Notice of Commencement");
		}
	}

	logDebug("New Fees: " + newFeeArray.join(","));

	// Check for Updates
	if (feesNeedUpdate == null) feesNeedUpdate = checkFeeNeedUpdate_Building(newFeeArray,valuationBasedFees);
	
	returnObj = [];
	returnObj["New Fees"] = newFeeArray;
	returnObj["Vaulation Based Fees"] = valuationBasedFees;
	returnObj["Need Update"] = feesNeedUpdate;
	returnObj["Optional Inspections"] = inspOptArray;
	returnObj["Required Inspections"] = inspReqArray;

	return returnObj;
}

