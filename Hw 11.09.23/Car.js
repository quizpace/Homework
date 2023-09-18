class Car {
  constructor(brand, model, year, color, km) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.km = km;
  }

  updateBrand(new_brand) {
    this.brand = new_brand;
  }

  updateModel(new_model) {
    this.model = new_model;
  }

  updateYear(new_year) {
    this.year = new_year;
  }

  updateColor(new_color) {
    this.color = new_color;
  }

  updateKm(new_km) {
    this.km = new_km;
  }
}
