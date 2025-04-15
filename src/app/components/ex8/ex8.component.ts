import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex8',
  imports: [FormsModule, CommonModule],
  templateUrl: './ex8.component.html',
  styleUrl: './ex8.component.css'
})
export class Ex8Component {
  email = '';
  senha = '';
}
