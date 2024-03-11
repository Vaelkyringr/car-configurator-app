import './ConfiguratorVehicleOptions.css';
import CarOption from "../../api/CarOption";
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { setVehicleColor, resetVehicleColor } from "../../state/vehicleColor/vehicleColorSlice";
import { addEngineConfiguration, removeEngineConfiguration } from "../../state/vehicleConfiguration/vehicleConfiguratonSlice";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";

interface ConfiguratorVehicleOptionsHeaderProps {
  type: string;
  CarOption: CarOption;
}

const ConfiguratorVehicleOptions: React.FC<ConfiguratorVehicleOptionsHeaderProps & { isSelected: boolean; onSelect: () => void }> = ({ type, CarOption, isSelected, onSelect }) => {

    const dispatch = useDispatch();
    const [isToggled, setIsToggled] = useState(false);
    const engine = useSelector((state: RootState) => state.vehicleConfiguration.value.engine);

    const onOptionSelected = () => {

      onSelect();
      setIsToggled(!isToggled);

      switch(type) { 
        case "vehicleEngine": { 
          if (!isSelected) {
            dispatch(addEngineConfiguration({ id: CarOption.id, name: CarOption.title, cost: CarOption.cost }));
          } else {
            dispatch(removeEngineConfiguration({ id: CarOption.id, name: CarOption.title, cost: CarOption.cost }));
          }
          break;

        }
     }

    };

    return (
      <div className="configurator-vehicle-option fade-in" onClick={onOptionSelected} >
        <h5>{CarOption.title}</h5>
        <p>{CarOption.cost.toLocaleString('sv-SE')} SEK</p>
        <input type="radio" checked={isSelected} readOnly />
      </div>
    );
  };

export default ConfiguratorVehicleOptions;