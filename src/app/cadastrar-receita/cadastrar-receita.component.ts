import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-receita',
  templateUrl: './cadastrar-receita.component.html',
  styleUrls: ['./cadastrar-receita.component.css'],
})
export class CadastrarReceitaComponent {
  receita = { nome: '', ingredientes: '', foto: '' };

  cadastrarReceita() {
    // Implemente a lógica de cadastro aqui
    console.log('Receita a ser cadastrada:', this.receita);
  }
}
