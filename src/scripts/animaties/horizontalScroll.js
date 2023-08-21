import {
    gsap
} from 'gsap';
import {
    ScrollTrigger
} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const horizontaleScroll = () => {
    //const paintElement = document.getElementById("moving-elements");
    const dragParent = document.getElementById("movie-scroll");
    console.log(dragParent)
    const dragLine = dragParent.querySelector(".line");

    const colors = {
        0: '#f8f6f1',
        15: '#082b9d',
        27: '#a2543d',
        45: '#f7d1ba',
        60: '#975e1a',
        80: '#e7b46c',
        100: '#43503f',
        
    }

    gsap.to(dragLine, {
        x: -window.innerWidth - 100,
        stagger: 0.5,
        //duration: 2,
        scrollTrigger: {
            trigger: dragParent,
            start: 'top 5%',
            end: "bottom 100px",
            pin: dragParent,
            scrub: true,
            pinSpacing: true,
            

            onUpdate: ({
                progress
            }) => {
                const progressValue = parseFloat(progress.toFixed(2)) * 100; // 0 - 100

                const colorsValue = Object.keys(colors).reduce((prev, curr) => Math.abs(curr - progressValue) < Math.abs(prev - progressValue) ? curr : prev);

                dragParent.style.backgroundColor = colors[colorsValue];
            }
        }
    });
}

export default horizontaleScroll;