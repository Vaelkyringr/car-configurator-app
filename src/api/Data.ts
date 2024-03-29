import CarOption from "./CarOption";

export const data: CarOption[] = [
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Denim Blue', filename: 'v60_denim_blue.png', cost: 900 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Fusion Red', filename: 'v60_fusion_red.png', cost: 1200 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Onyx Black', filename: 'v60_onyx_black.png', cost: 600 },
    { id: crypto.randomUUID(), category: 'VehicleColor', title: 'Vapour Grey', filename: 'v60_vapour_grey.png', cost: 700 },
    { id: crypto.randomUUID(), category: 'Engine', title: "T6 Plug-in Hybrid", filename: 'path',  cost: 5500 },
    { id: crypto.randomUUID(), category: 'Engine', title: 'D5 Mild Hybrid', filename: 'path', cost: 4000 },
    { id: crypto.randomUUID(), category: 'Engine', title: 'D4 Mild Hybrid', filename: 'path', cost: 2500 },
    { id: crypto.randomUUID(), category: 'Option', title: '360° Parking Camera View', filename: 'path', cost: 400 },
    { id: crypto.randomUUID(), category: 'Option', title: 'Panoramic Tinted Sunroof', filename: 'path', cost: 1400 },
    { id: crypto.randomUUID(), category: 'Option', title: 'Bowers & Wilkins Audio System', filename: 'path', cost: 2000},
    { id: crypto.randomUUID(), category: 'Option', title: 'R-Design Exterior Sport Kit', filename: 'path', cost: 800 },
    { id: crypto.randomUUID(), category: 'Option', title: 'Climate Package Plus', filename: 'path', cost: 400 },
    { id: crypto.randomUUID(), category: 'Option', title: 'Rear Tinted Windows', filename: 'path', cost: 450 },
  ];