/* import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'

import FirebaseErrorHandler from '../utils/FirebaseErrorHandler' */

/* import { formatBrands } from '../utils/formatServices/formatBrand'
import { formatFuels } from '../utils/formatServices/formatFuel'
import { formatTransmissions } from '../utils/formatServices/formatTransmission'
import { formatBodies } from '../utils/formatServices/formatBody' */

import brandList from '../../db/brands.json'
import fuelList from '../../db/fuels.json'
import transmissionList from '../../db/transmissions.json'
import bodyList from '../../db/bodies.json'

/* const getFormattedData = async (path, formatFunction) => {
  try {
    const querySnapshot = await getDocs(collection(db, path))
    const data = []
    querySnapshot.forEach(doc => {
      data.push({ id: doc.id, ...doc.data() })
    })
    const formatedData = data.map(item => item.name)
    return formatedData
  } catch (error) {
    throw new FirebaseErrorHandler(error)
  }
} */

class FilterService {
  async getAllBrands() {
    /* return getFormattedData('/webs/car-shop/config-cars/brands', formatBrands) */

    return brandList
  }

  async getAllFuels() {
    /* return getFormattedData(
      '/webs/car-shop/config-cars/features/fuels',
      formatFuels
    ) */

    return fuelList
  }

  async getAllTransmissions() {
    /* return getFormattedData(
      '/webs/car-shop/config-cars/features/transmissions',
      formatTransmissions
    ) */

    return transmissionList
  }

  async getAllBodies() {
    /* return getFormattedData(
      '/webs/car-shop/config-cars/features/bodies',
      formatBodies
    ) */

    return bodyList
  }
}

export default new FilterService()
