import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css'],
})
export class ReceitaComponent {
  @Input() receita: any;

  constructor(private router: Router) {}

  visualizar(itemId: number) {
    this.router.navigate(['/visualizar/', itemId]);
  }
}
