import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReceitaService } from 'service/receita.service';

@Component({
  selector: 'app-editar-receita',
  templateUrl: './editar-receita.component.html',
  styleUrls: ['./editar-receita.component.css'],
})
export class EditarReceitaComponent implements OnInit {
  itemId: number = 0;
  receita: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private receitaService: ReceitaService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'));
      const idParam = params.get('id');
      this.itemId = idParam ? +idParam : 0; // Se idParam for nulo, defina como 0 ou outro valor padrão

      const id = this.itemId; // Substitua pelo ID desejado
      this.http
        .get(`http://localhost:3000/receitas/${id}`)
        .subscribe((result: any) => {
          this.receita = result;
        });
    });

    /*const id = this.itemId; // Substitua pelo ID desejado
    this.http.get(`http://localhost:3000/receitas/${id}`).subscribe((result: any) => {
      this.receita = result;
    });*/
  }
}
