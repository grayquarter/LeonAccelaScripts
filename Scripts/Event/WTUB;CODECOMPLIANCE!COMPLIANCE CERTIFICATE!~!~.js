
if (wfTask == 'CCL Review' && matches(wfStatus,'Send Results Letter Email','Send No Information Found Letter Email','Send Parcel in City Email','Send Parcel/Address Do Not Match Email') && balanceDue > 0) {
	showMessage = true;
	comment('<Font Color = Red><Strong>Cannot send Compliance Certificate with a balance greater than zero.</Font></Strong>');
	cancel = true;
	}

