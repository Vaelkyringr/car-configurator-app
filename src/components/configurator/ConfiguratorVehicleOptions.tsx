import './ConfiguratorVehicleOptions.css';
import CarOption from "../../api/CarOption";
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addToVehiclePrice, subtractFromVehiclePrice, /*vehicleColorSlice*/ } from "../../state/vehiclePrice/vehiclePriceSlice";

interface ConfiguratorVehicleOptionsHeaderProps {
  type: string;
  CarOption: CarOption;
}

const ConfiguratorVehicleOptions: React.FC<ConfiguratorVehicleOptionsHeaderProps> = ({ type, CarOption }) => {

    const dispatch = useDispatch();
    const [isToggled, setIsToggled] = useState(false);
    const divStyle = isToggled ? { border: '2px solid black' } : {};

    const handleToggle = () => {
        
      setIsToggled(!isToggled);
        
      if (!isToggled) {
          dispatch(addToVehiclePrice(CarOption.cost));
      } else {
          dispatch(subtractFromVehiclePrice(CarOption.cost));
      }

      if (type === "vehicleColor") {
        alert("color is type")
          //dispatch(setVehicleColor(CarOption.))
      }

    };

    return (
      <div className="configurator-vehicle-option fade-in" onClick={handleToggle} style={divStyle}>
        <h5>{CarOption.title}</h5>
        <p>{CarOption.icon}</p>
        <p>{CarOption.cost.toLocaleString('sv-SE')} SEK</p>
      </div>
    );
  };

export default ConfiguratorVehicleOptions;