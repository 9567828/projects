gsap.registerPlugin(ScrollTrigger)


let speed = 100;

let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "10% top",
    end: "30% 100%",
    scrub: 1,
    markers: true,
    
  });
  
  scene1.to("#s0 .t1", { 
    y: 0.5 * speed, 
    opacity:0,
    ease: "power1.in" 
  }, 0)
  scene1.to(".fixed_top", { 
    y: 0.5 * speed, 
    rotation:90,
    ease: "power1.in" 
  }, 0)


  gsap.to("#s0 .t2",  {
    y: 0.2 * speed, 
    opacity:1,
    // x: 800,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "30% top",
        end: "60% 100%",
        scrub: 1,
        // onEnter: function() { gsap.to("#bird", { scaleX: 1, rotation: 0 }) },
        // onLeave: function() { gsap.to("#bird", { scaleX: -1, rotation: -15 }) },
    }
})




window.addEventListener('DOMContentLoaded', (event) => {

  // 0번 section은 ScrollTrigger보다는 그냥 animation사용하기
  // 



  const t0 = gsap.timeline()

  // gsap.to('#s0 .title.t1', {
  //   opacity: 1,
  //   stagger: 0.3,
  // })



  // 1
  gsap.from('#s1 .rel>*', {
    x: 300,
    opacity: 0,
    stagger: 1,
    duration: 4,
    scrollTrigger: {
      trigger: '#s1 .rel',
      start: 'top 60%',
      end: 'top 20%',
      scrub: 3,
      toggleActions: 'restart none none none',
    }
  })

  // 2
  gsap.from('#s2 .rel>*', {
    y: 300,
    opacity: 0,
    stagger: 1,
    duration: 4,
    scrollTrigger: {
      trigger: '#s2 .rel',
      // markers: true,
      start: 'top 60%',
      end: 'top 20%',
      scrub: 3,
      toggleActions: 'restart none none none',
    }
  })
  // 

  gsap.from('#s3 .rel>*', {
    y: 300,
    opacity: 0,
    stagger: 1,
    duration: 5,
    scrollTrigger: {
      trigger: '#s3 .rel',
      // markers: true,
      start: 'top center',
      // end:  '+=',
      toggleActions: 'restart none none none',
    }
  })








  gsap.to('#s6 .circle', {
    // x:700,
    rotate: 360,
    duration: 8,
    scrollTrigger: {
      trigger: '#s6 .rel',
      // top이 화면상으로 80%에 오면
      start: 'top 80%',
      end: 'top 30%',
      // 스크롤에 따라서 움직이게 하고 싶을때
      scrub: 4,
      pinSpacing: true,
      toggleActions: 'restart restart none none',

    }
  })
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#s7 .rel',
      // markers: true,
      start: 'top center',
      end: 'top 20%',
      scrub: 4
    }
  })



  tl.from('#s7 .title', {
    x: -100,
    opacity: 0,
    duration: 3,
  })
  tl.from('#s7 .txt', {
    x: -100,
    opacity: 0,
    duration: 3,
  })


  tl.from('#s7 .circle', {
    // x:700,
    rotate: -360,
    duration: 4,

  })



});