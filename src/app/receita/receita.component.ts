import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css'],
})
export class ReceitaComponent {
  @Input() receita: any;
  botaoEditar = false;

  constructor(private router: Router) {
    this.botaoEditar = this.router.url.includes('/minha-receita');
  }

  visualizar(itemId: number) {
    this.router.navigate(['/visualizar/', itemId]);
  }

  editar(itemId: number) {
    this.router.navigate(['/editar/', itemId]);
  }
}
