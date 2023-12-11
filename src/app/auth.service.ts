// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/usuarios';
  private authenticatedUserKey  = 'authenticatedUser';
  private isAuthenticated: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, senha: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&senha=${senha}`)
    .pipe(
      map(users => users.length > 0),
      catchError(() => of(false)),
      map(success => {
        if (success) {
          this.isAuthenticated = true;
          // Armazenar o usuário autenticado no localStorage
          this.setAuthenticatedUser(email);
          // Navegar para a página inicial (home)
          this.router.navigate(['/']);
        }
        return success;
      })
    );
  }
  setAuthenticatedUser(username: string): void {
    localStorage.setItem(this.authenticatedUserKey, username);
  }

  getAuthenticatedUser(): string | null {
    return localStorage.getItem(this.authenticatedUserKey);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    // Lógica de logout (substitua por sua lógica real)
    this.isAuthenticated = false; // Substitua por sua lógica real
  }
  
  clearAuthenticatedUser(): void {
    localStorage.removeItem(this.authenticatedUserKey);
  }
}
