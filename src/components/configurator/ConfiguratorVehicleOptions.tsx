import './ConfiguratorVehicleOptions.css';
import CarOption from "../../api/CarOption";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { increment, decrement, incrementByAmount } from "../../state/counter/counterSlice";

interface ConfiguratorVehicleOptionsHeaderProps {
  type: string;
  CarOption: CarOption;
}

const ConfiguratorVehicleOptions: React.FC<ConfiguratorVehicleOptionsHeaderProps> = ({ type, CarOption }) => {

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
      <div className="configurator-vehicle-option" /*onClick={onOptionSelectedClick*}*/>
        <h5>{CarOption.title}</h5>
        <h2>{count}</h2>
        <p>{CarOption.description}</p>
        <p>Price: {CarOption.cost}</p>
        <button onClick={() => dispatch(increment())}> Increment </button>
        <button onClick={() => dispatch(incrementByAmount(10))}> Increment by 10 </button>
        <button onClick={() => dispatch(decrement())}> Decrement </button>
      </div>
    );
  };

export default ConfiguratorVehicleOptions;