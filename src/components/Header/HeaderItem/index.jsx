import React from 'react'
import './index.scss'

function HeaderItem(props) {
  return (
    <div className="HeaderItem">
      {/* image + numtag */}
      <div className="img-div">
        <img className="img" src={props.img} alt="images"/>
        {props.numtag && <div className="numtag">
          {props.numtag}
        </div>}
      </div>
      {/* desc */}
      <div className="desc">
        {props.desc}
      </div>
    </div>
  )
}

export default HeaderItem
