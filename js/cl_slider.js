$(function(){
 // a-1 키워드 등록
 const s3_slider1 = $('.row1 .row_inner img')
 const s3_arrow1 = $('.row1 .arrow')

 // a-2 클릭 이벤트
 s3_arrow1.click(function (e) {
     // a-2-0 이벤트 막아주기
     e.preventDefault();

     //a-2-1 내가 누른 현재의 순서를 알아냄  0 번이면 빼기 1번이면 더해주기
     const i = $(this).index()

     console.log(i);

     //a-2-2 실제 active 클레스가 붙은 순서를 알아냄

     let idx = $('.row1 .row_inner>img.active').index()
     //a-2-3 기존에 붙었던 클레스 제거하기
     s3_slider1.removeClass('active')

     // a-3-1 만약 두번째 버튼이라면
     if (i == 1) {

         // a-3-2 하나 증가하기
         idx++

         // a-3-3 계속 증가 하다가 전체 슬라이드 개수와 같아지면

         if (idx == s3_slider1.length) {
             // a-3-4  변수값에 0 대입
             idx = 0
         }


     }
     // a-4-1 만약 첫번째 버튼이라면
     if (i == 0) {
         // a-4-2 하나 감소하기
         idx--;
         // a-4-3 0보다 idx가 작아지면
         if (idx < 0) {
             // a-4- 슬라이드 개수는 3 이므로 한개 뺀 값을 idx에 대입
             idx = s3_slider1.length - 1
         }
     }

     // a-5 현재 순서값 에 불 켜지게 하기
     s3_slider1.eq(idx).addClass('active')


 })

 //a. 3SECTION slider 


 // a-1 키워드 등록

 const s3_slider2 = $('.row2 .row_inner img')
 const s3_arrow2 = $('.row2 .arrow')

 s3_arrow2.click(function (e) {
     e.preventDefault();

     const i = $(this).index()
     console.log(i);
     let idx = $('.row2 .row_inner>img.active').index()
     s3_slider2.removeClass('active')

     if (i == 1) {

         idx++

         if (idx == s3_slider2.length) {
             idx = 0
         }


     }
     if (i == 0) {
         idx--;
         if (idx < 0) {
             idx = s3_slider2.length - 1
         }
     }

     s3_slider2.eq(idx).addClass('active')


 })




})