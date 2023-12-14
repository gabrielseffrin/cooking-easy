import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaService } from 'service/receita.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent {
  editarReceita: FormGroup;
  itemId: number = 0;
  receita: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private receitaService: ReceitaService,
    private router: Router
  ) {
    this.editarReceita = this.formBuilder.group({
      name: [''],
      ingredientes: [''],
    });
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
  }

  onSubmit() {
    const formData = this.editarReceita.value;

    if (this.editarReceita.valid) {
      console.log(this.editarReceita.value);
      console.log(this.itemId);

      // Chama o método do serviço de receitas para atualizar a receita com os dados do formulário
      this.receitaService
        .atualizarReceita(this.itemId, formData.name, formData.ingredientes)
        .subscribe(
          (data) => {
            console.log('Receita atualizada com sucesso:', data);
            this.router.navigate(['/minha-receita']);
            // Lógica adicional após a atualização
          },
          (error) => {
            console.error('Erro ao atualizar a receita:', error);
            // Tratamento de erro, se necessário
          }
        );
    }
  }
}
