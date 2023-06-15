import { gsap } from 'gsap';
 import fadeElements from './animations/fade';
import showWelcome from './animations/welcome';
import horizontaleScroll from './animations/pin';

import "./cursor/cursor"
import "./cursor/hover"
import scrollPin from './scrollB/scrolltop';
import scrollPin2n from './scrollB/scroll2';
import scrollPinLogo from './scrollB/scrollLogo';
import scrollPinTitle from './scrollB/stagerTitle';


const afterWelcome = () => {
    horizontaleScroll();
    scrollPin();
    scrollPin2n();
    scrollPinLogo();
    scrollPinTitle();
    fadeElements();
}

showWelcome(afterWelcome);
