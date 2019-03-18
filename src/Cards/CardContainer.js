import React from 'react'
import Card from './Card'

export default function CardContainer({ currentCards }) {
    const cardstoDisplay = currentCards.map((card) => {
        return <Card key={ card.name } card={ card }/>
    })
    return(
        <h3>{ cardstoDisplay }</h3>
    )
}