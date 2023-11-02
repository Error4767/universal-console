import eruda from "eruda";
import erudaDOM from "eruda-dom";
import erudaFeatures from "eruda-features";
// import erudaTouches from "eruda-touches";
import erudaTiming from "eruda-timing";
import erudaBenchmark from "eruda-benchmark";
import erudaCode from "eruda-code";
import erudaGeolocation from "eruda-geolocation";
import erudaOrientation from "eruda-orientation";
import erudaMonitor from "eruda-monitor";

eruda.init();

eruda.add(erudaDOM);
eruda.add(erudaFeatures);
eruda.add(erudaTiming);
eruda.add(erudaBenchmark);
eruda.add(erudaCode);
eruda.add(erudaGeolocation);
eruda.add(erudaOrientation);
eruda.add(erudaMonitor);
// eruda.add(erudaTouches);