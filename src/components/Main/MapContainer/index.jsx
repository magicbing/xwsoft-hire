import React, { useEffect } from 'react'
import close from './images/close.png'
import './index.scss'

function MapContainer(props) {
  useEffect(() => {
    const { BMap } = window
    const map = new BMap.Map("allmap")
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
  }, [])

  const closeBtn = function() {
    props.switchMapShow()
  }

  const subbitBtn = function() {
    props.switchMapShow()
  }

  return (
    <div className="MapContainer">
      <div className="img-div" onClick={closeBtn}>
        <img className="img" src={close} alt="images"/>
      </div>

      <div id="allmap" style={{ position: "absolute", top: '5%', left: '5%', width: '90%', height: '75%' }}></div>

      <div className="btn-div">
        <div className="btn" onClick={subbitBtn}>
          提交
        </div>
      </div>
    </div>
  )
}

export default MapContainer
