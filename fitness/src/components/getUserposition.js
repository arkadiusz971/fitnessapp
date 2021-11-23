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
      <div></div>
    )
}

export default(GetUserPosition)