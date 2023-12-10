import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaReceitaComponent } from './minha-receita.component';

describe('MinhaReceitaComponent', () => {
  let component: MinhaReceitaComponent;
  let fixture: ComponentFixture<MinhaReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinhaReceitaComponent]
    });
    fixture = TestBed.createComponent(MinhaReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
