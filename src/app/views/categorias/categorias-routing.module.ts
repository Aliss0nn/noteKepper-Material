import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { CategoriasService } from './services/categoria.service';
import { EditarCategoriasComponent } from './editar-categorias/editar-categorias.component';
import { ExcluirCategoriasComponent } from './excluir-categorias/excluir-categorias.component';

const formsCategoriaResolver = (route: ActivatedRouteSnapshot) => {
  const id = parseInt(route.paramMap.get('id')!);

  return inject(CategoriasService).selecionarPorId(id);
};

const listarCategoriasResolver = () => {
  return inject(CategoriasService).selecionarTodos();
};

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
  {
    path: 'listar',
    component: ListarCategoriasComponent,
  },
  {
    path: 'inserir',
    component: InserirCategoriaComponent,
  },
  {
    path: 'editar/:id',
    component: EditarCategoriasComponent,
    resolve: { categoria: formsCategoriaResolver },
  },
  {
    path: 'excluir/:id',
    component: ExcluirCategoriasComponent,
    resolve: { categoria: formsCategoriaResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasRoutingModule {}