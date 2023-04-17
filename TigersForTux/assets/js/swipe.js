$(window).ready(function() {
    $(".sidenav").swipe({
        swipeStatus: function(event, phase, direction, distance, duration, fingers) {
            if (phase == "move" && direction == "right") {
                $(".sidenav").addClass("open-sidebar");
                $(".bur").addClass("vis");
                $(".search").addClass("vis");
                $(".bookmark").addClass("vis");
                $(".gotop").addClass("vis");
                return false;
            }
            if (phase == "move" && direction == "left") {
                $(".sidenav").removeClass("open-sidebar");
                $(".bur").removeClass("vis");
                $(".search").removeClass("vis");
                $(".bookmark").removeClass("vis");
                $(".gotop").removeClass("vis");
                return false;
            }
        }
    });
});