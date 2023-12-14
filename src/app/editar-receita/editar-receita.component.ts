import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReceitaService } from 'service/receita.service';

@Component({
  selector: 'app-editar-receita',
  templateUrl: './editar-receita.component.html',
  styleUrls: ['./editar-receita.component.css'],
})
export class EditarReceitaComponent implements OnInit {
  itemId: number = 0;
  receita: any;
  novoComentario = { nome: '', comentario: '' };
  listaDeComentarios: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private receitaService: ReceitaService
  ) {}

  onSubmit() {
    const postData = {
      nome: this.novoComentario.nome,
      comentario: this.novoComentario.comentario,
      id_receita: this.itemId,
    };

    this.http.post('http://localhost:3000/comentarios', postData).subscribe(
      (response) => {
        console.log('POST bem-sucedido:', response);
      },
      (error) => {
        console.error('Erro ao fazer POST:', error);
      }
    );
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      this.itemId = idParam ? +idParam : 0;

      const id = this.itemId;
      this.http
        .get(`http://localhost:3000/receitas/${id}`)
        .subscribe((result: any) => {
          this.receita = result;
        });
    });

    this.receitaService.getComentario(this.itemId).subscribe((data) => {
      this.listaDeComentarios = data;
    });
  }
}
