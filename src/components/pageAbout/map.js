import React, { PureComponent } from "react"
import Map from "pigeon-maps"
import Marker from "pigeon-marker"

const getProvider = (x, y, z) =>
  `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}.png`

class PigeonMaps extends PureComponent {
  onMarkerClick(evt) {
    console.log(evt.payload)
  }
  mapConfig = {
    center: [49.830027, 24.023694],

    zoom: 16,
  }
  markers = [
    {
      name: "Frezier",
      latlng: [49.830027, 24.023694],
    },
  ]

  render() {
    // create an array with marker components
    const PigeonMarkers = this.markers.map(marker => (
      <Marker
        key={`marker_${marker.name}`}
        anchor={marker.latlng}
        payload={marker.name}
        onClick={this.onMarkerClick}
      />
    ))

    return (
      <div className="container map">
        <Map
          //   width={window.innerWidth}
          height={300}
          defaultCenter={this.mapConfig.center}
          defaultZoom={this.mapConfig.zoom}
          provider={getProvider}
          metaWheelZoom={true}
        >
          {PigeonMarkers}
        </Map>
      </div>
    )
  }
}

export default PigeonMaps
