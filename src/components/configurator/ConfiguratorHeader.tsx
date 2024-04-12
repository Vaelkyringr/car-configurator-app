import "./ConfiguratorHeader.css";

interface ConfiguratorHeaderProps {
  heading: string;
  subtitle: string;
}

const ConfiguratorHeader = ({ heading, subtitle }: ConfiguratorHeaderProps) => {
  return (
    <div className="configurator-header">
      <h1>{heading}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default ConfiguratorHeader;
