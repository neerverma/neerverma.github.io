$(document).ready(function() {


    //ScrollReveal

$('progress').addClass('hidden');

    //Tooltip
    $('[data-toggle="tooltip"]').tooltip();


    //Progress Bar    
    var winHeight = $(window).height(),
        docHeight = $(document).height(),
        progressBar = $('progress'),
        max, value;


    /* Set the max scrollable area */

    

    $(document).on('scroll', function() {
        value = $(window).scrollTop();
        progressBar.attr('value', value);
        max = docHeight - winHeight;
        progressBar.attr('max', max);

    });

    //offset anchor
    window.addEventListener("hashchange", function() {
        window.scrollTo(window.scrollX, window.scrollY - 110);
    });

    //find the number of anchors/sections
    var numSec = $('.section').length;

    //append all anchors 
    if (numSec > 0) {
        for (i = 1; i <= numSec; i++) {
            var secName = $('#s' + i).text();
            $('#tags').append('<a class="anchor" id="a' + i + '" href="#s' + i + '">' + secName + '</a>');
        }

        $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });



        //change tag when pass anchor point 
        var anchor_offset = 0;

        $(window).on('scroll', function() {
            for (i = 1; i <= numSec; i++) {
                anchor_offset = $('#s' + i).offset().top - 200;
                //    console.log(anchor_offset);

                if ($(window).scrollTop() > anchor_offset) {
                    //         $('#test').show();
                    //      console.log("something fireddd");
                    $('.active').removeClass('active');
                    $('#a' + i).addClass('active');
                }
            }
        })
    };



    //Hide and show nav when scroll
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();

    $(window).scroll(function(event) {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('nav').removeClass('nav-down').addClass('nav-up border');
            //            $('.project-sum').addClass('hidden');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('nav').removeClass('nav-up').addClass('nav-down');
                //                $('.project-sum').removeClass('hidden');
            }
        }

        //remove nav border when at the top of the page 
        if (st < 60) {
            $('nav').removeClass('border');
        }

        //show nav if at page bottom
        if (st > max - 200) {
            $('nav').removeClass('nav-up').addClass('border');
        }

        //show sidebar only after scrolling x
        if (st > 1500) {
            $('.project-sum').removeClass('hidden');
            $('.project-sum').addClass('shown');


            $('progress').removeClass('hidden');
            $('progress').addClass('shown');
        } else {
            $('.project-sum').addClass('hidden');
            $('.project-sum').removeClass('shown');

            $('progress').addClass('hidden');
            $('progress').removeClass('shown');
        }

        //back-home link
        //        if (st > max*.70){
        //            $('#back-home').removeClass('hidden');
        //        } else {
        //            $('#back-home').addClass('hidden')
        //        }

        lastScrollTop = st;
    }




});



var shortintro = {
    duration: 3000,
    useDelay: 'always',

    delay: 1000,
    scale: 0,
    opacity: 0,
    reset: true

}
var headintro = {
    duration: 3000,
    useDelay: 'always',
    delay: 1000,

    origin: 'top',
    distance: '3rem',

    scale: 0,
    opacity: 0,
    reset: true,
    rotate: { x: 20, y: 0, z: 0 },

}
var images = {
    duration: 1500,
distance: '100px',

    origin: 'bottom',
    scale: 0,
    opacity: 0
}

var para = {
    duration: 2000,
    delay: 200,

    origin: 'left',
    scale: 0,
    opacity: 0
}

var paraheader = {
    duration: 2000,

    origin: 'left',
    scale: 0,
    opacity: 0
}

var imag = {
        duration: 1500,
        delay: 300,

        scale: 0,
        opacity: 0

    }
    var longimag = {
        duration: 1500,

        scale: 0,
        opacity: 0

    }
    //Scroll Reveal  ------------>

$(document).ready(function() {
    window.sr = ScrollReveal();

    //   sr.reveal('.design-image img', {
    //   afterReveal: function(el) {
    //   anime({
    //           targets: el,
    //           easing: 'linear',

    //               width: [
    //                   {value: ['-800%','100%'], duration: 1000 }
    //               ]
    //       });    }
    // });

    sr.reveal('.intro p', shortintro);
    sr.reveal('.wrapper', para);

    // sr.reveal('.thumbnail ', images);

    sr.reveal('.section', imag);

    sr.reveal('p', para);



    sr.reveal('img', imag);
    sr.reveal('project-img-long', longimag);

    sr.reveal('h2', imag);
    sr.reveal('h3', imag);
    sr.reveal('h4', imag);

    // var animeRevealerOpts: {
    //                 easing: 'easeOutCubic',
    //                 delay: function(t,i) {
    //                     return i*100;
    //                 },
    //                 translateX: [
    //                     {value: ['101%','0%'], duration: 400 },
    //                     {value: ['0%','-101%'], duration: 400}
    //                 ]
    //             };
    //             var animeOpts: {
    //                 duration: 900,
    //                 easing: 'easeOutCubic',
    //                 delay: function(t,i) {
    //                     return 400+i*100;
    //                 },
    //                 opacity: {
    //                     value: 1,
    //                     duration: 1,
    //                     easing: 'linear'
    //                 },
    //                 scale: [0.8,1]
    //             };


   
    var buttonEl = document.querySelector('.reveal');


    function enterButton() {
        anime.remove('.carets');
        // anime.remove('.square');

        anime({
            targets: '.carets',
            translateY: 50,
            elasticity: 0
        });
        // anime({
        //     targets: '.square',
        //     translateX: 0,
        //     width: 50,
        //     duration: 2000,
        //     opacity: 0.2,
        //     elasticity: 0

        //     // easing: 'linear'

        // });
    };

    function leaveButton() {
        anime.remove('.carets');
        // anime.remove('.square');


        anime({
            targets: '.carets',
            translateY: 0,
            elasticity: 0
        });
        // anime({
        //     targets: '.square',
        //     translateX: 50,
        //     duration: 2000,
        //     elasticity: 0,

        //     opacity: 0,
        //     // easing: 'linear'


        // });
    };

    buttonEl.addEventListener('mouseenter', enterButton, false);
    buttonEl.addEventListener('mouseleave', leaveButton, false);





});
