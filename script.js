$(document).ready(function() {
    $("#yes-btn").click(function() {
        $("#approve").show();
        $("#disapprove").hide();
    });

    $("#no-btn").click(function() {
        $("#disapprove").show();
        $("#approve").hide();
    });
});
