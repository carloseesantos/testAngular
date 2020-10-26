import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItensComponent } from './itens/itens.component';
import { ItemDetalheComponent } from './itens/item-detalhe.component';
import { ItemNovoComponent } from './itens/item-novo.component';
import { ItemEditarComponent } from './itens/item-editar.component';

const routes: Routes = [
  {
    path: 'itens',
    component: ItensComponent,
    data: {title: 'Lista de Itens'}
  },
  {
    path: 'item-detalhe/:id',
    component: ItemDetalheComponent,
    data: {title: 'Detalhe do Item'}
  },
  {
    path: 'item-novo',
    component: ItemNovoComponent,
    data: {title: 'Novo Item'}
  },
  {
    path: 'item-editar/:id',
    component: ItemEditarComponent,
    data: {title: 'Editar Item'}
  },
  {path: '',
  redirectTo: '/produtos',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
