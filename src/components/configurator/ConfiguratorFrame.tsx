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
  const [vehicleInteriorOptions, setVehicleInteriorOptions] = useState<
    CarOption[]
  >([]);
  const [vehicleExteriorOptions, setVehicleExteriorOptions] = useState<
    CarOption[]
  >([]);

  // test
  const [selectedColorOption, setSelectedColorOption] = useState<string | null>(
    null
  );
  const [selectedEngineOption, setSelectedVehicleOption] = useState<
    string | null
  >(null);

  useEffect(() => {
    api.getVehicleColors().then((responseData) => {
      setVehicleColors(responseData);
    });
    api
      .getVehicleEngineOptions()
      .then((responseData) => setVehicleEngines(responseData));
    api
      .getVehicleInteriorOptions()
      .then((responseData) => setVehicleInteriorOptions(responseData));
    api
      .getVehicleExteriorOptions()
      .then((responseData) => setVehicleExteriorOptions(responseData));
  }, []);

  return (
    <div className="configurator-container">
      <ConfiguratorHeader
        heading={"Your Volvo V60"}
        subtitle={
          "Configure your V60 and add equipment, packages and styling to suit your needs."
        }
      />
      <ConfiguratorVehicleView />

      {/* Colors */}
      <div className="configurator-options-section">
        <h3>Colors</h3>
      </div>
      <div className="configurator-options-container">
        {vehicleColors.map(function (option, i) {
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
        {vehicleEngines.map(function (option, i) {
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
        <h3>Exterior Options</h3>
      </div>
      <div className="configurator-options-container">
        {vehicleExteriorOptions.map(function (option, i) {
          return (
            <ConfiguratorMultipleOption
              type={"exteriorOption"}
              CarOption={option}
            />
          );
        })}
      </div>

      {/* Options (internal) */}
      <div className="configurator-options-section">
        <h3>Interior Options</h3>
      </div>
      <div className="configurator-options-container">
        {vehicleInteriorOptions.map(function (option, i) {
          return (
            <ConfiguratorMultipleOption
              type={"interiorOption"}
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
