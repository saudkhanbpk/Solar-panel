import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'

const page = () => {
  return (
    <div>
      {/* Hero Section - Made text responsive */}
      <div className="flex justify-center text-center items-center bg-[url(/solar.jpg)] bg-cover bg-center h-48 sm:h-64 md:h-80">
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#082E6F] px-4'>SOLAR CHARGE CONTROLLER</h1>
      </div>

      {/* Content Sections - Added responsive padding */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8'>
        <h1 className='text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-6 border-l-[5px] border-r-[5px] border-gray-800 px-4'>SOLAR CHARGE CONTROLLER</h1>
        <p className='text-sm sm:text-base'>A solar charge controller is used to control and manage the power going into the solar battery by regulating the voltage and current coming from the solar panels. They are designed to ensure that deep cycle batteries are not overcharged during the day, and at night, the power stored in batteries does not run backward to the solar panels and drain the batteries. The solar controller manages battery power both at night and during the day to prevent overcharge and over discharge. Additionally, they come with extra capabilities like load control and lightning protection.

          There are two different types, or you can say technologies, in solar charge controllers: Pulse Width Modulation (PWM) and Maximum Power Point Tracking (MPPT). Their working and performance differ significantly. In most solar panel installations, you will witness an MPPT solar charge controller installed, as it is more efficient, but also more expensive.</p>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8'>
        <h1 className='text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-6 border-l-[5px] border-r-[5px] border-gray-800 px-4'>Functionality of Solar Charge Controller</h1>
        <p className='text-sm sm:text-base'>The solar charge controller connects via cables to both the solar panels on one end and the batteries and appliances on the other end. It serves as a kind of switching center between these three components. Charge controllers are essential components of any solar panel system, as the panel voltage continuously fluctuates throughout the day, ensuring that the batteries receive the required voltage power. This is also true from the consumer's end, where demand can vary according to their requirements. The solar charge controller must ensure that the limit voltages are met to protect the battery.</p>
        <img
          src="/solar-charge-controller.jpg"
          alt="Solar Charge Controller Diagram"
          className="w-full h-auto rounded-xl shadow-lg mt-4 sm:mt-6" />
      </div>

      <Calltoexpert />
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8'>
        <h1 className='text-2xl sm:text-3xl font-bold mb-4 text-gray-800'>Types of Solar Charge Controllers</h1>
        <p className='text-sm sm:text-base'>There are two main types of solar charge controllers commonly used in Pakistan:</p>
        <ul className="list-decimal pl-5 space-y-2 mt-2 text-sm sm:text-base">
          <li>MPPT Charge Controller</li>
          <li>PWM Solar Charge Controller</li>
        </ul>
      </div>

      {/* MPPT Section - Added order classes */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white p-4 sm:p-6 rounded-xl shadow-md'>
          <h2 className='text-center text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6'>MPPT Charge Controller</h2>
          <p className='text-sm sm:text-base'>A Maximum Power Point Tracking (MPPT) charge controller first measures the Vmp voltage of the panel and then adjusts that measured voltage according to battery voltage requirements. MPPT charge controllers ensure you utilize the maximum available power from the panel because power into and out of the charge controller equals in power. When the voltage drops to the required battery bank voltage, the current is raised, allowing you to harness the maximum power from the panels. Unlike PWM, MPPT charge controller allows you to install a higher number of arrays in power than battery power. With a 20V solar panel, you can charge a 12V battery bank, or two in series can charge up to a 24V battery bank, and three in series can charge up to a 48V battery bank.</p>
        </div>
        <div className='bg-white p-4 sm:p-6 rounded-xl shadow-md order-first md:order-last'>
          <img
            src="/mppt-controller.jpg"
            alt="MPPT Solar Charge Controller"
            className="w-full h-auto rounded-xl shadow-lg" />
        </div>
      </div>

      {/* PWM Section - Added order classes */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white p-4 sm:p-6 rounded-xl shadow-md'>
          <img
            src="/pwm-controller.jpg"
            alt="PWM Solar Charge Controller"
            className="w-full h-auto rounded-xl shadow-lg" />
        </div>
        <div className='bg-white p-4 sm:p-6 rounded-xl shadow-md'>
          <h2 className='text-center text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6'>PWM Solar Charge Controller</h2>
          <p className='text-sm sm:text-base'>Pulse Width Modulation makes a direct connection from the solar array to the battery bank. They are used for very small-sized solar panels, often employed for camping, lighting, and charging mobile phones. However, they are not recommended for larger solar panel systems. The working criteria of a PWM charge controller are much like an MPPT solar charge controller, but they are not as efficient. When there is an uninterrupted connection between the panel and the battery, the panel's voltage is pulled down to the battery voltage. As the battery charges, its voltage rises, causing the solar panel's voltage output to increase as well, utilizing more solar power as it charges. Therefore, it's crucial to ensure that you match the nominal voltage of the solar array with the voltage of the battery bank.</p>
        </div>
      </div>

      {/* CTA Button - Made responsive */}
      <div className="mb-6 flex justify-center">
        <button className="bg-[#5AA86C] hover:bg-[#4a8a5a] text-white font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition hover:scale-105 text-sm sm:text-base">
          Get Quote
        </button>
      </div>
    </div>
  )
}

export default page