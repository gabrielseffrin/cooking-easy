import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-receita',
  templateUrl: './cadastrar-receita.component.html',
  styleUrls: ['./cadastrar-receita.component.css'],
})
export class CadastrarReceitaComponent {
  cadastrarReceita: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.cadastrarReceita = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^([a-zA-Z\s])+$/)]],
      ingredientes: [
        '',
        [Validators.required, Validators.pattern(/^([a-zA-Z\s])+$/)],
      ],
      foto: [
        '',
        [Validators.required, Validators.pattern(/^(http|https):\/\/[^0-9]/)],
      ],
    });
  }

  onSubmit() {
    if (this.cadastrarReceita.valid) {
      const formData = this.cadastrarReceita.value;
      console.log(this.cadastrarReceita.value);

      localStorage.setItem('userData', JSON.stringify(formData));

      const postData = {
        nome: formData.name,
        ingredientes: formData.ingredientes,
        foto: formData.foto,
        estado_receita: 2,
        privacidade_receita: formData.privacidade,
      };

      this.http.post('http://localhost:3000/receitas', postData).subscribe(
        (response) => {
          console.log('POST bem-sucedido:', response);
        },
        (error) => {
          console.error('Erro ao fazer POST:', error);
        }
      );
    }
  }
}
