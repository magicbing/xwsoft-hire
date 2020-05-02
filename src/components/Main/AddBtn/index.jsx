import React from 'react'
import add from './images/add.png'
import './index.scss'

function AddBtn() {
  return (
    <div className="AddBtn">
      <img className="img" src={add} alt="images"/>
    </div>
  )
}

export default AddBtn
