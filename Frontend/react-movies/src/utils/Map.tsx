import { MapContainer, TileLayer, Marker, useMapEvent } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import coordinateDTO from "./coordinates.model";
import { useState } from "react";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props: mapProps) {
  const [coordinates, setCoordinates] = useState<coordinateDTO[]>(
    props.coordinates
  );
  return (
    <MapContainer
      center={[-0.39817263609788217, 36.96016512764522]}
      zoom={14}
      style={{ height: props.height }}
    >
      <TileLayer
        attribution="react-movies"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClick
        setCoordinates={(coordinates) => {
          setCoordinates([coordinates]);
          props.handleMapClicK(coordinates);
        }}
      />
      {coordinates.map((coordinate, index) => (
        <Marker key={index} position={[coordinate.lat, coordinate.lng]} />
      ))}
    </MapContainer>
  );
}

interface mapProps {
  height: string;
  coordinates: coordinateDTO[];
  handleMapClicK(coordinates: coordinateDTO): void;
}

Map.defaultProps = {
  height: "500px",
};

function MapClick(props: mapClickProps) {
  useMapEvent("click", (eventArgs) => {
    props.setCoordinates({
      lat: eventArgs.latlng.lat,
      lng: eventArgs.latlng.lng,
    });
  });
  return null;
}

interface mapClickProps {
  setCoordinates(coordinates: coordinateDTO): void;
}
