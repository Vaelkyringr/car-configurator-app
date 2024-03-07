import CarOptions from "./CarOption";

export const data: CarOptions[] = [
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Denim Blue', description: 'text here', cost: 200 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Fusion Red', description: 'text here', cost: 200 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Onyx Black', description: 'text here', cost: 200 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Vapour Grey', description: 'text here', cost: 200 },
    { id: crypto.randomUUID(), category: 'Engine', title: "T6 Plug-in Hybrid", description: 'text',  cost: 200 },
    { id: crypto.randomUUID(), category: 'Engine', title: 'D5 Mild Hybrid', description: 'text', cost: 200 },
    { id: crypto.randomUUID(), category: 'Engine', title: 'D4 Mild Hybrid', description: 'text', cost: 200 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: 'T6 Plug-in Hybrid', description: 'text', cost: 200 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: 'D5 Mild Hybrid', description: 'text', cost: 200 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: 'D4 Mild Hybrid', description: 'text', cost: 200 },
    { id: crypto.randomUUID(), category: 'ExteriorOptions', title: 'Sport exterior kit', description: 'text', cost: 200 },
  ];