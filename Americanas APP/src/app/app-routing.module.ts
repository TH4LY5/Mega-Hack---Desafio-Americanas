import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'leitor-cod-barra',
    loadChildren: () => import('./leitor-cod-barra/leitor-cod-barra.module').then( m => m.LeitorCodBarraPageModule)
  },
  {
    path: 'sacola-de-compras',
    loadChildren: () => import('./sacola-de-compras/sacola-de-compras.module').then( m => m.SacolaDeComprasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
