// Función para formatear los datos obtenidos de Firestore
export const formatTransmissions = input => {
  const formatTransmission = car => {
    const { createdAt, updatedAt, status, ...rest } = car
    return {
      ...rest,
    }
  }

  if (Array.isArray(input)) {
    return input.map(formatTransmission)
  } else {
    return formatTransmission(input)
  }
}
