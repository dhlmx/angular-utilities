/** Format a date based in diverse configurations
*   @param {Number} number Required parameter.
*   @param {Number} decimals Not required parameter or null for default.  Default: 0
*   @param {String} style Not required parameter or null for default. Default: "decimal". Options: "currency", "decimal", "percent"
*   @param {String} currencyDisplay Only required parameter for style = "currency" or null for default. Default: undefined or "symbol" for style = "currency". Options: "code", "symbol", "name"
*   @param {String} language Not required parameter or null for default. Default: "en". Options: "en", "es"
*   @return {String} A string with a number format based on the arguments
*/
function numberFormat(number, decimals, style, currencyDisplay, language) {
    try {
        if (typeof number != "number") { throw new Error("[formatNumber] The parameter number must be a Number type."); }

        if (decimals === undefined || decimals === null) { decimals = 0; }
        if (typeof decimals != "number" || isNaN(parseInt(decimals))) { throw new Error("[formatNumber] The parameter decimals must be a Integer Number type."); }

        if (style === undefined || style === null) { style = "decimal"; }

        if (style !== "currency" && style !== "decimal" && style !== "percent") {
            throw new Error("[formatNumber] The parameter style must be 'currency', 'decimal' or 'percent'.");
        }

        if (currencyDisplay === undefined || currencyDisplay === null) {
            if (style === "currency") {
                currencyDisplay = "symbol";
            } else {
                currencyDisplay = undefined;
            }
        } else {
            if (style === "currency") {
                if (currencyDisplay !== "code" && currencyDisplay !== "name" && currencyDisplay !== "symbol") {
                    throw new Error("[formatNumber] The parameter currencyDisplay must be 'code', 'name' or 'symbol' for the style 'currency'.");
                }
            } else {
                currencyDisplay = undefined;
            }
        }

        if (language === undefined || language === null) { language = "en"; }

        var locales = [];
        var currency = "";

        switch (language) {
            case "en":
                locales.push("en-US");
                currency = "USD";
                break;
            case "es":
                locales.push("sp-419");
                currency = "MXN";
                break;
            default:
                locales.push("en-US");
                currency = "USD";
                break;
        }

        var nf = new Intl.NumberFormat(locales, {
            style: style,
            currency: currency,
            currencyDisplay: currencyDisplay,
            minimumFractionDigits: decimals
        });

        return nf.format(number);
    }
    catch (e) {
        alert(e.message);
        return null;
    }
}
