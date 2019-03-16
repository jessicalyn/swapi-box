import React, { Component } from 'react'
import './Buttons.css';

export default class Buttons extends Component {
    constructor(props){
        super(props);
        this.state = {
            people: false,
            planets: false,
            vehicles: false,
            favorites: false
        }
    }

    selectButton = (e) => {
        const name = e.target.name
        const toggle = !this.state.name
        this.setState({ [name]: toggle })
        this.props.showButtonCategory(name)
    }

    render() {
        return (
            <div>
                <button name="people" onClick={ this.selectButton }>PEOPLE</button>
                <button name="planets" onClick={ this.selectButton }>PLANETS</button>
                <button name="vehicles" onClick={ this.selectButton }>VEHICLES</button>
                <button name="favorites" onClick={ this.selectButton }>FAVORITES</button>
            </div>
        )
    }
}