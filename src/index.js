import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { allCountries } from './domain/listOfCountries';




class WorldMap extends React.Component{
    
    render(){
        const flags = allCountries.map(countryName => {
            const imgSrc = 'countries/' + countryName +'.svg' 
            return <img src= {imgSrc} alt='test'/>
            }
        )
        return flags
    }
    
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WorldMap/>);