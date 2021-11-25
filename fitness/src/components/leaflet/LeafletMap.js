import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import teslaData from '../data/sampleData.json'
import GetUserPosition from './GetUserPosition'


const LeafletMap = () => {

  const filteredStations = teslaData.filter(tesla => tesla.address.country === "France")


    return (
        <div id="map">
            <MapContainer center={[49, 2]} zoom={5} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredStations.map(tesla => (
                    <Marker
                        key={tesla.id}
                        position={[tesla.gps.latitude, tesla.gps.longitude]}>

                        <Popup position={[tesla.gps.latitude, tesla.gps.longitude]}>
                            <div>
                                <p>{"Name: " + tesla.name}</p>
                                <p>{"Status: " + tesla.status}</p>
                                <p>{"Number of chargers: " + tesla.stallCount}</p>
                            </div>
                        </Popup>

                    </Marker>
                ))}
                <GetUserPosition />
            </MapContainer>
        </div>
    )
}
export default LeafletMap