import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReceitaService } from 'service/receita.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent {
  editarReceita: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private receitaService: ReceitaService
  ) {
    this.editarReceita = this.formBuilder.group({
      name: [''], // Adicionei um validador de campo obrigatório
      ingredientes: [''],
    });
  }

  itemId: number = 0;
  receita: any;

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
  }

  onSubmit() {
    const formData = this.editarReceita.value;

    if (this.editarReceita.valid) {
      console.log(this.editarReceita.value);
      console.log(this.itemId);
      this.receitaService.atualizarReceita(this.itemId, '');
    }
  }
}
