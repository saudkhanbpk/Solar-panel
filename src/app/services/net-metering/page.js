import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'
import FAQ from '../../../Components/FAQ'

const page = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className='flex justify-center bg-[url(/Cover-Net-meter.png)] bg-cover bg-center h-[60vh]'>
      </div>
      
      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Title */}
        <h1 className='text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12 border-l-4 border-r-4 border-green-500 py-4 mx-auto max-w-lg'>
          NET METERING IN PAKISTAN 
        </h1>
        
        {/* Introduction */}
        <div className='space-y-6 text-gray-700 text-lg leading-relaxed mb-16'>
          <p className='mb-6'>
            Everyone wants to get maximum benefits out of their solar panels and pay very little or no electricity bill, right? But the question is how is this possible?
          </p>
          <p className='mb-6'>
            Well, one of the easiest way to achieve this is by adding net metering to your existing solar system. 
          </p>
          <p className='mb-6'>
            So, you wonder how does the system work and provide benefit to its customers?
          </p>
          <p className='mb-6'>
            The process is quite straightforward. In most of the cases, solar panels produce more electricity than you required usage? So where does the extra produced electricity go? now if you have the net metering in place, the extra generated energy is automatically sent back to the grid.
          </p>
          <p className='mb-6 font-semibold text-green-600'>
            What does user get in return?
          </p>
          <p className='mb-6'>
            And when your solar panels aren't producing energy at night or during the rain or winter days, you can use those credits to cover your electricity needs. Please note that the electricity you sell back to the grid and the electricity you use at night or whenever your energy needs exceed the limit of your solar production both have different rates, which depend on the region's own electricity rules and regulations. Considering how high electricity prices are in Pakistan, adding net metering is a super convenient solution to tackle those hefty billing issues.
          </p>
        </div>

        <Calltoexpert />
        
        {/* How Net Metering Works */}
        <div className="my-16">
          <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12 border-l-4 border-r-4 border-green-500 py-4 mx-auto max-w-lg">
            HOW NET METERING WORKS IN PAKISTAN
          </h1>

          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Left Side - Text */}
            <div className="md:w-1/2 space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                The net metering in Pakistan is available for only grid tied system: on
                grid or hybrid, because the requirement to install net meter is you must
                be connected to the main grid in order to get the benefit of net
                metering.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">HERE'S HOW IT WORKS</h3>
              <p>
                The power company installs a special meter called a net meter or green
                meter at your place, and this meter can measure both the electricity you
                use and the extra electricity your panels send back to the grid.
              </p>
              <p>
                Although, the electricity provider company in most cases only installs a
                single meter, they can also install two separate meters. But usually,
                it's just one that checks both the import and export of electricity.
              </p>
            </div>
            
            {/* Right Side - Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/Net-Metering-1.png"
                alt="net metering"
                className="rounded-lg shadow-md w-full max-w-md"
              />
            </div>
          </div>
        </div>
        
        {/* Compensation Methods */}
        <div className="my-16">
          <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12 border-l-4 border-r-4 border-green-500 py-4 mx-auto max-w-lg">
            COMPENSATION METHODS
          </h1>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className='text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-green-400'>NET BILLING</h3>
              <p className='text-gray-700 text-lg leading-relaxed'>
                In most cases, the power company will use this method to compensate the user. This process works just like your monthly electricity bill; at the end of each billing cycle, your electricity meter readings are compared. And you are only charged for the net difference between the electricity you consumed from the grid and the surplus you fed back.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className='text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-green-400'>FEED-IN TARIFF</h3>
              <p className='text-gray-700 text-lg leading-relaxed'>
                In most cases you will receive a fixed rate per unit of electricity exported to the grid.
              </p>
            </div>
          </div>
        </div>
        
        {/* Go Green Net Metering Process */}
        <div className="my-16">
          <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12 border-l-4 border-r-4 border-green-500 py-4 mx-auto max-w-lg">
            GO GREEN NET METERING PROCESS
          </h1>
          
          <div className="bg-white p-8 rounded-xl shadow-md mb-10">
            <p className='text-gray-700 text-lg leading-relaxed mb-8'>
              Net metering is an incredible device that lets you share surplus energy with the power grid. Here's how it works: when you produce more electricity than you require during the day, the excess power is sent back to the grid. Then, during nighttime when your solar panels aren't generating electricity, you can draw energy from the grid using the credits earned from your exported energy, effectively reducing your costs. With a properly installed system, you can generate sufficient solar energy to meet all of your electricity needs throughout the year, eliminating the need to pay electricity bills. It's a fantastic way to both save money and contribute to a greener future.
            </p>
            
            <div>
              <img 
                src="/Net-Metering-Process.png" 
                alt="net meter process" 
                className='mx-auto rounded-lg shadow-md max-w-full' 
              />
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="my-16">
          <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            BENEFITS OF INSTALLING NET METERING IN PAKISTAN
          </h1>
          
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            The benefits you will have after having installed a net meter in your home are numerous.
          </p>

          {/* Grid System */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="py-2">
                <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-green-400">Less Cost, Most Benefits</h2>
              </div>
              <div className="mt-2">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The initial cost might seem a bit high to some of the users, but the benefits it can bring for you for decades makes it a pretty smart investment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For their valuable clients, Alpha Solar, a company with years of experience and certified by AEDB in Pakistan, offers reasonable net metering rates in the Pakistan.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="py-2">
                <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-amber-400">Sell and Earn</h2>
              </div>
              <div className="mt-2">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  With the help of a net meter, you can sell the extra generated electricity back to the grid.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This results in earning credits, which can be used at night or during power outages, further reducing your electricity bill and potentially making you a zero-bill person.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="py-2">
                <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-400">20–40% Utilization</h2>
              </div>
              <div className="mt-2">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Solar panels installed at your home mostly produce 20–40 percent more electricity than your actual needs, which goes to waste if you haven't installed net meters.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  After installing a net meter, you can sell that extra 20–40 percent of generated energy to grid to earn more units from the grid to further reduce your energy bills.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='items-center'>
           <FAQ />
        </div>
       
      </div>

    </div>
  )
}

export default page