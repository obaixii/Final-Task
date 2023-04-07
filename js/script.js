// FIXED NAVBAR ON SCROLL
$(window).scroll(function () {

  // Write code here
  const scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".hm-navbar").addClass("hm-fixed");
  } else {
    $(".hm-navbar").removeClass("hm-fixed");
  } 
});

// END OF FIXED NAVBAR ON SCROLL

// SMALL SCREEN NAVBARvar elements = document.querySelectorAll('.nature');



function myFunction(x) {
  if (x.matches) { // If media query matches
    $("#hm-menu").addClass("hm-small").removeClass("hm-fixed");
    $("#ham-nav").addClass("navbar-dark");
    $(".my-bg").addClass("bg-dark");
   document.getElementById("nav-btn").style.margin= "0 auto"
  } else {
    $("#hm-menu").addClass("hm-fixed").removeClass("hm-small");
    $(".hm-navbar").removeClass("hm-small");
    $(".my-bg").removeClass("bg-dark");
    $("#ham-nav").removeClass("navbar-dark");
    document.getElementById("nav-btn").style.margin= "0"
  }
}

var x = window.matchMedia("(max-width: 991px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

// END OF SMALL SCREEN NAVBAR

///////////////// SCROLL TOP
var btn = $('#totop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

function scrollToTop() {
  $(window).scrollTop(0);
}
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 'fast');
});
///////////////// END OF SCROLL TOP

// SLICK SLIDER x PORTFOLIO
$('.port').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// SLICK SLIDER x ICON SLIDER
$('.icon_slides').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// SLICK SLIDER x COMPANY SLIDER
$('.comp_slider').slick({
  dots:true ,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

        // PROGRESS BAR ANIMATION
        $(".bar1").animate({
          width:"78%",
  }, 1000);
  $(".bar2").animate({
          width: "70%",
  }, 1000);
  $(".bar3").animate({
          width: "92%",
  }, 1000);

      // END OF  PROGRESS BAR ANIMATION