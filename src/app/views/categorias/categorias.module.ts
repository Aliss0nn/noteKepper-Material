import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriasService } from './services/categoria.service';
import { EditarCategoriasComponent } from './editar-categorias/editar-categorias.component';
import { ExcluirCategoriasComponent } from './excluir-categorias/excluir-categorias.component';



@NgModule({
  declarations: [ 
    InserirCategoriaComponent, ListarCategoriasComponent, EditarCategoriasComponent, ExcluirCategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    CategoriasService
  ],
})
export class CategoriasModule { }
