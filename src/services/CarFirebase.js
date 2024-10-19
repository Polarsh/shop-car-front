/* import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'

import FirebaseErrorHandler from '../utils/FirebaseErrorHandler'
import { formatCars } from '../utils/formatServices/formatCar' */

import carList from '../../db/cars.json'

class CarService {
  constructor() {
    this.collectionName = 'webs/car-shop/cars'
  }

  /* async getAllCars() {
    try {
      const querySnapshot = await getDocs(collection(db, this.collectionName))
      const cars = []
      querySnapshot.forEach(doc => {
        cars.push({ id: doc.id, ...doc.data() })
      })
      const activeCars = cars.filter(car => car.status !== 'deleted')
      const formatedCars = formatCars(activeCars)
      return formatedCars
    } catch (error) {
      throw new FirebaseErrorHandler(error)
    }
  } */

  /* async getCarById({ id }) {
    try {
      const docRef = doc(db, this.collectionName, id)
      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) {
        const error = {
          code: 'my-error',
          message: 'Auto no encontrado',
        }
        throw error
      }

      const car = { id: docSnap.id, ...docSnap.data() }

      if (car.status === 'deleted') {
        const error = {
          code: 'my-error',
          message: 'Auto borrado',
        }
        throw error
      }

      const formatedCar = formatCars(car)

      return formatedCar
    } catch (error) {
      throw new FirebaseErrorHandler(error)
    }
  } */

  async getAllCars() {
    return carList
  }

  async getCarById({ id }) {
    return carList.filter(car => car.id === id)[0]
  }
}

export default new CarService()
