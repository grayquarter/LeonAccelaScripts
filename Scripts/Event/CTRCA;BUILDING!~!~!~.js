
if (cap.isCreatedByACA()) {
	closeTask('Application Submittal', 'Accepted', 'Online Permit - Updated by Script', '');
	closeTask('Permit Issuance', 'Issued', 'Online Permit - Updated by Script', '');
}

// DISABLED: CTRCA:Building/*/*/*:0030
// if (cap.isCreatedByACA()  && appTypeArray[1] == 'VelocityHall') {
// 	br_nch('EMSE:Add-Inspections-VelocityHall');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0040
// if (appTypeArray[1] == 'VelocityHall') {
// 	br_nch('EMSE:Add-Inspections-VelocityHall');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0060
// if (cap.isCreatedByACA() && appMatch('Building/VelocityHall/Mechanical/*')) {
// 	createPendingInspection('L-WEB_Mech','301: Ductwork');
// 	createPendingInspection('L-WEB_Mech','306: HVAC Changeout');
// 	createPendingInspection('L-WEB_Mech','399: Other Mechanical');
// 	createPendingInspection('L-WEB_Mech','903: Mechanical Final');
// 	createPendingInspection('L-WEB_Mech','595: Re-Inspection');
// 	createPendingInspection('L-WEB_Mech','596: After Hours Inspection');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0070
// if (cap.isCreatedByACA() && appMatch('Building/VelocityHall/Mechanical/*') && getAppSpecific('Valuation of Work Performed') > 7499.99) {
// 	createPendingInspection('L-WEB_Mech','505: Notice of Commencement');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0090
// if (cap.isCreatedByACA() && appMatch('Building/VelocityHall/Reroof/*')) {
// 	createPendingInspection('L-WEB_Roof','104: Roof');
// 	createPendingInspection('L-WEB_Roof','115: Roof Deck Re-Nail');
// 	createPendingInspection('L-WEB_Roof','116: Roof Secondary Barrier');
// 	createPendingInspection('L-WEB_Roof','595: Re-Inspection');
// 	createPendingInspection('L-WEB_Roof','596: After Hours Inspection');
// 	createPendingInspection('L-WEB_Roof','917: Roofing Final');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0100
// if (cap.isCreatedByACA() && appMatch('Building/VelocityHall/Reroof/*') && getAppSpecific('Valuation of Work Performed') > 2499.99) {
// 	createPendingInspection('L-WEB_Roof,'505: Notice of Commencement');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0120
// if (cap.isCreatedByACA() && appMatch('Building/VelocityHall/Plumbing/*')) {
// 	createPendingInspection('L-WEB_Plumb','400: Building Sewer');
// 	createPendingInspection('L-WEB_Plumb','404: Water Heater');
// 	createPendingInspection('L-WEB_Plumb','407: Water System');
// 	createPendingInspection('L-WEB_Plumb','410: COT Backflow Device');
// 	createPendingInspection('L-WEB_Plumb','411: Talquin Backflow Device');
// 	createPendingInspection('L-WEB_Plumb','499: Other Plumbing');
// 	createPendingInspection('L-WEB_Plumb','595: Re-Inspection');
// 	createPendingInspection('L-WEB_Plumb','596: After Hours Inspection');
// 	createPendingInspection('L-WEB_Plumb','905: Plumbing Final');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0130
// if (cap.isCreatedByACA() &&  appMatch('Building/VelocityHall/Plumbing/*') && getAppSpecific('Valuation of Work Performed') > 2499.99) {
// 	createPendingInspection('L-WEB_Plumb','505: Notice of Commencement');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0150
// if (cap.isCreatedByACA() && appMatch('Building/VelocityHall/Vinyl Siding/*')) {
// 	createPendingInspection('L-WEB_Vinyl','106: Exterior Sheathing');
// 	createPendingInspection('L-WEB_Vinyl','199: Other Building');
// 	createPendingInspection('L-WEB_Vinyl','595: Re-Inspection');
// 	createPendingInspection('L-WEB_Vinyl','596: After Hours Inspection');
// 	createPendingInspection('L-WEB_Vinyl','900: Building Final');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0160
// if (cap.isCreatedByACA() && appMatch('Building/VelocityHall/Vinyl Siding/*') && getAppSpecific('Valuation of Work Performed') > 2499.99) {
// 	createPendingInspection('L-WEB_Vinyl','505: Notice of Commencement');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0180
// if (cap.isCreatedByACA() && appMatch('Building/VelocityHall/Door-Windows/*')) {
// 	createPendingInspection('L-WebDoorWin','107: Framing');
// 	createPendingInspection('L-WebDoorWin','199: Other Building');
// 	createPendingInspection('L-WebDoorWin','505: Notice of Commencement');
// 	createPendingInspection('L-WebDoorWin','595: Re-Inspection');
// 	createPendingInspection('L-WebDoorWin','596: After Hours Inspection');
// 	createPendingInspection('L-WebDoorWin','900: Building Final');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0190
// if (cap.isCreatedByACA() && appMatch('Building/VelocityHall/Door-Windows/*') && getAppSpecific('Valuation of Work Performed') > 2499.99) {
// 	createPendingInspection('L-WebDoorWin','505: Notice of Commencement');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0210
// if (cap.isCreatedByACA() && appMatch('Building/VelocityHall/Pool Reliner/*')) {
// 	createPendingInspection('L-WEB_Pool','111: Pool');
// 	createPendingInspection('L-WEB_Pool','112: Pool Fence Gate');
// 	createPendingInspection('L-WEB_Pool','113: Pool Re-Liner');
// 	createPendingInspection('L-WEB_Pool','204: Pool Electrical Bonding');
// 	createPendingInspection('L-WEB_Pool,'595: Re-Inspection');
// 	createPendingInspection('L-WEB_Pool','596: After Hours Inspection');
// 	createPendingInspection('L-WEB_Pool','916: Swimming Pool Final');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0220
// if (cap.isCreatedByACA() && appMatch('Building/VelocityHall/Pool Reliner/*') && getAppSpecific('Valuation of Work Performed') > 2499.99) {
// 	createPendingInspection('L-WEB_Pool','505: Notice of Commencement');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0250
// if (cap.isCreatedByACA() && appMatch('Building/VelocityHall/Electrical/*')) {
// 	createPendingInspection('L-WEB_Elec','200: Electric Rough-In');
// 	createPendingInspection('L-WEB_Elec','201: Electric Rough Ceiling');
// 	createPendingInspection('L-WEB_Elec','202: Electric HVAC Changeout');
// 	createPendingInspection('L-WEB_Elec','203: Electric Service Changeout');
// 	createPendingInspection('L-WEB_Elec','204: Pool Electrical Bonding');
// 	createPendingInspection('L-WEB_Elec','205: Underground Electric');
// 	createPendingInspection('L-WEB_Elec','299: Other Electric');
// 	createPendingInspection('L-WEB_Elec','500: Temporary Power');
// 	createPendingInspection('L-WEB_Elec','501: Electrical Release');
// 	createPendingInspection('L-WEB_Elec','506: Notified Electric Provider');
// DISABLED: CTRCA:Building/*/*/*:0260
// 	createPendingInspection('L-WEB_Elec','507: Talquin Temp Electric Release');
// 	createPendingInspection('L-WEB_Elec','508: Talquin Final Electric Release');
// 	createPendingInspection('L-WEB_Elec','509: Talquin New Cut-In & Res Meter Set');
// 	createPendingInspection('L-WEB_Elec','510: Talquin MH Cut-In & Meter Set');
// 	createPendingInspection('L-WEB_Elec','511: Talquin New Cut-In & Comm Meter Set');
// 	createPendingInspection('L-WEB_Elec','512: Talquin Temp Cut-In');
// 	createPendingInspection('L-WEB_Elec','513: Talquin Increase Service');
// 	createPendingInspection('L-WEB_Elec','514: Talquin Relocate Service');
// DISABLED: CTRCA:Building/*/*/*:0270
// 	createPendingInspection('L-WEB_Elec','515: City New Cut-In & Residential Meter Set');
// 	createPendingInspection('L-WEB_Elec','516: City MH Cut-In & Meter Set');
// 	createPendingInspection('L-WEB_Elec','517: City Cut-In & Comm Meter Set');
// 	createPendingInspection('L-WEB_Elec','518: City Temp Cut-In');
// 	createPendingInspection('L-WEB_Elec','519: City Increase Service');
// 	createPendingInspection('L-WEB_Elec','520: City Relocate Service');
// 	createPendingInspection('L-WEB_Elec','521: City New Cut-In');
// 	createPendingInspection('L-WEB_Elec','522: City Residential Meter Set');
// 	createPendingInspection('L-WEB_Elec','523: City Comm Meter Set');
// 	createPendingInspection('L-WEB_Elec','524: City MH Meter Set');
// 	createPendingInspection('L-WEB_Elec','525: City Reseal Meter');
// 	createPendingInspection('L-WEB_Elec','526: City Reseal Meter Increase Service');
// 	createPendingInspection('L-WEB_Elec','527: City Reset Meter');
// 	createPendingInspection('L-WEB_Elec','528: City Reset Meter Increase Service');
// DISABLED: CTRCA:Building/*/*/*:0280
// 	createPendingInspection('L-WEB_Elec','529: City Relocate Increase Service');
// 	createPendingInspection('L-WEB_Elec','530: City Reconnect Service');
// 	createPendingInspection('L-WEB_Elec','531: City Reconnect Increase Service');
// 	createPendingInspection('L-WEB_Elec','532: City House Meter');
// 	createPendingInspection('L-WEB_Elec','533: City New C/I Com Mtr Set W/CTS');
// 	createPendingInspection('L-WEB_Elec','534: City Interconnect Pwr Source');
// 	createPendingInspection('L-WEB_Elec','535: Talquin Interconncet Pwr Source');
// 	createPendingInspection('L-WEB_Elec','901: Electrical Final');
// 	}

// DISABLED: CTRCA:Building/*/*/*:0290
// if (cap.isCreatedByACA() && appMatch('Building/VelocityHall/Electical/*') && getAppSpecific('Valuation of Work Performed') > 2499.99) {
// 	createPendingInspection('L-WEB_Elec','505: Notice of Commencement');
// 	}
