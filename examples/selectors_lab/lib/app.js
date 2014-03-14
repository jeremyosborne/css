$(document).ready(function() {

$("#test-form").submit(function(e) {
    var selector = $(this).find("#selector").val(),
        selection = document.querySelectorAll(selector);

    if (selector) {
        $("#selector-used").html(selector);
        $("#num-elements-found").html(selection.length);
        $("*").removeClass("found-element");
        $(selection).addClass("found-element");
    }
    else {
        // consider this a reset
        $("*").removeClass("found-element");
    }

    // Kill the form submit
    e.preventDefault();
});

});
