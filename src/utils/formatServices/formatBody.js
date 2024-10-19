// Función para formatear los datos obtenidos de Firestore
export const formatBodies = input => {
  const formatBody = car => {
    const { createdAt, updatedAt, status, ...rest } = car
    return {
      ...rest,
    }
  }

  if (Array.isArray(input)) {
    return input.map(formatBody)
  } else {
    return formatBody(input)
  }
}
