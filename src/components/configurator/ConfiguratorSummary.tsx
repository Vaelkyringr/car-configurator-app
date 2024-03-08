import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import './ConfiguratorSummary.css';

const ConfiguratorSummary: React.FC = () => {

    const vehicleTotalPrice = useSelector((state: RootState) => state.counter.value);

    return (
      <div className="configurator-summary">
        <h2>{vehicleTotalPrice.toLocaleString('sv-SE')} SEK</h2>
        <p>Please note that the displayed price does not include local taxes, import duties, or any other potential charges.</p>
      </div>
    );
  };

export default ConfiguratorSummary;