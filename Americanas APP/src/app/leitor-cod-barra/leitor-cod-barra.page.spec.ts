import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeitorCodBarraPage } from './leitor-cod-barra.page';

describe('LeitorCodBarraPage', () => {
  let component: LeitorCodBarraPage;
  let fixture: ComponentFixture<LeitorCodBarraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitorCodBarraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeitorCodBarraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
