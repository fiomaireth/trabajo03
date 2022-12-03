import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiProyetoTemplateFormComponent } from './mi-proyeto-template-form.component';

describe('MiProyetoTemplateFormComponent', () => {
  let component: MiProyetoTemplateFormComponent;
  let fixture: ComponentFixture<MiProyetoTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiProyetoTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiProyetoTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
