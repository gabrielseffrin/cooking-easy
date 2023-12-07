import { Component } from '@angular/core';
import { ReceitaService } from 'service/receita.service';

@Component({
  selector: 'app-aprovar-receita',
  templateUrl: './aprovar-receita.component.html',
  styleUrls: ['./aprovar-receita.component.css'],
})
export class AprovarReceitaComponent {
  listaDeReceitas: any[] = [];

  constructor(private receitaService: ReceitaService) {}

  ngOnInit(): void {
    this.receitaService.getReceitasPendentes().subscribe((data) => {
      this.listaDeReceitas = data;
    });
  }
}
