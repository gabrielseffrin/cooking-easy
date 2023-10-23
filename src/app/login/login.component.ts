import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^([a-zA-Z\s])+$/)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log(this.myForm.value);
      localStorage.setItem('userData', JSON.stringify(formData));

      const postData = {
        nome: formData.name,
      };

      this.http.post('http://localhost:3000/teste', postData).subscribe(
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
