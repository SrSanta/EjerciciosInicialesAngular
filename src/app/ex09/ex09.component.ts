import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import { Employee } from '../Models/employee.model';
import { employees } from '../employees_list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type emplKey = keyof Employee;

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
    FormsModule
  ],
  templateUrl: './ex09.component.html',
  styleUrl: './ex09.component.css'
})

export class Ex09Component {
  employees: Employee[] = [];
  sortingCriteria:emplKey = 'name';

  constructor() { }

  ngOnInit(): void {
    this.employees = employees;
  }

  sortEmployees(sortCriteria: string): void {
    console.log(sortCriteria);

    let key: emplKey = this.sortingCriteria;
    console.log(key);

    this.employees.sort((a:Employee, b:Employee) => a[key] > b[key] ? 1 : -1);

  }
}
