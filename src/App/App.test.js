import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
// import { fetchAnything } from '../Utils/fetchAnything'
// import { addHomeworldData } from '../Utils/simplifyPeople'

const mockUnfiltered = {
  characters: [
    "https://swapi.co/api/people/1/", 
    "https://swapi.co/api/people/2/"
  ],
  created: "2014-12-18T10:39:33.255000Z",
  director: "Richard Marquand",
  edited: "2015-04-11T09:46:05.220365Z",
  episode_id: 6,
  opening_crawl: "Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star. When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...",
  planets: [
    "https://swapi.co/api/planets/5/", 
    "https://swapi.co/api/planets/7/", 
    "https://swapi.co/api/planets/8/", 
    "https://swapi.co/api/planets/9/", 
    "https://swapi.co/api/planets/1/"
  ],
  producer: "Howard G. Kazanjian, George Lucas, Rick McCallum",
  release_date: "1983-05-25",
  species: [
    "https://swapi.co/api/species/1/", 
    "https://swapi.co/api/species/2/"
  ],
  starships: [
    "https://swapi.co/api/starships/15/", 
    "https://swapi.co/api/starships/10/", 
    "https://swapi.co/api/starships/11/"
  ],
  title: "Return of the Jedi",
  url: "https://swapi.co/api/films/3/",
  vehicles: [
    "https://swapi.co/api/vehicles/8/", 
    "https://swapi.co/api/vehicles/16/", 
    "https://swapi.co/api/vehicles/18/"
  ]
}

const mockMovie = {
    crawl: "Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star. When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...",
    date: "1983-05-25",
    title: "Return of the Jedi"
};

const mockUrl = "https://swapi.co/api/people"


// const addHomeworldData = jest.mock('../Utils/simplifyPeople', () => ({addHomeworldData: ()=> mockUnfiltered}))

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match a snapshot with all data passed in', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('should have proper default states', () => {
    expect(wrapper.state()).toEqual({
      "error": "",
      "movie": {},
      "currentCards": []
    })
  });

  it('should set state to a random movie when called', () => {
    expect(wrapper.state("movie")).toEqual( {} )
    wrapper.instance().showMovie(mockUnfiltered)
    expect(wrapper.state("movie")).toEqual(mockMovie)
  });

  it('should invoke fetch call for people when people button clicked', () => {
    wrapper.instance().fetchAnything = jest.fn()
    wrapper.instance().showButtonCategory("people")

    wrapper.instance().fetchAnything(mockUrl)
    wrapper.instance().showPeople(mockUnfiltered)
  });

  it('should set current cards state to people when show people invoked', () => {
    wrapper.instance().addHomeworldData = jest.fn()
    wrapper.instance().addSpeciesData = jest.fn()

    wrapper.instance().showPeople(mockUnfiltered)
    wrapper.instance().addHomeworldData(mockUnfiltered)
    wrapper.instance().addSpeciesData(mockUnfiltered)
    
    expect(wrapper.state("currentCards")).toEqual(mockUnfiltered)
  })
})

