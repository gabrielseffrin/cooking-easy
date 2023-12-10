import { Component } from '@angular/core';
import { ReceitaService } from 'service/receita.service';

@Component({
  selector: 'app-minha-receita',
  templateUrl: './minha-receita.component.html',
  styleUrls: ['./minha-receita.component.css'],
})
export class MinhaReceitaComponent {
  listaDeReceitas: any[] = [];

  constructor(private ReceitaService: ReceitaService) {}

  ngOnInit(): void {
    this.ReceitaService.getReceitasLogado().subscribe((data) => {
      this.listaDeReceitas = data;
    });
  }
}
