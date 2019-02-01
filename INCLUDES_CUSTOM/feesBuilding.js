function feesBuilding() {

	showMessage = false;
	showDebug = false;
	surchgCntr = 0 * 1;
	gasGroup1 = 0 * 1;
	gasGroup2 = 0 * 1;
	plumbingGroup1 = 0 * 1;
	electricGroup1 = 0 * 1;
	electricGroup2 = 0 * 1;
	envGroup1 = 0 * 1;
	envGroup2 = 0 * 1;
	envGroup3 = 0 * 1;
	mechGroup1 = 0 * 1;
	fireGroup1 = 0 * 1;
	fireGroup2 = 0 * 1;
	plansrevGroup1 = 0 * 1;
	demoGroup1 = 0 * 1;
	accGroup1 = 0 * 1;
	indGroup1 = 0 * 1;
	bldPlnApv = 'N';
	appSubApv = 'N';
	mechGroup1 = 0 * 1;
	removeFee('5004-010', 'FINAL');
	removeFee('5004-015', 'FINAL');
	removeFee('5004-020', 'FINAL');
	removeFee('5008-003', 'FINAL');
	removeFee('5008-005', 'FINAL');
	removeFee('5008-010', 'FINAL');
	removeFee('5008-001', 'FINAL');
	removeFee('5006-010', 'FINAL');
	removeFee('5006-015', 'FINAL');
	removeFee('5006-025', 'FINAL');
	removeFee('5006-030', 'FINAL');
	removeFee('5006-040', 'FINAL');
	removeFee('5006-045', 'FINAL');
	removeFee('5002-010', 'FINAL');
	removeFee('5002-050', 'FINAL');
	removeFee('5002-015', 'FINAL');
	removeFee('5002-035', 'FINAL');
	removeFee('5002-030', 'FINAL');
	removeFee('5002-080', 'FINAL');
	removeFee('5002-040', 'FINAL');
	removeFee('5002-085', 'FINAL');
	removeFee('5002-045', 'FINAL');
	removeFee('5002-090', 'FINAL');
	removeFee('5002-095', 'FINAL');
	removeFee('5002-100', 'FINAL');
	removeFee('5002-105', 'FINAL');
	removeFee('5002-110', 'FINAL');
	removeFee('5002-115', 'FINAL');
	removeFee('5002-120', 'FINAL');
	removeFee('5002-125', 'FINAL');
	removeFee('5002-130', 'FINAL');
	removeFee('5002-135', 'FINAL');
	removeFee('5002-140', 'FINAL');
	removeFee('5002-150', 'FINAL');
	removeFee('5002-155', 'FINAL');
	removeFee('5002-160', 'FINAL');
	removeFee('5002-165', 'FINAL');
	removeFee('5002-170', 'FINAL');
	removeFee('5002-175', 'FINAL');
	removeFee('5002-020', 'FINAL');
	removeFee('5002-025', 'FINAL');
	removeFee('5002-055', 'FINAL');
	removeFee('5002-060', 'FINAL');
	removeFee('5002-065', 'FINAL');
	removeFee('5002-070', 'FINAL');
	true;
	removeFee('5002-180', 'FINAL');
	removeFee('5002-145', 'FINAL');
	removeFee('5002-075', 'FINAL');
	removeFee('5008-020', 'FINAL');
	removeFee('5012-010', 'FINAL');
	removeFee('5012-015', 'FINAL');
	removeFee('5017-010', 'FINAL');
	removeFee('5042-010', 'FINAL');
	removeFee('8096-010', 'FINAL');
	removeFee('5013-010', 'FINAL');
	removeFee('5017-010', 'FINAL');
	removeFee('8205-010', 'FINAL');
	removeFee('7077-010', 'FINAL');
	removeFee('5015-010', 'FINAL');
	removeFee('5020-010', 'FINAL');
	removeFee('5043-010', 'FINAL');
	removeFee('5017-010', 'FINAL');
	removeFee('5020-015', 'FINAL');
	removeFee('5020-010', 'FINAL');
	removeFee('5043-020', 'FINAL');
	removeFee('5015-015', 'FINAL');
	removeFee('5010-010', 'FINAL');
	removeFee('5010-015', 'FINAL');
	removeFee('5010-020', 'FINAL');
	removeFee('5010-025', 'FINAL');
	removeFee('5010-030', 'FINAL');
	removeFee('5010-035', 'FINAL');
	removeFee('5010-040', 'FINAL');
	removeFee('5010-045', 'FINAL');
	removeFee('5010-050', 'FINAL');
	removeFee('5010-055', 'FINAL');
	removeFee('5010-060', 'FINAL');
	removeFee('7015-013', 'FINAL');
	removeFee('5010-065', 'FINAL');
	removeFee('7015-015', 'FINAL');
	if (AInfo['Class Type'] == 'Industrial') {
		indGroup1 = indGroup1 + 1;
	}

	if (indGroup1 > 0) {
		showMessage = true;
		comment('<Font Color = red>indGroup1 Count = ' + indGroup1 + '</Font>');
	}

	// DISABLED: EMSE:Fees-Building:00097
	// if (isTaskStatus('Quality Check','Ready to Issue') == 'TRUE') {
	// 	bldPlnApv = 'Y;
	// 	}

	// DISABLED: EMSE:Fees-Building:00098
	// if (isTaskStatus('Application Submittal','Accepted') == 'TRUE') {
	// 	appSubApv = 'Y;
	// 	}

	if (AInfo['Mech New Installation'] > 0 && feeExists('5004-010', 'INVOICED') == false) {
		removeFee('5004-010', 'FINAL');
		addFee('5004-010', 'BUILDING', 'FINAL', getAppSpecific('Mech New Installation'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Mech Retro Existing Install'] > 0 && feeExists('5004-015', 'INVOICED') == false) {
		removeFee('5004-015', 'FINAL');
		addFee('5004-015', 'BUILDING', 'FINAL', getAppSpecific('Mech Retro Existing Install'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Other Mechanical'] > 0 && feeExists('5004-020', 'INVOICED') == false) {
		removeFee('5004-020', 'FINAL');
		addFee('5004-020', 'BUILDING', 'FINAL', getAppSpecific('Other Mechanical'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Gas Issuance'] == 'CHECKED' && feeExists('5008-003', 'INVOICED') == false) {
		removeFee('5008-003', 'FINAL');
		addFee('5008-003', 'BUILDING', 'FINAL', 1, 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Gas Piping (Num of Outlets)'] > 4 && feeExists('5008-005', 'INVOICED') == false) {
		removeFee('5008-005', 'FINAL');
		addFee('5008-005', 'BUILDING', 'FINAL', getAppSpecific('Gas Piping (Num of Outlets)'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Conversion Burner'] > 0) {
		gasGroup1 = gasGroup1 + (getAppSpecific('Conversion Burner') * 1);
	}

	if (AInfo['Floor Furnace'] > 0) {
		gasGroup1 = gasGroup1 + (getAppSpecific('Floor Furnace') * 1);
	}

	if (AInfo['Incinerator'] > 0) {
		gasGroup1 = gasGroup1 + (getAppSpecific('Incinerator') * 1);
	}

	if (AInfo['Boiler'] > 0) {
		gasGroup1 = gasGroup1 + (getAppSpecific('Boiler') * 1);
	}

	if (AInfo['Heating/AC Unit'] > 0) {
		gasGroup1 = gasGroup1 + (getAppSpecific('Heating/AC Unit') * 1);
	}

	if (gasGroup1 > 0 && feeExists('5008-010', 'INVOICED') == false) {
		removeFee('5008-010', 'FINAL');
		addFee('5008-010', 'BUILDING', 'FINAL', gasGroup1, 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Vented Wall Furnace'] > 0) {
		gasGroup2 = gasGroup2 + (getAppSpecific('Vented Wall Furnace') * 1);
	}

	if (AInfo['Gas Water Heater'] > 0) {
		gasGroup2 = gasGroup2 + (getAppSpecific('Gas Water Heater') * 1);
	}

	if (gasGroup2 > 0 && feeExists('5008-001', 'INVOICED') == false) {
		removeFee('5008-001', 'FINAL');
		addFee('5008-001', 'BUILDING', 'FINAL', gasGroup2, 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Other Gas'] > 0 && feeExists('5008-020', 'INVOICED') == false) {
		removeFee('5008-020', 'FINAL');
		addFee('5008-020', 'BUILDING', 'FINAL', getAppSpecific('Other Gas'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Plumbing Issuance'] == 'CHECKED' && feeExists('5006-010', 'INVOICED') == false) {
		removeFee('5006-010', 'FINAL');
		addFee('5006-010', 'BUILDING', 'FINAL', 1, 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Floor Sink/Drain'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Floor Sink/Drain') * 1);
	}

	if (AInfo['House Sewer New'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('House Sewer New') * 1);
	}

	if (AInfo['Repair/Replace '] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Repair/Replace ') * 1);
	}

	if (AInfo['Water Closet'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Water Closet') * 1);
	}

	if (AInfo['Kitchen Sink/Disposal'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Kitchen Sink/Disposal') * 1);
	}

	if (AInfo['Bath Tub'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Bath Tub') * 1);
	}

	if (AInfo['Shower'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Shower') * 1);
	}

	if (AInfo['Lavatory'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Lavatory') * 1);
	}

	if (AInfo['Clothes Washer'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Clothes Washer') * 1);
	}

	if (AInfo['Dish Washer'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Dish Washer') * 1);
	}

	if (AInfo['Drinking Fountain'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Drinking Fountain') * 1);
	}

	if (AInfo['Urinal'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Urinal') * 1);
	}

	if (AInfo['Ice machine/Maker'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Ice machine/Maker') * 1);
	}

	if (AInfo['Bar Sink'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Bar Sink') * 1);
	}

	if (AInfo['Janitor Sink'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Janitor Sink') * 1);
	}

	if (AInfo['Hose Bibb'] > 0) {
		plumbingGroup1 = plumbingGroup1 + (getAppSpecific('Hose Bibb') * 1);
	}

	if (plumbingGroup1 > 0 && feeExists('5006-015', 'INVOICED') == false) {
		removeFee('5006-015', 'FINAL');
		addFee('5006-015', 'BUILDING', 'FINAL', plumbingGroup1, 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Water Heater or Vent'] > 0 && feeExists('5006-025', 'INVOICED') == false) {
		removeFee('5006-025', 'FINAL');
		addFee('5006-025', 'BUILDING', 'FINAL', getAppSpecific('Water Heater or Vent'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Water Piping/Treatment Equipment'] > 0 && feeExists('5006-030', 'INVOICED') == false) {
		removeFee('5006-030', 'FINAL');
		addFee('5006-030', 'BUILDING', 'FINAL', getAppSpecific('Water Piping/Treatment Equipment'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Vacuum Breaker/Backflow Device'] > 0 && feeExists('5006-040', 'INVOICED') == false) {
		removeFee('5006-040', 'FINAL');
		addFee('5006-040', 'BUILDING', 'FINAL', getAppSpecific('Vacuum Breaker/Backflow Device'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Other Plumbing'] > 0 && feeExists('5006-045', 'INVOICED') == false) {
		removeFee('5006-045', 'FINAL');
		addFee('5006-045', 'BUILDING', 'FINAL', getAppSpecific('Other Plumbing'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Electrical Issuance'] == 'CHECKED' && feeExists('5002-010', 'INVOICED') == false) {
		removeFee('5002-010', 'FINAL');
		addFee('5002-010', 'BUILDING', 'FINAL', 1, 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Temporary Service'] > 0 && feeExists('5002-050', 'INVOICED') == false) {
		removeFee('5002-050', 'FINAL');
		addFee('5002-050', 'BUILDING', 'FINAL', getAppSpecific('Temporary Service'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Switches/Recepticals'] > 0 && feeExists('5002-015', 'INVOICED') == false) {
		removeFee('5002-015', 'FINAL');
		addFee('5002-015', 'BUILDING', 'FINAL', getAppSpecific('Switches/Recepticals'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Lighting Fixtures'] > 0 && feeExists('5002-035', 'INVOICED') == false) {
		removeFee('5002-035', 'FINAL');
		addFee('5002-035', 'BUILDING', 'FINAL', getAppSpecific('Lighting Fixtures'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Fans'] > 0 && feeExists('5002-030', 'INVOICED') == false) {
		removeFee('5002-030', 'FINAL');
		addFee('5002-030', 'BUILDING', 'FINAL', getAppSpecific('Fans'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Range/Stove/Oven'] > 0) {
		electricGroup1 = electricGroup1 + (getAppSpecific('Range/Stove/Oven') * 1);
	}

	if (AInfo['Water Heater'] > 0) {
		electricGroup1 = electricGroup1 + (getAppSpecific('Water Heater') * 1);
	}

	if (electricGroup1 > 0 && feeExists('5002-080', 'INVOICED') == false) {
		removeFee('5002-080', 'FINAL');
		addFee('5002-080', 'BUILDING', 'FINAL', electricGroup1, 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Clothes Dryer'] > 0) {
		electricGroup2 = electricGroup2 + (getAppSpecific('Clothes Dryer') * 1);
	}

	if (AInfo['Clothes Washer'] > 0) {
		electricGroup2 = electricGroup2 + (getAppSpecific('Clothes Washer') * 1);
	}

	if (AInfo['Garage Opener'] > 0) {
		electricGroup2 = electricGroup2 + (getAppSpecific('Garage Opener') * 1);
	}

	if (AInfo['Spa Pump'] > 0) {
		electricGroup2 = electricGroup2 + (getAppSpecific('Spa Pump') * 1);
	}

	if (AInfo['Central Vacuum'] > 0) {
		electricGroup2 = electricGroup2 + (getAppSpecific('Central Vacuum') * 1);
	}

	if (AInfo['Trash Compactor'] > 0) {
		electricGroup2 = electricGroup2 + (getAppSpecific('Trash Compactor') * 1);
	}

	if (AInfo['Attic Exhaust Fans'] > 0) {
		electricGroup2 = electricGroup2 + (getAppSpecific('Attic Exhaust Fans') * 1);
	}

	if (AInfo['Dish Washer/Disposal'] > 0) {
		electricGroup2 = electricGroup2 + (getAppSpecific('Dish Washer/Disposal') * 1);
	}

	if (AInfo['Motor to 3/4 HP and less than 600 Volts'] > 0) {
		electricGroup2 = electricGroup2 + (getAppSpecific('Motor to 3/4 HP and less than 600 Volts') * 1);
	}

	if (electricGroup2 > 0 && feeExists('5002-040', 'INVOICED') == false) {
		removeFee('5002-040', 'FINAL');
		addFee('5002-040', 'BUILDING', 'FINAL', electricGroup2, 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Welding Machines'] > 0 && feeExists('5002-085', 'INVOICED') == false) {
		removeFee('5002-085', 'FINAL');
		addFee('5002-085', 'BUILDING', 'FINAL', getAppSpecific('Welding Machines'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Motor over 3/4 HP less than 5 HP to 600 Volts'] > 0 && feeExists('5002-045', 'INVOICED') == false) {
		removeFee('5002-045', 'FINAL');
		addFee('5002-045', 'BUILDING', 'FINAL', getAppSpecific('Motor over 3/4 HP less than 5 HP to 600 Volts'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Motor over 5 HP less than 10 HP over 600 Volts'] > 0 && feeExists('5002-090', 'INVOICED') == false) {
		removeFee('5002-090', 'FINAL');
		addFee('5002-090', 'BUILDING', 'FINAL', getAppSpecific('Motor over 5 HP less than 10 HP over 600 Volts'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Motor over 10 HP to 25 HP over 600 Volts'] > 0 && feeExists('5002-095', 'INVOICED') == false) {
		removeFee('5002-095', 'FINAL');
		addFee('5002-095', 'BUILDING', 'FINAL', getAppSpecific('Motor over 10 HP to 25 HP over 600 Volts'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Motor over 25 HP to 100 HP over 600 Volts'] > 0 && feeExists('5002-100', 'INVOICED') == false) {
		removeFee('5002-100', 'FINAL');
		addFee('5002-100', 'BUILDING', 'FINAL', getAppSpecific('Motor over 25 HP to 100 HP over 600 Volts'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Motor over 100 HP'] > 0 && feeExists('5002-105', 'INVOICED') == false) {
		removeFee('5002-105', 'FINAL');
		addFee('5002-105', 'BUILDING', 'FINAL', getAppSpecific('Motor over 100 HP'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Rectifier to 1KVA'] > 0 && feeExists('5002-110', 'INVOICED') == false) {
		removeFee('5002-110', 'FINAL');
		addFee('5002-110', 'BUILDING', 'FINAL', getAppSpecific('Rectifier to 1KVA'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Rectifier over 1KVA to 5KVA'] > 0 && feeExists('5002-115', 'INVOICED') == false) {
		removeFee('5002-115', 'FINAL');
		addFee('5002-115', 'BUILDING', 'FINAL', getAppSpecific('Rectifier over 1KVA to 5KVA'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Rectifier over 5KVA'] > 0 && feeExists('5002-120', 'INVOICED') == false) {
		removeFee('5002-120', 'FINAL');
		addFee('5002-120', 'BUILDING', 'FINAL', getAppSpecific('Rectifier over 5KVA'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Transformer to 600 Volts'] > 0 && feeExists('5002-125', 'INVOICED') == false) {
		removeFee('5002-125', 'FINAL');
		addFee('5002-125', 'BUILDING', 'FINAL', getAppSpecific('Transformer to 600 Volts'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Transformer over 600 Volts'] > 0 && feeExists('5002-130', 'INVOICED') == false) {
		removeFee('5002-130', 'FINAL');
		addFee('5002-130', 'BUILDING', 'FINAL', getAppSpecific('Transformer over 600 Volts'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Antenna'] > 0 && feeExists('5002-135', 'INVOICED') == false) {
		removeFee('5002-135', 'FINAL');
		addFee('5002-135', 'BUILDING', 'FINAL', getAppSpecific('Antenna'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Auto Bake Oven'] > 0 && feeExists('5002-140', 'INVOICED') == false) {
		removeFee('5002-140', 'FINAL');
		addFee('5002-140', 'BUILDING', 'FINAL', getAppSpecific('Auto Bake Oven'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Diathermic'] > 0 && feeExists('5002-145', 'INVOICED') == false) {
		removeFee('5002-145', 'FINAL');
		addFee('5002-145', 'BUILDING', 'FINAL', getAppSpecific('Diathermic'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Festoon Lights'] > 0 && feeExists('5002-150', 'INVOICED') == false) {
		removeFee('5002-150', 'FINAL');
		addFee('5002-150', 'BUILDING', 'FINAL', getAppSpecific('Festoon Lights'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Plug Molding (Ln Ft)'] > 0 && feeExists('5002-155', 'INVOICED') == false) {
		removeFee('5002-155', 'FINAL');
		addFee('5002-155', 'BUILDING', 'FINAL', getAppSpecific('Plug Molding (Ln Ft)'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Motion Picture Projector'] > 0 && feeExists('5002-160', 'INVOICED') == false) {
		removeFee('5002-160', 'FINAL');
		addFee('5002-160', 'BUILDING', 'FINAL', getAppSpecific('Motion Picture Projector'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['TentShow/Circus'] > 0 && feeExists('5002-165', 'INVOICED') == false) {
		removeFee('5002-165', 'FINAL');
		addFee('5002-165', 'BUILDING', 'FINAL', getAppSpecific('TentShow/Circus'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['X-Ray Portable'] > 0 && feeExists('5002-170', 'INVOICED') == false) {
		removeFee('5002-170', 'FINAL');
		addFee('5002-170', 'BUILDING', 'FINAL', getAppSpecific('X-Ray Portable'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['X-Ray Stationary'] > 0 && feeExists('5002-175', 'INVOICED') == false) {
		removeFee('5002-175', 'FINAL');
		addFee('5002-175', 'BUILDING', 'FINAL', getAppSpecific('X-Ray Stationary'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Electric Signs to 1650 Watts'] > 0 && feeExists('5002-020', 'INVOICED') == false) {
		removeFee('5002-020', 'FINAL');
		addFee('5002-020', 'BUILDING', 'FINAL', getAppSpecific('Electric Signs to 1650 Watts'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Electric Signs over 1650 Watts'] > 0 && feeExists('5002-025', 'INVOICED') == false) {
		removeFee('5002-025', 'FINAL');
		addFee('5002-025', 'BUILDING', 'FINAL', getAppSpecific('Electric Signs over 1650 Watts'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Permanent Service/Panels Up to 200 Amps'] > 0 && feeExists('5002-055', 'INVOICED') == false) {
		removeFee('5002-055', 'FINAL');
		addFee('5002-055', 'BUILDING', 'FINAL', getAppSpecific('Permanent Service/Panels Up to 200 Amps'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Permanent Service/Panels 200-400 Amps'] > 0 && feeExists('5002-060', 'INVOICED') == false) {
		removeFee('5002-060', 'FINAL');
		addFee('5002-060', 'BUILDING', 'FINAL', getAppSpecific('Permanent Service/Panels 200-400 Amps'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Permanent Service/Panels 401-600 Amps'] > 0 && feeExists('5002-065', 'INVOICED') == false) {
		removeFee('5002-065', 'FINAL');
		addFee('5002-065', 'BUILDING', 'FINAL', getAppSpecific('Permanent Service/Panels 401-600 Amps'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Permanent Service/Panels 601-800 Amps'] > 0 && feeExists('5002-070', 'INVOICED') == false) {
		removeFee('5002-070', 'FINAL');
		addFee('5002-070', 'BUILDING', 'FINAL', getAppSpecific('Permanent Service/Panels 601-800 Amps'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Permanent Service/Panels Amps if over 800'] > 0 && feeExists('5002-075', 'INVOICED') == false) {
		removeFee('5002-075', 'FINAL');
		addFee('5002-075', 'BUILDING', 'FINAL', getAppSpecific('Permanent Service/Panels Amps if over 800'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Other Electric'] > 0 && feeExists('5002-180', 'INVOICED') == false) {
		removeFee('5002-180', 'FINAL');
		addFee('5002-180', 'BUILDING', 'FINAL', getAppSpecific('Other Electric'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/*/*/*') && getAppSpecific('Photovoltaic System') == 'CHECKED' && feeExists('5007-010', 'INVOICED') == false) {
		removeFee('5007-010', 'FINAL');
		addFee('5007-010', 'BUILDING', 'FINAL', 1, 'N');
		surchgCntr = surchgCntr + 1;
	}

	// DISABLED: EMSE:Fees-Building:0416 Solar PV
	// if (appMatch('Building/VelocityHall/Solar Photovoltaic/*') && feeExists('5007-010','INVOICED') == false) {
	// 	removeFee('5007-010','FINAL');
	// 	addFee('5007-010','BUILDING','FINAL',1,'N');
	// 	surchgCntr = surchgCntr +1;
	// 	}

	// DISABLED: EMSE:Fees-Building:0417 Solar Thermal HW
	// if (appMatch('Building/VelocityHall/Solar Thermal Hot Water/*') && feeExists('5007-015','INVOICED') == false) {
	// 	removeFee('5007-015','FINAL');
	// 	addFee('5007-015','BUILDING','FINAL',1,'N');
	// 	surchgCntr = surchgCntr +1;
	// 	}

	// DISABLED: EMSE:Fees-Building:0418 Solar Swimming Pool
	// if (appMatch('Building/VelocityHall/Solar Swimming Pool/*') && feeExists('5007-015','INVOICED') == false) {
	// 	removeFee('5007-015','FINAL');
	// 	addFee('5007-015','BUILDING','FINAL',1,'N');
	// 	surchgCntr = surchgCntr +1;
	// 	}

	if (appMatch('Building/Commercial/New/*') && AInfo['Actual Improvement Area'] > 0 && indGroup1 > 0 && feeExists('5010-020', 'INVOICED') == false) {
		removeFee('5010-020', 'FINAL');
		addFee('5010-020', 'BUILDING', 'FINAL', getAppSpecific('Actual Improvement Area'), 'N');
		surchgCntr = surchgCntr + 1;
		fireGroup1 = fireGroup1 + 1;
	}

	if (appMatch('Building/Commercial/New/*') && AInfo['Actual Improvement Area'] > 0 && indGroup1 < 1 && feeExists('5010-010', 'INVOICED') == false) {
		removeFee('5010-010', 'FINAL');
		addFee('5010-010', 'BUILDING', 'FINAL', getAppSpecific('Actual Improvement Area'), 'N');
		surchgCntr = surchgCntr + 1;
		fireGroup1 = fireGroup1 + 1;
	}

	if (appMatch('Building/*/Multi-Family/*') && AInfo['Actual Improvement Area'] > 0 && indGroup1 < 1 && feeExists('5010-010', 'INVOICED') == false) {
		removeFee('5010-010', 'FINAL');
		addFee('5010-010', 'BUILDING', 'FINAL', getAppSpecific('Actual Improvement Area'), 'N');
		surchgCntr = surchgCntr + 1;
		fireGroup1 = fireGroup1 + 1;
	}

	if (appMatch('Building/Commercial/Addition/*') && AInfo['Actual Improvement Area'] > 0 && indGroup1 < 1 && feeExists('5010-010', 'INVOICED') == false) {
		removeFee('5010-010', 'FINAL');
		addFee('5010-010', 'BUILDING', 'FINAL', getAppSpecific('Actual Improvement Area'), 'N');
		surchgCntr = surchgCntr + 1;
		fireGroup1 = fireGroup1 + 1;
	}

	if (appMatch('Building/Residential/New/*') && AInfo['Actual Improvement Area'] > 0 && feeExists('5010-025', 'INVOICED') == false || appMatch('Building/Residential/Addition/*') && AInfo['Actual Improvement Area'] > 0 && feeExists('5010-025', 'INVOICED') == false) {
		removeFee('5010-025', 'FINAL');
		addFee('5010-025', 'BUILDING', 'FINAL', getAppSpecific('Actual Improvement Area'), 'N');
		envGroup1 = envGroup1 + 1;
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/Residential/Addition/*') && AInfo['Actual Improvement Area'] > 0) {
		envGroup1 = 0 * 1;
		envGroup2 = envGroup2 + 1;
	}

	if (appMatch('Building/Residential/Accessory Structure/*') && AInfo['Actual Improvement Area'] > 0 && feeExists('5010-025', 'INVOICED') == false) {
		removeFee('5010-025', 'FINAL');
		addFee('5010-025', 'BUILDING', 'FINAL', getAppSpecific('Actual Improvement Area'), 'N');
		envGroup2 = envGroup2 + 1;
		surchgCntr = surchgCntr + 1;
	}

	if ((matches(appTypeArray[1], 'Residential') && matches(appTypeArray[2], 'Alteration', 'Door-Windows', 'Pool Reliner', 'Reroof', 'Vinyl Siding') || matches(appTypeArray[2], 'Quick Turn')) && AInfo['Valuation of Work Performed'] > 0 && AInfo['Remodel/Repair/Alteration'] == 'CHECKED' && feeExists('5010-015', 'INVOICED') == false) {
		removeFee('5010-015', 'FINAL');
		addFee('5010-015', 'BUILDING', 'FINAL', getAppSpecific('Valuation of Work Performed'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/*/Addition/*') && AInfo['Actual Improvement Area'] > 0 && AInfo['Remodel/Repair/Alteration'] == 'CHECKED' && feeExists('5010-015', 'INVOICED') == false) {
		removeFee('5010-015', 'FINAL');
		addFee('5010-015', 'BUILDING', 'FINAL', getAppSpecific('Valuation of Work Performed'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/*/*/*') && getAppSpecific('Alteration Valuation without Addition') > 0 && getAppSpecific('Alteration Valuation without Addition') <= 2000 && feeExists('5010-060', 'INVOICED') == false) {
		removeFee('5010-060', 'FINAL');
		addFee('5010-060', 'BUILDING', 'FINAL', 91.38, bldPlnApv);
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/*/*/*') && getAppSpecific('Alteration Valuation without Addition') >= 2000.01 && getAppSpecific('Alteration Valuation without Addition') <= 15000 && feeExists('5010-060', 'INVOICED') == false) {
		removeFee('5010-060', 'FINAL');
		addFee('5010-060', 'BUILDING', 'FINAL', 212.78, bldPlnApv);
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/*/*/*') && getAppSpecific('Alteration Valuation without Addition') >= 15000.01 && getAppSpecific('Alteration Valuation without Addition') <= 50000 && feeExists('5010-060', 'INVOICED') == false) {
		removeFee('5010-060', 'FINAL');
		addFee('5010-060', 'BUILDING', 'FINAL', 386.40 + (((AInfo['Alteration Valuation without Addition'] - 15000) / 100) * 1.56), bldPlnApv);
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/*/*/*') && getAppSpecific('Alteration Valuation without Addition') >= 50000.01 && getAppSpecific('Alteration Valuation without Addition') <= 100000 && feeExists('5010-060', 'INVOICED') == false) {
		removeFee('5010-060', 'FINAL');
		addFee('5010-060', 'BUILDING', 'FINAL', 998.63 + (((AInfo['Alteration Valuation without Addition'] - 50000) / 100) * 1.41), bldPlnApv);
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/*/*/*') && getAppSpecific('Alteration Valuation without Addition') >= 100000.01 && getAppSpecific('Alteration Valuation without Addition') <= 500000 && feeExists('5010-060', 'INVOICED') == false) {
		removeFee('5010-060', 'FINAL');
		addFee('5010-060', 'BUILDING', 'FINAL', 1644.80 + (((AInfo['Alteration Valuation without Addition'] - 100000) / 100) * .777), bldPlnApv);
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/*/*/*') && getAppSpecific('Alteration Valuation without Addition') >= 500000.01 && getAppSpecific('Alteration Valuation without Addition') <= 10000000 && feeExists('5010-060', 'INVOICED') == false) {
		removeFee('5010-060', 'FINAL');
		addFee('5010-060', 'BUILDING', 'FINAL', 5305.15 + (((AInfo['Alteration Valuation without Addition'] - 500000) / 100) * .397), bldPlnApv);
		surchgCntr = surchgCntr + 1;
	}

	// DISABLED: EMSE:Fees-Building:04408 Bld Fees Add wAlt
	// showMessage = false;
	// showDebug = 1;
	// DISABLED: EMSE:Fees-Building:0441 Bld Fees Add wAlt
	// if (appMatch('Building/Residential/Addition/*') && AInfo['Alteration Valuation without Addition'] > 0 && feeExists('5010-015','INVOICED') == false) {
	// 	removeFee('5010-015','FINAL');
	// 	addFee('5010-015','BUILDING','FINAL',getAppSpecific('Alteration Valuation without Addition'),'N');
	// 	surchgCntr = surchgCntr +1;
	// 	}

	if (appMatch('Building/VelocityHall/Reroof/NA') && AInfo['Valuation of Work Performed'] > 0 && feeExists('5010-015', 'INVOICED') == false) {
		removeFee('5010-015', 'FINAL');
		addFee('5010-015', 'BUILDING', 'FINAL', getAppSpecific('Valuation of Work Performed'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/VelocityHall/Vinyl Siding/*') && AInfo['Valuation of Work Performed'] > 0 && feeExists('5010-015', 'INVOICED') == false) {
		removeFee('5010-015', 'FINAL');
		addFee('5010-015', 'BUILDING', 'FINAL', getAppSpecific('Valuation of Work Performed'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/VelocityHall/Door-Windows/NA') && AInfo['Valuation of Work Performed'] > 0 && feeExists('5010-015', 'INVOICED') == false) {
		removeFee('5010-015', 'FINAL');
		addFee('5010-015', 'BUILDING', 'FINAL', getAppSpecific('Valuation of Work Performed'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/Commercial/Alteration/*') && AInfo['Valuation of Work Performed'] > 0 && AInfo['Remodel/Repair/Alteration'] == 'CHECKED' && feeExists('5010-015', 'INVOICED') == false) {
		removeFee('5010-015', 'FINAL');
		addFee('5010-015', 'BUILDING', 'FINAL', getAppSpecific('Valuation of Work Performed'), 'N');
		addFee('5020-015', 'BUILDING', 'FINAL', getAppSpecific('Valuation of Work Performed'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/VelocityHall/*/*') && AInfo['Valuation of Work Performed'] > 0 && AInfo['Remodel/Repair/Alteration'] == 'CHECKED' && feeExists('5010-015', 'INVOICED') == false) {
		removeFee('5010-015', 'FINAL');
		addFee('5010-015', 'BUILDING', 'FINAL', getAppSpecific('Valuation of Work Performed'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/Commercial/Foundation/*') && AInfo['Valuation of Work Performed'] > 0 && feeExists('5010-055', 'INVOICED') == false) {
		removeFee('5010-055', 'FINAL');
		addFee('5010-055', 'BUILDING', 'FINAL', getAppSpecific('Actual Improvement Area'), 'N');
		envGroup1 = envGroup1 + 1;
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/Residential/Manufactured Home/*') && AInfo['Valuation of Work Performed'] > 0 && feeExists('5040-010', 'INVOICED') == false) {
		removeFee('5040-010', 'FINAL');
		addFee('5040-010', 'BUILDING', 'FINAL', 1, 'N');
		envGroup1 = envGroup1 + 1;
	}

	if (appMatch('Building/*/Pool/*') && AInfo['New Pool In-Ground'] == 'CHECKED' && AInfo['Valuation of Work Performed'] > 0 && feeExists('5010-035', 'INVOICED') == false) {
		removeFee('5010-035', 'FINAL');
		addFee('5010-035', 'BUILDING', 'FINAL', 1, 'N');
		envGroup1 = envGroup1 + 1;
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/*/Pool/*') && AInfo['New Pool Above-Ground'] == 'CHECKED' && AInfo['Valuation of Work Performed'] > 0 && feeExists('5010-040', 'INVOICED') == false) {
		removeFee('5010-040', 'FINAL');
		addFee('5010-040', 'BUILDING', 'FINAL', 1, 'N');
		envGroup3 = envGroup3 + 1;
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Pool Liner Only'] == 'CHECKED' && AInfo['Valuation of Work Performed'] > 0 && feeExists('5010-042', 'INVOICED') == false) {
		removeFee('5010-042', 'FINAL');
		addFee('5010-042', 'BUILDING', 'FINAL', 1, 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Temporary Facility'] == 'CHECKED' && AInfo['Valuation of Work Performed'] > 0 && feeExists('5010-045', 'INVOICED') == false) {
		removeFee('5010-045', 'FINAL');
		addFee('5010-045', 'BUILDING', 'FINAL', 1, 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Move Structure'] == 'CHECKED' && AInfo['Valuation of Work Performed'] > 0 && feeExists('5010-030', 'INVOICED') == false) {
		removeFee('5010-030', 'FINAL');
		addFee('5010-030', 'BUILDING', 'FINAL', 1, 'N');
		envGroup1 = envGroup1 + 1;
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Other Building'] > 0 && AInfo['Valuation of Work Performed'] > 0 && feeExists('5010-050', 'INVOICED') == false) {
		removeFee('5010-050', 'FINAL');
		addFee('5010-050', 'BUILDING', 'FINAL', getAppSpecific('Other Building'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (AInfo['Commercial Plan Review'] == 'CHECKED' && feeExists('5012-010', 'INVOICED') == false) {
		removeFee('5012-010', 'FINAL');
		addFee('5012-010', 'BUILDING', 'FINAL', getAppSpecific('Valuation of Work Performed'), 'N');
	}

	if (AInfo['Addressing Assignment'] == 'CHECKED' && feeExists('8096-010', 'INVOICED') == false) {
		removeFee('8096-010', 'FINAL');
		addFee('8096-010', 'BUILDING', 'FINAL', 1, 'N');
	}

	if (AInfo['Class Type'] == 'Shed' || AInfo['Class Type'] == 'Storage Building' || AInfo['Class Type'] == 'Green House' || AInfo['Class Type'] == 'Boat Shed/Dock' || AInfo['Class Type'] == 'Pool House' || AInfo['Class Type'] == 'Res Carport/Garage') {
		accGroup1 = accGroup1 + 1;
	}

	if (appMatch('Building/Residential/Demolition/*') && accGroup1 > 0) {
		demoGroup1 = demoGroup1 + 1;
	}

	if (demoGroup1 > 0 && AInfo['Utilities Attached'] != 'CHECKED' && feeExists('5010-065', 'INVOICED') == false && feeExists('7015-015', 'INVOICED') == false) {
		removeFee('5010-065', 'FINAL');
		removeFee('7015-015', 'FINAL');
		addFee('7015-015', 'BUILDING', 'FINAL', getAppSpecific('Actual Improvement Area'), 'N');
	}

	if (demoGroup1 > 0 && AInfo['Utilities Attached'] == 'CHECKED' && feeExists('5010-065', 'INVOICED') == false && feeExists('7015-015', 'INVOICED') == false) {
		removeFee('5010-065', 'FINAL');
		addFee('5010-065', 'BUILDING', 'FINAL', 1, bldPlnApv);
		removeFee('7015-015', 'FINAL');
		addFee('7015-015', 'BUILDING', 'FINAL', getAppSpecific('Actual Improvement Area'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (accGroup1 == 0 && appMatch('Building/*/Demolition/*') && feeExists('5010-065', 'INVOICED') == false && feeExists('7015-015', 'INVOICED') == false) {
		removeFee('7015-015', 'FINAL');
		addFee('7015-015', 'BUILDING', 'FINAL', 1001, bldPlnApv);
		removeFee('5010-065', 'FINAL');
		addFee('5010-065', 'BUILDING', 'FINAL', 1, 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (appMatch('Building/Commercial/Demolition/*') && feeExists('5010-065', 'INVOICED') == false && feeExists('7015-015', 'INVOICED') == false) {
		removeFee('5010-065', 'FINAL');
		addFee('5010-065', 'BUILDING', 'FINAL', 1, bldPlnApv);
		removeFee('7015-015', 'FINAL');
		addFee('7015-015', 'BUILDING', 'FINAL', 1001, 'N');
		surchgCntr = surchgCntr + 1;
		demoGroup1 = demoGroup1 + 1;
	}

	if (appMatch('Building/Commercial/Sign/*') && AInfo['Valuation of Work Performed'] > 0 && feeExists('5010-015', 'INVOICED') == false) {
		removeFee('5010-015', 'FINAL');
		addFee('5010-015', 'BUILDING', 'FINAL', getAppSpecific('Valuation of Work Performed'), 'N');
		surchgCntr = surchgCntr + 1;
	}

	if (appTypeArray[1] == 'Residential' && matches(appTypeArray[2], 'New') && AInfo['Fees Paid on LEM'] == 'CHECKED') {
		envGroup1 = envGroup1 * 0;
	}

	if (appTypeArray[0] == 'Building' && AInfo['Improvement Type'] == 'Retaining Wall') {
		envGroup1 = envGroup1 + 1;
		envGroup2 = envGroup2 * 0;
	}

	if (appMatch('Building/*/*/*') && AInfo['Resite Fee'] > 0 && feeExists('7015-014', 'INVOICED') == false) {
		removeFee('7015-014', 'FINAL');
		addFee('7015-014', 'BUILDING', 'FINAL', getAppSpecific('Resite Fee'), 'N');
	}

	// DISABLED: EMSE:Fees-Building:0635 Bld Fees Alt w Addition
	// if (appMatch('Building/*/Addition/*') && AInfo['Actual Improvement Area'] > 0 && AInfo['Alteration Valuation without Addition'] > 0 && feeExists('5010-060','INVOICED') == false) {
	// 	removeFee('5010-060','FINAL');
	// 	addFee('5010-060','BUILDING','FINAL',getAppSpecific('Alteration Valuation without Addition'),'N');
	// 	}

	if (envGroup1 > 0 && feeExists('7015-012', 'INVOICED') == false && feeExists('5041-015', 'INVOICED') == false) {
		removeFee('7015-012', 'FINAL');
		removeFee('5041-015', 'FINAL');
		addFee('7015-012', 'BUILDING', 'FINAL', 1, 'N');
		addFee('5041-015', 'BUILDING', 'FINAL', 1, 'N');
	}

	if (envGroup2 > 0 && appMatch('Building/Residential/*/*') && (AInfo['Actual Improvement Area'] > 0 && AInfo['Actual Improvement Area'] <= 1000) && feeExists('7015-010', 'INVOICED') == false) {
		removeFee('7015-010', 'FINAL');
		addFee('7015-010', 'BUILDING', 'FINAL', AInfo['Actual Improvement Area'], 'N');
	}

	if (envGroup2 > 0 && appMatch('Building/Residential/*/*') && AInfo['Actual Improvement Area'] > 1000 && feeExists('7015-012', 'INVOICED') == false && feeExists('5041-015', 'INVOICED') == false) {
		removeFee('7015-012', 'FINAL');
		removeFee('5041-015', 'FINAL');
		addFee('7015-012', 'BUILDING', 'FINAL', 1, 'N');
		addFee('5041-015', 'BUILDING', 'FINAL', 1, 'N');
	}

	// DISABLED: EMSE:Fees-Building:0652
	// showMessage = true;
	// showDebug = 1;
	// DISABLED: EMSE:Fees-Building:0655 Env Group 3 Abv Gnd Pool
	// if (envGroup3 > 0 && feeExists('7015-013','INVOICED') == false) {
	// 	removeFee('7015-013','FINAL');
	// 	addFee('7015-013','BUILDING','FINAL',AInfo['Actual Improvement Area'],'N');
	// 	}

	if (appMatch('Building/VelocityHall/Mechanical/NA')) {
		mechGroup1 = mechGroup1 + 1;
	}

	if ((appMatch('Building/Residential/Alteration/NA') && AInfo['Improvement Type'] == 'Mechanical Only') || (appMatch('Building/Commercial/Alteration/NA') && AInfo['Improvement Type'] == 'Mechanical Only')) {
		mechGroup1 = mechGroup1 + 1;
	}

	if (mechGroup1 > 0 && AInfo['Valuation of Work Performed'] > 7500 && feeExists('5017-010', 'INVOICED') == false) {
		removeFee('5017-010', 'FINAL');
		addFee('5017-010', 'BUILDING', 'FINAL', 1, 'N');
	}

	if (mechGroup1 == 0 && demoGroup1 == 0 && appMatch('Building/*/*/*') && AInfo['Valuation of Work Performed'] > 2500 && feeExists('5017-010', 'INVOICED') == false) {
		removeFee('5017-010', 'FINAL');
		addFee('5017-010', 'BUILDING', 'FINAL', 1, 'N');
	}

	if (demoGroup1 > 0 && AInfo['Valuation of Work Performed'] > 2500 && feeExists('5017-010', 'INVOICED') == false) {
		removeFee('5017-010', 'FINAL');
		addFee('5017-010', 'BUILDING', 'FINAL', 1, 'N');
	}

	if (appMatch('Building/*/*/*') && AInfo['Valuation of Work Performed'] >= 2500 && mechGroup1 == 0 && feeExists('5017-010', 'INVOICED') == false) {
		removeFee('5017-010', 'FINAL');
		addFee('5017-010', 'BUILDING', 'FINAL', 1, 'N');
	}

	if (fireGroup1 > 0 && feeExists('5020-010', 'INVOICED') == false) {
		removeFee('5020-010', 'FINAL');
		addFee('5020-010', 'BUILDING', 'FINAL', getAppSpecific('Actual Improvement Area'), 'N');
	}

	if (fireGroup2 > 0 && feeExists('5020-015', 'INVOICED') == false) {
		removeFee('5020-015', 'FINAL');
		addFee('5012-010', 'BUILDING', 'FINAL', getAppSpecific('Valuation of Work Performed'), 'N');
	}

	if (plansrevGroup1 > 0 && feeExists('5012-010', 'INVOICED') == false) {
		removeFee('5012-010', 'FINAL');
		addFee('5012-010', 'BUILDING', 'FINAL', getAppSpecific('Valuation of Work Performed'), 'N');
	}

	if (AInfo['Other Plan Review'] > 0 && feeExists('5012-015', 'INVOICED') == false) {
		removeFee('5012-015', 'FINAL');
		addFee('5012-015', 'BUILDING', 'FINAL', getAppSpecific('Other Plan Review'), 'N');
	}

	if (AInfo['Number of Large Documents Printed'] > 0 && feeExists('8205-010', 'INVOICED') == false) {
		removeFee('8205-010', 'FINAL');
		addFee('8205-010', 'BUILDING', 'FINAL', getAppSpecific('Number of Large Documents Printed'), 'N');
	}

	// DISABLED: EMSE:Fees-Building:0700 Misc Lic Fees Rem
	// removeFee('5055-005','FINAL');
	// removeFee('5052-005','FINAL');
	// removeFee('5051-005','FINAL');
	// removeFee('5053-005','FINAL');
	// removeFee('5054-005','FINAL');
	// DISABLED: EMSE:Fees-Building:0710 Misc Con Fine
	// if (appMatch('Building/Miscellaneous/*/*') && feeExists('5055-005','INVOICED') ==  false && AInfo['Contractor License Admin Fine Amount'] > 0) {
	// 	removeFee('5055-005','FINAL');
	// 	addFee('5055-005,'Misc Fee Schedule','FINAL',getAppSpecific('Contractor License Admin Fine Amount'),'N');
	// 	}

	// DISABLED: EMSE:Fees-Building:0720 Misc Con Lic App
	// if (appMatch('Building/Miscellaneous/*/*') && feeExists('5052-005','INVOICED') == false && AInfo['Contractor Application'] > 0) {
	// 	removeFee('5052-005','FINAL');
	// 	addFee('5052-005','BUILDING','FINAL',getAppSpecific('Contractor Application'),'N');
	// 	}

	// DISABLED: EMSE:Fees-Building:0730 Misc Con Comp Ltr
	// if (appMatch('Building/Miscellaneous/*/*') && feeExists('5051-005','INVOICED') == false && AInfo['Compentency Letter(s)'] > 0) {
	// 	removeFee('5052-005','FINAL');
	// 	addFee('5052-005','BUILDING','FINAL',getAppSpecific('Compentency Letter(s)'),'N');
	// 	}

	// DISABLED: EMSE:Fees-Building:0740 Misc Con Lic File Maint
	// if (appMatch('Building/Miscellaneous/*/*') && feeExists('5053-005','INVOICED') == false && AInfo['Number of Years File Maint'] > 0) {
	// 	removeFee('5053-005','FINAL');
	// 	addFee('5053-005','BUILDING','FINAL',getAppSpecific('Number of Years File Maint'),'N');
	// 	}

	// DISABLED: EMSE:Fees-Building:0750 Misc Con Lic Renewal
	// if (appMatch('Building/Miscellaneous/*/*') && feeExists('5054-005','INVOICED') == false && AInfo['Number of Years File Maint'] > 0) {
	// 	removeFee('5054-005','FINAL');
	// 	addFee('5054-005','BUILDING','FINAL',getAppSpecific('Number of Years License Renewal'),'N');
	// 	}

	if (appMatch('Building/Miscellaneous/*/*') && feeExists('8207-005', 'INVOICED') == false && AInfo['Hours Charged'] > 0 && AInfo['Select Division'] == 'Building Review-Inspection') {
		removeFee('8207-005', 'FINAL');
		addFee('8207-005', 'L-MISC', 'FINAL', getAppSpecific('Hours Charged'), 'N');
	}

	if ((AInfo['Mech New Installation'] > 0 || AInfo['Mech Retro Existing Install'] > 0)) {
		editAppSpecific('Mechanical Final Required', 'CHECKED');
		editAppSpecific('Mechanical Required', 'CHECKED');
	}

	if (AInfo['Gas Issuance'] == 'CHECKED') {
		editAppSpecific('Gas Final Required', 'CHECKED');
		editAppSpecific('Gas Required', 'CHECKED');
	}

	if ((AInfo['New or Addition Structure'] == 'CHECKED' || AInfo['Remodel/Repair/Alteration'] == 'CHECKED')) {
		editAppSpecific('Building Final Required', 'CHECKED');
		editAppSpecific('Building Required', 'CHECKED');
	}

	if (AInfo['Electrical Issuance'] == 'CHECKED') {
		editAppSpecific('Electrical Final Required', 'CHECKED');
		editAppSpecific('Electric Required', 'CHECKED');
	}

	if (AInfo['Plumbing Issuance'] == 'CHECKED') {
		editAppSpecific('Plumbing Final Required', 'CHECKED');
		editAppSpecific('Plumbing Required', 'CHECKED');
	}

	if (AInfo['New Pool In-Ground'] == 'CHECKED') {
		editAppSpecific('Pool Final Required', 'CHECKED');
		editAppSpecific('Pool Required', 'CHECKED');
	}

	if (AInfo['Pool Liner Only'] == 'CHECKED') {
		editAppSpecific('Pool Final Required', 'CHECKED');
		editAppSpecific('Pool Required', 'CHECKED');
	}

	if (appTypeArray[2] == 'Manufactured Home') {
		editAppSpecific('Mobile Home Final Required', 'CHECKED');
		editAppSpecific('Mobile Home Required', 'CHECKED');
	}

	if (fireGroup1 > 0 || fireGroup2 > 0) {
		editAppSpecific('Fire Final Required ', 'CHECKED');
	}

	// DISABLED: EMSE:Fees-Building:0779 ************
	// if (Dropped from else end of 661) {
	// 	mechGroup1 = 0*1;
	// 	Dropped from else on 660;
	//	} else {
	// 	mechGroup1 = 0*1;
	// 	}

	if (appTypeArray[0] == 'Building' && appTypeArray[2] != 'Mechanical' && getAppSpecific('Valuation of Work Performed') >= 2500 && !isScheduled('505: Notice of Commencement')) {
		createPendingInspection('L-INSP_ALL', '505: Notice of Commencement');
	}

	if (appTypeArray[2] == 'Mechanical' && getAppSpecific('Valuation of Work Performed') >= 7500 && !isScheduled('505: Notice of Commencement')) {
		createPendingInspection('L-INSP_ALL', '505: Notice of Commencement');
	}

	// DISABLED: EMSE:Fees-Building:0782
	// showMessage = true;
	// showDebug = 1;
	if (AInfo['Expiration Date'] == null) {
		editAppSpecific('Expiration Date', dateAdd(AInfo['Open Date'], 180));
	}

	if (AInfo['Violation'] == 'CHECKED' && feeExists('5013-010', 'INVOICED') == false) {
		removeFee('5013-010', 'FINAL');
		addFee('5013-010', 'BUILDING', 'FINAL', 1, 'N');
	}

	// DISABLED: EMSE:Fees-Building:0910
	// showMessage = true;
	// comment('<Font Color = red>accGroup1 Count = '+ accGroup1 +'</Font>');
	// DISABLED: EMSE:Fees-Building:0920 Set Var New Sur Chg
	// var surChgNew = 0*1;
	// var startDate;
	// startDate = fileDate;
	// var SurChgDate = new Date('07/11/2017');
	// var surChgNew = 0*1;
	// DISABLED: EMSE:Fees-Building:0930 Sur Chg Date Time
	// if (surchgCntr > 0) {
	// 	surChgNew = (convertDate(SurChgDate).getTime() - convertDate(fileDate).getTime()) / (1000 * 60 * 60 * 24);
	// 	}

	// DISABLED: EMSE:Fees-Building:0940 Sur Chg Old Fees
	// if (surChgNew <=0 && surchgCntr > 0 && feeExists('5015-010','INVOICED') == false && feeExists('5043-010','INVOICED') == false) {
	// 	removeFee('5015-010','FINAL');
	// 	removeFee('5043-010','FINAL');
	// 	addFee('5015-010','BUILDING','FINAL',1,'N');
	// 	addFee('5043-010','BUILDING','FINAL',1,'N');
	// 	}

	// DISABLED: EMSE:Fees-Building:0950 Sur Chg New Fees
	// if (surChgNew >= 0 && surchgCntr > 0 && feeExists('5015-015','INVOICED') == false && feeExists('5043-020','INVOICED') == false) {
	// 	removeFee('5015-015','FINAL');
	// 	removeFee('5043-020','FINAL');
	// 	addFee('5015-015','BUILDING','FINAL',1,'N');
	// 	addFee('5043-020','BUILDING','FINAL',1,'N');
	// 	}

	if (surchgCntr > 0 && feeExists('5015-010', 'INVOICED') == false && feeExists('5043-010', 'INVOICED') == false) {
		removeFee('5015-010', 'FINAL');
		removeFee('5043-010', 'FINAL');
		addFee('5015-010', 'BUILDING', 'FINAL', 1, 'N');
		addFee('5043-010', 'BUILDING', 'FINAL', 1, 'N');
	}

	// DISABLED: EMSE:Fees-Building:0970
	// showMessage = true;
	// showDebug = 1;
	// DISABLED: EMSE:Fees-Building:0980 Add Bld Insp
	// if ((appMatch('Building/Residential/*/*') || appMatch('Building/Commercial/*/*')) && isTaskStatus('Quality Check','Ready to Issue') == 'True' && (AInfo['Inspections Added'] == null || AInfo['Inspections Added'] == 'UNCHECKED')) {
	// 	br_nch('EMSE:Add-Inspections-Building');
	// 	}

	if ((appMatch('Building/Residential/*/*') || appMatch('Building/Commercial/*/*'))) {
		showMessage = true;
		comment('<font color = red>Branched to EMSE:Add-Inspections-Building</font>');
	}

	if (isTaskStatus('Quality Check', 'Ready to Issue') == 'True') {
		showMessage = true;
		comment('<font color = red>Quality Check is Ready to Issue</font>');
	}

	if ((AInfo['Inspections Added'] == null || AInfo['Inspections Added'] == 'UNCHECKED')) {
		showMessage = true;
		comment('<font color = red>Inspections Added is Not Checked</font>');
	}

	// DISABLED: EMSE:Fees-Building:1020
	// br_nch('EMSE:Add-Inspections-Building');
	// DISABLED: EMSE:Fees-Building:1030
	// showDebug = false;


}
