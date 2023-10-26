import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Nota } from '../models/nota';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.scss']
})
export class ListarNotasComponent {
  notas$?: Observable<Nota[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.notas$ = this.route.data.pipe(map((dados) => dados['notas']));
  }
}
