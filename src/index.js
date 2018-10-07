import "@babel/polyfill";

import { MapLoader } from "./js/common/MapLoader";
import { Home } from "./js/containers/Home";

document.getElementById("app").innerHTML = new Home().render();

new MapLoader().load();
