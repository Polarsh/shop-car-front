import { useState } from 'react'
import { toast } from 'sonner'

import CarService from '../services/CarFirebase'

const useCar = () => {
  const [carList, setCarList] = useState([])
  const [car, setCar] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getAllCars = async () => {
    setIsLoading(true)
    try {
      const data = await CarService.getAllCars()
      setCarList(data)
      setError(null)
    } catch (error) {
      setError(error)
      toast.error('Error al obtener la lista de autos')
    } finally {
      setIsLoading(false)
    }
  }

  const getCarById = async ({ id }) => {
    setIsLoading(true)
    try {
      const data = await CarService.getCarById({ id })
      setCar(data)
    } catch (error) {
      setError(error)
      setCar(null)
      toast.error('Error al obtener el auto')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    carList,
    car,
    error,
    isLoading,
    getAllCars,
    getCarById,
  }
}

export default useCar
