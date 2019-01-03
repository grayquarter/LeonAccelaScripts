function getSentEmail(emailTemplate, emailSubject, itemCap, daysSent, DBServer) {
    // Unable to find API method so using SQL instead.
    // SQL Query Database for sent emails.
    // Example: 
    // 	sentEmails = getSentEmail(emailTemplate, emailSubject, capId, daysSent, "Oracle");
    //	for (e in sentEmails) {
    //		aa.print("sentEmails[" + e + "]:" + describe(sentEmails[e]));
    //	}
    //
    resultRows = new Array();
    if (itemCap == null || !itemCap.getCustomID) {
        return resultRows;
    }
    var initialContext = aa.proxyInvoker.newInstance("javax.naming.InitialContext", null).getOutput();
    var ds = initialContext.lookup("java:/AA");
    var conn = ds.getConnection()
    main: try {
        var SQL = ""
        SQL += "SELECT "
        SQL += "       G7CM_MESSAGE.RES_ID, G7CM_MESSAGE.MESSAGE_TYPE, G7CM_MESSAGE.SOURCE_ID, G7CM_MESSAGE.TITLE, G7CM_MESSAGE.TRIGGER_EVENT, G7CM_MESSAGE.SOURCE, G7CM_MESSAGE.MESSAGE_STATUS, G7CM_MESSAGE.CONTENT_TYPE, G7CM_MESSAGE.CONTENT, G7CM_MESSAGE.SEND_DATE "
        SQL += "     , G7MESSAGE_ENTITY.CM_ID, G7MESSAGE_ENTITY.ENTITY_ID, G7MESSAGE_ENTITY.ENTITY_TYPE "
        if (DBServer == "Oracle")
            SQL += "     , TRUNC(G7CM_MESSAGE.SEND_DATE - SYSDATE) as DAYS_SENT " // Oracle
        else
            SQL += "     , TRUNC(G7CM_MESSAGE.SEND_DATE - GETDATE()) as DAYS_SENT " // SQL Server
        SQL += " FROM G7CM_MESSAGE "
        SQL += " LEFT OUTER JOIN G7MESSAGE_ENTITY "
        SQL += "    ON G7MESSAGE_ENTITY.SERV_PROV_CODE = G7CM_MESSAGE.SERV_PROV_CODE "
        SQL += "   AND G7MESSAGE_ENTITY.CM_ID = G7CM_MESSAGE.RES_ID "
        SQL += "   AND G7MESSAGE_ENTITY.REC_STATUS = 'A' "
        if (capId) {
            SQL += "   AND G7MESSAGE_ENTITY.ENTITY_TYPE = 'RECORD' "
            SQL += "   AND G7MESSAGE_ENTITY.ENTITY_ID = ? "
        }
        SQL += " WHERE G7CM_MESSAGE.SERV_PROV_CODE = ? "
        SQL += "   AND G7CM_MESSAGE.MESSAGE_TYPE = ?"
        SQL += "   AND G7CM_MESSAGE.REC_STATUS = 'A' "
        if (emailTemplate != null && emailTemplate != "")
            SQL += "   AND G7CM_MESSAGE.TRIGGER_EVENT = ? "
        if (emailSubject != null && emailSubject != "")
            SQL += "   AND G7CM_MESSAGE.TITLE LIKE ? "
        if (daysSent) {
            if (DBServer == "Oracle")
                SQL += "   AND TRUNC(G7CM_MESSAGE.SEND_DATE - SYSDATE) BETWEEN 0 AND ? " // Oracle
            else
                SQL += "   AND TRUNC(G7CM_MESSAGE.SEND_DATE - GETDATE()) <= ? " // SQL Server
        }
        SQL += " ORDER BY "
        SQL += "       G7CM_MESSAGE.SERV_PROV_CODE "
        SQL += "     , G7CM_MESSAGE.SEND_DATE DESC "
        SQL += "     , G7CM_MESSAGE.RES_ID"
        SQL += "     , G7MESSAGE_ENTITY.ENTITY_ID, G7MESSAGE_ENTITY.ENTITY_TYPE "

        var dbStmt = conn.prepareStatement(SQL);
        try {
            index = 1
            if (capId) {
                dbStmt.setString(index++, itemCap.getCustomID());
            }
            dbStmt.setString(index++, aa.getServiceProviderCode());
            dbStmt.setString(index++, "EMAIL");
            if (emailTemplate != null && emailTemplate != "")
                dbStmt.setString(index++, emailTemplate);
            if (emailSubject != null && emailSubject != "")
                dbStmt.setString(index++, emailSubject);
            if (daysSent)
                dbStmt.setString(index++, daysSent);
            dbStmt.executeQuery();
        } catch (errr) {
            handleError(errr, "dbStmt.executeQuery()");
            break main;
        }
        rowCount = 0;
        queryColumns = ["RES_ID", "MESSAGE_TYPE", "SOURCE_ID", "TITLE", "TRIGGER_EVENT", "SOURCE", "MESSAGE_STATUS", "CONTENT_TYPE", "CONTENT", "SEND_DATE", "DAYS_SENT", "CM_ID", "ENTITY_ID", "ENTITY_TYPE"];
        results = dbStmt.getResultSet();
        while (results.next()) {
            if (rowCount > 10) break;
            var msg = "";
            resultRow = new Array();
            for (x in queryColumns) {
                resultRow[queryColumns[x]] = results.getString(queryColumns[x]);
                msg += " " + queryColumns[x] + " : " + resultRow[queryColumns[x]];
            }
            rowCount++;
            // logDebug("[" + rowCount + "]: " + msg);
            resultRows.push(resultRow)
        }
        dbStmt.close();
    } catch (err) {
        handleError(err, "database query");
        if (typeof dbStmt != "undefined") dbStmt.close();
    }
    return resultRows;
}

 
