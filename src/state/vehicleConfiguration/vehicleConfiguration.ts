class VehicleConfiguration {
  color: Color;
  engine: Engine;
  interiorOptions: InteriorOption[];
  exteriorOptions: ExteriorOption[];
  totalCost: number;

  constructor(
    color: Color,
    engine: Engine,
    interiorOptions: InteriorOption[],
    exteriorOptions: ExteriorOption[],
    totalCost: number
  ) {
    this.color = color;
    this.engine = engine;
    this.interiorOptions = interiorOptions;
    this.exteriorOptions = exteriorOptions;
    this.totalCost = totalCost;
  }
}

class VehicleConfigurationBase {
  id: string;
  name: string;
  cost: number;

  constructor(id: string, name: string, cost: number) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }
}

class Color extends VehicleConfigurationBase {
  fileName: string;
  constructor(id: string, name: string, cost: number, fileName: string) {
    super(id, name, cost);
    this.fileName = fileName;
  }
}

class Engine extends VehicleConfigurationBase {}

class InteriorOption extends VehicleConfigurationBase {}

class ExteriorOption extends VehicleConfigurationBase {}

export type {
  VehicleConfiguration,
  Color,
  Engine,
  InteriorOption,
  ExteriorOption,
};
