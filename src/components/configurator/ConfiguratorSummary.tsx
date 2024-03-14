import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import "./ConfiguratorSummary.css";

const ConfiguratorSummary: React.FC = () => {

  const vehicleConfiguration = useSelector((state: RootState) => state.vehicleConfiguration);

  const onCreateSpecification = () => {
    alert("test");
  };

  return (
    <div className="configurator-summary">
      <h3>Total price</h3>
      <h2>{vehicleConfiguration.value.totalCost.toLocaleString("sv-SE")} SEK</h2>
      <p>Please note that the displayed price does not include local taxes, import duties, or any other potential charges.</p>
      <p onClick={onCreateSpecification}>Generate specification PDF</p>
    </div>
  );
};

export default ConfiguratorSummary;
