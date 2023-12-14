import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^([a-zA-Z\s])+$/)]],
      email: [
        '',
        [
          
          Validators.pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
        ],
      ],
      foto: [
        '',
        [Validators.required, Validators.pattern(/^(http|https):\/\/[^0-9]/)],
      ],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}(\d{3})?$/)]],
    });
  }

  async fetchAPI(cep: string) {
    console.log(cep);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();
      if (data.erro) {
        return false; // CEP inválido
      }
      return true; // CEP válido
    } catch (error) {
      console.error('Ocorreu um erro na requisição:', error);
      return false; // Erro na requisição
    }
  }

  async onSubmit() {

    

    if (this.myForm.valid) {
      console.log('onsubmit')
      const formData = this.myForm.value;
      console.log(this.myForm.value);
      localStorage.setItem('userData', JSON.stringify(formData));

      const cepControl = this.myForm.get('cep');

      if (cepControl?.value) {
        const cep = cepControl.value;
        const isCepValid = await this.fetchAPI(cep);

        if (isCepValid) {
          // O CEP é válido, você pode prosseguir com o envio do formulário
          const postData = {
            nome: formData.name,
            foto: formData.foto,
            email: formData.email,
            password: formData.password,
            tipo: 1,
            cep: formData.cep,
          };

          this.http.post('http://localhost:3000/usuarios', postData).subscribe(
            (response) => {
              console.log('POST bem-sucedido:', response);
            },
            (error) => {
              console.error('Erro ao fazer POST:', error);
            }
          );
        } else {
          // O CEP é inválido, você pode tratar isso como necessário
          alert('CEP inválido. Por favor, insira um CEP válido.');
        }
      }
    }
  }
}
