import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

type Employee = {
  name: string;
  position: string;
  salary: number;
}

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [
    /* NgForOf */
  ],
  templateUrl: './ex09.component.html',
  styleUrl: './ex09.component.css'
})

export class Ex09Component {
  employees: Employee[] = [];

  constructor() { }

  ngOnInit(): void {
    this.employees = [{name:'John', position:'Developer', salary:1000},
      {name:'John', position:'Developer', salary:1000},
    ];
  }
}
