import { gsap } from "gsap";
import {scroll} from "./scroll/scroll"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {cursor} from "./cursor/cursorB";
gsap.registerPlugin(ScrollTrigger);

scroll();
/*
document.addEventListener("scroll" ,(eveS)=> {
    const select = document.querySelector(".section");
    console.log(window.scrollY);
    console.log(eveS);
    //lement.style.height = `${element.scrollHeight}px`;
    //const color = 
    })
    */
   //let mousePosition = {x = 0 , y = 0}
   /*
    document.addEventListener("mousemove" ,(eveM)=> {
        const select = document.querySelector(".section");
        
        console.log(window.scrollY);
        console.log(eveM);
        //lement.style.height = `${element.scrollHeight}px`;
        //const color = 
        })
        */