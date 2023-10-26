import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirNotaComponent } from './inserir-nota/inserir-nota.component';
import { ListarNotasComponent } from './listar-notas/listar-notas.component';
import { NotasService } from './services/notas.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriasModule } from '../categorias/categorias.module';
import { NotasRoutingModule } from './notas-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { EditarNotasComponent } from './editar-notas/editar-notas.component';
import { ExcluirNotasComponent } from './excluir-notas/excluir-notas.component';



@NgModule({
  declarations: [
    InserirNotaComponent,
    ListarNotasComponent,
    EditarNotasComponent,
    ExcluirNotasComponent
  ],
  imports: [
    NotasRoutingModule,
    SharedModule,
    CategoriasModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [NotasService]
})
export class NotasModule { }
