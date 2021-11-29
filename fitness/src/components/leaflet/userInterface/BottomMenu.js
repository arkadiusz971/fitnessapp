import React from "react"
import InitializeTracking from "./InitializeTracking"

const BottomMenu = () => {

    const handleRecordWorkout = () => {
        InitializeTracking()
    }

    return (
        <div className="bottomMenu">
            <button onClick={handleRecordWorkout}>Record</button>
            <button>Stop</button>
        </div>
    )
}

export default BottomMenu