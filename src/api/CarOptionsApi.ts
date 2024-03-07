import CarOptions from "./CarOptions";
import { data } from './Data';

class CarOptionsApi {

    // Network delay simulated
    readonly networkDelay: number = 1000;

    getVehicleColors() : Promise<CarOptions[]> {
      return new Promise((resolve) => {
        setTimeout(() => resolve(data.filter(item => item.category === "VehicleColor")), this.networkDelay)
      })
    }

    getVehicleEngineOptions() : Promise<CarOptions[]> {
      return new Promise((resolve) => {
        setTimeout(() => resolve(data.filter(item => item.category === "Engine")), this.networkDelay)
      })
    }

    getVehicleInteriorOptions() : Promise<CarOptions[]> {
      return new Promise((resolve) => {
        setTimeout(() => resolve(data.filter(item => item.category === "InteriorOptions")), this.networkDelay)
      })
    }

    getVehicleExteriorOptions() : Promise<CarOptions[]> {
      return new Promise((resolve) => {
        setTimeout(() => resolve(data.filter(item => item.category === "ExteriorOptions")), this.networkDelay)
      })
    }

}
  
export default CarOptionsApi;