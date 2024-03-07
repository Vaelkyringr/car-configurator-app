import './ConfiguratorFrame.css';
import ConfiguratorHeader from './ConfiguratorHeader';
import ConfiguratorSummary from './ConfiguratorSummary';
import ConfiguratorVehicleView from './ConfiguratorVehicleView';
import ConfiguratorVehicleOptions from './ConfiguratorVehicleOptions';

function ConfiguratorFrame() {
  return (
    <div className="Container">
      <ConfiguratorHeader heading={'Your Volvo V60'} subtitle={'Choose a car model and add equipment, packages and styling to suit your needs.'} />
      <ConfiguratorVehicleView />
      <ConfiguratorVehicleOptions />
      <ConfiguratorSummary />
    </div>
  );
}

export default ConfiguratorFrame;