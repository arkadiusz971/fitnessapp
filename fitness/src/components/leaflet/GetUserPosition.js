import React, { useState, useEffect } from 'react'
import { Marker, useMap } from 'react-leaflet'

const GetUserPosition = () => {
  const [userPosition, setPosition] = useState(null)
  const map = useMap()

  useEffect(() => {
    map.locate().on('locationfound', e => {
      setPosition(e.latlng)
      map.setView(e.latlng, 15)
      map.stopLocate()
    })
  })
  
  return userPosition === null ? null : (
    <Marker position={userPosition}>
    </Marker>
  )
}

export default GetUserPosition