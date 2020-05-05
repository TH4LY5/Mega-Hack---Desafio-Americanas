import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SacolaDeComprasPage } from './sacola-de-compras.page';

describe('SacolaDeComprasPage', () => {
  let component: SacolaDeComprasPage;
  let fixture: ComponentFixture<SacolaDeComprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacolaDeComprasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SacolaDeComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
