import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellModule } from './core/shell/shell.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShellModule,
  ],
  exports: [ShellModule],
})
export class CoreModule { }
