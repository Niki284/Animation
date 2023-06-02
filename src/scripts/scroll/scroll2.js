import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const $grid = document.querySelector("[data-animation='column']");
const $gridItems = $grid.querySelectorAll('h1');

$gridItems.forEach(($gridItem, index) => {
    gsap.set($gridItem, {opacity: 0});

    gsap.to($gridItem, {
        y: 10,
        opacity: 1,
         scrollTrigger: {
            trigger: $gridItem,
            start: "10% 10%",
             end: "bottom top",
            toggleActions: "play reverse play reverse",
            once: true,
             markers: true
    }});
})