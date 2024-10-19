// Función para formatear los datos obtenidos de Firestore
export const formatFuels = input => {
  const formatFuel = car => {
    const { createdAt, updatedAt, status, ...rest } = car
    return {
      ...rest,
    }
  }

  if (Array.isArray(input)) {
    return input.map(formatFuel)
  } else {
    return formatFuel(input)
  }
}
