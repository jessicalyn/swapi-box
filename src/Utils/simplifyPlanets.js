import React from 'react'
import { fetchAnything } from './fetchAnything'

const simplifyPlanets = ({ results }) => {
    const getPlanetData = results.map( async planet => {
        const residentsData = await fetchResidents(planet)
        const planetData = {
            name: planet.name,
            terrain: planet.terrain,
            population: planet.population,
            climate: planet.climate,
            residents: residentsData
        }
        return planetData
    })
    return Promise.all(getPlanetData)
}

const fetchResidents = (planet) => {
        const planetResidents = planet.residents.map( async resident => {
        const fetchResidents = await fetchAnything(resident)
        return fetchResidents.name
    })
    return Promise.all(planetResidents)
}

export { simplifyPlanets, fetchResidents }