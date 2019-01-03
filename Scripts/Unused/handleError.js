function handleError(err, context) {
    // Standard INCLUDES_ACCELA_FUNCTION version 9.2
    var rollBack = true;
    var showError = true;

    if (showError) showDebug = true;
    logDebug((rollBack ? "**ERROR** " : "ERROR: ") + err.message + " In " + context + " Line " + err.lineNumber);
    logDebug("Stack: " + err.stack);
}
 
