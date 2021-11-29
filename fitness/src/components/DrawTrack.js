import { polyline } from "leaflet"
import { useEffect } from "react"
import {useMap } from "react-leaflet"


const DrawTrack = (props) => {

    const map = useMap()

    const positions = [{ lat: 50.062690, lng: 19.936892 }]

    const updatePolyline = () => {
        map.locate({
            watch: true,
            enableHighAccuracy: true
        }).on("locationfound", e => {

            if (positions[positions.length - 1].lat !== e.latlng.lat && positions[positions.length - 1].lng !== e.latlng.lng) {
                positions.push(e.latlng)
                map.addLayer(polyline(positions))
                map.setView(e.latlng, 18)
            }
        }).once("locationerror", () => alert("GPS error occured..."))
    }

    useEffect(updatePolyline)

    return (
        null
    )
}

export default DrawTrack