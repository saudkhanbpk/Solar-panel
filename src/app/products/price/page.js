
import React  from 'react';
import SolarPanel from '../../../Components/productspricses/GradeSolarPanel'
import LithiumBattery from '../../../Components/productspricses/Lithiumionprice'
import TubularBattery from '../../../Components/productspricses/TubularBatteries'
import OnGridInverters from '../../../Components/productspricses/OngridInverter'
import HybridInverters from '../../../Components/productspricses/Hybriad';
import BalanceOfSystem from '../../../Components/productspricses/Balanceofsystem'
import Solarstructure from   '../../../Components/productspricses/Solarstructure'
const SolarPanelPriceTable = () => {
  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Solar Panel Price in Pakistan 
      </h1>
      <SolarPanel/>
      <h1 className="text-3xl font-bold text-gray-800 m-8 border-r-4 border-l-4 border-black text-center">
        Solar inverter Price in Pakistan 
      </h1>
      <OnGridInverters/>
      <HybridInverters/>
       <h1 className="text-3xl font-bold text-gray-800 m-8 border-r-4 border-l-4 border-black text-center">
        Solar BATTERIES Price in Pakistan 
      </h1>
      <LithiumBattery/>
      <TubularBattery/>
      <BalanceOfSystem/>
      <Solarstructure/>
     
    </div>
  );
};

export default SolarPanelPriceTable;