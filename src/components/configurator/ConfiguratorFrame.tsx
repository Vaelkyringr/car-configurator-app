import "./ConfiguratorFrame.css";
import React, { useEffect, useState } from "react";
import CarOption from "../../api/CarOption";
import CarOptionsApi from "../../api/CarOptionsApi";
import ConfiguratorHeader from "./ConfiguratorHeader";
import ConfiguratorSummary from "./ConfiguratorSummary";
import ConfiguratorVehicleView from "./ConfiguratorVehicleView";
import ConfiguratorSingleOption from "./ConfiguratorSingleOption";
import ConfiguratorMultipleOption from "./ConfiguratorMultipleOption";

const ConfiguratorFrame: React.FC = () => {
  const api = new CarOptionsApi();
  const [vehicleColors, setVehicleColors] = useState<CarOption[]>([]);
  const [vehicleEngines, setVehicleEngines] = useState<CarOption[]>([]);
  const [vehicleOptions, setVehicleOptions] = useState<CarOption[]>([]);
  const [selectedColorOption, setSelectedColorOption] = useState<string | null>(
    null
  );
  const [selectedEngineOption, setSelectedVehicleOption] = useState<
    string | null
  >(null);

  useEffect(() => {
    api
      .getVehicleColors()
      .then((responseData) => setVehicleColors(responseData));
    api
      .getVehicleEngineOptions()
      .then((responseData) => setVehicleEngines(responseData));
    api
      .getVehicleOptions()
      .then((responseData) => setVehicleOptions(responseData));
  });

  return (
    <div className="configurator-container">
      {/*Configurator header */}
      <ConfiguratorHeader
        heading={"Your Volvo V60"}
        subtitle={
          "Configure your V60 and add equipment, packages and styling to suit your needs."
        }
      />

      {/* Vehicle image */}
      <ConfiguratorVehicleView />

      {/* Colors */}
      <div className="configurator-options-section">
        <h3>Colors</h3>
      </div>
      <div className="configurator-options-container">
        {vehicleColors.map(function (option) {
          return (
            <ConfiguratorSingleOption
              key={option.id}
              type={"vehicleColor"}
              CarOption={option}
              isSelected={selectedColorOption === option.id}
              onSelect={() => setSelectedColorOption(option.id)}
            />
          );
        })}
      </div>

      {/* Engines */}
      <div className="configurator-options-section">
        <h3>Engines</h3>
      </div>
      <div className="configurator-options-container">
        {vehicleEngines.map(function (option) {
          return (
            <ConfiguratorSingleOption
              key={option.id}
              type={"vehicleEngine"}
              CarOption={option}
              isSelected={selectedEngineOption === option.id}
              onSelect={() => setSelectedVehicleOption(option.id)}
            />
          );
        })}
      </div>

      {/* Options (external) */}
      <div className="configurator-options-section">
        <h3>Options</h3>
      </div>
      <div className="configurator-options-container">
        {vehicleOptions.map(function (option) {
          return (
            <ConfiguratorMultipleOption
              key={option.id}
              type={"Option"}
              CarOption={option}
            />
          );
        })}
      </div>

      <ConfiguratorSummary />
    </div>
  );
};

export default ConfiguratorFrame;
