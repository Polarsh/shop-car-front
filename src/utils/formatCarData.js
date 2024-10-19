export const formatToCurrency = amount => {
  if (typeof amount === 'number') {
    amount = amount.toString()
  }

  if (!amount) return ''
  const number = parseInt(amount.replace(/[^0-9-]+/g, ''), 10)
  if (isNaN(number)) return ''
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

export const formatToKilometers = distance => {
  if (typeof distance === 'number') {
    distance = distance.toString()
  }

  if (!distance) return ''
  const number = parseInt(distance.replace(/[^0-9-]+/g, ''), 10)
  if (isNaN(number)) return ''
  return number.toLocaleString('en-US')
}


