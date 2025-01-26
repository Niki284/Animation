import { gsap } from 'gsap';

import "./cursor/cursor"
import "./cursor/hover"
import showWelcome from './animaties/welcome';
import { cursorBol } from './cursor/cursor';
import scrollVertikal from './animaties/scrollVertical';
import scaleSvgAnimatie from './animaties/svganimatie';
import scrollLogo from './animaties/scrollLogo';
import horizontaleScroll from './animaties/horizontalScroll';
import testScroll from './animaties/testScroll';
//import scrollLottiePin from './animaties/scrollLottie';


const afterWelcome = () => {
    cursorBol();
    scrollVertikal();
    horizontaleScroll();
    scaleSvgAnimatie();
    scrollLogo();
    testScroll();
   // scrollLottiePin();
}

showWelcome(afterWelcome);

