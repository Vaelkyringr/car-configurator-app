import './ConfiguratorVehicleOptions.css';
import CarOption from "../../api/CarOption";

interface ConfiguratorVehicleOptionsHeaderProps {
  type: string;
  CarOption: CarOption;
}

function onOptionSelectedClick() {
  alert('This will be reported to global state store soon! :-)');
}

const ConfiguratorVehicleOptions: React.FC<ConfiguratorVehicleOptionsHeaderProps> = ({ type, CarOption }) => {
    return (
      <div className="configurator-vehicle-option" onClick={onOptionSelectedClick}>
        <h5>{CarOption.title}</h5>
        <p>{CarOption.description}</p>
        <p>Price: {CarOption.cost}</p>
      </div>
    );
  };

export default ConfiguratorVehicleOptions;