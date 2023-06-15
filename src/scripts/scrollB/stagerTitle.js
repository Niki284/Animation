import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const scrollPinTitle = () => {
    
    
        const $scroleMar = document.querySelector("[data-animation='columne']")
        const $scroleMarChild = $scroleMar.querySelectorAll("[data-animation='itemeTitle']")
    
        
        $scroleMarChild.forEach(($Idem1, index) => {
            gsap.set($Idem1, {opacity: 0});

            gsap.to($Idem1, {
                y: 25,
                opacity: 1,
                stagger: .2,
                scrollTrigger: {
                    trigger: $Idem1,
                    start: "bottom bottom",
                    end: "bottom top",
                    ease: ".5s",
                    toggleActions: "play reverse ",
                    // once: true,
                    //markers: true
            }});
            
        });
           
}
export default scrollPinTitle;

