import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ParentComponent } from './parent/parent.component';
import { EditarReceitaComponent } from './editar-receita/editar-receita.component';
import { CadastrarReceitaComponent } from './cadastrar-receita/cadastrar-receita.component';
import { AprovarReceitaComponent } from './aprovar-receita/aprovar-receita.component';
import { MinhaReceitaComponent } from './minha-receita/minha-receita.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'pai', component: ParentComponent },
  { path: 'visualizar/:id', component: EditarReceitaComponent },
  { path: 'cadastar-receita', component: CadastrarReceitaComponent },
  { path: 'cadastrarUsuario', component: CadastroComponent },
  { path: 'aprovar-receita', component: AprovarReceitaComponent },
  { path: 'minha-receita', component: MinhaReceitaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
