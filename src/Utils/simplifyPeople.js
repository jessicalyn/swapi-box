import React from 'react'
import { fetchAnything } from './fetchAnything'

const addHomeworldData = ({ results }) => {
    console.log("we're in addHomeworldData")
    const addedHomeworld = results.map(async person => {
        const homeworldData = await fetchAnything(person.homeworld)
        const personData = {
            name: person.name, 
            homeworld: homeworldData.name, 
            homeworldPop: homeworldData.population, 
            species: person.species
        }
        return personData
    })
    return Promise.all(addedHomeworld)
}

const addSpeciesData = (props) => {
    console.log("we're in addSpeciesData", props)
    const addedSpecies = props.map(async person => {
        const speciesData = await fetchAnything(person.species)
        const personData = {...person, species: speciesData.name}
        console.log(personData)
        return personData
    })
    console.log(addedSpecies)
    return Promise.all(addedSpecies)
}

export { addHomeworldData, addSpeciesData }