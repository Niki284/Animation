import {
  gsap
} from "gsap";
import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scrollLottiePin = () => {
  const $scroleLolg = document.querySelectorAll('[data-animation="containerS"]')
  const $scroleLolgChild = document.querySelector('#scroll--lottie');

  let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!

    scrollTrigger: {
      toggleActions: "play pause ",
      trigger: $scroleLolg,
      pin: $scroleLolgChild, // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "bottom 33%", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: {
          min: 0.2,
          max: 3
        }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.25, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "power1.in" // the ease of the snap animation ("power3" by default)
      },
      //markers: true,
    }
  });

  tl.addLabel("start")
    .from($scroleLolgChild, {
      duration: 2
    })
    .addLabel("end");
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