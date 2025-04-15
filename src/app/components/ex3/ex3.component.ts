import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex3',
  imports: [FormsModule, CommonModule],
  templateUrl: './ex3.component.html',
  styleUrl: './ex3.component.css'
})
export class Ex3Component {
  idade: number = 0; 

  aumentarIdade(): void {
    this.idade++; 
  }

  diminuirIdade(): void {
    if (this.idade > 0) {
      this.idade--;
    }
  }

  verificarIdade(): void {
    if (this.idade < 0) {
      this.idade = 0; 
    }
  }
}
