
// TODO: JHS 1/2/19 Consider making a function as this code is run for several record types on this event.
holdCapId = capId;
parentArray = getParents('*/*/*/*');
if (appStatus == 'Complete') {
	if (parentArray && parentArray.length > 0) {
		for (thisParent in parentArray) {
			if (parentArray[thisParent]) {
				capId = parentArray[thisParent];
				closeTask('Work Order', 'Work Complete', '', '');
				capId = holdCapId;
			}
		}
	}
}
