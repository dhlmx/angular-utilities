$(window).load(function ()
{
    $("#loadingContent").removeClass("loading");
    $(".pre-content").fadeOut("slow");
});

$(document).ready(function ()
{
    $(window).keydown(function (event)
    {
        if (event.keyCode == 13)
        {
            event.preventDefault();
            return false;
        }
    });

    $(".dropdown-menu li.loadScreen").on("click", function (e)
    {
        $("#loadingContent").addClass("loading");
    });

    $(".form-group button.loadScreen").on("click", function (e)
    {
        var currentForm = $(this).closest("form");
        currentForm.validate();
        if (currentForm.valid())
        {
            //Post to server or other stuff, if the validation successful
            $("#loadingContent").addClass("loading");
        }
    });
});

document.addEventListener("DOMContentLoaded", function ()
{
    var elements = document.querySelectorAll("input, select");

    for (var i = 0; i < elements.length; i++)
    {
        elements[i].oninvalid = function (e)
        {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid)
            {
                if (!e.target.valueMissing)
                {
                    e.target.setCustomValidity(Resources.FieldRequired);
                    $(e.target).addClass("isInvalid");
                }
            }
        };
        elements[i].oninput = function (e)
        {
            e.target.setCustomValidity("");
            $(e.target).removeClass("isInvalid");
        };
    }
});