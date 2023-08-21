function locoScroll() {
	gsap.registerPlugin(ScrollTrigger);


	const locoScroll = new LocomotiveScroll({
		el: document.querySelector('#wrraper'),
		smooth: true,
	});
	locoScroll.on('scroll', ScrollTrigger.update);

	ScrollTrigger.scrollerProxy('#wrraper', {
		scrollTop(value) {
			return arguments.length
				? locoScroll.scrollTo(value, 0, 0)
				: locoScroll.scroll.instance.scroll.y;
		}, 
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight,
			};
		},
		pinType: document.querySelector('#wrraper').style.transform
			? 'transform'
			: 'fixed',
	});

	ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

	ScrollTrigger.refresh();
}
locoScroll();

// gsap-scrolltrigger
var ld = gsap.timeline();
// ----section1------
ld.to(".nav", {
	y: 5,
	x: 5,
	opacity: 1,
	duration: 1,
})
ld.to(".content h1, .content p", {
	y: -15,
	opacity: 1,
	duration: 1,
	stagger: 0.3,
})
ld.to(".content button", {
	opacity: 1,
	duration: 0.8,
	ease: Expo.ease
})

// const backgroundvideo = document.getElementById("video");

// ScrollTrigger.create({
// 	trigger: ".content",
// 	Start: "top top",
// 	endTrigger: "#wrraper",
// 	end: "bottom top",
// 	onUpdate: self => {
// 		const BlurAmount = (self.progress * 10).toFixed(1);
// 		backgroundvideo.style.filter = `blur(${BlurAmount}px)`;
// 	}
// })

// gsap-with-scrolltrigger 

gsap.to(".background-video #video", {
	scrollTrigger:{
		trigger: ".background-video",
		scroller: "#wrraper",
		scrub: true,
		start: "top -100%"
	},
	filter: "blur(10px)"
});

gsap.to(".sec2-left img",{
	scrollTrigger:{
		trigger: ".sec2-left",
		scroller: "#wrraper",
		scrub: 3,
		// markers: true,
		Start: "top 90%"
	},
	scale: 0.8,
})
gsap.to(".sec2-right h1, .sec2-right p ",{
	scrollTrigger:{
		trigger: ".sec2-right h1, .sec2-right p",
		scroller: "#wrraper",
		scrub: 4,
		markers: true,
		Start: "top 90%"
	},
	y: -30,
	stagger: 0.6,
	duration: 1,
	opacity: 1
})
gsap.to(".sec2-right button ",{
	scrollTrigger:{
		trigger: ".sec2-right button",
		scroller: "#wrraper",
		scrub: 4,
		markers: true,
		Start: "top 10%"
	},
	y: -15,
	duration: 1,
	opacity: 1
})

gsap.to(".sec4-left h2, .sec4-left p, .sec4-left button ",{
	scrollTrigger:{
		trigger: ".sec4-left h2, .sec4-left p, .sec4-left button",
		scroller: "#wrraper",
		scrub: 3,
		markers: true,
		Start: "top 100%"
	},
	x: 30,
	y: 20,
	stagger: 0.8,
	duration: 1,
	opacity: 1
})