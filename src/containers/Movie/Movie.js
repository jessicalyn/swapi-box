import React, { Component } from 'react'
import './Movie.css'
import { connect } from 'react-redux'

export class Movie extends Component {
  render() {
    const { date, title, crawl } = this.props.movie
    return(
      <div className="movie-container">
        <section className="star-wars">
          <div className="crawl">
          <div className="title">
            <h1>{ title }</h1>
          </div>
          <p>{ crawl }</p>
          <p>{ date }</p>
          </div>
        </section>
      </div>
    )
  }
}
export const mapStateToProps = (state) => ({
  movie: state.movie
})

export default connect(mapStateToProps)(Movie)