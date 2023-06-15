import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const horizontaleScroll = () => {
    const $cards = document.querySelectorAll("[data-animation='pin']");

    $cards.forEach($carde => {
        const $overflowUlElement = $carde.querySelector("[data-child='pin']");
        const $listElements = $overflowUlElement.querySelectorAll("[data-child='inner-pin']");

        const scrollTween = gsap.to($overflowUlElement, {
            x: (window.innerWidth - $overflowUlElement.scrollWidth) - 150,
            //opacity: 1,
            stagger: .2,
            scrollTrigger: {
                trigger: $carde,
                start: 'top top',
                pin: $overflowUlElement,
                scrub: true,
                pinSpacing:true            }
        });
    });
}

export default horizontaleScroll;

/*
Testen voor background van color vervangen
export const testColorBackgound = () => {
    const $cards = document.querySelectorAll("[data-animation='pin-d']");
    $cards.forEach($carde => {
        const $overflowUlElement = $carde.querySelector("[data-child='pin-d']");
        const $listElements = $overflowUlElement.querySelectorAll("[data-child='inner-pin-d']");

        const scrollBetween = gsap.to($overflowUlElement, {
            x: (window.innerWidth - $overflowUlElement.scrollWidth) -150,
            scrollTrigger: {
                trigger: $carde,
                start: 'top top',
                pin: $carde,
                scrub: true
            }
        });
        $listElements.forEach($listElement => {
            const backColor = $listElements.dataset;
            ScrollTrigger.create({
                trigger: $listElement,
                containerAnimation: scrollBetween,
                start: "center 0",
                //onEnter: () => scaleElement($animateChild, scale),
                //onEnterBack: () => scaleElement($animateChild, scale),
                onLeave: () => {
                    gsap.to(backColor, {
                        scale: 1
                    });
                }
            });
        })
    })
}
*/