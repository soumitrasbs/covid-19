import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-covid-corona',
  templateUrl: './covid-corona.component.html',
  styleUrls: ['./covid-corona.component.css']
})
export class CovidCoronaComponent {
  public employees = [
    { "id": 1, "name": "Soumitra Bag", "dept": "Ui Developer" },
    { "id": 2, "name": "Chayan Bhowmik", "dept": "Software Developer" },
    { "id": 3, "name": "Swagata Das", "dept": "Ui Developer" },
    { "id": 4, "name": "Abhishek Das", "dept": "Software Developer" }

  ];
  
  firstname: string="Soumitra";
  lastname: string ="Bag";
  age: number = 20;
  gender: string="Male";

  
  
}
