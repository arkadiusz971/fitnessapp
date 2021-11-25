import React, { useState } from 'react'
import {Marker, Popup, useMapEvents } from 'react-leaflet'

const GetUserPosition = () => {
  const [userPosition, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, 15)
    }
  })

  return userPosition === null ? null : (
    <Marker position={userPosition} >
      <Popup>
        You are here
      </Popup>
    </Marker>
  )
}

export default GetUserPosition