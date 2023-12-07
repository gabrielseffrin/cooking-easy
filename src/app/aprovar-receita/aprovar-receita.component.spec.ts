import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarReceitaComponent } from './aprovar-receita.component';

describe('AprovarReceitaComponent', () => {
  let component: AprovarReceitaComponent;
  let fixture: ComponentFixture<AprovarReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprovarReceitaComponent]
    });
    fixture = TestBed.createComponent(AprovarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
