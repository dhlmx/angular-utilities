$(function ()
{
    var language = "";
    var url = $(this)[0].location.pathname;
    var currentPath = new String(url);

    if (currentPath.includes("/en/"))
    {
        language = "en";
    }
    else if (currentPath.includes("/es/"))
    {
        language = "es";
    }

    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

    $.validator.methods.date = function (value, element)
    {
        if ((isChrome || isSafari) && language == "es")
        {
            var dateParts = value.split('/');
            var dateStr = dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0];
            return this.optional(element) || !/Invalid|NaN/.test(new Date(dateStr));
        }
        else
        {
            return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
        }
    };
});