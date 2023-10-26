import { Component } from '@angular/core';
import { NotasService } from '../services/notas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Categoria } from '../../categorias/models/categoria';
import { NotificationService } from 'src/app/core/notification/services/notification.service';
import { Nota } from '../models/nota';

@Component({
  selector: 'app-excluir-notas',
  templateUrl: './excluir-notas.component.html',
  styleUrls: ['./excluir-notas.component.scss']
})
export class ExcluirNotasComponent {
  nota$?: Observable<Nota>;

  constructor(
    private notasService: NotasService,
    private notification: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.nota$ = this.route.data.pipe(map((dados) => dados['nota']));
  }

  excluir() {
    this.route.paramMap
      .pipe(
        map((params) => parseInt(params.get('id')!)),
        switchMap((id) => this.notasService.excluir(id))
      )
      .subscribe({
        next: () => this.processarSucesso(),
        error: (err) => this.processarFalha(err),
      });
  }

  processarSucesso() {
    this.notification.sucesso(`A nota foi excluída com sucesso!`);

    this.router.navigate(['/notas', 'listar']);
  }

  processarFalha(err: any) {
    this.notification.erro(err.message);
  }
}