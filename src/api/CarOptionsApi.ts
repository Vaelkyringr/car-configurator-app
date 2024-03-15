import CarOptions from "./CarOption";
import { data } from "./Data";

class CarOptionsApi {
  
  // Network delay simulated
  readonly networkDelay: number = 500;

  getVehicleColors(): Promise<CarOptions[]> {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(data.filter((item) => item.category === "VehicleColor")),
        this.networkDelay
      );
    });
  }

  getVehicleEngineOptions(): Promise<CarOptions[]> {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(data.filter((item) => item.category === "Engine")),
        this.networkDelay
      );
    });
  }

  getVehicleOptions(): Promise<CarOptions[]> {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(data.filter((item) => item.category === "Option")),
        this.networkDelay
      );
    });
  }

}

export default CarOptionsApi;
