import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import './ConfiguratorSummary.css';

const ConfiguratorSummary: React.FC = () => {

    const vehicleConfiguration = useSelector((state: RootState) => state.vehicleConfiguration);

    return (
      <div className="configurator-summary">
        <h2> {vehicleConfiguration.value.totalCost.toLocaleString('sv-SE')} SEK</h2>
        <p>Please note that the displayed price does not include local taxes, import duties, or any other potential charges.</p>
      </div>
    );
  };

export default ConfiguratorSummary;