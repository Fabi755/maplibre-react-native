<!-- DO NOT MODIFY! -->
<!-- This file is auto-generated from javascript/modules/snapshot/snapshotManager.ts -->
# `<MapLibreGL.snapshotManager />`
The snapshotManager generates static raster images of the map.<br/>Each snapshot image depicts a portion of a map defined by an SnapshotOptions object you provide.<br/>The snapshotter generates the snapshot asynchronous.


## Methods
### `takeSnap(options)`

Takes a snapshot of the base map using the provided Snapshot options. NOTE pitch, heading, zoomLevel only works when centerCoordinate is set!

#### Arguments
| Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| `options` | `SnapshotOptions` | `Yes` | Snapshot options for create a static image of the base map |



```javascript
// creates a temp file png of base map
const uri = await MapLibreGL.snapshotManager.takeSnap({
  centerCoordinate: [-74.126410, 40.797968],
  width: width,
  height: height,
  zoomLevel: 12,
  pitch: 30,
  heading: 20,
  styleURL: MapLibreGL.StyleURL.Default,
  writeToDisk: true, // Create a temporary file
});

// creates base64 png of base map without logo
const uri = await MapLibreGL.snapshotManager.takeSnap({
  centerCoordinate: [-74.126410, 40.797968],
  width: width,
  height: height,
  zoomLevel: 12,
  pitch: 30,
  heading: 20,
  styleURL: MapLibreGL.StyleURL.Default,
  withLogo: false, // Disable Mapbox logo (Android only)
});

// creates snapshot with bounds
const uri = await MapLibreGL.snapshotManager.takeSnap({
  bounds: [[-74.126410, 40.797968], [-74.143727, 40.772177]],
  width: width,
  height: height,
  styleURL: MapLibreGL.StyleURL.Default,
});
```



