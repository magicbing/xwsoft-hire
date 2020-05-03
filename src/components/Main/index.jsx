import React, { useState } from 'react'
import AddBtn from './AddBtn'
import MapContainer from './MapContainer'
import './index.scss'

function Main() {
  const [mapShow, setMapShow] = useState(false)
  const switchMapShow = function() {
    setMapShow(!mapShow)
  }

  return (
    <div className="Main">
      {!mapShow && <AddBtn switchMapShow={switchMapShow} />}
      {mapShow && <MapContainer switchMapShow={switchMapShow} />}
    </div>
  )
}

export default Main
