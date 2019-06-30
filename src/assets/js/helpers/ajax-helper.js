/** AjaxHelper Class
 * @property {settings.cache} settings.cache (default: true, false for dataType 'script' and 'jsonp')
 * @returns {AjaxHelper}
 * 
 * @see Notes:
 * 
 * Events:
 * beforeSend(): A pre-request callback function that can be used to modify the jqXHR 
 * (in jQuery 1.4.x, XMLHTTPRequest) object before it is sent. Use this to set custom headers, etc. 
 * The jqXHR and settings objects are passed as arguments. This is an Ajax Event. Returning false in the beforeSend function 
 * will cancel the request. As of jQuery 1.5, the beforeSend option will be called regardless of the type of request.
 * 
 * complete(): A function to be called when the request finishes (after success and error callbacks are executed). 
 * The function gets passed two arguments: The jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object
 * and a string categorizing the status of the request ("success", "notmodified", "nocontent", "error", "timeout", "abort", or "parsererror"). 
 * As of jQuery 1.5, the complete setting can accept an array of functions. Each function will be called in turn. This is an Ajax Event.
 * 
 * Settings:
 * cache: to false will only work correctly with HEAD and GET requests.
 * It works by appending "_={timestamp}" to the GET parameters. 
 * The parameter is not needed for other types of requests, 
 * except in IE8 when a POST is made to a URL that has already been requested by a GET.
 * 
 * contentType: (default: 'application/x-www-form-urlencoded; charset=UTF-8')
 * Type: Boolean or String
 * When sending data to the server, use this content type. Default is "application/x-www-form-urlencoded; charset=UTF-8", 
 * which is fine for most cases. If you explicitly pass in a content-type to $.ajax(), then it is always sent to the server 
 * (even if no data is sent). As of jQuery 1.6 you can pass false to tell jQuery to not set any content type header. 
 * Note: The W3C XMLHttpRequest specification dictates that the charset is always UTF-8; specifying another charset will not force 
 * the browser to change the encoding. 
 * Note: For cross-domain requests, setting the content type to anything other than application/x-www-form-urlencoded, 
 * multipart/form-data, or text/plain will trigger the browser to send a preflight OPTIONS request to the server.
 * 
 */
AjaxHelper = function() {
    this.settings = {
        url: location.href,
        type: "GET",
        isLocal: true,          // rLocationProtocol.test(...)
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        timeout: 0,             // Commented: 0,
        data: null,             // Commented: null,
        dataType: null,         // Commented: null,  Options: xml, html, script, json, jsonp, text or multiple: xml text
        username: null,         // Commented: null,
        password: null,         // Commented: null,
        cache: false,           // Commented: null,
        throws: false,          // Commented: false,
        traditional: false,     // Commented: false,
        headers: {},            // Commented: {},
        accepts: {
            "*": "*/".concat("*"), // allTypes = "*/".concat( "*" )
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
        },
        contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
        },
        responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
        },
        // Data converters
        // Keys separate source (or catchall "*") and destination types with a single space
        converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": true,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": jQuery.parseXML
        },
        // For options that shouldn't be deep extended:
        // you can add your own custom options here if
        // and when you create one that shouldn't be
        // deep extended (see ajaxExtend)
        flatOptions: {
            url: true,
            context: true
        },
        statusCode: {
            401: function(jqXHR, textStatus, errorThrown) {
                alert("Request unauthorized");
            },
            403: function(jqXHR, textStatus, errorThrown) {
                alert("Permisos insuficientes");
            },
            404: function(jqXHR, textStatus, errorThrown) {
                alert("Resource or page not found");
            },
            500: function(jqXHR, textStatus, errorThrown) {
                alert("Error interno en el servidor");
            }
        }
    };
    this.execute = function() {
        return $.ajax(this.settings)
            .fail(function(jqXHR, textStatus, errorThrown) {
                var errorInfo = {};
                errorInfo.jqXHR = jqXHR;
                errorInfo.status = textStatus;
                errorInfo.error = errorThrown;
            });
    };
};
