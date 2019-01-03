function refLicProfGetDateWithType(pLicNum,pLicType, pDateType)
	{
	//
	if (pDateType==null || pDateType=="")
		var dateType = "EXPIRE";
	else
		{
		var dateType = pDateType.toUpperCase();
		if ( !(dateType=="ISSUE" || dateType=="RENEW" || dateType=="BUSINESS" || dateType=="INSURANCE") )
			dateType = "EXPIRE";
		}

	if (pLicNum==null || pLicNum=="")
		{
		logDebug("Invalid license number parameter");
		return ("INVALID PARAMETER");
		}

	var newLic = getRefLicenseProfWithType(pLicNum,pLicType)

	if (newLic)
		{
		var jsExpDate = new Date();

 		if (dateType=="EXPIRE")
			{
			if (newLic.getLicenseExpirationDate())
				{
				jsExpDate = convertDate(newLic.getLicenseExpirationDate());
				logDebug(pLicNum+" License Expiration Date: "+jsDateToMMDDYYYY(jsExpDate));
				return jsExpDate;
				}
			else
				{
				logDebug("Reference record for license "+pLicNum+" has no License Expiration Date");
				return ("NO DATE FOUND");
				}
			}
		else if (dateType=="INSURANCE")
			{
			if (newLic.getInsuranceExpDate())
				{
				jsExpDate = convertDate(newLic.getInsuranceExpDate());
				logDebug(pLicNum+" Insurance Expiration Date: "+jsDateToMMDDYYYY(jsExpDate));
				return jsExpDate;
				}
			else
				{
				logDebug("Reference record for license "+pLicNum+" has no Insurance Expiration Date");
				return ("NO DATE FOUND");
				}
			}
		else if (dateType=="BUSINESS")
			{
			if (newLic.getBusinessLicExpDate())
				{
				jsExpDate = convertDate(newLic.getBusinessLicExpDate());
				logDebug(pLicNum+" Business Lic Expiration Date: "+jsDateToMMDDYYYY(jsExpDate));
				return jsExpDate;
				}
			else
				{
				logDebug("Reference record for license "+pLicNum+" has no Business Lic Exp Date");
				return ("NO DATE FOUND");
				}
			}
		else if (dateType=="ISSUE")
			{
			if (newLic.getLicenseIssueDate())
				{
				jsExpDate = convertDate(newLic.getLicenseIssueDate());
				logDebug(pLicNum+" License Issue Date: "+jsDateToMMDDYYYY(jsExpDate));
				return jsExpDate;
				}
			else
				{
				logDebug("Reference record for license "+pLicNum+" has no Issue Date");
				return ("NO DATE FOUND");
				}
			}
		else if (dateType=="RENEW")
			{
			if (newLic.getLicenseLastRenewalDate())
				{
				jsExpDate = convertDate(newLic.getLicenseLastRenewalDate());
				logDebug(pLicNum+" License Last Renewal Date: "+jsDateToMMDDYYYY(jsExpDate));
				return jsExpDate;
				}
			else
				{
				logDebug("Reference record for license "+pLicNum+" has no Last Renewal Date");
				return ("NO DATE FOUND");
				}
			}
		else
			return ("NO DATE FOUND");
		}
	}

