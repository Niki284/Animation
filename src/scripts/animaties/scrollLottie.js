import {
  gsap,
  Circ
} from "gsap";
import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scrollLottiePin = () => {
  const $scroleLolg = document.querySelectorAll('[data-animation="containerS"]')
  const $scroleLolgChild = document.querySelector('#scroll--lottie');

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $scroleLolg,
      pin: $scroleLolgChild,
      start: "top top",
      end: "bottom 72%",
      scrub: 1,
      markers: true,
      onUpdate: self => {
        // Calculate the scroll distance
        const scrollDistance = self.progress * (self.end - self.start);
        // Calculate the "weight" based on the scroll distance
        const weight = 1 - Math.min(scrollDistance / (self.end - self.start), 1);
        // Calculate the timeScale based on the weight
        const timeScale = 1 + weight * 1; // Adjust the multiplier as needed
        // Update the animation's timeScale
        self.animation.timeScale(timeScale);
      }
    }
  });

  tl.to($scroleLolgChild, {
    y: '100%',
    duration: 2,
    ease: Circ.easeOut
  });

  // tl.addLabel("start")
  //   .from($scroleLolgChild, {
  //     duration: 2
  //   })
  //   .addLabel("end");
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