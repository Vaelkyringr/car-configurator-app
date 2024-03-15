class CarOption {
  id: string;
  category: string;
  cost: number;
  title: string;
  filename: string;

  constructor(id: string, category: string, cost: number, title: string, filename: string) {
    this.id = id;
    this.category = category;
    this.cost = cost;
    this.title = title;
    this.filename = filename;
  }
}

export default CarOption;
