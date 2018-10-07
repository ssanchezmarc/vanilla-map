import { Component } from "../common/Component";
import { Map } from "../components/Map";
import { Sidebar } from "./Sidebar";

export class Home extends Component {
  constructor() {
    super();

    this.state = {
      sidebar: new Sidebar({
        onAction: action => this.reflectOnMap(action)
      }),
      map: new Map()
    };
  }

  render() {
    return `<div class="l-home__container">
              <div class="m-menu">
              </div>
              <div class="m-sidebar">
                ${this.state.sidebar.render()}
              </div>
              <div class="l-home__main">
                <div id="map" class="map" />
              </div>
            </div>`;
  }

  reflectOnMap({ target, value }) {
    this.state.map.changeMarkerStyle({ property: target, value });
  }
}
