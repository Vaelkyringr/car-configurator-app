type VehicleConfiguration = {
    engine: Engine;
    totalCost: number;
};

type Engine = {
    id: string
    name: string;
    cost: number;
};

export type { Engine, VehicleConfiguration };