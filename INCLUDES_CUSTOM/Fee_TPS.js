function Fee_TPS() { // Fee Object
	this.fee = null;
	this.sequence = null;
	this.code =  null;
	this.sched = null; // getFeeSchudle()
	this.description = null;  // getFeeDescription()
	this.unit = null; //  getFeeUnit()
	this.amount = null; //  getFee()
	this.amountPaid = null;
	this.applyDate = null; // getApplyDate()
	this.effectDate = null; // getEffectDate();
	this.expireDate = null; // getExpireDate();
	this.status = null; // getFeeitemStatus()
	this.recDate = null;
	this.period = null; // getPaymentPeriod()
	this.display = null; // getDisplay()
	this.accCodeL1 = null; // getAccCodeL1()
	this.accCodeL2 = null; // getAccCodeL2()
	this.accCodeL3 = null; // getAccCodeL3()
	this.formula = null; // getFormula()
	this.udes = null; // String getUdes()
	this.UDF1 = null; // getUdf1()
	this.UDF2 = null; // getUdf2()
	this.UDF3 = null; // getUdf3()
	this.UDF4 = null; // getUdf4()
	this.subGroup = null; // getSubGroup()
	this.calcFlag = null; // getCalcFlag();
	this.calcProc = null; // getFeeCalcProc()
	this.auditDate = null; // getAuditDate()
	this.auditID = null; // getAuditID()
	this.auditStatus = null; // getAuditStatus()
	this.version = null; // getVersion()
	if (arguments.length > 0 && arguments[0]) {
		fFee = arguments[0];
		this.fee = fFee;
		this.sequence = fFee.getFeeSeqNbr();
		this.code =  fFee.getFeeCod();
		this.sched = fFee.getF4FeeItemModel().getFeeSchudle();
		this.description = fFee.getFeeDescription();
		this.unit = fFee.getFeeUnit();
		this.amount = fFee.getFee();
		if (fFee.getApplyDate()) this.applyDate = convertDate(fFee.getApplyDate());
		if (fFee.getEffectDate()) this.effectDate = convertDate(fFee.getEffectDate());
		if (fFee.getExpireDate()) this.expireDate = convertDate(fFee.getExpireDate());
		this.status = fFee.getFeeitemStatus();
		this.period = fFee.getPaymentPeriod();
		this.display = fFee.getDisplay();
		this.accCodeL1 = fFee.getAccCodeL1();
		this.accCodeL2 = fFee.getAccCodeL2();
		this.accCodeL3 = fFee.getAccCodeL3();
		this.formula = fFee.getFormula();
		this.udes = fFee.getUdes();
		this.UDF1 = fFee.getUdf1();
		this.UDF2 = fFee.getUdf2();
		this.UDF3 = fFee.getUdf3();
		this.UDF4 = fFee.getUdf4();
		this.subGroup = fFee.getSubGroup();
		this.calcFlag = fFee.getCalcFlag();
		this.calcProc = fFee.getFeeCalcProc();
		this.auditDate = fFee.getF4FeeItemModel().getAuditDate(); 
		this.auditID = fFee.getF4FeeItemModel().getAuditID(); 
		this.auditStatus = fFee.getF4FeeItemModel().getAuditStatus(); 
		this.version = fFee.getF4FeeItemModel().getVersion();

		var amtPaid = 0;
		var itemCap = fFee.getF4FeeItemModel().getCapID();
		if (itemCap) {
			var pfResult = aa.finance.getPaymentFeeItems(itemCap, null);
			if (pfResult.getSuccess()) {
				var pfObj = pfResult.getOutput();
				for (ij in pfObj)
					if (fFee.getFeeSeqNbr() == pfObj[ij].getFeeSeqNbr())
						amtPaid+=pfObj[ij].getFeeAllocation()
			}
		}
		this.amountPaid = amtPaid;
		
	}
	this.getFeeItemModel = function () { 
		return this.fee;
	}

	this.getF4FeeItemModel = function () { 
		return this.fee.getF4FeeItemModel();
	}
}
 
