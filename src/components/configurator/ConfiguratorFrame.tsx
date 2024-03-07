import './ConfiguratorFrame.css';
import React, { useEffect, useState } from 'react';
import CarOption from "../../api/CarOption";
import CarOptionsApi from "../../api/CarOptionsApi";
import ConfiguratorHeader from './ConfiguratorHeader';
import ConfiguratorSummary from './ConfiguratorSummary';
import ConfiguratorVehicleView from './ConfiguratorVehicleView';
import ConfiguratorVehicleOptions from './ConfiguratorVehicleOptions';

const ConfiguratorFrame: React.FC = () => {

  const api = new CarOptionsApi();
  const [vehicleColors, setVehicleColors] = useState<CarOption[]>([]);
  const [vehicleEngines, setVehicleEngines] = useState<CarOption[]>([]);
  const [vehicleInteriorOptions, setVehicleInteriorOptions] = useState<CarOption[]>([]);
  const [vehicleExteriorOptions, setVehicleExteriorOptions] = useState<CarOption[]>([]);

  useEffect(() => {
    api.getVehicleColors().then((responseData) => { setVehicleColors(responseData) });
    api.getVehicleEngineOptions().then((responseData) => setVehicleEngines(responseData));
    api.getVehicleInteriorOptions().then((responseData) => setVehicleInteriorOptions(responseData));
    api.getVehicleExteriorOptions().then((responseData) => setVehicleExteriorOptions(responseData));
  }, []);

  return (
    <div className="Container">
      <ConfiguratorHeader heading={'Your Volvo V60'} subtitle={'Choose a car model and add equipment, packages and styling to suit your needs.'} />
      <ConfiguratorVehicleView />

      {/* Colors */}
      <h3>Colors</h3>
      {vehicleColors.map(function(option, i){
        return <ConfiguratorVehicleOptions type={"vehicleColor"} CarOption={option} />;
      })}
      
      {/* Engines */}
      <h3>Engines</h3>
      {vehicleEngines.map(function(option, i){
        return <ConfiguratorVehicleOptions type={"vehicleEngine"} CarOption={option} />;
      })}

      {/* Options (external) */}
      <h3>Exterior Options</h3>
      {vehicleExteriorOptions.map(function(option, i){
        return <ConfiguratorVehicleOptions type={"exteriorOption"} CarOption={option} />;
      })}

      {/* Options (internal) */}
      <h3>Interior Options</h3>
      {vehicleInteriorOptions.map(function(option, i){
        return <ConfiguratorVehicleOptions type={"interiorOption"} CarOption={option} />;
      })}

      <ConfiguratorSummary />
    </div>
  );
}

export default ConfiguratorFrame;