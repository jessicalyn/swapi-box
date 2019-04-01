import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Card.css'

export default class Card extends Component {

  clickFavorite = () => {
    const { name, favorite } = this.props.card
    console.log({favorite})
  }

  render() {
    const { card } = this.props
    return (
        <div className="card-body">
            <h3>{ card.name }</h3>
            <h4>{ card.species }</h4>
            <h4>{ card.homeworld }</h4>
            <h4>{ card.homeworldPop }</h4>
            <h4>{ card.climate }</h4>
            <h4>{ card.population }</h4>
            <h4>{ card.residents }</h4>
            <h4>{ card.terrain }</h4>
            <h4>{ card.class }</h4>
            <h4>{ card.model }</h4>
            <h4>{ card.numOfPassengers }</h4>
            <button onClick={ this.clickFavorite } className="fav-button">Favorite</button>
        </div>
    )
  }
}

// export const mapDispatchToProps = (dispatch) => ({
//   toggleFavorite: (name) => dispatch(toggleFavorite(name))
// })

// export default connect(null, mapDispatchToProps)(Card)