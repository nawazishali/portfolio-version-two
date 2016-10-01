$(document).ready(function () {
    
    //Smooth scroll function
    
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 600, 'swing');
                    return false;
                }
            }
        });
    });
    
    //Smooth scroll function ends.
    
    
    //Menu display toggle function.
    
    var pageHeight = $(document).height();
    var winHeight = $(window).height();
    var coverHeight = $('#cover').innerHeight();
    
    
    // hide .navbar first
    $(".navbar-two").hide();
    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            // set distance user needs o scroll before we fadeIn navbar
            if ($(this).scrollTop() > coverHeight - 1) {
                $('.navbar-two').fadeIn('fast').css("position", "fixed");
                //$(".navbar").css("background-color", "rgba(81, 117, 192, 1)");
            }
            else {
                $('.navbar-two').fadeOut('fast');
                //$(".navbar").css("background-color", "rgba(81, 117, 192, 0)");
            }
        });
    });
    
    
    //Menu display toggle function ends.
    
    //Navbar One color adjustment on toggle.
    $(".navbar-one .navbar-toggle").click(function(){
        $(".navbar-one").toggleClass("color-toggle");
    });
    
    //NavBar collapse on anchor click for mobiles
    $(".navbar li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
        $(".navbar-one").removeClass("color-toggle");
    }); // End
    
    
});


//All page animations using Waypoints.js

var animated = $('.animated');

animated.waypoint(function(){
 $(this.element).addClass($(this.element).data("animate")).css('opacity', '1');
},
{ offset: '95%' });

//Page animations end




//Navbar scrollspy using Waypoints.js.

var section = $('section');

section.waypoint(function(){
    var switchId = $(this.element).attr('id');
    console.log(switchId);
    
    switch(switchId){
            
        case 'cover':
            $('#cov').focus();
        break;
            
        case 'services':
            $('#ser').focus();
        break;
            
        case 'works':
            $('#wor').focus();
        break;
            
        case 'skills':
            $('#ski').focus();
        break;
            
        case 'contact':
            $('#con').focus();
        break;
            
            
    }
    
});


//Navbar scrollspy ends.


