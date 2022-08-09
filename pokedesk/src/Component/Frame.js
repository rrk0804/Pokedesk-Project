import React from 'react';
import '../Style/Frame.css'

class Frame extends React.Component {
    render () {
        return (
          <div id="frame">
            <div id='caption'>{this.props.PokeName}</div>
            <img id="front" alt="Front-facing" src={this.props.link}></img>
          </div>
        );
    }
}


export default Frame;