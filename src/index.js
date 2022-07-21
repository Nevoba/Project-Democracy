import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { allCountries } from './domain/listOfCountries';






class WorldMap extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            votes: allCountries,
            countryToEliminate: 'Israel',
        };
    }

    handleSubmit(val){

        const newVotes = this.state.votes
        newVotes[val.state.Value]++
        this.setState({votes: newVotes })
        console.log(this.state.votes[val.state.Value])
    }

    render(){
        const imgSrc = 'countries/' + this.state.countryToEliminate +'.svg' 

        return (<div><CountryForm handleSubmit ={(val) => this.handleSubmit(val)}/>
                <img src= {imgSrc} alt='test'/></div>
        
        )
    }
    
}

class CountryForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Value: ''
        };

        this.handleSubmit = this.props.handleSubmit
        this.handleType = this.handleType.bind(this);
    }

    handleType(event){
        this.setState({Value: event.target.value});
        event.preventDefault();
    }


    render(){
        return (
            <div>
                <input type="text" value={this.state.Value} onChange={this.handleType.bind(this)}/>
                <button onClick={() => this.handleSubmit(this)}>
                Submit
                </button>
            </div>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WorldMap/>);