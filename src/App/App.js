import React, { Component } from 'react';
import './App.css';
import { fetchAnything } from '../Utils/fetchAnything'

class App extends Component {
  constructor(){
    super();
    this.state = {
      error: "",
      filmNumber: Math.floor((Math.random() * 7) + 1),
      movie: {}
    }
  }

  componentDidMount = async () => {
    const url = `https://swapi.co/api/films/${this.state.filmNumber}`
    const unfilteredMovie = await fetchAnything(url)
    this.showMovie(unfilteredMovie)
  }

  showMovie = (unfilteredMovie) => {
    this.setState({ movie: {
      title: unfilteredMovie.title,
      date: unfilteredMovie.release_date,
      crawl: unfilteredMovie.opening_crawl
    }})
  }

  render() {
    const { title, date, crawl } = this.state.movie
    return (
      <div className="App">
        { this.state.error && <p>Error: { this.state.error }</p>}
        <h1>SwapiBox</h1>
        <div className="buttonContainer">
          <button>PEOPLE</button>
          <button>PLANETS</button>
          <button>VEHICLES</button>
        </div>
        <div className="movieContainer">
          <h2>{ title }</h2>
          <h3>{ date }</h3>
          <h3>{ crawl }</h3>
        </div>
      </div>
    );
  }
}

export default App;
