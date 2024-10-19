// Función para formatear los datos obtenidos de Firestore
export const formatCars = input => {
  const formatCar = car => {
    const { createdAt, createdBy, updatedAt, updatedBy, ...rest } = car

    const [transmissionAbbre, transmission] =
      car.carDetails.transmission.label.split(' - ')
    const [drivetrainAbbre, drivetrain] =
      car.carDetails.drivetrain.label.split(' - ')

    return {
      ...rest,
      accessories: rest.accessories.map(({ id, ...accessory }) => accessory),
      carDetails: {
        ...rest.carDetails,
        brand: rest.carDetails.brand.label,
        model: rest.carDetails.model.label,
        body: rest.carDetails.model.value,
        year: rest.carDetails.year.label,
        displacement: rest.carDetails.displacement.label,
        fuel: rest.carDetails.fuel.map(({ label }) => label),
        transmission,
        transmissionAbbre,
        drivetrain,
        drivetrainAbbre,
      },
    }
  }

  if (Array.isArray(input)) {
    return input.map(formatCar)
  } else {
    return formatCar(input)
  }
}
