import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ex07',
  standalone: true,
  imports: [
    NgForOf, FormsModule
  ],
  templateUrl: './ex07.component.html',
  styleUrl: './ex07.component.css'
})
export class Ex07Component {
  numbers: number[] = [];
  fruits: string[] = [];
  sortOrder: string = 'asc';
  sortOrderNum: string = 'asc';

  constructor() { }

  ngOnInit(): void {
    this.numbers = [1, 5, 8, 24, 32, 11, 55];
    this.fruits = ["pear", "apple", "mango", "watermelon", "kiwi"];
  }
  
  // Cómo le paso el value del select
  orderList() {
    if (this.sortOrderNum === "asc")
      this.numbers.sort((a, b) => a - b);
    
    else
      this.numbers.sort((a, b) => b - a);
  }

  sortListFruit() {
    if (this.sortOrder === 'asc') {
      this.fruits.sort((a, b) => a.localeCompare(b));
    } else {
      this.fruits.sort((a, b) => b.localeCompare(a));
    }
  }
}
