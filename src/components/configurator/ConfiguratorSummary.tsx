import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { addToVehiclePrice, subtractFromVehiclePrice } from "../../state/vehicleprice/vehiclePriceSlice";

const ConfiguratorSummary: React.FC = () => {

    const vehicleTotalPrice = useSelector((state: RootState) => state.counter.value);

    return (
      <div className="configurator-summary">
        <h2>{vehicleTotalPrice} SEK</h2>
        <p>Some text here describing additional fees.</p>
      </div>
    );
  };

export default ConfiguratorSummary;