function feesEnvServices() {

showMessage = true;
showDebug = 1;
if (appMatch('EnvManagement/*/*/*')) {
	envAtfGroup = 0*1;
	envGroup1 = 0*1;
	envGroup2 = 0*1;
	envGroup3 = 0*1;
	envGroup4 = 0*1;
	envGroup5 = 0*1;
	}

if (appMatch('EnvManagement/*/*/*')) {
	removeFee('7008-010','FINAL');
	removeFee('7009-010','FINAL');
	removeFee('7010-010','FINAL');
	removeFee('7012-010','FINAL');
	removeFee('7014-010','FINAL');
	removeFee('7015-010','FINAL');
	removeFee('7016-010','FINAL');
	removeFee('7017-010','FINAL');
	removeFee('7018-010','FINAL');
	removeFee('7019-010','FINAL');
	removeFee('7020-010','FINAL');
	removeFee('7090-010','FINAL');
	removeFee('7091-010','FINAL');
	removeFee('8011-010','FINAL');
	removeFee('8015-010','FINAL');
	removeFee('8016-010','FINAL');
	removeFee('8020-010','FINAL');
	removeFee('8025-010','FINAL');
	removeFee('7060-010','FINAL');
	removeFee('7050-010','FINAL');
	removeFee('7081-010','FINAL');
	}

if (appMatch('EnvManagement/*/*/*')) {
	removeFee('7020-010','FINAL');
	removeFee('7018-015','FINAL');
	removeFee('7018-020','FINAL');
	removeFee('7018-025','FINAL');
	removeFee('7018-030','FINAL');
	removeFee('7066-010','FINAL');
	removeFee('7080-010','FINAL');
	removeFee('7081-010','FINAL');
	removeFee('7084-010','FINAL');
	removeFee('7087-010','FINAL');
	removeFee('7082-010','FINAL');
	removeFee('7083-010','FINAL');
	removeFee('7087-010','FINAL');
	removeFee('7086-010','FINAL');
	}

if (appMatch('EnvManagement/EMP Permit/General Utility Permit/NA') && getAppSpecific('General Utility Permit') == 'CHECKED' && feeExists('7070-010','INVOICED') == false) {
	addFee('7070-010','ENVIRONMENTAL','FINAL',1,'N');
	}

if (appMatch('EnvManagement/*/*/*') && getAppSpecific('Landscape Amendment') > 0 && feeExists('7055-010','INVOICED') == false) {
	addFee('7055-010','ENVIRONMENTAL','FINAL',getAppSpecific('Landscape Amendment'),'N');
	}

if (appMatch('EnvManagement/EMP Permit/Mobile Home EMP/NA') && getAppSpecific('Single Family/Mobile Home Amend') > 0 && feeExists('8015-010','INVOICED') == false) {
	addFee('8015-010','ENVIRONMENTAL','FINAL',getAppSpecific('Single Family/Mobile Home Amend'),'N');
	}

if (appMatch('EnvManagement/EMP Permit/Short Form A Non-Residential/NA') && getAppSpecific('Short Form A Non Residential') == 'CHECKED' && feeExists('7014-010','INVOICED') == false) {
	addFee('7014-010','ENVIRONMENTAL','FINAL',372,'N');
	}

if (appMatch('EnvManagement/EMP Permit/Short Form B High/NA') && getAppSpecific('Short Form B High') == 'CHECKED' && getAppSpecific('Total Disturbed') > 0 && getAppSpecific('Total Disturbed') <=5000 && feeExists('7012-010','INVOICED') == false) {
	addFee('7012-010','ENVIRONMENTAL','FINAL',1344,'N');
	}

if (appMatch('EnvManagement/EMP Permit/Short Form B High/NA')  && getAppSpecific('Short Form B High') == 'CHECKED' && getAppSpecific('Total Disturbed') > 5000 && feeExists('7012-010','INVOICED') == false) {
	addFee('7012-010','ENVIRONMENTAL','FINAL',((getAppSpecific('Total Disturbed')-5000)*.01) + 1344,'N');
	}

if (appMatch('EnvManagement/EMP Permit/Short Form B Low/NA') && getAppSpecific('Short Form B Low') == 'CHECKED' && getAppSpecific('Total Disturbed') > 0 && getAppSpecific('Total Disturbed') <=5000 && feeExists('7010-010','INVOICED') == false) {
	addFee('7010-010','ENVIRONMENTAL','FINAL',720,'N');
	}

if (appMatch('EnvManagement/EMP Permit/Short Form B Low/NA')  && getAppSpecific('Short Form B Low') == 'CHECKED' && getAppSpecific('Total Disturbed') > 5000 && feeExists('7010-010','INVOICED') == false) {
	addFee('7010-010','ENVIRONMENTAL','FINAL',((getAppSpecific('Total Disturbed')-5000)*.02) + 720,'N');
	}

if (appMatch('EnvManagement/*/*/*') && getAppSpecific('# of Trees Removed') >=1 && getAppSpecific('# of Trees Removed') <=100 && getAppSpecific('Tree Removal') == 'CHECKED' && feeExists('7060-010','INVOICED') == false) {
	addFee('7060-010','ENVIRONMENTAL','FINAL',114,'N');
	}

if (appMatch('EnvManagement/*/*/*') && getAppSpecific('# of Trees Removed') >100 && getAppSpecific('Tree Removal') == 'CHECKED' && feeExists('7060-010','INVOICED') == false) {
	addFee('7060-010','ENVIRONMENTAL','FINAL',((getAppSpecific('# of Trees Removed')-100)*1.97) + 114,'N');
	}

if (appMatch('EnvManagement/*/*/*') && getAppSpecific('Landscaping') == 'CHECKED' && getAppSpecific('Added Imperv Area') > 0 && getAppSpecific('Added Imperv Area') <=5000 && feeExists('7050-010','INVOICED') == false) {
	addFee('7050-010','ENVIRONMENTAL','FINAL',780,'N');
	}

if (appMatch('EnvManagement/*/*/*')  && getAppSpecific('Landscaping') == 'CHECKED' && getAppSpecific('Added Imperv Area') > 5000 && getAppSpecific('Added Imperv Area') <= 50000 && feeExists('7050-010','INVOICED') == false) {
	addFee('7050-010','ENVIRONMENTAL','FINAL',(getAppSpecific('Added Imperv Area')*.01) + 730,'N');
	}

if (appMatch('EnvManagement/*/*/*')  && getAppSpecific('Landscaping') == 'CHECKED' && getAppSpecific('Added Imperv Area') > 50000 && feeExists('7050-010','INVOICED') == false) {
	addFee('7050-010','ENVIRONMENTAL','FINAL',(getAppSpecific('Added Imperv Area')*.02) + 230,'N');
	}

if (appMatch('EnvManagement/EMP Permit/Stormwater Standard Form/NA') && getAppSpecific('Standard Form') == 'CHECKED' && getAppSpecific('Res Subdiv One Dwelling Unit Per Lot') == 'CHECKED' && getAppSpecific('Total Imperv Area') > 0 && getAppSpecific('Total Imperv Area') <=5000 && feeExists('7020-010','INVOICED') == false) {
	addFee('7020-010','ENVIRONMENTAL','FINAL',2388,'N');
	}

if (appMatch('EnvManagement/EMP Permit/Stormwater Standard Form/NA')  && getAppSpecific('Standard Form') == 'CHECKED' && getAppSpecific('Res Subdiv One Dwelling Unit Per Lot') == 'CHECKED' && getAppSpecific('Total Imperv Area') > 5000 && getAppSpecific('Total Imperv Area') <= 678938 && feeExists('7020-010','INVOICED') == false) {
	addFee('7020-010','ENVIRONMENTAL','FINAL',(getAppSpecific('Total Imperv Area')*.13) + 1738,'N');
	}

if (appMatch('EnvManagement/EMP Permit/Stormwater Standard Form/NA') && getAppSpecific('Standard Form') == 'CHECKED' && getAppSpecific('Res Subdiv One Dwelling Unit Per Lot') == 'CHECKED' && getAppSpecific('Total Imperv Area') > 0 && getAppSpecific('Total Imperv Area') > 678938 && feeExists('7020-010','INVOICED') == false) {
	addFee('7020-010','ENVIRONMENTAL','FINAL',90000,'N');
	}

if (appMatch('EnvManagement/EMP Permit/Stormwater Standard Form/NA') && getAppSpecific('Standard Form') == 'CHECKED' && getAppSpecific('Res Subdiv One Dwelling Unit Per Lot') != 'CHECKED' && getAppSpecific('Added Imperv Area') > 0 && getAppSpecific('Added Imperv Area') <=5000 && feeExists('7020-010','INVOICED') == false) {
	addFee('7020-010','ENVIRONMENTAL','FINAL',2388,'N');
	}

if (appMatch('EnvManagement/EMP Permit/Stormwater Standard Form/NA') && getAppSpecific('Standard Form') == 'CHECKED' && getAppSpecific('Res Subdiv One Dwelling Unit Per Lot') != 'CHECKED' && getAppSpecific('Added Imperv Area') > 5000 && getAppSpecific('Added Imperv Area') < 100000 && feeExists('7020-010','INVOICED') == false) {
	addFee('7020-010','ENVIRONMENTAL','FINAL',(getAppSpecific('Added Imperv Area')*.13) + 1738,'N');
	}

if (appMatch('EnvManagement/EMP Permit/Stormwater Standard Form/NA') && getAppSpecific('Standard Form') == 'CHECKED' && getAppSpecific('Res Subdiv One Dwelling Unit Per Lot') != 'CHECKED' && getAppSpecific('Added Imperv Area') >= 100000 && feeExists('7020-010','INVOICED') == false) {
	addFee('7020-010','ENVIRONMENTAL','FINAL',((getAppSpecific('Added Imperv Area')-99999)*.24) + 14737.87,'N');
	}

if (appMatch('EnvManagement/*/*/*')  && getAppSpecific('Board of County Commissioners Variance Request') == 'CHECKED' && feeExists('8011-010','INVOICED') == false) {
	addFee('8011-010','ENVIRONMENTAL','FINAL',1,'N');
	}

if (appMatch('EnvManagement/Vegetative Management Plan/NA/NA')  && getAppSpecific('Charge Vegetative Management Fee') == 'CHECKED' && feeExists('7066-010','INVOICED') == false) {
	addFee('7066-010','ENVIRONMENTAL','FINAL',1,'N');
	}

if (appMatch('EnvManagement/Review/Natural Features Inventory/NA') && getAppSpecific('Natural Features Inventory') == 'CHECKED' && getAppSpecific('Parcel Acreage') <= 5 && feeExists('7080-010','INVOICED') == false) {
	addFee('7080-010','ENVIRONMENTAL','FINAL',1584,'N');
	}

if (appMatch('EnvManagement/Review/Natural Features Inventory/NA') && getAppSpecific('Natural Features Inventory') == 'CHECKED' && getAppSpecific('Parcel Acreage') > 5 && feeExists('7080-010','INVOICED') == false) {
	addFee('7080-010','ENVIRONMENTAL','FINAL',((getAppSpecific('Parcel Acreage') -5) *28) + 1584,'N');
	}

if (appMatch('EnvManagement/Review/Natural Features Inventory/NA') && getAppSpecific('Natural Features Inventory in Flood Plain') == 'CHECKED' && getAppSpecific('Parcel Acreage') <= 5 && feeExists('7081-010','INVOICED') == false) {
	addFee('7081-010','ENVIRONMENTAL','FINAL',2064,'N');
	}

if (appMatch('EnvManagement/Review/Natural Features Inventory/NA') && getAppSpecific('Natural Features Inventory in Flood Plain') == 'CHECKED' && getAppSpecific('Parcel Acreage') > 5 && feeExists('7081-010','INVOICED') == false) {
	addFee('7081-010','ENVIRONMENTAL','FINAL',((getAppSpecific('Parcel Acreage') -5) *29) + 2064,'N');
	}

if (appMatch('EnvManagement/Review/Natural Features Inventory/NA') && getAppSpecific('Natural Features Inventory No Impact') == 'CHECKED' && feeExists('7084-010','INVOICED') == false) {
	addFee('7084-010','ENVIRONMENTAL','FINAL',1,'N');
	}

if (appMatch('EnvManagement/Review/Natural Features Inventory/NA') && getAppSpecific('Use of Policy 2.1.9 LP or Judicial Exception') == 'CHECKED' && feeExists('7087-010','INVOICED') == false) {
	addFee('7087-010','ENVIRONMENTAL','FINAL',1,'N');
	}

if (appMatch('EnvManagement/Review/Environmental Impact Analysis/NA') && getAppSpecific('Environmental Impact Analysis') == 'CHECKED' && getAppSpecific('Parcel Acreage') <= 5 && feeExists('7082-010','INVOICED') == false) {
	addFee('7082-010','ENVIRONMENTAL','FINAL',1356,'N');
	}

if (appMatch('EnvManagement/Review/Environmental Impact Analysis/NA') && getAppSpecific('Environmental Impact Analysis') == 'CHECKED' && getAppSpecific('Parcel Acreage') > 5 && feeExists('7082-010','INVOICED') == false) {
	addFee('7082-010','ENVIRONMENTAL','FINAL',((getAppSpecific('Parcel Acreage') -5) *24) + 1356,'N');
	}

if (appMatch('EnvManagement/Review/Environmental Impact Analysis/NA') && getAppSpecific('Environmental Impact Analysis in Flood Plain') == 'CHECKED' && getAppSpecific('Parcel Acreage') <= 5 && feeExists('7083-010','INVOICED') == false) {
	addFee('7083-010','ENVIRONMENTAL','FINAL',1890,'N');
	}

if (appMatch('EnvManagement/Review/Environmental Impact Analysis/NA') && getAppSpecific('Environmental Impact Analysis in Flood Plain') == 'CHECKED' && getAppSpecific('Parcel Acreage') > 5 && feeExists('7083-010','INVOICED') == false) {
	addFee('7083-010','ENVIRONMENTAL','FINAL',((getAppSpecific('Parcel Acreage') -5) *30) + 1890,'N');
	}

if (appMatch('EnvManagement/Review/Environmental Impact Analysis/NA') && getAppSpecific('Environmental Impact Analysis in Flood Plain and Stormwater Discharge') == 'CHECKED' && getAppSpecific('Parcel Acreage') <= 5 && feeExists('7086-010','INVOICED') == false) {
	addFee('7086-010','ENVIRONMENTAL','FINAL',1890,'N');
	}

if (appMatch('EnvManagement/Review/Environmental Impact Analysis/NA') && getAppSpecific('Environmental Impact Analysis in Flood Plain and Stormwater Discharge') == 'CHECKED' && getAppSpecific('Parcel Acreage') > 5 && feeExists('7086-010','INVOICED') == false) {
	addFee('7086-010','ENVIRONMENTAL','FINAL',((getAppSpecific('Parcel Acreage') -5) *36) + 1890,'N');
	}

if (appMatch('EnvManagement/Driveway Permit/Type1/NA') && feeExists('7008-010','INVOICED') == false) {
	addFee('7008-010','ENVIRONMENTAL','FINAL',185,'N');
	}

if (appMatch('EnvManagement/Driveway Permit/Type2/*') && feeExists('7008-010','INVOICED') == false) {
	addFee('7008-010','ENVIRONMENTAL','FINAL',500,'N');
	}

if (appMatch('EnvManagement/Driveway Permit/Type3/*') && feeExists('7008-010','INVOICED') == false) {
	addFee('7008-010','ENVIRONMENTAL','FINAL',1500,'N');
	}

if (appMatch('EnvManagement/Driveway Permit/Type4/*') && feeExists('7008-010','INVOICED') == false) {
	addFee('7008-010','ENVIRONMENTAL','FINAL',1500,'N');
	}

if (appMatch('EnvManagement/Stormwater Operating Permit/NA/NA') && getAppSpecific('Operating Permit Fee') == 'CHECKED' && feeExists('7016-010','INVOICED') == false) {
	addFee('7016-010','ENVIRONMENTAL','FINAL',1,'N');
	}

if (appMatch('EnvManagement/Stormwater Operating Permit/NA/NA') && getAppSpecific('Less than 5000 sq ft of impervious and no structures or filters') == 'CHECKED' && getAppSpecific('1st Application Renewal Date') >= '01/01/1990' && feeExists('7017-010','INVOICED') == false && getAppSpecific('1st Renewal Fee') == 0) {
	addFee('7017-010','ENVIRONMENTAL','FINAL',120,'N');
	editAppSpecific('1st Renewal Fee',120);
	}

if (appMatch('EnvManagement/Stormwater Operating Permit/NA/NA') && getAppSpecific('Less than 5000 sq ft of impervious and no structures or filters') == 'UNCHECKED' && getAppSpecific('1st Application Renewal Date') >= '01/01/1990' && feeExists('7017-010','INVOICED') == false && getAppSpecific('1st Renewal Fee') == 0) {
	addFee('7017-010','ENVIRONMENTAL','FINAL',300,'N');
	editAppSpecific('1st Renewal Fee',300);
	}

// DISABLED: EMSE:Fees-EnvironmentalSvc:0860
// if (appMatch('EnvManagement/Stormwater Operation Permit/NA/NA') && getAppSpecific('Less than 5000 sq ft of impervious and no structures or filters') == 'CHECKED' && getAppSpecific('1st Application Renewal Date') >= '01/01/1990' && feeExists('7017-010','INVOICED') == false) {
// 	addFee('7017-010','ENVIRONMENTAL','FINAL',120,'N');
// 	}

// DISABLED: EMSE:Fees-EnvironmentalSvc:0880
// if (appMatch('EnvManagement/Stormwater Operation Permit/NA/NA') && getAppSpecific('Less than 5000 sq ft of impervious and no structures or filters') == 'CHECKED' && feeExists('7017-010','INVOICED') == false) {
// 	addFee('7017-010','ENVIRONMENTAL','FINAL',120,'N');
// 	}

if (appMatch('EnvManagement/*/*/*') && getAppSpecific('After the Fact Fee Multiplier') == 1 && feeExists('7018-010','INVOICED') == false) {
	addFee('7018-010','ENVIRONMENTAL','FINAL',1,'N');
	}

if (appMatch('EnvManagement/*/*/*') && getAppSpecific('After the Fact Fee Multiplier') == 2 && feeExists('70180-015','INVOICED') == false) {
	addFee('7018-015','ENVIRONMENTAL','FINAL',1,'N');
	}

if (appMatch('EnvManagement/*/*/*') && getAppSpecific('After the Fact Fee Multiplier') == 3 && feeExists('7018-020','INVOICED') == false) {
	addFee('7018-020','ENVIRONMENTAL','FINAL',1,'N');
	}

if (appMatch('EnvManagement/*/*/*') && getAppSpecific('After the Fact Fee Multiplier') == 4 && feeExists('7018-025','INVOICED') == false) {
	addFee('7018-025','ENVIRONMENTAL','FINAL',1,'N');
	}

if (appMatch('EnvManagement/*/*/*') && getAppSpecific('After the Fact Fee Multiplier') == 5 && feeExists('7018-030','INVOICED') == false) {
	addFee('7018-030','ENVIRONMENTAL','FINAL',1,'N');
	}

}
