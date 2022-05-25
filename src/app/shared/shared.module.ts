import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnAgregarComponent } from './btn-agregar/btn-agregar.component';
import { BtnEliminarComponent } from './btn-eliminar/btn-eliminar.component';
import { BtnEditarComponent } from './btn-editar/btn-editar.component';



@NgModule({
  declarations: [
    BtnAgregarComponent,
    BtnEliminarComponent,
    BtnEditarComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    BtnAgregarComponent,
    BtnEliminarComponent,
    BtnEditarComponent
  ]
})
export class SharedModule { }
