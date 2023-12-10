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
    this.carregarReceitasPendentes();
  }

  carregarReceitasPendentes(): void {
    this.receitaService.getReceitasPendentes().subscribe((data) => {
      this.listaDeReceitas = data;
    });
  }

  // Função para aprovar a receita com base no ID
  aprovarReceita(id: number, novoEstado: number): void {
    this.receitaService.updateEstadoReceita(id, novoEstado).subscribe(() => {
      // Atualiza a lista de receitas após a aprovação
      this.carregarReceitasPendentes();
    });
  }
}
