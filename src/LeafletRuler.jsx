import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "./leaflet-ruler.css";
import "./leaflet-ruler";

export default function LeafletRuler() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    L.control.measure().addTo(map);
  }, [map]);

  return null;
}
