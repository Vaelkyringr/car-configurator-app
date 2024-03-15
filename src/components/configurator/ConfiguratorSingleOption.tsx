import "./ConfiguratorSingleOption.css";
import CarOption from "../../api/CarOption";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { addEngineConfiguration, removeEngineConfiguration, addColorConfiguration, removeColorConfiguration } from "../../state/vehicleConfiguration/vehicleConfiguratonSlice";

interface ConfiguratorVehicleOptionsHeaderProps {
  type: string;
  CarOption: CarOption;
}

const ConfiguratorSingleOption: React.FC<ConfiguratorVehicleOptionsHeaderProps & { isSelected: boolean; onSelect: () => void; }> 
= ({ type, CarOption, isSelected, onSelect }) => {

  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);
  const engine = useSelector((state: RootState) => state.vehicleConfiguration.value.engine);
  const color = useSelector((state: RootState) => state.vehicleConfiguration.value.color);
  const style = isSelected ? { border: '2px solid #898989' } : {};

  const onOptionSelected = () => {
    onSelect();
    setIsToggled(!isToggled);

    switch (type) {
      case "vehicleEngine":
        handleEngineOption();
        break;
      case "vehicleColor":
        handleColorOption();
        break;
    }
  };

  const handleEngineOption = () => {
    if (Object.keys(engine).length !== 0) {
      dispatch(removeEngineConfiguration(engine));
    }
    if (!isSelected) {
      dispatch(addEngineConfiguration({
        id: CarOption.id,
        name: CarOption.title,
        cost: CarOption.cost,
      }));
    }
  };

  const handleColorOption = () => {
    if (isSelected) return;

    if (Object.keys(color).length !== 0) {
      dispatch(removeColorConfiguration(color));
    }

    if (!isSelected) {
      dispatch(addColorConfiguration({
        id: CarOption.id,
        name: CarOption.title,
        cost: CarOption.cost,
        fileName: CarOption.filename,
      }));
    }
  };

  return (
    <div className="configurator-vehicle-single-option fade-in" onClick={onOptionSelected} style={style}>
      <h5>{CarOption.title}</h5>
      <p>{CarOption.cost.toLocaleString("de-DE")} EUR</p>
      <input type="radio" checked={isSelected} readOnly />
    </div>
  );
};

export default ConfiguratorSingleOption;