import eruda from "eruda";
import erudaDOM from "eruda-dom";
import erudaMemory from "eruda-memory";
import erudaFeatures from "eruda-features";
import erudaTouches from "eruda-touches";
import erudaFPS from "eruda-fps";
import erudaTiming from "eruda-timing";
import erudaBenchmark from "eruda-benchmark";
import erudaCode from "eruda-code";
import erudaGeolocation from "eruda-geolocation";
import erudaOrientation from "eruda-orientation";

eruda.init();

eruda.add(erudaDOM);
eruda.add(erudaMemory);
eruda.add(erudaFeatures);
eruda.add(erudaTouches);
eruda.add(erudaFPS);
eruda.add(erudaTiming);
eruda.add(erudaBenchmark);
eruda.add(erudaCode);
eruda.add(erudaGeolocation);
eruda.add(erudaOrientation);