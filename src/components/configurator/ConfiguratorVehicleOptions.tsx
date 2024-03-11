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

const ConfiguratorVehicleOptions: React.FC<ConfiguratorVehicleOptionsHeaderProps> = ({ type, CarOption }) => {

    const dispatch = useDispatch();
    const [isToggled, setIsToggled] = useState(false);
    const selectedOption = isToggled ? { border: '2px solid #002255' } : {};
    const engine = useSelector((state: RootState) => state.vehicleConfiguration.value.engine);

    const onOptionSelected = () => {

      setIsToggled(!isToggled);

      switch(type) { 
        case "vehicleEngine": { 

          if (Object.keys(engine).length !== 0) {
            alert('Engine configuration already exists, please deselect your current choice.');
            return;
          }

          if (!isToggled) {
            dispatch(addEngineConfiguration({ id: CarOption.id, name: CarOption.title, cost: CarOption.cost }));
          } else {
            dispatch(removeEngineConfiguration({ id: CarOption.id, name: CarOption.title, cost: CarOption.cost }));
          }

          break;
        }
     }

    };

    return (
      <div className="configurator-vehicle-option fade-in" onClick={onOptionSelected} style={selectedOption}>
        <h5>{CarOption.title}</h5>
        <p>{CarOption.cost.toLocaleString('sv-SE')} SEK</p>
      </div>
    );
  };

export default ConfiguratorVehicleOptions;