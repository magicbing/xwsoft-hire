import React from 'react'
import AddBtn from '../Main/AddBtn'
import MapContainer from '../Main/MapContainer'
import './index.scss'

function Hoc(WrappedComponent, WrappedC2) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.switchMapShow = this.switchMapShow.bind(this)
      this.state = {
        mapShow: false
      }
    }

    switchMapShow() {
      this.setState({mapShow: !this.state.mapShow})
    }
    
    render() {
      const { mapShow } = this.state
      return (
        <div className="Main">
          {!mapShow && <WrappedComponent switchMapShow={this.switchMapShow} />}
          {mapShow && <WrappedC2 switchMapShow={this.switchMapShow} />}
        </div>
      )
    }
  }
}

const Main = Hoc(AddBtn, MapContainer)

export default Main
