import React from 'react'

export default function Card({ card }) {
    return (
        <div>
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
            <button>Favorites</button>
        </div>
    )
}