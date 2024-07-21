const header = document.querySelector("header");
const footer = document.querySelector("footer");
const MOBfooter = document.querySelector(".mob_footer");

fetch("../public/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    header.innerHTML = data;

    const navA = document.querySelectorAll(".main_menu .menu");
    const subMenu = document.querySelectorAll(".sub_menu a");
    const currentURL = window.location.href;
    console.log(currentURL);
    const ON = "On";

    subMenu.forEach(function (sublink) {
      console.log(sublink);
      console.log(sublink.href);
    });
    navA.forEach(function (link) {
      if (currentURL === link.href) {
        link.classList.add(ON);
        console.log(link);
      }
      link.addEventListener("click", function () {
        navA.forEach(function (Alink) {
          Alink.classList.remove(ON);
        });
        link.classList.add(ON);
      });
    });

    // mobile header
    const BODY = document.querySelector("body"); //scrolling
    const HTML = document.querySelector("html"); //mobile scrolling
    const kebabBtn = document.querySelector(".kebab_ico");

    kebabBtn.addEventListener("click", function (e) {
      e.preventDefault();

      BODY.classList.toggle("mobNav");

      if (BODY.classList.contains("mobNav")) {
        HTML.style.overflow = "hidden";
        HTML.style.paddingRight = "17px";
      } else {
        HTML.style.paddingRight = 0;
        HTML.style.overflowY = "visible";
      }

      function resize() {
        HTML.style.paddingRight = 0;
        HTML.style.overflowY = "visible";
        BODY.classList.remove("mobNav");
      }

      window.addEventListener("resize", function () {
        if (this.window.innerWidth > 999) {
          resize();
        }
      });
    });
  });

fetch("../public/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    footer.innerHTML = data;
  });

fetch("../public/mobile_footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    MOBfooter.innerHTML = data;
  });

// navA[0].classList.add(ON);
// Array.prototype.forEach.call(navA, function (elem) {
//   elem.addEventListener("click", function () {
//     Array.prototype.forEach.call(navA, function (elem) {
//       elem.classList.remove(ON);
//     });
//     this.classList.add(ON);
//   });
// });

// navLI.forEach(function (btn, q) {
//   btn.addEventListener("click", function () {
//     for (let i = 0; i < span.length; i++) {
//       span[i].classList.remove(ON);
//     }
//     span[q].classList.add(ON);
//   });
// });

// $(function () {
//   let url = window.location.pathname;
//   $(navA).each(function () {
//     $(this).removeClass(ON);
//     if ($(this).attr("href") == url) {
//       $(this).addClass("oN");
//     }
//   });
// });
