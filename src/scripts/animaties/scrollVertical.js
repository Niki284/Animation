import { gsap } from "gsap";
import {ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const scrollVertikal = () => {
    //const $scroleSet = document.querySelectorAll("[data-animation='scrolUl']")
    const $scroleChild = document.querySelectorAll("[data-animation='itemeTitle']")
    const $scroleChild2 = document.querySelectorAll("[data-animation='itemeTitleLeft']")
    $scroleChild.forEach(($Idem1Child, index) => {
        gsap.set($Idem1Child, {opacity: 0});

        gsap.to($Idem1Child, {
            y: -15,
            duration:1.5,
            opacity: 1,
             scrollTrigger: {
                trigger: $Idem1Child,
                start: "top 10%",
                end: "bottom 300px",
                ease: ".5s",
                toggleActions: "play reverse restart reverse",
        }}); 
    });
     
    
    $scroleChild2.forEach(($Idem1Child2, index) => {
        gsap.set($Idem1Child2, {opacity: 0, x:-15});
        gsap.to($Idem1Child2, {
            x: 15,
            opacity: 1,
            stagger:1,
            scrollTrigger: {
                trigger: $Idem1Child2,
                start: "top 10%",
                end: "bottom 0%",
                ease: ".5s",
                toggleActions: "play reverse restart reverse",
                //markers: true,
                snap: {
                    snapTo: "labels", // snap to the closest label in the timeline
                    duration: {min: 0.5, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                    delay: 0.25, // wait 0.2 seconds from the last scroll event before doing the snapping
                    ease: "power1.in" // the ease of the snap animation ("power3" by default)
                }
                
        }});
    });
    
}
export default scrollVertikal;