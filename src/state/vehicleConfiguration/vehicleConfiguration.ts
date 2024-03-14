type VehicleConfiguration = {
    color: Color;
    engine: Engine;
    interiorOptions: InteriorOptions[],
    exteriorOptions: ExteriorOptions[],
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

type InteriorOptions = {
    id: string
    name: string;
    cost: number;
}

type ExteriorOptions = {
    id: string
    name: string;
    cost: number;
}

export type { Color, Engine, VehicleConfiguration };