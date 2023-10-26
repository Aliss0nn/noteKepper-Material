import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from '../models/categoria';
import { CategoriasService } from '../services/categoria.service';

@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.component.html',
  styleUrls: ['./editar-categorias.component.scss']
})
export class EditarCategoriasComponent {
  form?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoriasService: CategoriasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: [''],
    });

    const categoria = this.route.snapshot.data['categoria'];
    this.form.patchValue(categoria);
  }

  gravar(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.categoriasService.editar(id, this.form?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err),
    });
  }

  processarSucesso(res: Categoria) {
    this.router.navigate(['/categorias', 'listar']);
  }

  processarFalha(err: any) {
    console.error('Erro:', err);
  }
}