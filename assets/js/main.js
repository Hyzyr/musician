var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  console.log("click");
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
// window.onclick = function (event) {
//   if (event.target == menu) {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   }
// };

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
        slidesToShow: 3,
        speed: 1000,
        autoplay: true,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2.6,
        speed: 1000,
        autoplay: true,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 2,
        speed: 1000,
        autoplay: true,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1.6,
        cssEase: "linear",
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 0,
      },
    },
    {
      breakpoint: 470,
      settings: {
        slidesToShow: 1,
        cssEase: "linear",
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 0,
      },
    },
  ],
};
const slickSliders = document.querySelectorAll(".slickSlider");
slickSliders.forEach((slider) => {
  $(slider).slick(slickSettings);
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
