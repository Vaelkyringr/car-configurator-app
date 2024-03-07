import { uuid } from 'uuidv4';
import FakeCarOptions from "./CarOptions";

export const data: FakeCarOptions[] = [
    { id: uuid(), category: 'VehicleColor', title: 'blue', description: 'text here', cost: 200 },
    { id: uuid(), category: 'Engine', title: "T6 Plug-in Hybrid", description: 'text',  cost: 200 },
    { id: uuid(), category: 'Engine', title: 'D5 Mild Hybrid', description: 'text', cost: 200 },
    { id: uuid(), category: 'Engine', title: 'D4 Mild Hybrid', description: 'text', cost: 200 },
    { id: uuid(), category: 'InteriorOptions', title: 'T6 Plug-in Hybrid', description: 'text', cost: 200 },
    { id: uuid(), category: 'InteriorOptions', title: 'D5 Mild Hybrid', description: 'text', cost: 200 },
    { id: uuid(), category: 'InteriorOptions', title: 'D4 Mild Hybrid', description: 'text', cost: 200 },
    { id: uuid(), category: 'ExteriorOptions', title: 'Sport exterior kit', description: 'text', cost: 200 },
  ];