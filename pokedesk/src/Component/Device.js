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
        this.getAllData = this.getAllData.bind(this);
        this.state = {
                      position: Math.floor(Math.random() * 1000),
                      InitData: {},
                      AllData: {},
                      Height: "",
                      Weight: "",
                      Name: "",
                      ImgLink: "",
                      Names: [],
                      IsFetched: 0
                      };
    }

    async getAPIData() {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";
      const response = await fetch(url); 
      const responseJSON = await response.json();
      this.setState(
        {
          InitData: responseJSON
        }, () => this.getAllData());
    }
    
    async getAllData() {
      const names = this.state.InitData.results.map((i) => i.name);
      this.setState(
        {
          Names: names,
          Name: names[this.state.position]
        }
      )
      for (const name of names) 
      {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const response = await fetch(url); 
        const responseJSON = await response.json();
        let TempObj = this.state.AllData
        TempObj[name] = responseJSON;
        this.setState({
          AllData: TempObj
        })
      }
      this.setState({
        IsFetched: 1
      })
    } 

    componentDidMount() {
       this.getAPIData();
    }

    render () {
      if (this.state.IsFetched)
      {
        const addEvent = () => (this.setState({
          position: (this.state.position === 99 ? 0 : this.state.position + 1),
          Name: this.state.Names[this.state.position]
        }));

        const subEvent = () => (this.setState({
          position: (this.state.position === 0 ? 99 : this.state.position - 1),
          Name: this.state.Names[this.state.position]
        }));
        return (
          <div id="device">
            <Frame link={this.state.AllData[this.state.Name].sprites.other.dream_world.front_default}></Frame>
            <Card PokeName={this.state.Name} height={this.state.AllData[this.state.Name].height} weight={this.state.AllData[this.state.Name].height}></Card>
            <img src={ArrowUp} alt="arrow up" id="up" onClick={addEvent}></img>
            <img src={ArrowDown} alt="arrow down" id="down" onClick={subEvent}></img>
          </div>
        );
      }
    }
}

export default Device;