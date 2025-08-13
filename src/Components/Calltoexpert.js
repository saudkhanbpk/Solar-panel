import React from 'react'

const Calltoexpert = () => {
    return (
        <div>
         
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="bg-[#5AA86C] max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 rounded-xl shadow-lg">
                    <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6"> 
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white leading-tight">
                            Speak to Our Solar Energy Experts
                        </h2>

                        <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                            Get personalized advice for your solar energy needs. Our experts are ready to help you find the perfect solution for your home or business.
                        </p>

                        <div className="pt-2 sm:pt-4">
                            <a
                                href="https://alphasolar.com.pk/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-[#5AA86C] hover:bg-gray-50 font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                            >
                                Contact Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calltoexpert;
