import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const scrollPin2n = () => {
    const $scroleMar = document.querySelectorAll("[data-animation='columnX2']")
    const $scroleMarChild = document.querySelectorAll("[data-animation='iteme2']")
   
    $scroleMarChild.forEach(($Idem1, index) => {
        gsap.set($Idem1, {opacity: 0});

        gsap.to($Idem1, {
            x: 15,
            opacity: 1,
             scrollTrigger: {
                trigger: $Idem1,
                start: "10% 10%",
                end: "bottom top",
                ease: ".5s",
                toggleActions: "play reverse",
                /*once: true,
                 markers: true
                 */
        }});
        
    });
}
export default scrollPin2n;