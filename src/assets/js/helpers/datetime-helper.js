/** Format a date based in diverse configurations
*   @param {Date} date A javascript date. Required parameter
*   @param {Boolean} largeFormat true for to return a "dd-MM-yyyy hh:mm:ss" or similar format. false for to return a "dd-MM-yyyy" or similar format. Not required parameter. Default: false
*   @param {String} language "en" for to return a "MM-dd-yyyy hh:mm:ss", "MM-dd-yyyy" or similar format. "es" for to return a "dd-MM-yyyy hh:mm:ss", "dd-MM-yyyy" or similar format. Not required parameter. Default: "en"
*   @param {String} dateSeparator Configurable parameter. Not required parameter. Default: "-"
*   @param {String} timeSeparator Configurable parameter. Not required parameter. Default: ":"
*   @return {String} A string with a configured date format based on the function parameters
*/
function dateFormat(date, largeFormat, language, dateSeparator, timeSeparator) {
    try {
        if (date === undefined) { throw new Error("[dateFormat] The parameter date is requerid."); }
        if (!Date.prototype.isPrototypeOf(date)) { throw new Error("[dateFormat] The parameter date must be type Date."); }

        if (largeFormat === undefined) { var largeFormat = false; }
        if (largeFormat === null) { largeFormat = false; }
        if (typeof largeFormat != "boolean") { throw new Error("[dateFormat] The parameter largeFormat must be type Boolean."); }

        if (language === undefined) { var language = "en" }
        if (language === null || language === "") { language = "en" }
        if (typeof language != "string") { throw new Error("[dateFormat] The parameter language must be type String."); }

        if (dateSeparator === undefined) { var dateSeparator = "-"; }
        if (dateSeparator === null || dateSeparator === "") { dateSeparator = "-"; }
        if (typeof dateSeparator != "string") { throw new Error("[dateFormat] The parameter dateSeparator must be type String."); }

        if (timeSeparator === undefined) { var timeSeparator = ":"; }
        if (timeSeparator === null || timeSeparator === "") { timeSeparator = ":"; }
        if (typeof timeSeparator != "string") { throw new Error("[dateFormat] The parameter timeSeparator must be type String."); }

        var year = String(date.getFullYear());
        var month = (((date.getMonth() + 1) > 9) ? String(date.getMonth() + 1) : ("0" + String(date.getMonth() + 1)));
        var day = ((date.getDate() > 9) ? String(date.getDate()) : ("0" + String(date.getDate())));

        if (largeFormat) {
            var hour = ((date.getHours() > 9) ? String(date.getHours()) : ("0" + String(date.getHours())));
            var minute = ((date.getMinutes() > 9) ? String(date.getMinutes()) : ("0" + String(date.getMinutes())));
            var second = ((date.getSeconds() > 9) ? String(date.getSeconds()) : ("0" + String(date.getSeconds())));

            if (language == "en") {
                formattedDate = month + dateSeparator + day + dateSeparator + year + " " + hour + timeSeparator + minute + timeSeparator + second;
            } else {
                formattedDate = day + dateSeparator + month + dateSeparator + year + " " + hour + timeSeparator + minute + timeSeparator + second;
            }
        } else {
            if (language == "en") {
                formattedDate = month + dateSeparator + day + dateSeparator + year;
            } else {
                formattedDate = day + dateSeparator + month + dateSeparator + year;
            }
        }

        return formattedDate;
    }
    catch (e) {
        alert(e.message);
        return null;
    }
}

/** Return a javascript date based on a json date
*   @param {String} jsonDate A json date. Required parameter
*   @return {Date} Return a javascript date
*/
function jsonDateToDate(jsonDate) {
    try {
        if (jsonDate === undefined) { throw new Error("[jsonDateToDate] The parameter jsonDate is requerid."); }
        if (typeof jsonDate != "string") { throw new Error("[jsonDateToDate] The parameter jsonDate must be type JSON Date."); }

        // Apply a RegExp 
        var date = new Date(parseInt(String(jsonDate).substring(6)));
        return date;
    }
    catch (e) {
        alert(e.message);
        return null;
    }
}

/** Format a time based in diverse configurations
*   @param {date} date A javascript date. Required parameter
*   @param {string} timeSeparator Configurable parameter. Not required parameter. Default: ":"
*   @return {string} A string with a configured time format based on the function parameters
*/
function timeFormat(date, timeSeparator) {
    try {
        if (date === undefined) { throw new Error("[timeFormat] The parameter date is requerid."); }
        if (!Date.prototype.isPrototypeOf(date)) { throw new Error("[timeFormat] The parameter date must be type Date."); } C
        
        if (timeSeparator === undefined) { var timeSeparator = ":"; }
        if (timeSeparator === null || timeSeparator === "") { timeSeparator = ":"; }
        if (typeof timeSeparator != "string") { throw new Error("[timeFormat] The parameter timeSeparator must be type String."); }

        var formattedTime = "";
        var hour = ((date.getHours() > 9) ? String(date.getHours()) : ("0" + String(date.getHours())));
        var minute = ((date.getMinutes() > 9) ? String(date.getMinutes()) : ("0" + String(date.getMinutes())));
        var second = ((date.getSeconds() > 9) ? String(date.getSeconds()) : ("0" + String(date.getSeconds())));

        formattedTime = hour + timeSeparator + minute + timeSeparator + second;

        return formattedTime;
    }
    catch (e) {
        alert(e.message);
        return null;
    }
}

/* date: dd-mm-yyyy or mm-dd-yyyy */
/* return yyyy-mm-dd */
function formatDateHTML5(date, language) {
    var dateAux = date.split('-');

    return dateAux[2] + "-" + dateAux[0] + "-" + dateAux[1];
}

function formatDate(date, lang) {
    var dateAux = date.split('-');
    var formattedDate = '';

    if (lang == "es") {
        formattedDate = dateAux[0] + '/' + dateAux[1] + '/' + dateAux[2];
    } else {
        formattedDate = dateAux[1] + '/' + dateAux[0] + '/' + dateAux[2];
    }

    return formattedDate;
}

/** Extracts the Format for DateTime Picker control, based on the user language. **/
/// @param  {String} language: User language.
/// @return {String} A string with the required date format. If no language is sent the default format will be US 'MM/DD/YYYY'.
function getFormatDatePicker(language)
{
    var defaultFormat = "MM/DD/YYYY";

    if (language === null)
        return defaultFormat;

    if (language == "es")
        return "DD/MM/YYYY";
    else
        return defaultFormat;
}