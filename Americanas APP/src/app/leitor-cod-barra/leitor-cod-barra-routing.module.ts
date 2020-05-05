import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeitorCodBarraPage } from './leitor-cod-barra.page';

const routes: Routes = [
  {
    path: '',
    component: LeitorCodBarraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeitorCodBarraPageRoutingModule {}
