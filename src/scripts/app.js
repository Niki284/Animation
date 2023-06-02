import { gsap } from "gsap";
import './scroll/scroll2';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {cursor} from "./cursor/cursorB";
import pinElements from "./scroll/pin";
import showWelcome from "./loading/loading";
gsap.registerPlugin(ScrollTrigger);

//scroll();
const afterWelcome = () => {
    pinElements();
}

showWelcome(afterWelcome);