$(document).ready(function() {
    var i = 0;
    window.setInterval(function() {
        num = Math.floor(Math.random() * 40) + 10;
        $("#bar"+i.toString()).animate({"height":num.toString()+"px"}, 1000);
        i += 1;
        if (i == 4)
            i = 0;
    }, 350);
});