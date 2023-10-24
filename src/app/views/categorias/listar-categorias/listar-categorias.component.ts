import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';
import { CategoriasService } from '../services/categoria.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.scss']
})
export class ListarCategoriasComponent {
  categorias$?: Observable<Categoria[]>;

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit(): void {
    this.categorias$ = this.categoriasService.selecionarTodos();
  }
}
