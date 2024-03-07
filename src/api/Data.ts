import CarOptions from "./CarOptions";

export const data: CarOptions[] = [
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'blue', description: 'text here', cost: 200 },
    { id: crypto.randomUUID(), category: 'Engine', title: "T6 Plug-in Hybrid", description: 'text',  cost: 200 },
    { id: crypto.randomUUID(), category: 'Engine', title: 'D5 Mild Hybrid', description: 'text', cost: 200 },
    { id: crypto.randomUUID(), category: 'Engine', title: 'D4 Mild Hybrid', description: 'text', cost: 200 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: 'T6 Plug-in Hybrid', description: 'text', cost: 200 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: 'D5 Mild Hybrid', description: 'text', cost: 200 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: 'D4 Mild Hybrid', description: 'text', cost: 200 },
    { id: crypto.randomUUID(), category: 'ExteriorOptions', title: 'Sport exterior kit', description: 'text', cost: 200 },
  ];