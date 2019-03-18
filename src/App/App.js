import React, { Component } from 'react';
import './App.css';
import { fetchAnything } from '../Utils/fetchAnything'
import Buttons from '../Buttons/Buttons'
import { addHomeworldData, addSpeciesData } from '../Utils/simplifyPeople'
import { simplifyPlanets } from '../Utils/simplifyPlanets'
import { simplifyVehicles } from '../Utils/simplifyVehicles'
import CardContainer from '../Cards/CardContainer'

class App extends Component {
  constructor(){
    super();
    this.state = {
      error: "",
      movie: {},
      currentCards: []
    }
  }

  componentDidMount = async () => {
    const randomNumber = Math.floor((Math.random() * 7) + 1)
    const url = `https://swapi.co/api/films/${randomNumber}`
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

  showButtonCategory = async (category) => {
    if(category === "favorites"){
      this.setState({ error: "Favorites doesn't work yet, Jessica"})
    } else if(category === "people") {
      const unfilteredData = await fetchAnything(`https://swapi.co/api/${category}`)
      this.showPeople(unfilteredData)
    } else if(category === "planets") {
      const unfilteredData = await fetchAnything(`https://swapi.co/api/${category}`)
      this.showPlanets(unfilteredData)
    } else if(category === "vehicles") {
      const unfilteredData = await fetchAnything(`https://swapi.co/api/${category}`)
      this.showVehicles(unfilteredData)
    }
  }

  showPeople = async (unfilteredData) => {
    const addHomeworld = await addHomeworldData(unfilteredData)
    const simplifiedPeopleData = await addSpeciesData(addHomeworld)
    this.setState({ currentCards: simplifiedPeopleData })
  }

  showPlanets = async (unfilteredData) => {
    const simplifiedPlanetData = await simplifyPlanets(unfilteredData)
    this.setState({ currentCards: simplifiedPlanetData })
  }

  showVehicles = async (unfilteredData) => {
    const simplifiedVehicleData = await simplifyVehicles(unfilteredData)
    this.setState({ currentCards: simplifiedVehicleData })
  }

  render() {
    const { title, date, crawl } = this.state.movie
    const { error, currentCards } = this.state
    return (
      <div className="App">
        { error && <p>Error: { error }</p>}
        <h1>SwapiBox</h1>
        <Buttons showButtonCategory={ this.showButtonCategory }/>
        <CardContainer currentCards={ currentCards } />
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
