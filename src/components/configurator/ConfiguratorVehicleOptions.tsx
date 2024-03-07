interface ConfiguratorVehicleOptionsHeaderProps {
  type: string;
}

const ConfiguratorVehicleOptions: React.FC<ConfiguratorVehicleOptionsHeaderProps> = ({ type }) => {
    return (
      <div>
        <p> Option type {type} goes here </p>
      </div>
    );
  };

export default ConfiguratorVehicleOptions;