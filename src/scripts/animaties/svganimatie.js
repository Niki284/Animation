import { gsap } from 'gsap';
import {ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scaleSvgAnimatie = () => {
  //const $scroleSvgcontine = document.querySelector('[data-animation="containerSvg"]');
  const $scroleSvgScale = document.querySelector('#scroll--svg');

    const circels = document.querySelectorAll('[data-animation="circel"]')
    gsap.set(circels, {scale:0.25, opacity:0})
    gsap.to(circels,{
      y:-10,
      opacity:1,
      stagger:0.5,
        scale:1,
        duration:1,
       scrollTrigger: {
        trigger: $scroleSvgScale,
        start: "top 60%", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom", // end after scrolling 500px beyond the start
        toggleActions: "restart",
        //markers:true,
        
        },
    })

   /* 
  let tl = gsap.timeline({
        // yes, we can add it to an entire timeline! 
          y:-20,
          duration:2,
          opacity:0,
        scrollTrigger: {
         
          trigger: $scroleSvgcontine,
          pin: true,   // pin the trigger element while active
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "bottom bottom", // end after scrolling 500px beyond the start
          toggleActions: "play reverse",
          markers:true,
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.25, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.in" // the ease of the snap animation ("power3" by default)
          },
        }
      });
    // add animations and labels to the timeline
    tl.addLabel("start")
    .from($scroleSvgcontine, {y: 10,opacity:1 , duration:1, opacity:1})
    .from(".flex__block--text", { y: 10,opacity:0, duration:2})
    .to($scroleSvgScale, {y: 10,x:30, scale: 1.5, duration:3 , opacity:1})
    .addLabel("end");
*/

};

export default scaleSvgAnimatie;