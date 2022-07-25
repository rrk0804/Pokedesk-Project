import React from 'react';
import '../Style/Card.css'

class Card extends React.Component {
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
        const names = this.props.items.results.map((i) => {
            return i.name;
        }); 
        this.getPokeData(names);
        this.setState(
            {
                Poke_names: names
            }
        )
        console.log(this.state.AllData)
    }

    render () {
        // Type your code here...
        if (this.state.IsThere) {
            return (
                <div id="info">
                  Name: {this.state.Poke_names[this.props.pos]}
                  <br></br>
                  Height: {this.state.AllData[this.state.Poke_names[this.props.pos]].height}
                  <br></br>
                  Weight: {this.state.AllData[this.state.Poke_names[this.props.pos]].weight}
                </div>
              );
        }
    
        // Return some JSX here...
    }
}


export default Card;