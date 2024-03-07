import CarOption from "../../api/CarOption";

interface ConfiguratorVehicleOptionsHeaderProps {
  type: string;
  CarOption: CarOption;
}

const ConfiguratorVehicleOptions: React.FC<ConfiguratorVehicleOptionsHeaderProps> = ({ type, CarOption }) => {
    return (
      <div>
        <h5>{CarOption.title}</h5>
        <p>{CarOption.description}</p>
        <p>Price: {CarOption.cost}</p>
      </div>
    );
  };

export default ConfiguratorVehicleOptions;