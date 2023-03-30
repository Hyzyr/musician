var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};

const header = document.getElementById("header");
if (header)
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 20) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

///
///
/// slick slider
const slickSettings = {
  albums: {
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    speed: 1500,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          speed: 1000,
          autoplay: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          speed: 1000,
          autoplay: true,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 2.6,
          speed: 1000,
          autoplay: true,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          speed: 1000,
          autoplay: true,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
          cssEase: "linear",
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 0,
        },
      },
    ],
  },
  default: {
    slidesToShow: 3,
    speed: 600,
    arrows: true,
    dots: false,
    infinite: false,
    prevArrow: $("#brandSlider .prevArrow"),
    nextArrow: $("#brandSlider .nextArrow"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2.5,
          speed: 1000,
          autoplay: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          speed: 1000,
          autoplay: true,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1.6,
          speed: 1000,
          autoplay: true,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1.2,
          speed: 1000,
          autoplay: true,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          speed: 1000,
          autoplay: true,
        },
      },
    ],
  },
  feedbacksImages: {
    slidesToShow: 1,
    speed: 300,
    arrows: false,
    dots: false,
    fade: true,
    cssEase: "ease-out",
    asNavFor: "#feedbacksContent",
  },

  feedbacksContent: {
    slidesToShow: 1,
    speed: 0,
    arrows: false,
    dots: true,
    appendDots: $("#feedbacksContentDots"),
    fade: true,
    cssEase: "linear",
    asNavFor: "#feedbacksImages",
  },
};

const getSlickSettings = (settings) => {
  return slickSettings[settings] ?? {};
};
const slickSliders = document.querySelectorAll(".slickSlider");
slickSliders.forEach((slider) => {
  const settings = slider.getAttribute("data-slick") ?? null;
  $(slider).slick(getSlickSettings(settings));
});

///
///
/// tabEvents
const toggleBody = (isClose) => {
  if (isClose) document.body.classList.add("active");
  else document.body.classList.remove("active");
};
document.querySelectorAll(`[data-event="tabEvent"]`).forEach((eventBtn) => {
  const tab = document.querySelector(eventBtn.getAttribute("data-tab"));
  if (tab) {
    eventBtn.onclick = (e) => {
      e.preventDefault();
      tab.classList.toggle("active");
      toggleBody(tab.classList.contains("active"));
    };
    tab.onclick = (e) => {
      if (e.target === e.currentTarget) {
        tab.classList.toggle("active");
        toggleBody(tab.classList.contains("active"));
      }
    };
  }
});
///
///
///
///WOW JS
window.onload = () => {
  setTimeout(() => {
    new WOW().init({
      boxClass: "wow",
    });
  }, 200);
};
