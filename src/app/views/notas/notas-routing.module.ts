import { NgModule, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { ListarNotasComponent } from './listar-notas/listar-notas.component';
import { NotasService } from './services/notas.service';
import { listarCategoriasResolver } from '../categorias/services/listar-categorias.resolver';
import { InserirNotaComponent } from './inserir-nota/inserir-nota.component';
import { EditarNotasComponent } from './editar-notas/editar-notas.component';
import { ExcluirNotasComponent } from './excluir-notas/excluir-notas.component';

const listarNotasResolver = () => {
  return inject(NotasService).selecionarTodos();
};

const formNotasResolver = (route: ActivatedRouteSnapshot) => {
  const id = parseInt(route.paramMap.get('id')!);

  return inject(NotasService).selecionarPorId(id);
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
  {
    path: 'listar',
    component: ListarNotasComponent,
    resolve: { notas: listarNotasResolver },
  },
  {
    path: 'inserir',
    component: InserirNotaComponent,
    resolve: { categorias: listarCategoriasResolver },
  },
  {
    path: 'editar/:id',
    component: EditarNotasComponent,
    resolve: { notas: formNotasResolver, categorias: listarCategoriasResolver},
  },
  {
    path: 'excluir/:id',
    component: ExcluirNotasComponent,
    resolve: { notas: formNotasResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasRoutingModule {}