import { Component } from "../common/Component";

export class Map extends Component {
  render() {
    return `<div id="map" class="map main" />`;
  }

  changeMarkerStyle({ property, value }) {
    const elements = document.getElementsByClassName("marker");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style[property] = value;
    }
  }
}
