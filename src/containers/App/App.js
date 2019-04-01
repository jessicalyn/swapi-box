import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css';
import { fetchAnything } from '../../utils/fetchAnything'
import Buttons from '../../components/Buttons/Buttons'
import { addHomeworldData, addSpeciesData } from '../../utils/simplifyPeople'
import { simplifyPlanets } from '../../utils/simplifyPlanets'
import { simplifyVehicles } from '../../utils/simplifyVehicles'
import CardContainer from '../CardContainer/CardContainer'
import Movie from '../Movie/Movie'
import { addMovie, hasError, updateData, showCards, isLoading } from '../../actions'

export class App extends Component {

  componentDidMount = async () => {
    const randomNumber = Math.floor((Math.random() * 7) + 1)
    const url = `https://swapi.co/api/films/${randomNumber}`
    const unfilteredMovie = await fetchAnything(url)
    this.showMovie(unfilteredMovie)
  }

  showMovie = (unfilteredMovie) => {
    this.props.addMovie({
      title: unfilteredMovie.title,
      date: unfilteredMovie.release_date,
      crawl: unfilteredMovie.opening_crawl
    })
  }

  showButtonCategory = async (category) => {
    const { fetchedData } = this.props
    this.props.isLoading("true")
    const existingData = await fetchedData.filter(data => category === data.category)
    if(existingData.length > 0){
      this.props.isLoading("false")
      this.props.showCards(existingData)
    } else {
      this.fetchCategoryData(category)
    }
  }

  fetchCategoryData = async (category) => {
    if(category === "favorites"){
      this.props.hasError("Favorites doesn't work yet, Jessica")
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
    this.addFetchedData(simplifiedPeopleData)
    this.props.isLoading("false")
    this.props.showCards(simplifiedPeopleData)
  }

  showPlanets = async (unfilteredData) => {
    const simplifiedPlanetData = await simplifyPlanets(unfilteredData)
    this.addFetchedData(simplifiedPlanetData)
    this.props.isLoading("false")
    this.props.showCards(simplifiedPlanetData)
  }

  showVehicles = async (unfilteredData) => {
    const simplifiedVehicleData = await simplifyVehicles(unfilteredData)
    this.addFetchedData(simplifiedVehicleData)
    this.props.isLoading("false")
    this.props.showCards(simplifiedVehicleData)
  }

  addFetchedData = (categoryData) => {
    const { fetchedData } = this.props
    const addNewData = [...fetchedData, ...categoryData]
    this.props.updateData(addNewData)
  }

  render() {
    const { error, currentCards, isLoading, fetchedData } = this.props
    return (
      <div className="App">
        { error && <p>Error: { error }</p>}
        { isLoading === "true" && <h2>Your selection is loading</h2>}
        <h1>SwapiBox</h1>
        <Buttons showButtonCategory={ this.showButtonCategory }/>
        { fetchedData.length === 0 && <Movie /> }
        <CardContainer currentCards={ currentCards } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
  isLoading: state.isLoading,
  movie: state.movie,
  fetchedData: state.fetchedData,
  currentCards: state.currentCards
})

const mapDispatchToProps = (dispatch) => ({
  addMovie: (movie) => dispatch(addMovie(movie)),
  hasError: (message) => dispatch(hasError(message)),
  updateData: (data) => dispatch(updateData(data)),
  showCards: (data) => dispatch(showCards(data)),
  isLoading: (message) => dispatch(isLoading(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
