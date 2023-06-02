import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const pinElements = () => {
    const $triggers = document.querySelectorAll("[data-animation='pin']");

    $triggers.forEach($trigger  => {
        const $overflowElement = $trigger.querySelector("[data-child='pin']");
        const $innerElements = $overflowElement.querySelectorAll("[data-child='inner-pin']");
        //const $animateChild = $trigger.querySelector("[data-child='animate-child']");
       
        $innerElements.forEach(($trigger, index) => {
            gsap.set($trigger, { opacity: 0 });
        })

        const scrollTween = gsap.to($overflowElement, {
            x: (window.innerWidth - $overflowElement.scrollWidth) - 150,
            opacity: 1,
            scrollTrigger: {
                trigger: $trigger,
                start: 'top top',
                pin: $trigger,
                toggleActions: "play reverse play reverse ",
                scrub: true,
                once: true,
                markers: true
            }
        });

        
    });
}

export default pinElements;