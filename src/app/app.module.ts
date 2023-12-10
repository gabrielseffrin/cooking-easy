import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { ReceitaComponent } from './receita/receita.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { EditarReceitaComponent } from './editar-receita/editar-receita.component';
import { FormsModule } from '@angular/forms';
import { CadastrarReceitaComponent } from './cadastrar-receita/cadastrar-receita.component';
import { AprovarReceitaComponent } from './aprovar-receita/aprovar-receita.component';
import { MinhaReceitaComponent } from './minha-receita/minha-receita.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    FooterComponent,
    HeaderComponent,
    CardsComponent,
    HomeComponent,
    ReceitaComponent,
    ChildComponent,
    ParentComponent,
    EditarReceitaComponent,
    CadastrarReceitaComponent,
    AprovarReceitaComponent,
    MinhaReceitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
