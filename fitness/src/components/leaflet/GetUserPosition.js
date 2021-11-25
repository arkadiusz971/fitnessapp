import React, { useState, useEffect } from 'react'
import { Marker, useMap } from 'react-leaflet'


const GetUserPosition = () => {
  const [userPosition, setPosition] = useState(null)
  let map = useMap()

  useEffect(() => {
    map.locate().once("locationfound", e => {
      setPosition(e.latlng)
      map.setView(e.latlng, 18)
    }).once("locationerror", () => alert("Location error"))
  }, [map])

  return userPosition === null ? null : (
    <Marker position={userPosition} className="currentPosition">
    </Marker>
  )
}

export default GetUserPosition