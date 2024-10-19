// Función para formatear los datos obtenidos de Firestore
export const formatBrands = input => {
  const formatCar = car => {
    const { createdAt, updatedAt, status, ...rest } = car
    return {
      ...rest,
    }
  }

  if (Array.isArray(input)) {
    return input.map(formatCar)
  } else {
    return formatCar(input)
  }
}
