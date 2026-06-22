import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl:
  'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
export function MapSection() {
  // Approximate coordinates for Glaudina, Harare. TODO: replace with the school's exact pin.
  const position: [number, number] = [-17.864, 30.951];
  return (
    <section className="h-[500px] w-full bg-stone relative z-0">
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        className="w-full h-full">
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        
        <Marker position={position} icon={markerIcon}>
          <Popup>
            <div className="font-serif text-forestGreen">
              <strong>Crystal Trust School</strong>
              <br />
              544 Glaudina, Harare
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </section>);

}