import { gsap } from "gsap";
import {scroll} from "./scroll/scroll"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {cursor} from "./cursor/cursorB";
import "./loading/loading";
gsap.registerPlugin(ScrollTrigger);

scroll();
