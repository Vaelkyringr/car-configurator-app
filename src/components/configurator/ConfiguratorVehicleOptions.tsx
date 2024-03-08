import './ConfiguratorVehicleOptions.css';
import CarOption from "../../api/CarOption";
import { useDispatch } from "react-redux";
import { addToVehiclePrice, subtractFromVehiclePrice } from "../../state/vehicleprice/vehiclePriceSlice";
import React, { useState } from 'react';

interface ConfiguratorVehicleOptionsHeaderProps {
  type: string;
  CarOption: CarOption;
}

const ConfiguratorVehicleOptions: React.FC<ConfiguratorVehicleOptionsHeaderProps> = ({ type, CarOption }) => {

    const dispatch = useDispatch();
    const [isToggled, setIsToggled] = useState(false);
    const divStyle = isToggled ? {border: '1px solid black'} : {};

    const handleToggle = () => {
        setIsToggled(!isToggled);
        if (!isToggled) {
            dispatch(addToVehiclePrice(CarOption.cost));
        } else {
            dispatch(subtractFromVehiclePrice(CarOption.cost));
        }
    };

    return (
      <div className="configurator-vehicle-option" onClick={handleToggle} style={divStyle}>
        <h5>{CarOption.title}</h5>
        <p>{CarOption.description}</p>
        <p>Price: {CarOption.cost}</p>
      </div>
    );
  };

export default ConfiguratorVehicleOptions;