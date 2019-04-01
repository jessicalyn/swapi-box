import { fetchAnything } from './fetchAnything'

const addHomeworldData = ({ results }) => {
    const addedHomeworld = results.map(async person => {
        const homeworldData = await fetchAnything(person.homeworld)
        const personData = {
            name: person.name, 
            homeworld: homeworldData.name, 
            homeworldPop: homeworldData.population, 
            species: person.species,
            category: "people",
            favorite: false
        }
        return personData
    })
    return Promise.all(addedHomeworld)
}

const addSpeciesData = (props) => {
    const addedSpecies = props.map(async person => {
        const speciesData = await fetchAnything(person.species)
        const personData = {...person, species: speciesData.name}
        return personData
    })
    return Promise.all(addedSpecies)
}

export { addHomeworldData, addSpeciesData }