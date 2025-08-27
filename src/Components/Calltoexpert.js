import React from 'react'

const Calltoexpert = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 m-2">
            <div className="bg-[#1e3a8a] max-w-5xl mx-auto py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-12 border rounded-lg relative overflow-hidden">
                {/* Green accent bar at the top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#84cc16]"></div>

                <div className="max-w-4xl  space-y-4 sm:space-y-5">
                    <div className="text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4">
                            Speak to an Expert
                        </h2>

                        <p className="text-white/90 text-base sm:text-lg max-w-2xl leading-relaxed mb-4 sm:mb-5">
                            Let's get started with your project – receive a free consultation and an estimated quotation from experts.
                        </p>

                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                            <div className="text-white">
                                <span className="font-medium">Contact: </span>
                                <span className="text-white/90">03322332249</span>
                            </div>
                            <div className="text-white">
                                <span className="font-medium">Email: </span>
                                <span className="text-white/90">Info.gogreen@gmail.com</span>
                            </div>
                        </div>

                        <div>
                            <a
                                href="tel:03322332249"
                                className="inline-block bg-[#84cc16] hover:bg-[#65a30d] text-white font-semibold py-3 px-8 rounded-lg text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg uppercase tracking-wide"
                            >
                                REQUEST A CALL
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calltoexpert