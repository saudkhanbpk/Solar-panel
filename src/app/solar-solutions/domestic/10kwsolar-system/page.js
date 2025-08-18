import React from 'react'
import DomasticCards from '../../../../Components/domasticcards/switchcrad'
import AppointmentForm from '../../../../Components/domasticcards/Appointment'

const page = () => {
  return (
    <div>
      <div className='bg-[url(/solar.jpg)]  p-4'>
        <h1 className='text-center font-bold text-4xl mb-4 p-4'>5kW Solar System Price in Pakistans</h1>
        <div className='flex items-center justify-center'>
          <DomasticCards />
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className="relative">
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8'>
            <div className='flex-1'>

            </div>
            <div className="hidden lg:block w-96 sticky top-24 self-start">
              <AppointmentForm />
            </div>
          </div>
        </div>
        <div className="block lg:hidden px-4 sm:px-6 lg:px-8 py-8">
          <AppointmentForm />
        </div>
      </div>

    </div>
  )
}

export default page
