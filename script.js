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

t1.to(".page3,.page2", {
  backgroundColor: "#fff",
  color: "#000",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3",
    start: "top 5%",
    end: "top -5%",
    scrub: 1,
    // markers: true,
  },
});

t1.to(".video-dets>h3,.video-dets>p", {
  color: "#000",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3",
    start: "top 5%",
    end: "top -5%",
    scrub: 1,
    // markers: true,
  },
});

t1.to(".scroller1-text", {
  transform: "translate(calc(25% + 4px))",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".scroller1-text",
    start: "top 100%",
    // end: "top -5%",
    scrub: 1,
    // markers: true,
  },
});

t1.to(".scroller2-text", {
  transform: "translate(calc(-25% - 4px))",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".scroller2-text",
    start: "top 100%",
    // end: "top -5%",
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

var videoContainer = document.querySelector(".page3-video-container");

var play1 = document.querySelector(".overlay>i");
var play2 = document.querySelector(".overlay2>i");
var play3 = document.querySelector(".overlay3>i");
let video1 = document.querySelector(".video1");
let video2 = document.querySelector(".video2");
let video3 = document.querySelector(".video3");
let videoPlayer = document.querySelector(".video-player");

var cut = document.querySelector(".close");

play1.addEventListener("click", () => {
  videoContainer.style.opacity = 0.3;
  cut.style.opacity = 1;

  video1.style.opacity = 1;
  video2.style.opacity = 0;
  video3.style.opacity = 0;

  video1.play();
  gsap.to(".video-player", {
    duration: 0.5,
    zIndex: "100",
  });
});

play2.addEventListener("click", () => {
  videoContainer.style.opacity = 0.3;
  cut.style.opacity = 1;

  video1.style.opacity = 0;
  video2.style.opacity = 1;
  video3.style.opacity = 0;

  video2.play();
  gsap.to(".video-player", {
    duration: 0.5,
    zIndex: "100",
  });
});

play3.addEventListener("click", () => {
  videoContainer.style.opacity = 0.3;
  cut.style.opacity = 1;

  video1.style.opacity = 0;
  video2.style.opacity = 0;
  video3.style.opacity = 1;

  video3.play();
  gsap.to(".video-player", {
    duration: 0.5,
    zIndex: "100",
  });
});

cut.addEventListener("click", () => {
  videoContainer.style.opacity = 1;
  cut.style.opacity = 0;

  gsap.to(".video-player", {
    duration: 0.5,
    zIndex: "-100",
  });
});
