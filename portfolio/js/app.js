gsap.registerPlugin(ScrollTrigger);

const scene1 = gsap.timeline();
const scene2 = gsap.timeline();
const scene3 = gsap.timeline();
const scene4 = gsap.timeline();

// #s1
ScrollTrigger.create({
  animation: scene1,
  trigger: "#s1", //방아쇠를 당기는 시점
  start: "top 30%",
  end: "top 90%",
  scrub: 3,
});

scene1.to("#s1 .tit_wrap > *", {
  opacity: 1,
  stagger: 0.8,
  x: 30,
});

// #s2
ScrollTrigger.create({
  animation: scene2,
  trigger: "#s2",
  start: "top 20%",
  end: "top 90%",
  scrub: 4,
});

scene2.to("#s2 .desk_wrap", {
  opacity: 1,
  duration: 4,
  stagger: 0.3,
  x: 30,
});
scene2.to("#s2 .mob_wrap", {
  opacity: 1,
  duration: 4,
  stagger: 0.3,
  x: 30,
});

scene2.to("#s2 .tit_wrap > *", {
  opacity: 1,
  stagger: 0.3,
  x: 30,
});
scene2.to("#s2 a.btn", {
  opacity: 1,
  stagger: 0.3,
  x: 30,
});

// #s3
ScrollTrigger.create({
  animation: scene3,
  trigger: "#s3",
  start: "top 20%",
  end: "top 80%",
  scrub: 4,
});

scene3.to("#s3 .desk_wrap", {
  opacity: 1,
  duration: 4,
  stagger: 0.3,
  x: -30,
});
scene3.to("#s3 .mob_wrap", {
  opacity: 1,
  duration: 4,
  stagger: 0.3,
  x: -30,
});

scene3.to("#s3 .tit_wrap > *", {
  opacity: 1,
  stagger: 0.3,
  x: 30,
});

scene3.to("#s3 a.btn", {
  opacity: 1,
  stagger: 0.3,
  x: 30,
});

// #s4
ScrollTrigger.create({
  animation: scene4,
  trigger: "#s4",
  start: "top 20%",
  end: "top 80%",
  scrub: 4,
});

scene4.to("#s4 .tit_wrap > *", {
  opacity: 1,
  stagger: 0.3,
  y: 30,
});

scene4.to("#s4 .sub_tit_wrap > *", {
  opacity: 1,
  stagger: 0.3,
  x: 30,
});
