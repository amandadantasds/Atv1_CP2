import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  imports: [],
  templateUrl: './ex9.component.html',
  styleUrl: './ex9.component.css'
})
export class Ex9Component {
  produtos = [
    { nome: 'Notebook', preco: 3000, promocao: true },
    { nome: 'Mouse', preco: 50, promocao: false }
  ];

}
