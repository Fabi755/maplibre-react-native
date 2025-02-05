import MapLibreGL from "@maplibre/maplibre-react-native";
import { featureCollection, feature } from "@turf/helpers";
import React from "react";
import { Text } from "react-native";

import exampleIcon from "../../assets/example.png";
import sheet from "../../styles/sheet";
import Bubble from "../common/Bubble";
import Page from "../common/Page";

const styles = {
  icon: {
    iconImage: exampleIcon,
    iconAllowOverlap: true,
  },
};

class CustomIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      featureCollection: featureCollection([]),
    };

    this.onPress = this.onPress.bind(this);
    this.onSourceLayerPress = this.onSourceLayerPress.bind(this);
  }

  async onPress(e) {
    const aFeature = feature(e.geometry);
    aFeature.id = `${Date.now()}`;

    this.setState((prevState) => ({
      featureCollection: featureCollection([
        ...prevState.featureCollection.features,
        aFeature,
      ]),
    }));
  }

  onSourceLayerPress({ features, coordinates, point }) {
    console.log(
      "You pressed a layer here are your features:",
      features,
      coordinates,
      point,
    );
  }

  render() {
    return (
      <Page>
        <MapLibreGL.MapView
          ref={(c) => (this._map = c)}
          onPress={this.onPress}
          style={sheet.matchParent}
        >
          <MapLibreGL.Camera
            zoomLevel={9}
            centerCoordinate={[-73.970895, 40.723279]}
          />

          <MapLibreGL.ShapeSource
            id="symbolLocationSource"
            hitbox={{ width: 20, height: 20 }}
            onPress={this.onSourceLayerPress}
            shape={this.state.featureCollection}
          >
            <MapLibreGL.SymbolLayer
              id="symbolLocationSymbols"
              minZoomLevel={1}
              style={styles.icon}
            />
          </MapLibreGL.ShapeSource>
        </MapLibreGL.MapView>

        <Bubble>
          <Text>Tap to add an icon</Text>
        </Bubble>
      </Page>
    );
  }
}

export default CustomIcon;
