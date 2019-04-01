import React from 'react'
import Card from '../../components/Cards/Card'
import './CardContainer.css'

export default function CardContainer({ currentCards }) {
    const cardstoDisplay = currentCards.map((card) => {
        return <Card key={ card.name } card={ card } />
    })
    return(
        <div className="card-container">
          { cardstoDisplay }
        </div>
    )
}

export const mapStateToProps = (state) => ({
  currentCards: state.currentCards
})