class VehicleConfiguration {
  color: Color;
  engine: Engine;
  interiorOptions: InteriorOption[];
  exteriorOptions: ExteriorOption[];
  totalCost: number;

  constructor(color: Color, engine: Engine, interiorOptions: InteriorOption[], exteriorOptions: ExteriorOption[], totalCost: number) {
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

class Engine extends VehicleConfigurationBase {
  constructor(id: string, name: string, cost: number) {
    super(id, name, cost);  
  }
};

class Color extends VehicleConfigurationBase {
  fileName: string;
  constructor(id: string, name: string, cost: number, fileName: string) {
    super(id, name, cost);  
    this.fileName = fileName;
  }
};

class InteriorOption extends VehicleConfigurationBase {
  constructor(id: string, name: string, cost: number) {
    super(id, name, cost);  
  }
};

class ExteriorOption extends VehicleConfigurationBase {
  constructor(id: string, name: string, cost: number) {
    super(id, name, cost);  
  }
};

export type {
  VehicleConfiguration,
  Color,
  Engine,
  InteriorOption,
  ExteriorOption,
};
