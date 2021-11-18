$(document).ready(function() {

    $("#dropdown").hover(function() {
        $(this).css("background","#385E71");
        $(this).children("#diso").css("display","initial");
    },
    function() {
        $(this).css("background","none");
        $(this).children("#diso").css("display","none");
    });
});