const simplifyVehicles = ({ results }) => {
    const getVehicleData = results.map(vehicle => {
        const vehicleData = {
            name: vehicle.name,
            model: vehicle.model,
            class: vehicle.vehicle_class,
            numOfPassengers: vehicle.passengers,
            category: "vehicles",
            favorite: false
        }
        return vehicleData
    })
    return Promise.all(getVehicleData)
}

export { simplifyVehicles }