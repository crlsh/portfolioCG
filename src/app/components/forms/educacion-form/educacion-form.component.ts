import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-educacion-form',
  templateUrl: './educacion-form.component.html',
  styleUrls: ['./educacion-form.component.css']
})
export class EducacionFormComponent implements OnInit {


  @Input() fromParent: any;
  editForm!: any;
  titulo!: string;
  item!: any


  constructor(public activeModal: NgbActiveModal,

    private fb: FormBuilder,
  ) {
   this.createForm();
  }

  ngOnInit(): void {
    {
      console.log("on init form", this.fromParent);
      this.titulo = this.fromParent.modo
      this.item = this.fromParent.item;
      if(this.item.op === 'Agregar'){ delete this.item.id_educacion}
      this.configureForm(this.titulo, this.item);

    }
  }





  configureForm(titulo: string, item: any) {

    console.log("configure form", titulo, item), (titulo !=='agregar');

  

      this.editForm.patchValue({
        id_educacion: item.id_educacion,
        institucion: item.institucion,
        titulo: item.titulo,
        ingreso: item.ingreso,
        egreso: item.egreso,
        url_institucion: item.url_institucion,
        url_logo_inst: item.url_logo_inst,
        id_persona:1,  // seteada por defecto hasta imprlementar registro usuarios
      });

  }

  createForm() {
    this.editForm = this.fb.group({
      id_educacion: [''],
      institucion: [''],
      titulo: [''],
      ingreso: [''],
      egreso: [''],
      url_institucion: [''],
      url_logo_inst: [''],
      id_persona:  [''],
    });
  }


  closeModal() {
    let value = {
   op: this.titulo,
   item: this.editForm.value
   
 };
//  if(value.op === 'Agregar'){ delete value.item.id_skill }
//    // debe estar vacio para que la genere la api}
 console.log("closemodal", value)
 this.activeModal.close(value);

}

}
