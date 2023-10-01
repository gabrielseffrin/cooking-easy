import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReceitaService {
  private apiUrl = 'http://localhost:3000/receitas'; // URL da API JSON Server

  constructor(private http: HttpClient) {}

  // buscar todas as receitas
  getReceitas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
