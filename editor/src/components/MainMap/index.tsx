import "mapbox-gl/dist/mapbox-gl.css";
import { useRef } from "react";
import Map, {
  NavigationControl,
  useMap,
  Source,
  Layer,
  LineLayer,
  MapRef,
  MapboxMap,
} from "react-map-gl";

const aucklandRoadsLayer: LineLayer = {
  id: "auckland-roads-86q1sn",
  type: "line",
  source: "composite",
  "source-layer": "auckland_roads-86q1sn",
  minzoom: 12,
  layout: {},
  paint: {
    "line-width": ["interpolate", ["linear"], ["zoom"], 0, 1, 14, 1, 17, 5],
  },
};

export type OnFeatureClickCallback = (osmId: number) => void;

export default (props: { onFeatureClick?: OnFeatureClickCallback }) => {
  const handleMapClick = (event: any) => {
    const clickedFeatures =
      mapRef.current?.queryRenderedFeatures(event.point, {
        layers: ["auckland-roads-86q1sn"],
      }) ?? [];

    if (clickedFeatures.length) {
      const featureOsmId = clickedFeatures[0]?.properties?.osm_id.toString();
      props.onFeatureClick?.(featureOsmId);
    }
  };

  const mapRef = useRef<MapboxMap>();

  return (
    <Map
      id="mainMap"
      initialViewState={{
        longitude: +174.7621,
        latitude: -36.8484,
        zoom: 10,
      }}
      interactive
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="pk.eyJ1IjoibWFycmlja2xpcCIsImEiOiJjajFvcHUwazIwMGFhMzNxcmR0dzBzMDVxIn0.pvwooDgiDHPpPAiP1A0Lbw"
      onLoad={(e) => (mapRef.current = e.target)}
      onClick={(e) => handleMapClick(e)}
    >
      <NavigationControl />
      <Source type="vector" url="mapbox://marricklip.1yq0633b">
        <Layer {...aucklandRoadsLayer}></Layer>
      </Source>
    </Map>
  );
};
