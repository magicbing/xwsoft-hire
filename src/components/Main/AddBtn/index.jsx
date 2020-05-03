import React from 'react'
import add from './images/add.png'
import './index.scss'

function AddBtn(props) {
  const addBtn = function() {
    props.switchMapShow()
  }

  return (
    <div className="AddBtn" onClick={addBtn}>
      <img className="img" src={add} alt="images"/>
    </div>
  )
}

export default AddBtn
