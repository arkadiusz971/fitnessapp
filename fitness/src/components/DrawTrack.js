import { polyline } from "leaflet"
import React, { useEffect, useState } from "react"
import { Polyline, useMap } from "react-leaflet"


const DrawTrack = () => {
    // const positions = [
    //     [50.062690, 19.936892],
    //     [50.062638, 19.936823],
    //     [50.062579, 19.936769],
    //     [50.062507, 19.936715],
    //     [50.062424, 19.936672],
    //     [50.062317, 19.936570],
    //     [50.062193, 19.936473],
    //     [50.062100, 19.936382],
    //     [50.062038, 19.936334],
    //     [50.062072, 19.936168],
    //     [50.062137, 19.936023],
    //     [50.062230, 19.935739],
    //     [50.062289, 19.935583],
    //     [50.062404, 19.935266],
    //     [50.062518, 19.935002],
    // ]

    //const [positions, setPositions] = useState([])
    const map = useMap()
    const positions = []
    const updatePolyline = () => {
        map.locate({
            watch: true
        }).on("locationfound", e => {
            //setPositions(oldArray => [...oldArray, e.latlng])
            // if (positions[positions.length-1] !== e.latlng )
            // {
                positions.push(e.latlng)
            // }
            map.addLayer(polyline(positions))
            map.setView(e.latlng, 18)
            console.log(positions)            
        }).once("locationerror", () => alert("Location polyline error"))
        
    }

    useEffect(updatePolyline)

    return (
        null
    )
}

export default DrawTrack