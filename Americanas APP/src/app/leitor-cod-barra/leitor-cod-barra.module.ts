import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeitorCodBarraPageRoutingModule } from './leitor-cod-barra-routing.module';

import { LeitorCodBarraPage } from './leitor-cod-barra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeitorCodBarraPageRoutingModule
  ],
  declarations: [LeitorCodBarraPage]
})
export class LeitorCodBarraPageModule {}
