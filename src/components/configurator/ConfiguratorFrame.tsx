import './ConfiguratorFrame.css';
import ConfiguratorHeader from './ConfiguratorHeader';

function ConfiguratorFrame() {
  return (
    <div className="Container">
      <ConfiguratorHeader heading={'Your Volvo V60'} subtitle={'Choose a car model and add equipment, packages and styling to suit your needs.'} />
    </div>
  );
}

export default ConfiguratorFrame;