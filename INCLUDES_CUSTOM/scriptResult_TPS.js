
function scriptResult_TPS(success, errorType, errorMessage, output) {
	this.success = success; // boolean success
	this.errorType = errorType; // java.lang.String errorType
	this.errorMessage = errorMessage; // java.lang.String errorMessage
	this.output = output; // java.lang.Object output

	this.getSuccess = function () { // Get Success
		return this.success;
	}
	this.getErrorType = function () { // Get Error Type
		return this.errorType;
	}
	this.getErrorMessage = function () { // Get Error Message
		return this.errorMessage;
	}
	this.getOutput = function () { // Get Error Message
		return this.output;
	}
	this.toString = function () { // Get Error Message
		return "{success: " + this.success + ", errorType: " + this.errorType + ", errorMessage: " + this.errorMessage + ", Output: " + this.output + "}";
	}
}
