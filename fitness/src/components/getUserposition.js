import React, {useState} from 'react'

const GetUserPosition = () => {
    const [userPosition, setPosition] = useState({
        altitude: null,
        latitude: null,
        longitude: null
    })

    const locatingSuccess = (pos) => {
        setPosition({
            altitude: pos.coords.altitude,
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
        })
    }
    const locatingError = (err) => {
      alert(err.message);
    }
    const locatingOptions = {
      maximumAge: 0,
      timeout: Infinity,
      enableHighAccuracy: true
    }

    const getPosition = () => navigator.geolocation.getCurrentPosition(locatingSuccess, locatingError, locatingOptions)
  
    return (
      <div className="App">
        <button onClick={getPosition}>Start</button>
        <p>User altitude {userPosition.altitude}</p>
        <p>User latitude {userPosition.latitude}</p>
        <p>User longitude {userPosition.longitude}</p>
      </div>
    )
}

export default(GetUserPosition)