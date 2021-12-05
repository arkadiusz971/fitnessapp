import React, { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import BottomMenu from '../userInterface/BottomMenu'
const LeafletMap = () => {
    const [map, setMap] = useState(null)

    const sendMap = () => {
        return map === null ? null : map
    }

    return (
        <div>
            <MapContainer
                center={[0, 0]}
                zoom={2}
                scrollWheelZoom={true}
                whenCreated={setMap}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>

            <BottomMenu map={sendMap} />
        </div>

    )

}
export default LeafletMap