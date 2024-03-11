import CarOptions from "./CarOption";

export const data: CarOptions[] = [
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Ice White', filename: 'v60_default.png', cost: 0 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Denim Blue', filename: 'v60_denim_blue.png', cost: 9000 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Fusion Red', filename: 'v60_fusion_red.png', cost: 12000 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Onyx Black', filename: 'v60_onyx_black.png', cost: 6000 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Vapour Grey', filename: 'v60_vapour_grey.png', cost: 7000 },
    { id: "ENGINE_001", category: 'Engine', title: "T6 Plug-in Hybrid", filename: 'path',  cost: 55000 },
    { id: "ENGINE_002", category: 'Engine', title: 'D5 Mild Hybrid', filename: 'path', cost: 40000 },
    { id: "ENGINE_003", category: 'Engine', title: 'D4 Mild Hybrid', filename: 'path', cost: 25000 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: '360° Parking camera', filename: 'path', cost: 4000 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: 'Panorama roof', filename: 'path', cost: 14000 },
    { id: crypto.randomUUID(), category: 'InteriorOptions', title: 'Bowers & Wilkins audio system', filename: 'path', cost: 20000},
    { id: crypto.randomUUID(), category: 'ExteriorOptions', title: 'Sport package', filename: 'path', cost: 8000 },
    { id: crypto.randomUUID(), category: 'ExteriorOptions', title: 'Sport front & rear diffusor', filename: 'path', cost: 1500 },
    { id: crypto.randomUUID(), category: 'ExteriorOptions', title: 'Tinted windows', filename: 'path', cost: 4500 },
  ];