type VehicleConfiguration = {
    engine: Engine;
    totalCost: number;
};

type Engine = {
    id: string
    name: string;
    cost: number;
};

type Color = {

}

export type { Color, Engine, VehicleConfiguration };