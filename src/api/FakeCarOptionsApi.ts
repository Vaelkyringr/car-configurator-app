import FakeCarOptions from "./FakeCarOptions";

// Network delay simulated
class FakeCarOptionsApi {

    private data: FakeCarOptions[] = [
      { id: 1, option: 'Color', spec: 'blue', cost: 200 }
    ];

    getAllCars(): Promise<FakeCarOptions[]> {
      return new Promise((resolve) => {
        setTimeout(() => resolve(this.data), 1000);
      });
    }
  
    getCarById(id: number): Promise<FakeCarOptions | undefined> {
      return new Promise((resolve) => {
        setTimeout(() => resolve(this.data.find((car) => car.id === id)), 1000);
      });
    }
  }
  
export default FakeCarOptionsApi;