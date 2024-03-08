import CarOptions from "./CarOption";

export const data: CarOptions[] = [
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Denim Blue', icon: 'path', cost: 9000 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Fusion Red', icon: 'path', cost: 12000 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Onyx Black', icon: 'path', cost: 6000 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Vapour Grey', icon: 'path', cost: 7000 },
    { id: crypto.randomUUID(), category: 'Engine', title: "T6 Plug-in Hybrid", icon: 'path',  cost: 55000 },
    { id: crypto.randomUUID(), category: 'Engine', title: 'D5 Mild Hybrid', icon: 'path', cost: 40000 },
    { id: crypto.randomUUID(), category: 'Engine', title: 'D4 Mild Hybrid', icon: 'path', cost: 25000 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: '360° Parking camera', icon: 'path', cost: 4000 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: 'Panorama roof', icon: 'path', cost: 14000 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: 'Bowers & Wilkins audio system', icon: 'path', cost: 20000},
    { id: crypto.randomUUID(), category: 'ExteriorOptions', title: 'Sport package', icon: 'path', cost: 8000 },
    { id: crypto.randomUUID(), category: 'ExteriorOptions', title: 'Sport front & rear diffusor', icon: 'path', cost: 1500 },
    { id: crypto.randomUUID(), category: 'ExteriorOptions', title: 'Tinted windows', icon: 'path', cost: 4500 },
  ];