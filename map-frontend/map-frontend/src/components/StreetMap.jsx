import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

function StreetMap({ coordOne, coordTwo }) {
    console.log(coordOne)
    const position = [51.505, -0.09] //[coordOne, coordTwo] ; Coordinates for London
    const zoom = 13; // Zoom level

    return (
        <div className="App">

            <MapContainer center={position} zoom={zoom} style={{ height: "100vh", width: "100%" }}>
                {/* TileLayer with OpenStreetMap tiles */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Marker with Popup */}
                <Marker position={position}>
                    <Popup>
                        <b>Hello world!</b><br />I am a popup.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default StreetMap