// Thank you http://jonraasch.com/blog/a-simple-jquery-slideshow
function slideSwitch() {
	var $active = $('#teamphotos img.active');

    if ( $active.length == 0 ) $active = $('#teamphotos img:last');

    var $next =  $active.next().length ? $active.next()
        : $('#teamphotos img:first');

    $active.addClass('last-active');
        
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        })
}

$(document).ready(function() {
    $(function() {
        setInterval("slideSwitch()", 5000); 
    });

    $("#menu_button").click(function() {
        $("#menubar").toggle("slow");
    });

    $("#menu_button").hover(function() {
        $(this).css("color", "#BE1E2D");
        }, function() {
        $(this).css("color", "#BFBFBF");
    });

    $("#menubar ul li").hover(function() {
        $(this).css("color", "#BE1E2D");
        }, function() {
        $(this).css("color", "#BFBFBF");
    })
});


