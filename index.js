gsap.from("#box2", {
  scale: 5,
  duration: 2,
  rotate: 1000,
  scrollTrigger: {
    trigger: "#box2",
    scroller: "body",
    markers: true,
    start: "top 90%",
    end: "top 10%",
    scrub: 2,
  },
});
gsap.from("#mktx", {
  x: 3000,
  duration: 3,
  scrollTrigger: {
    trigger: "#mktx",
    scroller: "body",
    markers: true,
    start: "top 90%",
    end: "top 10%",
    scrub: 2,
  },
});

let cursor = document.querySelector("#cursor");
let cursor2 = document.querySelector("#cursor2");
let cursor3 = document.querySelector("#cursor3");
let cursor4 = document.querySelector("#cursor4");
let cursor5 = document.querySelector("#cursor5");
let cursor6 = document.querySelector("#cursor6");
let cursor7 = document.querySelector("#cursor7");
let main = document.querySelector("body");

main.addEventListener("mouseenter", function () {
  gsap.to(".cursor", {
    scale: 1,
  });
});
main.addEventListener("mouseleave", function () {
  gsap.to(".cursor", {
    scale: 0,
  });
});
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    ease: "power3.out",
    duration: 0.2,
  });
});
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor2, {
    x: dets.x,
    y: dets.y,
    ease: "power3.out",
    duration: 0.3,
  });
});
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor3, {
    x: dets.x,
    y: dets.y,
    ease: "power3.out",
    duration: 0.4,
  });
});
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor4, {
    x: dets.x,
    y: dets.y,
    ease: "power3.out",
    duration: 0.5,
  });
});
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor5, {
    x: dets.x,
    y: dets.y,
    ease: "power3.out",
    duration: 0.6,
  });
});
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor6, {
    x: dets.x,
    y: dets.y,
    ease: "power3.out",
    duration: 0.7,
  });
});
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor7, {
    x: dets.x,
    y: dets.y,
    ease: "power3.out",
    duration: 0.8,
  });
});
