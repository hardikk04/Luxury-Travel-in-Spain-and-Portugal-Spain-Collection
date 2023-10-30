function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    multiplier: 0.2,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locoScroll();

var t1 = gsap.timeline();

t1.to(".middle", {
  width: "100%",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page1-img-gallery",
    start: "top 0%",
    scrub: 1,
    // markers: true,
    pin: true,
    // pinSpacing: false,
  },
});

t1.from(".gallery-text", {
  top: "150%",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page1-img-gallery",
    start: "top top",
    end: "top -100%",
    scrub: 1,
    // markers: true,
  },
});

t1.to(".left-last", {
  left: "-38%",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page1-img-gallery",
    start: "top top",
    end: "top -100%",
    scrub: 1,
    // markers: true,
  },
});

t1.to(".right-last", {
  right: "-38%",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page1-img-gallery",
    start: "top top",
    end: "top -100%",
    scrub: 1,
    // markers: true,
  },
});

t1.to(".middle-left", {
  left: "-28%",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page1-img-gallery",
    start: "top top",
    end: "top -100%",
    scrub: 1,
    // markers: true,
  },
});

t1.to(".middle-right", {
  right: "-28%",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page1-img-gallery",
    start: "top top",
    end: "top -100%",
    scrub: 1,
    // markers: true,
  },
});

Shery.mouseFollower();

Shery.makeMagnet(".magnet" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

var play = document.querySelector(".page2-video>i");
var thumnail = document.querySelector(".page2-video > img");

let video = document.querySelector(".page2-video>video");

play.addEventListener("click", () => {
  play.style.opacity = "0";
  thumnail.style.zIndex = "-1";
  video.play();
});

video.addEventListener("click", () => {
  play.style.opacity = "1";
  thumnail.style.zIndex = "9";
  vid.pause();
});
