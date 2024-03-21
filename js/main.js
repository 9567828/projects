const HIDDEN = "hidden";
const ACTIVE = "active";

const infoBtn = document.querySelectorAll("#about .about_menu li");
const content = document.querySelectorAll(".content");

infoBtn[0].classList.add(ACTIVE);
infoBtn.forEach(function (btn, q) {
  btn.addEventListener("click", function () {
    for (let i = 0; i < infoBtn.length; i++) {
      infoBtn[i].classList.remove(ACTIVE);
      content[i].classList.add(HIDDEN);
    }
    infoBtn[q].classList.add(ACTIVE);
    content[q].classList.remove(HIDDEN);
  });
});
