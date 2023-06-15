import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const scrollPinLogo = () => {
    const $scroleLolg = document.querySelectorAll('[data-animation="pin-logo"]')

    $scroleLolg.forEach(el1 => {
        const $scroleLolgChild = el1.querySelectorAll('[data-child="pin-logo"]');
        console.log($scroleLolgChild);
        gsap.to($scroleLolgChild, {
             scrollTrigger: {
                trigger: $scroleLolg,
                pin: $scroleLolgChild,
                start: "top top",
                scrub :true,
                end: "bottom top",
                ease: "none",
        }}); 
    })
        
}
export default scrollPinLogo;