const swiper = new Swiper(".movie_slide", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    799: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    999: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


// const swiper = new Swiper(".movie_slide", {
//   loop: true,
//   slidesPerView: 4,
//   // spaceBetween: 30,
//   pagination: {
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// }); //기존


const BODY = document.querySelector('body') //scrolling
const HTML = document.querySelector('html') //mobile scrolling
const fixedTop = document.querySelector('.fixedTop')
const kebabBtn = document.querySelector('.kebab_ico')

window.addEventListener('scroll',function(){
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