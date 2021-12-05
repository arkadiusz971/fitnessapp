const userPosition = []

export const WatchUserPosition = (map) => {
  map.locate({
    watch: true,
    enableHighAccuracy: true
  }).on("locationfound", e => {
    if (!userPosition.length) {
      userPosition[0] = e.latlng
    }
    if (userPosition[userPosition.length - 1].lat !== e.latlng.lat && userPosition[userPosition.length - 1].lng !== e.latlng.lng) {
      userPosition[0] = e.latlng
    }
  }).on("locationerror", () => console.error("GPS error occured..."))

  return userPosition
}

export const GetLastPosition = () => {
  if(userPosition[0]===undefined){

  }
}
