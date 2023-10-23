import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarReceitaComponent } from './cadastrar-receita.component';

describe('CadastrarReceitaComponent', () => {
  let component: CadastrarReceitaComponent;
  let fixture: ComponentFixture<CadastrarReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarReceitaComponent]
    });
    fixture = TestBed.createComponent(CadastrarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
