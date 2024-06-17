import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Address } from "../interfaces/Address";
import "leaflet/dist/leaflet.css";

interface Props {
  address: Address;
}
export default function Map({ address }: Props) {
  const latitude = Number(address.geo.lat);
  const longitude = Number(address.geo.lng);

  return (
    <div className="map-wrapper">
      <MapContainer center={[latitude, longitude]} zoom={12} className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          {address.city}, Street {address.street}
        </Popup>
      </Marker>
    </MapContainer>
    <p>{address.city}, Street: {address.street}, {address.suite}, Zipcode: {address.zipcode}</p>

    </div>
  );
}
