import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SacolaDeComprasPageRoutingModule } from './sacola-de-compras-routing.module';

import { SacolaDeComprasPage } from './sacola-de-compras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SacolaDeComprasPageRoutingModule
  ],
  declarations: [SacolaDeComprasPage]
})
export class SacolaDeComprasPageModule {}
