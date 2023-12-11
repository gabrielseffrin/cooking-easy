import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isUserLoggedIn: boolean;

  constructor(public authService: AuthService) {
    // Verifique se os dados do usuário estão no localStorage
    const userData = localStorage.getItem('userData');
    this.isUserLoggedIn = userData !== null;
  }

  logout() {
    this.authService.logout();
  }
}
