import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import GetUserPosition from './GetUserPosition'

const LeafletMap = () => {
    return (
        <MapContainer center={[49, 2]} zoom={5} scrollWheelZoom={true}>
            <GetUserPosition />


            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}
export default LeafletMap