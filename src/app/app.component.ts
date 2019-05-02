import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "testappngprime";
  cars: any[];

  cols: any[];

  ngOnInit() {
    this.cars = [
      {
        vin: "vin1",
        year: 2010,
        brand: "brand 1",
        color: "color1"
      },
      {
        vin: "vin1",
        year: 2010,
        brand: "brand 1",
        color: "color1"
      },
      {
        vin: "vin1",
        year: 2010,
        brand: "brand 1",
        color: "color1"
      },
      {
        vin: "vin1",
        year: 2010,
        brand: "brand 1",
        color: "color1"
      },
      {
        vin: "vin1",
        year: 2010,
        brand: "brand 1",
        color: "color1"
      },
      {
        vin: "vin1",
        year: 2010,
        brand: "brand 1",
        color: "color1"
      },
      {
        vin: "vin1",
        year: 2010,
        brand: "brand 1",
        color: "color1"
      },
    ];
    this.cols = [
      { field: "vin", header: "Vin" },
      { field: "year", header: "Year" },
      { field: "brand", header: "Brand" },
      { field: "color", header: "Color" }
    ];
  }
}
