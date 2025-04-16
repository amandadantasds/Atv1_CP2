import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex10',
  imports: [FormsModule, CommonModule],
  templateUrl: './ex10.component.html',
  styleUrl: './ex10.component.css'
})
export class Ex10Component {
  valor1: number = 0;
  valor2: number = 0;
  operacao: string = '';
}
