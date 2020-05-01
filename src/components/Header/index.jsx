import React from 'react'
import HeaderItem from './HeaderItem'
import './index.scss'
import notice from './images/notice.png'
import avatar from './images/avatar.png'
import logout from './images/logout.png'

function Header() {
  return (
    <div className="Header">
      <HeaderItem img={notice} numtag="1" />
      <HeaderItem img={avatar} desc="Kris" />
      <HeaderItem img={logout} />
    </div>
  )
}

export default Header
