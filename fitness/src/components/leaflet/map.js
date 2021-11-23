import React, { useEffect } from 'react'
import L from "leaflet";

const LeafletMap = () => {

    useEffect(() => {
        let current_lat = 48.194753;
        let current_long = 7.336727;
        let current_zoom = 16;
        let center_lat = current_lat;
        let center_long = current_long;
        let center_zoom = current_zoom;

        let map = L.map('map', {
            center: [center_lat, center_long],
            zoom: center_zoom
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    })

    return (
        <div id="map">

        </div>
    )
}
export default LeafletMap