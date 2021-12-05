import React from 'react'
import LeafletMap from './components/leaflet/LeafletMap'
import BottomMenu from './components/userInterface/BottomMenu'
import './App.css'

function App() {
  return (
    <div className="App">
      <LeafletMap />
      {/* <BottomMenu /> */}
    </div>
  )
}

export default App