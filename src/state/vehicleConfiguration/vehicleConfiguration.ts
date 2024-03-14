type VehicleConfiguration = {
  color: Color;
  engine: Engine;
  interiorOptions: InteriorOption[];
  exteriorOptions: ExteriorOption[];
  totalCost: number;
};

type Engine = {
  id: string;
  name: string;
  cost: number;
};

type Color = {
  id: string;
  name: string;
  cost: number;
  fileName: string;
};

type InteriorOption = {
  id: string;
  name: string;
  cost: number;
};

type ExteriorOption = {
  id: string;
  name: string;
  cost: number;
};

export type {
  VehicleConfiguration,
  Color,
  Engine,
  InteriorOption,
  ExteriorOption,
};
