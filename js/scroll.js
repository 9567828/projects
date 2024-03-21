(function () {
  //자바스크립트에서 거의 언제나 사용하는, IIFE(Immediately-invoked function expression: 즉시 작동하는 함수식)라는 구문입니다. "이 안에 들어있는 코드를 바로 실행해라" 라는 표현으로 이해하시면 되겠습니다.

  //ie foreach 대응 IE에서는 document.querySelectorAll()과 같은 노드 배열에 관해서는 forEach메소드를 지원을 하지 않는다.
  //  상단에 노드리스트에 관한 조건을 추가해준후 평소와 같이 사용한다.

  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  const navList = document.querySelectorAll("nav li");
  let section = document.querySelectorAll("#wrap > section");
  let pageNum = 0;
  let totalNum = section.length;

  window.addEventListener("scroll", function () {
    let scroll = window.scrollY || window.pageYOffset;

    // console.log(scroll);

    for (let i = 0; i < totalNum; i++) {
      if (
        scroll > section[i].offsetTop - window.outerHeight / 1.5 &&
        scroll <
          section[i].offsetTop -
            window.outerHeight / 1.5 +
            section[i].offsetHeight
      ) {
        pageNum = i;
        console.log(pageNum);
        funcObj["f_" + i]();
      }
    }
    pageChangeFunc();
  });

  function pageChangeFunc() {
    for (let i = 0; i < totalNum; i++) {
      navList[i].classList.remove("active");
      section[i].classList.remove("active");
    }
    navList[pageNum].classList.add("active");
    section[pageNum].classList.add("active");
  }

  navList.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
      }
      gsap.to(window, {
        scrollTo: {
          y: "#s" + index,
        },
      });
      btn.classList.add("active");
    });
  });

  // section function
  let funcObj = {
    f_0: function () {
      console.log("0번 섹션입니다");
    },
    f_1: function () {
      console.log("1번 섹션입니다");
    },
    f_2: function () {
      console.log("2번 섹션입니다");
      // tl.to("#s2 .tit_wrap > *", {
      //   opacity: 1,
      //   stagger: 0.3,
      //   y: 5,
      // });
      // tl.to(".scroll", {
      //   opacity: 1,
      //   y: -20,
      // });
    },
    f_3: function () {
      console.log("3번 섹션입니다");
    },
    f_4: function () {
      console.log("4번 섹션입니다");
    },
    f_5: function () {
      console.log("5번 섹션입니다");
    },
    f_6: function () {
      console.log("6번 섹션입니다");
      // const tl = gsap.timeline()
      // tl.to('#s6 .thx_txt span', {
      //   opacity: 1,
      //   stagger: .2,
      //   rotationY: 360
      // })
      gsap.registerPlugin(TextPlugin);

      gsap.defaults({
        ease: "none",
      });

      const tl = gsap.timeline({
        repeat: 1,
        repeatDelay: 2,
        yoyo: true,
      });
      tl.to("#s6 .thx_txt", {
        duration: 2,
        text: "포트폴리오를 봐주셔서 감사합니다 :)",
      });
      // tl.to("#s6 h1.dep_tit", {
      //     x: 50
      // })
    },
  };

  funcObj["f_0"]();
  // 실행문
})(); //script end

const BODY = document.querySelector("body"); //scrolling
const HTML = document.querySelector("html"); //scrolling
const fixedTop = document.querySelector(".fixedTop");

window.addEventListener("scroll", function () {
  let i = this.document.documentElement.scrollTop;

  console.log(i);
  if (i > 600) {
    BODY.classList.add("scrolling");
  } else {
    BODY.classList.remove("scrolling");
  }
});

// 스크롤탑 버튼
fixedTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
