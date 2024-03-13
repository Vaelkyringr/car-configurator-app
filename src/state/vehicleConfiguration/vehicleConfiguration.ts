type VehicleConfiguration = {
    color: Color;
    engine: Engine;
    totalCost: number;
};

type Engine = {
    id: string
    name: string;
    cost: number;
};

type Color = {
    id: string
    name: string;
    cost: number;
    fileName: string;
}

export type { Color, Engine, VehicleConfiguration };