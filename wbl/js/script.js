AOS.init({
  offset: 20,
});

$(document).ready(function () {
  function adjustHeights() {
    if ($(window).innerWidth() < 991) {
      $(".bm-main-bx").each(function (index) {
        let y = 1.5;
        if (index == 1) {
          y = 2;
        }
        let $this = $(this);
        let height = $this.find(".b-m-b-tech-bott").outerHeight(true);
        $this.find(".b-m-b-im-left, .b-m-b-im-right").height(height - y);
      });
    }
  }
  adjustHeights();
  setTimeout(adjustHeights, 1000);
});

$(".menu-toggle").on("click", function () {
  $("body").toggleClass("open");
});

$(".js-anchor-link").on("click", function () {
  $("body").toggleClass("open");
});

$(".js-anchor-link").click(function (e) {
  e.preventDefault();
  var target = $($(this).attr("href"));
  if (target.length) {
    var scrollTo = target.offset().top;
    $("body, html").animate({ scrollTop: scrollTo + "px" }, 800);
  }
});

// welcome-slider
$(".welcome-slider").owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoHeight: true,
  margin: 0,
  touchDrag: false,
  mouseDrag: false,
  nav: false,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },

    575: {
      items: 1,
    },

    768: {
      items: 1,
    },

    1000: {
      items: 1,
    },
  },
});

// global-slider
$(".global-slider").owlCarousel({
  loop: true,
  dots: true,
  autoplay: true,
  autoHeight: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 2,
    },

    575: {
      items: 2,
    },

    1000: {
      items: 4,
    },
  },
});

// protour-slider
$(".wbl-protour-slider").owlCarousel({
  loop: true,
  dots: true,
  autoplay: true,
  autoHeight: true,
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },

    575: {
      items: 1,
    },

    768: {
      items: 1,
    },

    1000: {
      items: 1,
    },
  },
});

// toggle nav
(function () {
  $(".toggle").on("click", function () {
    return $(this).toggleClass("on");
  });
}).call(this);

// Scroll to top btn

$("#topBtn").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

$(document).on("scroll", function () {
  if ($(document).scrollTop() > 80) {
    $(".primary-nav").addClass("shrink");
  } else {
    $(".primary-nav").removeClass("shrink");
  }
});

// nav hide show
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}

// $(document).ready(function () {
//   $(".navbar-nav li.nav-item .nav-link[href*=#]").click(function (e) {
//     e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump

//     var target = $(this).attr("href"); //Get the target

//     // perform animated scrolling by getting top-position of target-element and set it as scroll target
//     $("html, body")
//       .stop()
//       .animate({ scrollTop: $(target).offset().top }, 1000, function () {
//         location.hash = target + 500; //attach the hash (#jumptarget) to the pageurl
//       });

//     return false;
//   });
// });

$(".navbar-nav").on("click", "li", function () {
  $(".navbar-nav li.active").removeClass("active");
  // adding classname 'active' to current click li
  $(this).addClass("active");
});

//  slideing-text
$(() => {
  const slidingText = $(".sliding-text");
  const list = slidingText.find("ul");

  list.clone().appendTo(slidingText);

  const totalLength = list.outerWidth(true);

  const animationStart = (isResume = false) => {
    let duration = 30000;

    if (!isResume) {
      slidingText.scrollLeft(0);
    } else {
      duration =
        ((list.outerWidth(true) - slidingText.scrollLeft()) * duration) /
        list.outerWidth(true);
    }

    slidingText.animate(
      {
        scrollLeft: list.outerWidth(true),
      },
      {
        duration,
        easing: "linear",
        complete: animationStart,
      }
    );
  };

  $(".sliding-text > ul > li").on("mouseenter", () => {
    slidingText.stop(true);
  });

  slidingText.on("mouseout", () => {
    animationStart(true);
  });

  slidingText.on("click", () => {
    setTimeout(function () {
      $("#tinyguy").addClass("animation");
    });

    setTimeout(function () {
      $("#tinyguy").removeClass("animation");
    }, 12000);
  });

  animationStart();
});

$("#mouse-scroll").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("section").next().offset().top,
    },
    1000
  );
});

// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".horizon-scroll-main");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".horizon-scroll",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     end: "+=3500",
//   },
// });

// light dark theme
$("#toggle").bind("change", function () {
  $("body").toggleClass("light");
  $(".box").toggleClass("light");
  $(this).next().toggleClass("light");
});
