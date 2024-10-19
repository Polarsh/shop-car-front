import { useState, useEffect } from 'react'
import FilterService from '../services/FilterFirebase'

const useFilter = () => {
  const [filters, setFilters] = useState({
    brandList: [],
    fuelList: [],
    transmissionList: [],
    bodyList: [],
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [brandList, fuelList, transmissionList, bodyList] =
          await Promise.all([
            FilterService.getAllBrands(),
            FilterService.getAllFuels(),
            FilterService.getAllTransmissions(),
            FilterService.getAllBodies(),
          ])
        setFilters({
          brandList,
          fuelList,
          transmissionList,
          bodyList,
          isLoading: false,
          error: null,
        })
      } catch (error) {
        setFilters({
          brandList: [],
          fuelList: [],
          transmissionList: [],
          bodyList: [],
          isLoading: false,
          error,
        })
      }
    }

    fetchFilters()
  }, [])

  return filters
}

export default useFilter
