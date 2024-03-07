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
  //const [data, setData] = useState<CarOptions[]>([]);

  // useEffect(() => {
  //   api.getVehicleColors().then((responseData) => {
  //     setData(responseData);
  //   });
  // }, []);

  return (
    <div className="Container">
      <ConfiguratorHeader heading={'Your Volvo V60'} subtitle={'Choose a car model and add equipment, packages and styling to suit your needs.'} />
      <ConfiguratorVehicleView />
      <ConfiguratorVehicleOptions />
      <ConfiguratorSummary />
    </div>
  );
}

export default ConfiguratorFrame;