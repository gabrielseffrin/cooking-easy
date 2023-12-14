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
    const url = `${this.apiUrl}?estado_receita=${1}&privacidade_receita=${1}`;
    return this.http.get<any[]>(url);
  }

  getReceitaPorId(id: Number): Observable<any[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any[]>(url);
  }

  getReceitasPrivadas(): Observable<any[]> {
    const url = `${this.apiUrl}?estado_receita=${1}&privacidade_receita=${2}`;
    return this.http.get<any[]>(url);
  }

  getReceitasPendentes(): Observable<any[]> {
    const url = `${this.apiUrl}?estado_receita=${2}`;
    return this.http.get<any[]>(url);
  }

  getReceitasLogado(): Observable<any[]> {
    const url = `${this.apiUrl}?id_usuario=${2}`;
    return this.http.get<any[]>(url);
  }

  updateEstadoReceita(id: number, novoEstado: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch<any>(url, { estado_receita: novoEstado });
  }

  getComentario(id: number): Observable<any[]> {
    const url = `http://localhost:3000/comentarios?id_receita=${id}`;
    return this.http.get<any[]>(url);
  }

  atualizarReceita(id: number, nomeReceita: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch<any>(url, {
      nome: nomeReceita,
    });
  }
}
