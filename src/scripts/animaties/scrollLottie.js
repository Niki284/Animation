import {
  gsap
} from "gsap";
import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

console.log();
const scrollLottiePin = () => {
  const $scroleLolg = document.querySelectorAll('[data-animation="containerS"]')
  const $scroleLolgChild = document.querySelector('#scroll--lottie');



// create the smooth scroller FIRST!
 gsap.to($scroleLolg,{
//duration:2,
//stagger:1, 
//scrub:1,
  smooth: 0.8,
  speed:0.5,
  effects: true,
});
ScrollTrigger.create({
  trigger: $scroleLolg,
  pin: $scroleLolgChild,
  start: "top top",
  end: "bottom 40%",
  markers: true
});
}



// oudere version
/*
const scrollLottiePin = () => {
    const $scroleLolg = document.querySelectorAll('[data-animation="containerS"]')

    $scroleLolg.forEach(el1 => {
        const $scroleLolgChild = el1.querySelector('#scroll--lottie');

        console.log($scroleLolgChild);
        gsap.from($scroleLolgChild, {
             scrollTrigger: {
                trigger: $scroleLolg,
                toggleActions: "play pause play ",
                pin: $scroleLolgChild,
                start: "top 10%",
                scrub :true,
                end: "bottom 500px",
                ease: "none",
                markers:true,
                snap: {
                    duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                    delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                    ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
                  }
        }}); 
    })  
}
*/

export default scrollLottiePin;