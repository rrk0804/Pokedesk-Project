import React from 'react';
import '../Style/Frame.css'

class Frame extends React.Component {
    constructor(props) {
        super(props)
        this.getPokeData = this.getPokeData.bind(this);
        this.state = {AllData : {},
                      IsThere: 0, 
                      Poke_names: []}

    }

    async getPokeData(Poke) {
        for (const element of Poke)
        {
            const url = `https://pokeapi.co/api/v2/pokemon/${element}`;
            const response = await fetch(url); 
            const responseJSON = await response.json();
            let TempObj = this.state.AllData
            TempObj[element] = responseJSON;
            this.setState(
                {
                    TempObj
                })
        }
        this.setState(
            {
                IsThere: 1
            }
        )
    }

    componentDidMount () {
        const names = this.props.main.results.map((i) => {
            return i.name;
        }); 
        this.getPokeData(names);
        this.setState(
            {
                Poke_names: names
            }
        )
    }

    render () {
        // Type your code here...
        if(this.state.IsThere) {

        // Return some JSX here...
        return (
          <div id="frame">
            <img id="front" alt="Front-facing" src={this.state.AllData[this.state.Poke_names[this.props.pos]].sprites.front_default}></img>
            <img id="back" alt="Back-facing" src={this.state.AllData[this.state.Poke_names[this.props.pos]].sprites.back_default}></img>
          </div>
        );
        }
    }
}


export default Frame;