import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css'],
})
export class ReceitaComponent {
  @Input() receita: any; // Certifique-se de que a propriedade 'receita' esteja definida aqui.
}
