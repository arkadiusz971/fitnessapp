import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import GetUserPosition from './GetUserPosition'
import DrawTrack from '../DrawTrack'

const LeafletMap = () => {
    return (
        <MapContainer center={[0, 0]} zoom={15} scrollWheelZoom={true}>
            <GetUserPosition />
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <DrawTrack />
        </MapContainer>
    )
}
export default LeafletMap