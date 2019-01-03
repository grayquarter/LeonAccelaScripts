
copyParcelGisObjects();

//start replaced branch: EMSE: ProjectDox
{
	showMessage = true;
	myPemitNum = '';
	myAppFName = '';
	myAppEM = '';
	myAppLName = '';
	myVarPD = '';
	varPD1 = '';
	varPD2 = '';
	varPD3 = '';
	varPD4 = '';
	varPD5 = '';
	varPD6 = '';
	varPD6C = '';
	varPD7 = '';
	varPD8 = '';
	varPD9 = '';
	varPD10 = '';
	applicationNum = '';
	altid = '';
	var pDoxUrl;
	var permitNumber;
	var permitDescription;
	var submitterFName;
	var submitterLName;
	var submitterEmail;
	var projectGroup;
	var ownerFName;
	var owerLName;
	var ownerEmail;
	var projectTemplateId;
	var siteGroupName;
	var notifyOwnerOnFileAdd;
	var securityToken;
	var iMarkupXmlFileName;
	var connect;
	var eq;
	var locationParcel;
	var pDoxUrlUpDateLoc;
	var zoningTypeClass;
	var pdStatus;
	var varPD11;
	var myVarPDUd;
	var varPDUd;
	var nameofProject;
	var par = aa.parcel.getParcelandAttribute(capId, null);
	var z1;
	var securityTokenUd;
	pdCreate = 0 * 1;
	var emailAddress;
	var fullName;
	ca = new Array();
	ca = getContactArray();
	for (y in ca)
		if (ca[y]['contactType'] == 'Applicant')
			emailAddress = ca[y]['email'];
	for (y in ca)
		if (ca[y]['contactType'] == 'Applicant')
			fullName = ca[y]['fullName'];
	if (par.getSuccess()) {
		parcels = par.getOutput().toArray();
		for (x in parcels)
			pid = parcels[x].getParcelNumber();
	}

	// DISABLED: EMSE: ProjectDox:0009.02 Set Create pDoxUrl
	// pDoxUrl = 'http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?';
	pDoxUrl = 'http://edocuments.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?';
	// DISABLED: EMSE: ProjectDox:0009.03 Set Update pDoxUrl
	// varPDUd = 'http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/UpdateProjectViaProjectName?ProjectNameOfProjectToUpdate=';
	varPDUd = 'http://edocuments.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/UpdateProjectViaProjectName?ProjectNameOfProjectToUpdate=';
	permitNumber = 'PermitNumber=' + capIDString + '&';
	permitDescription = 'PermitDescription=' + appTypeArray[2] + ' ' + appTypeArray[1] + ' ' + capName + '&';
	submitterFName = 'SubmitterFName=_&';
	submitterLName = 'SubmitterLName=' + fullName + '&';
	submitterEmail = 'SubmitterEmail=' + emailAddress + '&';
	parcelId = pid;
	locationParcel = 'FieldToUpdate=Location&NewValue=' + pid + '&';
	securityToken = 'DCBECA73-89E7-4776-A095-0BAB15960EBF';
	zoningTypeClass = 'FieldToUpdate=StatusInfo&NewValue=' + AInfo['ParcelAttribute.ZONE_1'] + ' / ' + AInfo['Improvement Type'] + '-' + AInfo['Class Type'] + '&';
	pdStatus = 'FieldToUpdate=Status&NewValue=' + 'Waiting on Files Upload' + '&';
	nameofProject = capIDString + '&';
	securityTokenUd = 'SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF';
	// DISABLED: EMSE: ProjectDox:0011.02 Set Std Var Test
	// pDoxUrl = 'http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?';
	// permitNumber = 'PermitNumber='+ capIDString + '&';
	// permitDescription ='PermitDescription=' + appTypeArray[2] +' ' + appTypeArray[1] + ' ' + capName +'&';
	// submitterFName = 'SubmitterFName=_&';
	// submitterLName = 'SubmitterLName=' + fullName + '&';
	// submitterEmail = 'SubmitterEmail=' + emailAddress + '&';
	// locationParcel = pid;
	// securityToken = 'DCBECA73-89E7-4776-A095-0BAB15960EBF';
	// pDoxUrlUpDateLoc = z1;
	// DISABLED: EMSE: ProjectDox:0011.022 Set Var Par TC Status Desc
	// varPDUd = 'http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/UpdateProjectViaProjectName?ProjectNameOfProjectToUpdate=';
	// nameofProject = capIDString + '&';
	// locationParcel = 'FieldToUpdate=Location&NewValue=' + pid +'&';
	// zoningTypeClass = 'FieldToUpdate=StatusInfo&NewValue=' + AInfo['ParcelAttribute.ZONE_1'] + ' / ' + AInfo['Improvement Type'] + '-' + AInfo['Class Type'] +'&';
	// securityToken = 'SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF';
	// pdStatus = 'FieldToUpdate=Status&NewValue='+'Waiting on Files Upload' +'&';
	// DISABLED: EMSE: ProjectDox:0011.025 Set Std Var Prod
	// pDoxUrl = 'http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?';
	// permitNumber = 'PermitNumber='+ capIDString + '&';
	// permitDescription ='PermitDescription=' + appTypeArray[2] +' ' + appTypeArray[1] + '&';
	// submitterFName = 'SubmitterFName=_&';
	// submitterLName = 'SubmitterLName=' + fullName + '&';
	// submitterEmail = 'SubmitterEmail=' + emailAddress + '&';
	// locationParcel =AInfo['Parcel #'];
	// securityToken = 'DCBECA73-89E7-4776-A095-0BAB15960EBF';
	// pDoxUrlUpDateLoc = AInfo['Parcel #'];
	if (appTypeArray[1] == 'Commercial') {
		varPD6 = '&ProjectGroup=DSEM 11 Bld Applicant&OwnerFname=Jud&OwnerLName=Allen&OwnerEmail=AllenJud@leoncountyfl.gov&ProjectTemplateID=21&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[1] == 'Residential') {
		varPD6 = '&ProjectGroup=DSEM 11 Bld Applicant&OwnerFname=Jud&OwnerLName=Allen&OwnerEmail=AllenJud@leoncountyfl.gov&ProjectTemplateID=8&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[1] == 'EMP Permit') {
		varPD6 = '&ProjectGroup=ENV Applicant Group&OwnerFname=Nawfal&OwnerLName=Ezzagaghi&OwnerEmail=EzzagaghiN@leoncountyfl.gov&ProjectTemplateID=19&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[1] == 'Environmental Impact Analysis') {
		varPD6 = '&ProjectGroup=ENV Applicant Group&OwnerFname=Nawfal&OwnerLName=Ezzagaghi&OwnerEmail=EzzagaghiN@leoncountyfl.gov&ProjectTemplateID=16&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[2] == 'Natural Features Inventory') {
		varPD6 = '&ProjectGroup=ENV Applicant Group&OwnerFname=Nawfal&OwnerLName=Ezzagaghi&OwnerEmail=EzzagaghiN@leoncountyfl.gov&ProjectTemplateID=14&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[1] == 'Driveway Permit') {
		varPD6 = '&ProjectGroup=DSEM Bld Applicant&OwnerFname=Nawfal&OwnerLName=Ezzagaghi&OwnerEmail=EzzagaghiN@leoncountyfl.gov&ProjectTemplateID=32&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[2] == 'Policy 219') {
		varPD6 = '&ProjectGroup=DSEM Site Plan Applicant&OwnerFname=Scott&OwnerLName=Brockmeier&OwnerEmail=BrockmeierS@leoncountyfl.gov&ProjectTemplateID=24&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[2] == 'Exempt Process') {
		varPD6 = '&ProjectGroup=DSEM Site Plan Applicant&OwnerFname=Scott&OwnerLName=Brockmeier&OwnerEmail=BrockmeierS@leoncountyfl.gov&ProjectTemplateID=25&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[2] == 'Other') {
		varPD6 = '&ProjectGroup=DSEM Site Plan Applicant&OwnerFname=Scott&OwnerLName=Brockmeier&OwnerEmail=BrockmeierS@leoncountyfl.gov&ProjectTemplateID=26&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[2] == 'Administrative Streamlined App') {
		varPD6 = '&ProjectGroup=DSEM Site Plan Applicant&OwnerFname=Scott&OwnerLName=Brockmeier&OwnerEmail=BrockmeierS@leoncountyfl.gov&ProjectTemplateID=23&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[2] == 'Limited Partition') {
		varPD6 = '&ProjectGroup=DSEM Site Plan Applicant&OwnerFname=Scott&OwnerLName=Brockmeier&OwnerEmail=BrockmeierS@leoncountyfl.gov&ProjectTemplateID=23&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[2] == 'Concept Plan Approval - Type A') {
		varPD6 = '&ProjectGroup=DSEM Site Plan Applicant&OwnerFname=Scott&OwnerLName=Brockmeier&OwnerEmail=BrockmeierS@leoncountyfl.gov&ProjectTemplateID=10&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[2] == 'FDPA - Type A') {
		varPD6 = '&ProjectGroup=DSEM Site Plan Applicant&OwnerFname=Scott&OwnerLName=Brockmeier&OwnerEmail=BrockmeierS@leoncountyfl.gov&ProjectTemplateID=10&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[2] == 'Concept Plan Approval - Type B') {
		varPD6 = '&ProjectGroup=DSEM Site Plan Applicant&OwnerFname=Scott&OwnerLName=Brockmeier&OwnerEmail=BrockmeierS@leoncountyfl.gov&ProjectTemplateID=10&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[2] == 'FDPA - Type B') {
		varPD6 = '&ProjectGroup=DSEM Site Plan Applicant&OwnerFname=Scott&OwnerLName=Brockmeier&OwnerEmail=BrockmeierS@leoncountyfl.gov&ProjectTemplateID=10&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[2] == 'Concept Plan Approval - Type C') {
		varPD6 = '&ProjectGroup=DSEM Site Plan Applicant&OwnerFname=Scott&OwnerLName=Brockmeier&OwnerEmail=BrockmeierS@leoncountyfl.gov&ProjectTemplateID=10&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[2] == 'FDPA - Type C') {
		varPD6 = '&ProjectGroup=DSEM Site Plan Applicant&OwnerFname=Scott&OwnerLName=Brockmeier&OwnerEmail=BrockmeierS@leoncountyfl.gov&ProjectTemplateID=10&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[2] == 'Type D') {
		varPD6 = '&ProjectGroup=DSEM Site Plan Applicant&OwnerFname=Scott&OwnerLName=Brockmeier&OwnerEmail=BrockmeierS@leoncountyfl.gov&ProjectTemplateID=10&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	if (appTypeArray[2] == 'Type D Planned Unit Dev') {
		varPD6 = '&ProjectGroup=DSEM Site Plan Applicant&OwnerFname=Scott&OwnerLName=Brockmeier&OwnerEmail=BrockmeierS@leoncountyfl.gov&ProjectTemplateID=10&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	}

	// DISABLED: EMSE: ProjectDox:0012.15 Set Var LIC Not Used
	// if (appTypeArray[0] == 'Licenses') {
	// 	varPD6 = '&ProjectGroup=DSEM Site Plan Applicant&OwnerFname=JoToria&OwnerLName=Snelling&OwnerEmail=SnellingJ@leoncountyfl.gov&ProjectTemplateID=7&SiteGroupName=Growth Applicant&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	// 	}

	if (AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Project Created'] == 'UNCHECKED' || AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Project Created'] == null) {
		myVarPD = pDoxUrl + permitNumber + permitDescription + submitterFName + submitterLName + submitterEmail + varPD6;
		editAppSpecific('ProjectDox Project Created', 'CHECKED');
		editAppSpecific('ProjectDox Name', capIDString);
		showMessage = false;
		openUrlInNewWindow(myVarPD);
		pdCreate = pdCreate + 1;
	}

	if (pdCreate < 1 && AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Project Created'] == 'CHECKED' && AInfo['ProjectDox Email Number'] == null) {
		myVarPDUd = varPDUd + nameofProject + locationParcel + securityTokenUd;
		openUrlInNewWindow(myVarPDUd);
	}

	if (pdCreate < 1 && AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Project Created'] == 'CHECKED' && AInfo['ProjectDox Email Number'] == null) {
		myVarPDUd = varPDUd + nameofProject + zoningTypeClass + securityTokenUd;
		openUrlInNewWindow(myVarPDUd);
	}

	if (pdCreate < 1 && AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Project Created'] == 'CHECKED' && AInfo['ProjectDox Email Number'] == null) {
		myVarPDUd = varPDUd + nameofProject + pdStatus + securityTokenUd;
		openUrlInNewWindow(myVarPDUd);
	}

	if (capName |= null && AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Project Created'] == 'CHECKED') {
		permitDescription = 'FieldToUpdate=Description&NewValue=' + capName + '&';
		myVarPDUd = varPDUd + nameofProject + permitDescription + securityTokenUd;
		openUrlInNewWindow(myVarPDUd);
	}

	// DISABLED: EMSE: ProjectDox:0015.01
	// varPD1 = 'http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProject.asmx/AddProjectUserOwnerBatch?PermitNumber=';
	// DISABLED: EMSE: ProjectDox:0015.02 Set Var
	// pDoxUrl = 'http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?';
	// permitNumber = capIDString;
	// permitDescription = appTypeArray[2] +' ' + appTypeArray[1];
	// submitterFName ='_';
	// submitterLName = fullName;
	// submitterEmail = emailAddress;
	// projectGroup = 'DSEM Bld Applicant';
	// ownerFName ='Jud';
	// owerLName ='Allen';
	// ownerEmail = 'AllenJud@leoncountyfl.gov';
	// projectTemplateId = '21';
	// siteGroupName = 'Growth Applicant Bld';
	// notifyOwnerOnFileAdd = 'False';
	// securityToken ='DCBECA7389E7-4776-A095-0BAB15960EBF';
	// iMarkupXmlFileName = '';
	// connect ='&';
	// eq = '=;
	// DISABLED: EMSE: ProjectDox:0015.03
	// myAppEM = emailAddress;
	// myAppLName = fullName;
	// varPD3 = appTypeArray[2] + ' ' + appTypeArray[1];
	// DISABLED: EMSE: ProjectDox:0015.04
	// varPD2 = '&PermitDescription=';
	// varPD4 = '&SubmitterLName=';
	// varPD5 = '&SubmitterEmail=';
	// varPD3 = '&SubmitterFName=';
	// myAppFName ='_';
	// DISABLED: EMSE: ProjectDox:0015.06 Comm
	// varPD6C = '&ProjectGroup=DSEM Bld Applicant&OwnerFname=Jud&OwnerLName=Allen&OwnerEmail=AllenJud@leoncountyfl.gov&ProjectTemplateID=21&SiteGroupName=Growth Applicant Bld&NotifyOwnerOnFileAdd=False&SecurityToken=DCBECA7389E7-4776-A095-0BAB15960EBF&iMarkupXmFileName=';
	// DISABLED: EMSE: ProjectDox:0015.07
	// myPemitNum = capIDString;
	// DISABLED: EMSE: ProjectDox:0015.10
	// if (AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Project Created'] |= 'CHECKED') {
	// 	myVarPD = varPD1 + myPemitNum + varPD2 +varPD3 + myAppFName+ varPD4 + myAppLName+ varPD5 + myAppEM+ varPD6C;
	// 	editAppSpecific('ProjectDox Project Created','CHECKED');
	// 	true;
	//	} else {
	// 	openUrlInNewWindow(myVarPD);
	// 	}

	// DISABLED: EMSE: ProjectDox:0015.11
	// myVarPD = varPD1 + myPemitNum + varPD2 +varPD3 + myAppFName + varPD4 + myAppLName + varPD5 + myAppEM+ varPD6C;
	// editAppSpecific('ProjectDox Project Created','CHECKED');
	// true;
	// DISABLED: EMSE: ProjectDox:0015.13
	// openUrlInNewWindow(myVarPD);
	// DISABLED: EMSE: ProjectDox:0015.14
	// if (appTypeArray[1] == 'Residential' && matches(appTypeArray[2],'New','Mobile Home') && AInfo['ParcelAttribute.VIR_DW_ACCESS'] == 'COUNTY' && !getChildren('EnvManagement/Driveway Permit/Type1/*')) {
	// 	childId = createChild('EnvManagement','Driveway Permit','Type1','NA','Driveway Permit Type1');
	// 	editAppSpecific('Driveway Permit Required','Yes');
	// 	editAppSpecific('Driveway Permit Number',childId.getCustomID());
	// 	}

	// DISABLED: EMSE: ProjectDox:0020 PD New Comm
	// if (appMatch('Building/Commercial/*/*') && AInfo['ProjectDox Review'] == 'CHECKED' &&  AInfo['ProjectDox Email Number'] == 0 || AInfo['ProjectDox Email Number'] == null) {
	// 	showMessage = true;
	// 	openUrlInNewWindow('http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProject.asmx/AddProjectUserOwnerBatch?PermitNumber='capId.getCustomID()'&PermitDescription=Commercial&SubmitterFName='                                                  );
	// 	}

	// DISABLED: EMSE: ProjectDox:0030 PD New Res
	// if (appMatch('Building/Residential/*/*') && (AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Email Number'] == Null  || AInfo['ProjectDox Email Number'] == '')) {
	// 	'c:\program files\internet explorer\iexplore.exe http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?PermitNumber='&AInfo['CAPID']&'&PermitDescription=Residential&SubmitterFName=_&SubmitterLName=APP_L_NAME&SubmitterEmail=APPLICANT_EM&ProjectGroup=DSEM Bld Applicant&OwnerFName=&OwnerLName=&OwnerEmail=AllenJ@leoncountyfl.gov&ProjectTemplateID=&8&SiteGroupName=Growth Applicant BLD&NotifyOwnerFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BSB15960EBF&iMarkupXmfilename=;
	// 	}

	// DISABLED: EMSE: ProjectDox:0040 PD EIA
	// if (appMatch('Building/Review/Environmental Impact Analysis/*') && (AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Email Number'] == Null  || AInfo['ProjectDox Email Number'] == '')) {
	// 	'c:\program files\internet explorer\iexplore.exe http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?PermitNumber='&AInfo['CAPID']&'&PermitDescription=Residential&SubmitterFName=_&SubmitterLName=APP_L_NAME&SubmitterEmail=APPLICANT_EM&ProjectGroup=DSEM Bld Applicant&OwnerFName=&OwnerLName=&OwnerEmail=AllenJ@leoncountyfl.gov&ProjectTemplateID=&8&SiteGroupName=Growth Applicant BLD&NotifyOwnerFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BSB15960EBF&iMarkupXmfilename=;
	// 	}

	// DISABLED: EMSE: ProjectDox:0050 PD NFI
	// if (appMatch('Building/Review/Natural Features Inventory/*') && (AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Email Number'] == Null  || AInfo['ProjectDox Email Number'] == '')) {
	// 	'c:\program files\internet explorer\iexplore.exe http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?PermitNumber='&AInfo['CAPID']&'&PermitDescription=Residential&SubmitterFName=_&SubmitterLName=APP_L_NAME&SubmitterEmail=APPLICANT_EM&ProjectGroup=DSEM Bld Applicant&OwnerFName=&OwnerLName=&OwnerEmail=AllenJ@leoncountyfl.gov&ProjectTemplateID=&8&SiteGroupName=Growth Applicant BLD&NotifyOwnerFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BSB15960EBF&iMarkupXmfilename=;
	// 	}

	// DISABLED: EMSE: ProjectDox:0060 PD EMP
	// if (appMatch('Building/EMP Permit/*/*') && (AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Email Number'] == Null  || AInfo['ProjectDox Email Number'] == '')) {
	// 	'c:\program files\internet explorer\iexplore.exe http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?PermitNumber='&AInfo['CAPID']&'&PermitDescription=Residential&SubmitterFName=_&SubmitterLName=APP_L_NAME&SubmitterEmail=APPLICANT_EM&ProjectGroup=DSEM Bld Applicant&OwnerFName=&OwnerLName=&OwnerEmail=AllenJ@leoncountyfl.gov&ProjectTemplateID=&8&SiteGroupName=Growth Applicant BLD&NotifyOwnerFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BSB15960EBF&iMarkupXmfilename=;
	// 	}

	// DISABLED: EMSE: ProjectDox:0070 PD ASAP-LP
	// if (appMatch('Building/Residential/*/*') && (AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Email Number'] == Null  || AInfo['ProjectDox Email Number'] == '')) {
	// 	'c:\program files\internet explorer\iexplore.exe http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?PermitNumber='&AInfo['CAPID']&'&PermitDescription=Residential&SubmitterFName=_&SubmitterLName=APP_L_NAME&SubmitterEmail=APPLICANT_EM&ProjectGroup=DSEM Bld Applicant&OwnerFName=&OwnerLName=&OwnerEmail=AllenJ@leoncountyfl.gov&ProjectTemplateID=&8&SiteGroupName=Growth Applicant BLD&NotifyOwnerFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BSB15960EBF&iMarkupXmfilename=;
	// 	}

	// DISABLED: EMSE: ProjectDox:0080 PD Site Plan
	// if (appMatch('Building/Site Plan Review/*/*') && (AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Email Number'] == Null  || AInfo['ProjectDox Email Number'] == '')) {
	// 	'c:\program files\internet explorer\iexplore.exe http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?PermitNumber='&AInfo['CAPID']&'&PermitDescription=Residential&SubmitterFName=_&SubmitterLName=APP_L_NAME&SubmitterEmail=APPLICANT_EM&ProjectGroup=DSEM Bld Applicant&OwnerFName=&OwnerLName=&OwnerEmail=AllenJ@leoncountyfl.gov&ProjectTemplateID=&8&SiteGroupName=Growth Applicant BLD&NotifyOwnerFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BSB15960EBF&iMarkupXmfilename=;
	// 	}

	// DISABLED: EMSE: ProjectDox:0090 PD 219
	// if (appMatch('Building/Exempt Subdivision/Policy 219*/*') && (AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Email Number'] == Null  || AInfo['ProjectDox Email Number'] == '')) {
	// 	'c:\program files\internet explorer\iexplore.exe http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?PermitNumber='&AInfo['CAPID']&'&PermitDescription=Residential&SubmitterFName=_&SubmitterLName=APP_L_NAME&SubmitterEmail=APPLICANT_EM&ProjectGroup=DSEM Bld Applicant&OwnerFName=&OwnerLName=&OwnerEmail=AllenJ@leoncountyfl.gov&ProjectTemplateID=&8&SiteGroupName=Growth Applicant BLD&NotifyOwnerFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BSB15960EBF&iMarkupXmfilename=;
	// 	}

	// DISABLED: EMSE: ProjectDox:0100 PD LDV
	// if (appMatch('Building/Land Use and Zoning Compliance/*/*') && (AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Email Number'] == Null  || AInfo['ProjectDox Email Number'] == '')) {
	// 	'c:\program files\internet explorer\iexplore.exe http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?PermitNumber='&AInfo['CAPID']&'&PermitDescription=Residential&SubmitterFName=_&SubmitterLName=APP_L_NAME&SubmitterEmail=APPLICANT_EM&ProjectGroup=DSEM Bld Applicant&OwnerFName=&OwnerLName=&OwnerEmail=AllenJ@leoncountyfl.gov&ProjectTemplateID=&8&SiteGroupName=Growth Applicant BLD&NotifyOwnerFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BSB15960EBF&iMarkupXmfilename=;
	// 	}

	// DISABLED: EMSE: ProjectDox:0110 PD LEX Bound Set
	// if (appMatch('Building/Residential/*/*') && (AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Email Number'] == Null  || AInfo['ProjectDox Email Number'] == '')) {
	// 	'c:\program files\internet explorer\iexplore.exe http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?PermitNumber='&AInfo['CAPID']&'&PermitDescription=Residential&SubmitterFName=_&SubmitterLName=APP_L_NAME&SubmitterEmail=APPLICANT_EM&ProjectGroup=DSEM Bld Applicant&OwnerFName=&OwnerLName=&OwnerEmail=AllenJ@leoncountyfl.gov&ProjectTemplateID=&8&SiteGroupName=Growth Applicant BLD&NotifyOwnerFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BSB15960EBF&iMarkupXmfilename=;
	// 	}

	// DISABLED: EMSE: ProjectDox:0120 PD
	// if (appMatch('Building/Residential/*/*') && (AInfo['ProjectDox Review'] == 'CHECKED' && AInfo['ProjectDox Email Number'] == Null  || AInfo['ProjectDox Email Number'] == '')) {
	// 	'c:\program files\internet explorer\iexplore.exe http://edoxtest.leoncountyfl.gov/projectdox/integration/websvcapi/projectdoxproject.asmx/AddProjectUserOwnerBatch?PermitNumber='&AInfo['CAPID']&'&PermitDescription=Residential&SubmitterFName=_&SubmitterLName=APP_L_NAME&SubmitterEmail=APPLICANT_EM&ProjectGroup=DSEM Bld Applicant&OwnerFName=&OwnerLName=&OwnerEmail=AllenJ@leoncountyfl.gov&ProjectTemplateID=&8&SiteGroupName=Growth Applicant BLD&NotifyOwnerFileAdd=False&SecurityToken=DCBECA73-89E7-4776-A095-0BSB15960EBF&iMarkupXmfilename=;
	// 	}

}
//end replaced branch: EMSE: ProjectDox;

//replaced branch(EMSE:Fees-PublicWorks)
feesPublicWorks();
aa.finance.reCalculateFees(capId, 'CONT', AInfo['Valuation of Work Performed']);
