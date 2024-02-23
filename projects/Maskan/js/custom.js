//Template:Holivilla
//FileName:custom.js
//Author Name: Themevault
//Author URI:http://www.themevault.net/
//License URI: http://www.themevault.net/license/

//Video Popup JS
$(document).ready(function () {
    var $videoSrc = $("#video").attr("src");
    $('#myModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    });
});
//End Video Popup JS

$(window).load(function () {
    // Animate loader off screen
    $(".loader").fadeOut("slow");
    ;
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

});

