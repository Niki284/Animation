import {
  gsap,
  Circ
} from "gsap";
import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

console.log();
const scrollLottiePin = () => {
  const $scroleLolg = document.querySelectorAll('[data-animation="containerS"]')
  const $scroleLolgChild = document.querySelector('#scroll--lottie');


  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $scroleLolg,
      pin: $scroleLolgChild,
      start: "top top",
      end: "bottom 380px",
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

}

export default scrollLottiePin;