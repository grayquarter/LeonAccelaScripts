function dateTimeToJsonString(d) {
	if (d) {
		if (d instanceof Date) {
			return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
		} else if (d instanceof java.util.Date) {
			return (d.getYear() + 1900) + '-' + (d.getMonth() + 1) + '-' + d.getDate();
		} else if (d instanceof com.accela.aa.emse.util.ScriptDateTime) {
			return d.getYear() + '-' + d.getMonth() + '-' + d.getDayOfMonth();
		}
	}
	return null;
}
