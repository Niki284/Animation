import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const scrollPinLogo = () => {
    const $scroleLolg = document.querySelectorAll('[data-animation="container"]')

    $scroleLolg.forEach(el1 => {
        const $scroleLolgChild = el1.querySelector('#scroll--logo');

        console.log($scroleLolgChild);
        gsap.from($scroleLolgChild, {
             scrollTrigger: {
                trigger: $scroleLolg,
                toggleActions: "play pause play ",
                pin: $scroleLolgChild,
                start: "top 10%",
                scrub :true,
                end: "bottom 55%",
                ease: "none",
                duration:2,
                //markers:true,
        }}); 
    })  
}

export default scrollPinLogo;