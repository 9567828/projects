(function () {

  //ie foreach 대응
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }


  const NAV_LIST = document.querySelectorAll('.nav li');
  let section = document.querySelectorAll('#wrap> section');
  let pageNum = 0;
  let totalNum = section.length; //8

  window.addEventListener('scroll', function (event) {

    let scroll = window.scrollY || window.pageYOffset //ie

    for (let i = 0; i < totalNum; i++) {

      if (scroll > section[i].offsetTop - window.outerHeight / 1.5 &&
        scroll < section[i].offsetTop - window.outerHeight / 1.5 + section[i].offsetHeight) {
        pageNum = i;
        break;
      }
    }
    pageChageFunc()
  })


  function pageChageFunc() {


    for (let i = 0; i < totalNum; i++) {
      NAV_LIST[i].classList.remove('active');
    }

    NAV_LIST[pageNum].classList.add('active');

  }



  NAV_LIST.forEach(function (btn, index) {

    btn.addEventListener('click', function () {

      for (let i = 0; i < NAV_LIST.length; i++) {
        NAV_LIST[i].classList.remove('active');
      }


      if (index == 0) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: 0
          }
        })
      } else {

        gsap.to(window, {
          duration: 1,
          scrollTo: {

            y: "#s" + index
          }
        })
      }


      btn.classList.add('active')
    })
  })




  // navBtn click event
  const navBtn = document.querySelector('.top')

  navBtn.addEventListener('click', () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: 0
      }
    })
  })




}())