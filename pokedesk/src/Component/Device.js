import React from 'react'
import '../Style/DeviceStyle.css'
import Card from './Card'
import Frame from './Frame'
import ArrowUp from '../img/ArrowUpNoBack.png'
import ArrowDown from '../img/ArrowDownNoBack.png'

class Device extends React.Component {
    constructor(props) {
        super(props)
        this.getAPIData = this.getAPIData.bind(this);
        this.state = {pokemon: {},
                      IsFetched: 0,
                      };
    }

    async getAPIData() {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
      const response = await fetch(url); 
      const responseJSON = await response.json();
      this.setState(
        {
            pokemon: responseJSON,
            IsFetched: 1
        }
      );
    }

    componentDidMount() {
       this.getAPIData();
    }

    render () {
      if (this.state.IsFetched)
      {
        return (
          <div id="device">
            <Frame/>
            <Card items={this.state.pokemon}></Card>
            <img src={ArrowUp} alt="arrow up" id="up"></img>
            <img src={ArrowDown} alt="arrow down" id="down"></img>
          </div>
        );
      }
    }
}

export default Device;