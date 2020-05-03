import React, { useState } from 'react'
import HeaderItem from './HeaderItem'
import './index.scss'
import notice from './images/notice.png'
import avatar from './images/avatar.png'
import logout from './images/logout.png'

function Header() {
  const [numtag, setNumtag] = useState(1)
  const clearNumtag = function() {
    setNumtag(false)
  }
  return (
    <div className="Header">
      <HeaderItem img={notice} numtag={numtag} clearNumtag={clearNumtag} noticeList />
      <HeaderItem img={avatar} desc="Kris" />
      <HeaderItem img={logout} />
    </div>
  )
}

export default Header
