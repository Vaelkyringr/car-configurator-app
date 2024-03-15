import "./ConfiguratorMultipleOption.css";
import CarOption from "../../api/CarOption";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExteriorOptionConfiguration, removeExteriorOptionConfiguration } from "../../state/vehicleConfiguration/vehicleConfiguratonSlice";

interface ConfiguratorVehicleOptionsHeaderProps {
  type: string;
  CarOption: CarOption;
}

const ConfiguratorMultipleOption: React.FC<ConfiguratorVehicleOptionsHeaderProps> = ({ CarOption }) => {
  
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);
  const style = isToggled ? { border: '2px solid #898989' } : {};

  const onOptionSelected = () => {
    setIsToggled(!isToggled);

    if (!isToggled) {
      dispatch(
        addExteriorOptionConfiguration({
          id: CarOption.id,
          name: CarOption.title,
          cost: CarOption.cost,
        })
      );
    } else {
      dispatch(
        removeExteriorOptionConfiguration({
          id: CarOption.id,
          name: CarOption.title,
          cost: CarOption.cost,
        })
      );
    }
  };

  return (
    <div className="configurator-vehicle-multiple-option fade-in" onClick={onOptionSelected} style={style}>
      <h5>{CarOption.title}</h5>
      <p>{CarOption.cost.toLocaleString("de-DE")} EUR</p>
      <input readOnly className="configurator-vehicle-option-checkbox" type="checkbox"checked={isToggled} />
    </div>
  );
};

export default ConfiguratorMultipleOption;
