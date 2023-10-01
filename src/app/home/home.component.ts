import { Component, OnInit } from '@angular/core';
import { ReceitaService } from 'service/receita.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listaDeReceitas: any[] = [];

  constructor(private receitaService: ReceitaService) {}

  ngOnInit(): void {
    this.receitaService.getReceitas().subscribe((data) => {
      this.listaDeReceitas = data;
    });
  }
}
