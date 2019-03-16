import React from 'react'

export default function Card({ card }) {
    return (
        <div>
            <h3>{ card.name }</h3>
            <h4>{ card.species }</h4>
            <h4>{ card.homeworld }</h4>
            <h4>{ card.homeworldPop }</h4>
        </div>
    )
}