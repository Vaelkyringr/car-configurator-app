import './ConfiguratorVehicleOptions.css';
import CarOption from "../../api/CarOption";
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addToVehiclePrice, subtractFromVehiclePrice } from "../../state/vehiclePrice/vehiclePriceSlice";
import { setVehicleColor, resetVehicleColor } from "../../state/vehicleColor/vehicleColorSlice";
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

    const onOptionSelected = () => {
        
      setIsToggled(!isToggled);

      if (!isToggled) {
          dispatch(addToVehiclePrice(CarOption.cost));
      } else {
          dispatch(subtractFromVehiclePrice(CarOption.cost));
      }

      if (type === "vehicleColor") {
        dispatch(setVehicleColor(CarOption.filename));
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