import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-experiencia-form',
  templateUrl: './experiencia-form.component.html',
  styleUrls: ['./experiencia-form.component.css']
})
export class ExperienciaFormComponent implements OnInit {


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
      if(this.item.op === 'Agregar'){ delete this.item.id_experiencia}
      this.configureForm(this.titulo, this.item);

    }
  }
  
  configureForm(titulo: string, item: any) {

    console.log("configure form", titulo, item), (titulo !=='agregar');

  

      this.editForm.patchValue({
        id_experiencia: item.id_experiencia,
        empresa: item.empresa,
        ingreso: item.ingreso,
        egreso: item.egreso,
        puesto: item.puesto,
        descripcion: item.descripcion,
        url_logo_empresa: item.url_logo_empresa,
        id_persona:1,  // seteada por defecto hasta imprlementar registro usuarios
      });

  }

  createForm() {
    this.editForm = this.fb.group({
      id_experiencia: [''],
      empresa: [''],
      ingreso: [''],
      egreso: [''],
      puesto: [''],
      descripcion: [''],
      url_logo_empresa: [''],
      id_persona:  [''],
    });
  }


  closeModal() {
    let value = {
   op: this.titulo,
   item: this.editForm.value
   
 };

 console.log("closemodal", value)
 this.activeModal.close(value);

}

}
