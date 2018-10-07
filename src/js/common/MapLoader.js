import { airports } from "./api/api";

export class MapLoader {
  load() {
    this.map = L.map("map");

    this.init();
    this.defineEvents();
    this.populate();
  }

  init() {
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
      {
        id: "mapbox.streets"
      }
    ).addTo(this.map);
  }

  defineEvents() {
    const popup = L.popup();
    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(this.map);
    }
    this.map.on("click", onMapClick);
  }

  async populate() {
    const geojsonLayer = L.geoJSON(await airports(), {
      pointToLayer: function(_, latlng) {
        return L.marker(latlng, {
          icon: L.divIcon({
            className: "marker",
            iconSize: null,
            html: "<div></div>"
          })
        });
      }
    }).addTo(this.map);

    this.map.fitBounds(geojsonLayer.getBounds());
  }
}
