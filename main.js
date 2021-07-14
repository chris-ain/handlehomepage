


const pageContainer = document.querySelector(".smooth-scroll");

/* SMOOTH SCROLL */

    // handle smooth scroll and update planes positions
    const scroller = new LocomotiveScroll({
        el: document.getElementById('smooth-scroll'),
        smooth: true,
        inertia: 0.5,
        passive: true,
    });


scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

////////////////////////////////////
////////////////////////////////////

window.addEventListener("load", function () {
 
  // Pinning and horizontal scrolling


  const linie = gsap.timeline({
	scrollTrigger: {
		trigger: ".line_spacer",


		scroller: pageContainer,
		start: "bottom bottom",

    end: "+=100%"
		
	}
});

linie.from(".line_spacer", {
    scaleX: 0, duration: .5, 	ease: "power3.out", 
});

linie.from("#text_spacer", {
    opacity: 0 , duration: .5, 	ease: "power3.out", 
});

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".sec-img",
		scrub: .1,
		scroller: pageContainer,
		pin: true,
		start: "center center",
	      rotZ: 10,
    end: "+=100%"
		
	}
});




// const heatleistung = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: ".in_infos_leistung",
// 		scroller: pageContainer,
// 		start: "bottom bottom",

//         scrub: 1,
//     end: "-=800%"
		
// 	}
// });

// heatleistung.from(".in_infos_leistung", {
// y: 100, duration: 3, 	stagger: .1, opacity: 0, 
// });
// heatleistung.from(".button_blau", {
//   y: 100, duration: 3, 	stagger: .1, opacity: 0, 
//   });




// tl.to(".mask", {
// 		scaleY: 0
// 	});
	
// 	tl.from(
// 		".img",
// 		{
// 			opacity: 0,
// 			scale: 1.7
// 		},
// 		0
// 	);
  
gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".text_rev").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    scroller: pageContainer,
    
    start: "top 90%",
    end: "bottom 0%",
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,

          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,

          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});


gsap.to(".panel", {
	scaleY: 0,
	duration: 1.65,
  delay:1,
	ease: "power4.inOut"
});

gsap.from(".text_intro", {
	scrollTrigger: {
		trigger: ".big_head_wrapper", 
		delay: 2,
		// markers: true,
		start: "top center",
		scroller: pageContainer,
		toggleActions: "play none none reverse"
	},
	opacity: 0,
	y: 50,
	duration: 1,
	ease: "power3.out",
  stagger:.15,
});

gsap.from(".white_span", {
	scrollTrigger: {
		trigger: ".big_head_wrapper",
		// markers: true,
		start: "top center",
		scroller: pageContainer,
		toggleActions: "play none none reverse"
	},
	opacity: 0,
	y: 50,
	duration: 1,
	ease: "power3.out",
  stagger:.15,
});







  // /* COLOR CHANGER */

  // const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
  // scrollColorElems.forEach((colorSection, i) => {
  //   const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
  //   const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

  //   ScrollTrigger.create({
  //     trigger: colorSection,
	// 	scroller: pageContainer,
  //     start: "top 50%",
  //     onEnter: () =>
  //       gsap.to("body", {
  //         backgroundColor: colorSection.dataset.bgcolor,
  //         color: colorSection.dataset.textcolor,
  //         overwrite: "auto"
  //       }),
  //     onLeaveBack: () =>
  //       gsap.to("body", {
  //         backgroundColor: prevBg,
  //         color: prevText,
  //         overwrite: "auto"
  //       })
  //   });
  // });
  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
  ScrollTrigger.refresh();

  function lerp (start, end, amt){
    return (1 - amt) * start + amt * end *.5;
}



});
