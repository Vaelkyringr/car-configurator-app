import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const ConfiguratorVehicleView: React.FC = () => {
  
  const vehicleColor = useSelector((state: RootState) => state.vehicleConfiguration.value.color.fileName);

  return (
    <div className="configurator-vehicle-view fade-in">
      <img
        className="configurator-vehicle-view-image"
        width="900"
        height="520"
        src={`${process.env.PUBLIC_URL}/configurator/colors/${vehicleColor}`}
      />
    </div>
  );
};

export default ConfiguratorVehicleView;
