import React from 'react'
import '../Style/DeviceStyle.css'
import Card from './Card'
import Frame from './Frame'
import ArrowUp from '../img/ArrowUpNoBack.png'
import ArrowDown from '../img/ArrowDownNoBack.png'

class Device extends React.Component {
    constructor(props) {
        super(props)

    }

    render () {
        // Type your code here...

        // Return some JSX here...
        return (
          <div id="device">
            <Frame/>
            <Card/>
            <img src={ArrowUp} alt="arrow up" id="up"></img>
            <img src={ArrowDown} alt="arrow down" id="down"></img>
          </div>
        );
    }
}


export default Device;