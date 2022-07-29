import React from 'react';
import '../Style/Card.css'

class Card extends React.Component {
    render () {
         return (
            <div id="info">
                Name: {this.props.PokeName}
                <br></br>
                Height: {this.props.height}
                <br></br>
                Weight: {this.props.weight}
            </div>
        );
    }
}


export default Card;