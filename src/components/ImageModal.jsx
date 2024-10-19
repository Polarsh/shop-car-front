import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'

export default function VehicleImageModalComponent({
  imageList,
  handleCloseModal,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <Dialog
      className='fixed inset-0 z-50'
      open={true}
      onClose={handleCloseModal}>
      <div className='fixed inset-0 bg-black bg-opacity-75' />

      <div className='fixed inset-0 z-10 flex items-center justify-center p-4'>
        <Dialog.Panel className='relative w-full h-full max-w-5xl mx-auto overflow-hidden rounded-lg'>
          <button
            type='button'
            className='absolute top-4 right-4 bg-black bg-opacity-60 text-white rounded-full p-2 focus:outline-none'
            onClick={handleCloseModal}>
            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
          </button>

          <img
            src={imageList[currentImageIndex]}
            alt={`Imagen ${currentImageIndex + 1}`}
            className='object-contain w-full h-full bg-black'
          />

          <button
            className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-80 rounded-full text-white w-10 h-10 flex justify-center items-center focus:outline-none'
            onClick={handlePrevImage}>
            <ArrowLeftIcon className='h-5 w-5' aria-hidden='true' />
          </button>

          <button
            className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-80 rounded-full text-white w-10 h-10 flex justify-center items-center focus:outline-none'
            onClick={handleNextImage}>
            <ArrowRightIcon className='h-5 w-5' aria-hidden='true' />
          </button>

          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-1 rounded-full'>
            {currentImageIndex + 1} / {imageList.length}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
