import CarOptions from "./CarOption";

export const data: CarOptions[] = [
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Denim Blue', description: 'text here', cost: 9000 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Fusion Red', description: 'text here', cost: 12000 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Onyx Black', description: 'text here', cost: 6000 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Vapour Grey', description: 'text here', cost: 7000 },
    { id: crypto.randomUUID(), category: 'Engine', title: "T6 Plug-in Hybrid", description: 'text',  cost: 55000 },
    { id: crypto.randomUUID(), category: 'Engine', title: 'D5 Mild Hybrid', description: 'text', cost: 40000 },
    { id: crypto.randomUUID(), category: 'Engine', title: 'D4 Mild Hybrid', description: 'text', cost: 25000 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: '360° Parking camera', description: 'text', cost: 4000 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: 'Panorama roof', description: 'text', cost: 14000 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: 'Bowers & Wilkins audio system', description: 'text', cost: 20000},
    { id: crypto.randomUUID(), category: 'ExteriorOptions', title: 'Sport package', description: 'text', cost: 8000 },
    { id: crypto.randomUUID(), category: 'ExteriorOptions', title: 'Sport front & rear diffusor', description: 'text', cost: 1500 },
    { id: crypto.randomUUID(), category: 'ExteriorOptions', title: 'Tinted windows', description: 'text', cost: 4500 },
  ];