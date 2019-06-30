/** Generic AJAX Form Helper
*   @param {String} url Url target.
*   @param {String} method Type of method of the request: "GET", "POST", "PUT",...
*   @param {Object} data Data type DOM sent to the server. Required argument only if the argument {headers} is especified. Default: null.
*   @param {Object} headers Data type Array[key: string, value: string] that contains the request headers sent to server. Not required argument. Default: null.
*   @returns {Object} An object jqXHR ready for to apply him the method .done() for to manage the result of the request.
*/
function ajaxFormHelper(url, method, data, headers)
{
    $("#loadingContent").addClass("loading");
    return $.ajax({
        url: url,
        type: method,
        dataType: "json",
        contentType: false, /*"multipart/form-data",*/
        data: data ? data : null,
        processData: false,
        headers: headers ? headers : null,
        cache: false,
        statusCode: {
            400: function (jqXHR, textStatus, errorThrown)
            {
                badRequestHandler(jqXHR, textStatus, errorThrown);
            },
            401: function (jqXHR, textStatus, errorThrown)
            {
                unauthorizedHandler(jqXHR, textStatus, errorThrown, url);
            }
        }
    }).success(function ()
    {
        $("#loadingContent").removeClass("loading");
    }).fail(function (jqXHR, textStatus, errorThrown)
    {
        failHandler(jqXHR, textStatus, errorThrown);
    });
}


/** Generic AJAX Helper
*   @param {String} url Url target.
*   @param {String} method Type of method of the request: "GET", "POST", "PUT",...
*   @param {Object} data Data type JSON sent to the server. Required argument only if the argument {headers} is especified. Default: null.
*   @param {Object} headers Data type Array[key: string, value: string] that contains the request headers sent to server. Not required argument. Default: null.
*   @returns {Object} An object jqXHR ready for to apply him the method .done() for to manage the result of the request.
*/
function ajaxHelper(url, method, data, headers)
{
    $("#loadingContent").addClass("loading");
    return $.ajax({
        url: url,
        type: method,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: data ? data : null,
        headers: headers ? headers : null,
        cache: false,
        statusCode: {
            400: function (jqXHR, textStatus, errorThrown)
            {
                badRequestHandler(jqXHR, textStatus, errorThrown);
            },
            401: function (jqXHR, textStatus, errorThrown)
            {
                unauthorizedHandler(jqXHR, textStatus, errorThrown, url);
            }
        }
    }).success(function ()
    {
        $("#loadingContent").removeClass("loading");
    }).fail(function (jqXHR, textStatus, errorThrown)
    {
        failHandler(jqXHR, textStatus, errorThrown);
    });
}


/** AJAX Helper HTML
*   @param {String} url Url target.
*   @param {String} method Type of method of the request: "GET", "POST", "PUT",...
*   @param {Object} data Data type JSON sent to the server. Required argument only if the argument {headers} is especified. Default: null.
*   @returns {Object} An object jqXHR ready for to apply him the method .done() for to manage the result of the request.
*/
function ajaxHelperHtml(url, method, data, headers)
{
    $("#loadingContent").addClass("loading");
    return $.ajax({
        type: method,
        url: url,
        dataType: "html",
        contentType: "application/json; charset=utf-8",
        data: data ? data : null,
        headers: headers ? headers : null,
        cache: false,
        statusCode: {
            400: function (jqXHR, textStatus, errorThrown)
            {
                badRequestHandler(jqXHR, textStatus, errorThrown);
            },
            401: function (jqXHR, textStatus, errorThrown)
            {
                unauthorizedHandler(jqXHR, textStatus, errorThrown, url);
            }
        }
    }).success(function ()
    {
        $("#loadingContent").removeClass("loading");
    }).fail(function (jqXHR, textStatus, errorThrown)
    {
        failHandler(jqXHR, textStatus, errorThrown);
    });
}

/** AJAX Helper with specified alert
*   @param {String} url Url target.
*   @param {String} method Method type: "GET", "POST", "PUT",...
*   @param {Object} data Data type JSON sent to the server. This parameter may be null.
*   @param {Object} headers Data type Array[key: string, value: string] that contains the request headers sent to server. This parameter may be null.
*   @param {String} dataType Type of data expected in the response of the server.
*   @param {String} divAlertTag Div Id that contains the Alert that will show the error message, if this exists. Required argument only if the argument {elementsPrefix} is especified. Default: "#divMainAlertError".
*   @param {String} elementsPrefix Common prefix for the names of all the HTML elements type input and select of the form.  Not required argument. Default: null.
*   @returns {Object} A jqXHR object ready for to apply it the method .done()...
*/
function ajaxHelperWithAlert(url, method, data, headers, dataType, divAlertTag, elementsPrefix)
{
    $("#loadingContent").addClass("loading");
    return $.ajax({
        type: method,
        url: url,
        headers: headers,
        dataType: dataType,
        contentType: "application/" + dataType + "; charset=utf-8",
        data: data ? data : null,
        statusCode: {
            400: function (jqXHR, textStatus, errorThrown)
            {
                badRequestHandler(jqXHR, textStatus, errorThrown, divAlertTag, elementsPrefix);
            },
            401: function (jqXHR, textStatus, errorThrown)
            {
                unauthorizedHandler(jqXHR, textStatus, errorThrown, url);
            }
        }
    }).success(function ()
    {
        $("#loadingContent").removeClass("loading");
    }).fail(function (jqXHR, textStatus, errorThrown)
    {
        failHandler(jqXHR, textStatus, errorThrown);
    });
}

/** Extracts the language of an "URL".
*   @param {String} url Url target.
*   @returns {Object} A string with value "en", "es" or "" if a known language does not exist in the url or if the url is null.
*/
function detectLanguage(url)
{
    if (url === null)
    {
        return "";
    }

    var auxiliarUrl = new String(url);

    if (auxiliarUrl.includes("/en/"))
    {
        return "en";
    }
    else if (auxiliarUrl.includes("/es/"))
    {
        return "es";
    }
    else
    {
        return "";
    }
}

function getDefaultUrl(url)
{
    var defaultUrl = null;
    var language = detectLanguage(url);

    if (language != "")
    {
        var languagePosition = url.indexOf("/" + language + "/") + 1;
        defaultUrl = url.substring(0, languagePosition);
    }
    else
    {
        var auxiliarUrl = new String(url);
        defaultUrl = auxiliarUrl + "/";
    }

    return defaultUrl;
}

// Handlers
badRequestHandler = function (jqXHR, textStatus, errorThrown, divAlertTag, elementsPrefix)
{
    $("#loadingContent").removeClass("loading");
    if (divAlertTag === undefined) { divAlertTag = "#divMainAlertError"; }
    if (divAlertTag === null) { divAlertTag = "#divMainAlertError"; }
    if (elementsPrefix === undefined) { elementsPrefix = null; }

    if (jqXHR.responseJSON != undefined && Array.isArray(jqXHR.responseJSON))
    {
        $(divAlertTag).children("ul").html("");

        $.each(jqXHR.responseJSON, function (index, value)
        {
            if (value.key !== undefined && value.key !== null && value.errors !== undefined && Array.isArray(value.errors))
            {
                if (elementsPrefix !== null)
                {
                    $("#" + elementsPrefix + value.key).addClass("input-validation-error");
                    $("#" + elementsPrefix + value.key).parent().children("span.text-danger").removeClass("field-validation-valid");
                    $("#" + elementsPrefix + value.key).parent().children("span.text-danger").addClass("field-validation-error");
                    $("#" + elementsPrefix + value.key).parent().children("span.text-danger").text(value.errors[0]);

                    if (index === 0)
                    {
                        $("#" + elementsPrefix + value.key).focus();
                    }
                }
                else
                {
                    $("[name='" + value.key + "'").addClass("input-validation-error");
                    $("[name='" + value.key + "'").parent().children("span.text-danger").removeClass("field-validation-valid");
                    $("[name='" + value.key + "'").parent().children("span.text-danger").addClass("field-validation-error");
                    $("[name='" + value.key + "'").parent().children("span.text-danger").text(value.errors[0]);

                    if (index === 0)
                    {
                        $("[name='" + value.key + "'").focus();
                    }
                }
            }
        });

        $(divAlertTag).children("ul").html(Resources.ErrorFieldsMarked);
        $(divAlertTag).show();
    }
}

failHandler = function (jqXHR, textStatus, errorThrown)
{
    $("#loadingContent").removeClass("loading");
    var divAlertTag = "#divMainAlertError";

    $(divAlertTag).children("ul").html("");

    if (jqXHR.responseJSON !== undefined && Array.isArray(jqXHR.responseJSON))
    {
        $.each(jqXHR.responseJSON, function (index, value)
        {
            if (value.ErrorMessage !== undefined && value.ErrorMessage !== null && value.ErrorMessage !== "")
            {
                $(divAlertTag).children("ul").append("<li>" + value.ErrorMessage + "</li>");
            }
        });
    }
    else
    {
        var errorMessage = (errorThrown.description !== undefined ? errorThrown.description : (errorThrown.message !== undefined ? errorThrown.message : (errorThrown !== undefined ? errorThrown : Resources.ErrorGeneral)));

        $(divAlertTag).children("ul").append("<li>" + errorMessage + "</li>");
    }

    $(divAlertTag).show();
}

unauthorizedHandler = function (jqXHR, textStatus, errorThrown, url)
{
    $("#loadingContent").removeClass("loading");
    var defaultUrl = getDefaultUrl(url);
    var language = Resources.Lang;
    var loginUrl;

    if (language === "es" || language === "en")
    {
        loginUrl = encodeURI(defaultUrl + language + "/Security/Login?returnUrl=\"" + url + "\"");
    } else
    {
        loginUrl = encodeURI("/");
    }

    window.location.assign(loginUrl);
}
