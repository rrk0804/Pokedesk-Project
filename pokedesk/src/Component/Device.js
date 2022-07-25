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
                      position: Math.floor(Math.random() * 300)
                      };
    }

    async getAPIData() {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=300&offset=0";
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
        const addEvent = () => (this.setState({
          position: (this.state.position === 99 ? 0 : this.state.position + 1),
        }));

        const subEvent = () => (this.setState({
          position: (this.state.position === 0 ? 99 : this.state.position - 1),
        }));

        return (
          <div id="device">
            <Frame main={this.state.pokemon} pos={this.state.position}></Frame>
            <Card items={this.state.pokemon} pos={this.state.position}></Card>
            <img src={ArrowUp} alt="arrow up" id="up" onClick={addEvent}></img>
            <img src={ArrowDown} alt="arrow down" id="down" onClick={subEvent}></img>
          </div>
        );
      }
    }
}

export default Device;