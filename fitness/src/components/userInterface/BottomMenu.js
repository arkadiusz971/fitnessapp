import { polyline } from "leaflet"
import React from "react"
import DrawTrack from "../DrawTrack"
import { GetLastPosition } from "../leaflet/GetUserPosition"


const BottomMenu = (props) => {
    const map = props.map()
    const draw = DrawTrack
    const lastPos = GetLastPosition
    const samplePositions = [
        [51.505, -0.09],
        [49.51, 20.1],
        [45.51, 3.12],
        [40.51, -0.12]
    ]
    const handleRecordWorkout = () => {
        map.addLayer(polyline(samplePositions))
        draw(map)
        console.log(lastPos())

    }

    return (
        <div className="bottomMenu">
            <button onClick={handleRecordWorkout}>Start recording</button>
            <button>Stop recording</button>
        </div>
    )
}

export default BottomMenu