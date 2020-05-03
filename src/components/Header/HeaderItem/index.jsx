import React, { useState } from 'react'
import NoticeList from '../NoticeList'
import './index.scss'

function HeaderItem(props) {
  const [noticeListShow, setnoticeListShow] = useState(false)
  const handleMouseUserOver = function() {
    setnoticeListShow(true)
  }

  const handleMouseOut = function() {
    setnoticeListShow(false)
    props.clearNumtag && props.clearNumtag()
  }

  return (
    <div
      className="HeaderItem"
      onMouseOver={handleMouseUserOver}
      onMouseLeave={handleMouseOut}
    >

      <div className="img-div">
        <img className="img" src={props.img} alt="images"/>
        {!!props.numtag && <div className="numtag">
          {props.numtag}
        </div>}
      </div>

      <div className="desc">
        {props.desc}
      </div>

      {props.noticeList && noticeListShow && <NoticeList />}
    </div>
  )
}

export default HeaderItem
