import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  imports: [],
  templateUrl: './ex6.component.html',
  styleUrl: './ex6.component.css'
})
export class Ex6Component {
  usuarios = [
    { nome: 'Ana', idade: 25 },
    { nome: 'Carlos', idade: 30 }
  ];
}
