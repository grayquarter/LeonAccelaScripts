
var inspArea;
var InspAreaBldg;
var bldArea;
var envArea;
var pwArea;
pNum = getPrimaryParcelNum();
pArr = new Array();
if (pNum) {
	pArr = new Array();
	loadParcelAttributesFromValidated(pNum, pArr);
}

if (pNum && pArr['ParcelAttribute.VIR_LC_AREA'] != null) {
	inspArea = pArr['ParcelAttribute.VIR_LC_AREA'];
}

if (pNum && pArr['ParcelAttribute.VIR_LC_AREA'] != null) {
	AInfo['ParcelAttribute.VIR_LC_AREA'] = pArr['ParcelAttribute.VIR_LC_AREA'];
}

inspAsgn = null;
conRes = null;
InspAreaConcat = null;
inspDisp1 = inspType.substr(0, 1);
inspDisp3 = inspType.substr(0, 3);
bldArea = inspArea.substr(0, 1);
envArea = inspArea.substr(1, 1);
pwArea = inspArea.substr(2, 1);
inspDist = lookup('InspDistrict_Lookup', inspDisp1);
if (inspDisp3 == '309' || inspDisp3 == '398' || inspDisp3 == '502' || inspDisp3 == '503' || inspDisp3 == '902') {
	inspDist = 'G';
}

if (inspDisp3 == '900' || inspDisp3 == '906' || inspDisp3 == '916' || inspDisp3 == '917') {
	inspDist = 'B';
}

if (inspDisp3 == '901' || inspDisp3 == '904' || inspDisp3 == '921') {
	inspDist = 'E';
}

if (inspDisp3 == '905') {
	inspDist = 'P';
}

if (inspDisp3 == '903') {
	inspDist = 'M';
}

if (inspDisp3 == '800' || inspDisp3 == '909') {
	inspDist = 'DW';
}

if (inspDisp3 == '908' || inspDisp3 == '910' || inspDisp3 == '911' || inspDisp3 == '912' || inspDisp3 == '913' || inspDisp3 == '914' || inspDisp3 == '915') {
	inspDist = 'F';
}

if (appTypeArray[1] == 'Commercial') {
	comRes = 'C';
} else {
	comRes = 'R';
}

if (inspArea != null) {
	inspAreaConcat = comRes + bldArea + inspDist;
	logDebug(inspAreaConcat);
}

if (pNum && pArr['ParcelAttribute.VIR_LC_AREA'] != null) {
	inspAsgn = lookup('InspArea_LookupBld', inspAreaConcat);
}

if (inspAsgn != null) {
	assignInspection(inspId, inspAsgn);
}

if (pNum && pArr['ParcelAttribute.VIR_LC_AREA'] == null) {
	inspAsgn = 'ESTESJE';
}

// DISABLED: ISA:Building/*/*/*:10010
// var inspArea;
// DISABLED: ISA:Building/*/*/*:10020
// if (AInfo[' ParcelAttribute.VIR_LC_AREA '] != null) {
// 	inspArea = AInfo[' ParcelAttribute.VIR_LC_AREA '].substr(3,2);
// 	}

// DISABLED: ISA:Building/*/*/*:10030
// if (AInfo[' ParcelAttribute.Building Inspection Area: '] |= null) {
// 	inspArea = AInfo[' ParcelAttribute.Building Inspection Area: '].substr(3,2);
// 	}

// DISABLED: ISA:Building/*/*/*:10050
// if ((inspArea != ' 15 ' || inspArea != ' 25 ' || inspArea != ' 36 ' || inspArea != ' 45 ') && AInfo[' Bld Inspection Area '] != null) {
// 	inspArea = AInfo[' Bld Inspection Area '].substr(3,2);
// 	}

// DISABLED: ISA:Building/*/*/*:10060
// inspAsgn = null;
// conRes = null;
// InspAreaConcat = null;
// inspDisp1 = inspType.substr(0,1);
// inspDisp3 = inspType.substr(0,3);
// DISABLED: ISA:Building/*/*/*:10070
// inspDist = lookup(' InspDistrict_Lookup ',inspDisp1);
// DISABLED: ISA:Building/*/*/*:10080
// if (inspDisp3 == ' 502 ' || inspDisp3 == ' 503 ' || inspDisp3 == ' 902 ') {
// 	inspDist = ' G ';
// 	}

// DISABLED: ISA:Building/*/*/*:10090
// if (inspDisp3 == ' 900 ' || inspDisp3 == ' 906 ' || inspDisp3 == ' 916 ' || inspDisp3 == ' 917 ') {
// 	inspDist = ' B ';
// 	}

// DISABLED: ISA:Building/*/*/*:10100
// if (inspDisp3 == ' 901 ' || inspDisp3 == ' 904 ' || inspDisp3 == ' 921 ') {
// 	inspDist = ' E ';
// 	}

// DISABLED: ISA:Building/*/*/*:10110
// if (inspDisp3 == ' 905 ') {
// 	inspDist = ' P ';
// 	}

// DISABLED: ISA:Building/*/*/*:10130
// if (inspDisp3 == ' 908 ' || inspDisp3 == ' 910 ' || inspDisp3 == ' 911 ' || inspDisp3 == ' 912 ' || inspDisp3 == ' 913 ' || inspDisp3 == ' 914 ' || inspDisp3 == ' 915 ') {
// 	inspDist = ' F ';
// 	}

// DISABLED: ISA:Building/*/*/*:10160
// if (appTypeArray[1] == ' Commercial ') {
// 	comRes = ' C ';
//	} else {
// 	comRes = ' R ';
// 	}

// DISABLED: ISA:Building/*/*/*:10170
// if (inspArea != null) {
// 	inspAreaConcat = ' LC '+comRes+inspArea+inspDist;
// 	logDebug(inspAreaConcat);
// 	}

// DISABLED: ISA:Building/*/*/*:10180
// if (inspArea != null) {
// 	inspAsgn = lookup(' InspArea_Lookup ',inspAreaConcat);
// 	}

// DISABLED: ISA:Building/*/*/*:10190
// if (inspArea == null || AInfo[' ParcelAttribute.VIR_LC_AREA '] == null  || AInfo[' ParcelAttribute.Building Inspection Area: '] == null) {
// 	inspAsgn = ' ESTESJE ';
// 	}

// DISABLED: ISA:Building/*/*/*:10200
// if (inspAsgn != null) {
// 	assignInspection(inspId,inspAsgn);
// 	}
