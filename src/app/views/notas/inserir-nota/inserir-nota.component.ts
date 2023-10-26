import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Categoria } from '../../categorias/models/categoria';
import { Nota } from '../models/nota';
import { NotasService } from '../services/notas.service';
import { NotificationService } from 'src/app/core/notification/services/notification.service';

@Component({
  selector: 'app-inserir-nota',
  templateUrl: './inserir-nota.component.html',
  styleUrls: ['./inserir-nota.component.scss']
})
export class InserirNotaComponent {
  form?: FormGroup;
  categorias$?: Observable<Categoria[]>;

  constructor(
    private notasService: NotasService,
    private notification: NotificationService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      conteudo: [''],
      tema: ['primary'],

      categoriaId: [undefined, [Validators.required]],
    });

    this.categorias$ = this.route.data.pipe(
      map((dados) => dados['categorias'])
    );
  }

  gravar(): void {
    this.notasService.criar(this.form?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err),
    });
  }

  processarSucesso(res: Nota) {
    this.notification.sucesso(
      `A nota ${res.titulo} foi cadastrada com sucesso!`
    );

    this.router.navigate(['/notas', 'listar']);
  }

  processarFalha(err: any) {
    this.notification.erro(err.message);
  }
}
