import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { PDFDownloadLink } from "@react-pdf/renderer";
// import { getVehicleConfiguration } from '../../state/vehicleConfiguration/vehicleConfiguratonSlice';
//import VehicleSummaryDocument from "../../reports/VehicleSummaryDocument";
import "./ConfiguratorSummary.css";

const ConfiguratorSummary = () => {
  const vehicleConfiguration = useSelector(
    (state: RootState) => state.vehicleConfiguration
  );

  return (
    <div className="configurator-summary">
      <h3>Total price</h3>
      <h2>
        {vehicleConfiguration.value.totalCost.toLocaleString("de-DE")} EUR
      </h2>
      <p>
        Please note that the displayed price does not include local taxes,
        import duties, or any other potential charges.
      </p>
      {/* <PDFDownloadLink
        document={<VehicleSummaryDocument vehicleConfiguration={}/>}
        fileName="vehicleSummary.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download specification report"
        }
      </PDFDownloadLink> */}
    </div>
  );
};

export default ConfiguratorSummary;
