gsap.registerPlugin(ScrollTrigger)

const scene1 = gsap.timeline()
const scene2 = gsap.timeline()
const scene3 = gsap.timeline()
const scene4 = gsap.timeline()

ScrollTrigger.create({
  animation: scene1,
  trigger: '.solution',//방아쇠를 당기는 시점
  start: 'top 30%',
  end: 'top 90%',
  scrub: 3
});

scene1.to('.solution .tit_wrap > *',{
  opacity: 1,
  stagger: .8,
  x: 30
});


ScrollTrigger.create({
  animation: scene2,
  trigger: '.consulting',//방아쇠를 당기는 시점
  start: 'top 30%',
  end: 'top 90%',
  scrub: 3
});

scene2.to('.consulting .txt_wrap > *',{
  opacity: 1,
  stagger: .8,
  x: 30
});


ScrollTrigger.create({
  animation: scene3,
  trigger: '.clients',//방아쇠를 당기는 시점
  start: 'top 30%',
  end: 'top 90%',
  scrub: 3
});

scene3.to('.clients .txt_wrap > *',{
  opacity: 1,
  stagger: .8,
  x: 30
});

ScrollTrigger.create({
  animation: scene4,
  trigger: '.banner',//방아쇠를 당기는 시점
  start: 'top 30%',
  end: 'top 90%',
  scrub: 3
});

scene4.to('.banner .txt_wrap > *',{
  opacity: 1,
  stagger: .8,
  x: 30
});