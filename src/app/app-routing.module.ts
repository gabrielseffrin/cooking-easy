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
import { EditarComponent } from './editar/editar.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'pai', component: ParentComponent },
  { path: 'visualizar/:id', component: EditarReceitaComponent },
  { path: 'editar/:id', component: EditarComponent, canActivate: [AuthGuard] },
  {
    path: 'cadastrar-receita',
    component: CadastrarReceitaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cadastrarUsuario',
    component: CadastroComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'aprovar-receita',
    component: AprovarReceitaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'minha-receita',
    component: MinhaReceitaComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
