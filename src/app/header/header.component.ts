import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isUserLoggedIn: boolean;

  constructor() {
    // Verifique se os dados do usuário estão no localStorage
    const userData = localStorage.getItem('userData');
    this.isUserLoggedIn = userData !== null;
  }
}
