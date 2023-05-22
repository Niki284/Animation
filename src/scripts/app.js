import { gsap } from "gsap";
import {scroll} from "./scroll/scroll"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

scroll();