function getTlcResponse(httpType, apiEndpoint, environment, requestBody) {
    if (httpType !== null && apiEndpoint !== null && environment !== null && httpType.trim() !== '' && apiEndpoint.trim() !== '' && environment !== '') {
        var http;
        var baseUrl = 'https://tlccontractors.leoncountyfl.gov/' + apiEndpoint;
        var httpTypeToUpperCase = httpType.toUpperCase();
        var client = new org.apache.commons.httpclient.HttpClient();

        if (httpTypeToUpperCase === 'GET') {
            http = new org.apache.commons.httpclient.methods.GetMethod(baseUrl);
        } else if (httpTypeToUpperCase === 'POST') {
            http = new org.apache.commons.httpclient.methods.PostMethod(baseUrl);
            http.setRequestEntity(new org.apache.commons.httpclient.methods.StringRequestEntity(requestBody, 'application/json', 'ASCII'));
        } else if (httpTypeToUpperCase === 'PUT') {
            http = new org.apache.commons.httpclient.methods.PutMethod(baseUrl);
        } else if (httpTypeToUpperCase === 'DELETE') {
            http = new org.apache.commons.httpclient.methods.DeleteMethod(baseUrl);
        } else if (httpTypeToUpperCase === 'OPTIONS') {
            http = new org.apache.commons.httpclient.methods.OptionsMethod(baseUrl);
        } else if (httpTypeToUpperCase === 'HEAD') {
            http = new org.apache.commons.httpclient.methods.HeadMethod(baseUrl);
        } else if (httpTypeToUpperCase === 'TRACE') {
            http = new org.apache.commons.httpclient.methods.TraceMethod(baseUrl);
        }

        if (http !== null) {
            var status;
            var response = '';

            http.addRequestHeader('Tlc-Target', environment);
            status = client.executeMethod(http);
            logDebug('Response Status: ' + status);

            if (status >= 400) {
                // TODO: send email because of error
            }
            else {
                var br = new java.io.BufferedReader(new java.io.InputStreamReader(http.getResponseBodyAsStream()));
                var line = br.readLine();

                while (line != null) {
                    response += line;
                    line = br.readLine();
                }
            }

            http.releaseConnection();

            if (response !== '')
                return response;
        }
    }

    return null;
}

 
