import './ConfiguratorFrame.css';
import React, { useEffect, useState } from 'react';
import CarOptions from "../../api/CarOptions";
import CarOptionsApi from "../../api/CarOptionsApi";
import ConfiguratorHeader from './ConfiguratorHeader';
import ConfiguratorSummary from './ConfiguratorSummary';
import ConfiguratorVehicleView from './ConfiguratorVehicleView';
import ConfiguratorVehicleOptions from './ConfiguratorVehicleOptions';

const ConfiguratorFrame: React.FC = () => {

  const api = new CarOptionsApi();
  const [vehicleColors, setVehicleColors] = useState<CarOptions[]>([]);
  const [vehicleEngines, setVehicleEngines] = useState<CarOptions[]>([]);
  const [vehicleInteriorOptions, setVehicleInteriorOptions] = useState<CarOptions[]>([]);
  const [vehicleExteriorOptions, setVehicleExteriorOptions] = useState<CarOptions[]>([]);

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
      {vehicleColors.map(function(object, i){
        return <ConfiguratorVehicleOptions type={"vehicleColor"} />;
      })}
      
      {/* Engines */}
      <h3>Engines</h3>
      {vehicleEngines.map(function(object, i){
        return <ConfiguratorVehicleOptions type={"vehicleEngine"} />;
      })}

      {/* Options (external) */}
      <h3>Exterior Options</h3>
      {vehicleExteriorOptions.map(function(object, i){
        return <ConfiguratorVehicleOptions type={"exteriorOption"} />;
      })}

      {/* Options (internal) */}
      <h3>Interior Options</h3>
      {vehicleInteriorOptions.map(function(object, i){
        return <ConfiguratorVehicleOptions type={"interiorOption"} />;
      })}

      <ConfiguratorSummary />
    </div>
  );
}

export default ConfiguratorFrame;