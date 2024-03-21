// hero Swiper
const swiper1 = new Swiper(".hero_slide", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable : true
  },
});

  //solution
  const swiper2 = new Swiper(".slide", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-left",
      prevEl: ".swiper-button-right",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      999: {
        slidesPerView: 2.5,
        spaceBetween: 10
      }
    }
});


// consulting Swiper
const swiper3 = new Swiper(".dep2_slide", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  
  
  breakpoints: {
    0: {
    centeredSlides: true,
    slidesPerView: 1,
  },
  999: {
    slidesPerView:3,
    spaceBetween: 10
  }
}
});

const BODY = document.querySelector('body') //scrolling
const HTML = document.querySelector('html') //scrolling
const fixedTop = document.querySelector('.fixedTop')
const kebabBtn = document.querySelector('.kebab_ico')

window.addEventListener('scroll',function(e){
  let i = this.document.documentElement.scrollTop

  console.log(i);
  if(i>600){
    BODY.classList.add('scrolling')
  } else{
    BODY.classList.remove('scrolling')
  }

})

// 스크롤탑 버튼
fixedTop.addEventListener('click',function(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
})


// mobBtn click event
kebabBtn.addEventListener('click',function(e){
  e.preventDefault()

  BODY.classList.toggle('mobNav')
    
  if(BODY.classList.contains('mobNav')){
    HTML.style.overflow ="hidden"
    HTML.style.paddingRight ="17px"
  } else{
    HTML.style.paddingRight = 0
    HTML.style.overflowY ="visible"
  }

  function resize(){
    HTML.style.paddingRight = 0
    HTML.style.overflowY ="visible"
    BODY.classList.remove('mobNav')
  }

  window.addEventListener('resize',function(){
    if(this.window.innerWidth>999){
      resize()
    }
  })
})
