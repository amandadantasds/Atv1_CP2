import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex5',
  imports: [FormsModule, CommonModule],
  templateUrl: './ex5.component.html',
  styleUrl: './ex5.component.css'
})
export class Ex5Component {
  status: string = '';
}
