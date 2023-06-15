import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export const scrollPin = () => {
    
    
        const $scroleMar = document.querySelectorAll("[data-animation='column']")
        const $scroleMarChild = document.querySelectorAll("[data-animation='iteme']")
    
        $scroleMarChild.forEach(($Idem1, index) => {
            gsap.set($Idem1, {opacity: 0});

            gsap.to($Idem1, {
                y: -25,
                opacity: 1,
                scrollTrigger: {
                    trigger: $Idem1,
                    start: "top 10%",   
                    end: "bottom top",
                    ease: ".5s",
                    toggleActions: "play reverse",
                    /*once: true,
                    markers: true
                    */
            }});
            
        });
 
    
}
export default scrollPin;