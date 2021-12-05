import { polyline } from "leaflet"
import { WatchUserPosition } from "./leaflet/GetUserPosition"

const DrawTrack = (map) => {
    let positions = []
    let userPosition = WatchUserPosition(map)

    const drawPolyline = () => {
        map.addLayer(polyline(positions))
    }

    setInterval(() => {
        if (userPosition.length !== 0) {
            console.log(userPosition[0])
            positions.push(userPosition[0])
            drawPolyline()
        }
    }, 500)

    return positions[0]
}

export default DrawTrack