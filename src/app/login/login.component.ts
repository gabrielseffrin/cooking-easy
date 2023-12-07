import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.myForm = this.formBuilder.group({
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
    }
  }

  refreshPage() {
    this.router.navigate([this.router.url]);
  }
}
