let lastScrollTop = 0;

$(window).scroll(function(){

let scrollTop = $(this).scrollTop(); //현재 스크롤값
let headerHeight = $("header").height(); //Nav 높이값 

console.log(scrollTop)

if(scrollTop >= headerHeight) { 
  if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) { 
    $("header").addClass("scrolling");
} else {
    $("header").removeClass("scrolling");
}
  lastScrollTop = scrollTop;
}
});

// const BODY = document.querySelector("body")
// const HEADER = document.querySelector("header")

// window.addEventListener('scroll',function(){
//   let i = this.document.documentElement.scrollTop

//   console.log(i);
//   if( i > 600 && i > 0 ){
//     HEADER.classList.add('scrolling')
//   } else{
//     HEADER.classList.remove('scrolling')
//   }

// })