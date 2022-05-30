import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.css']
})
export class AboutFormComponent implements OnInit {

 
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
      // console.log("on init form", this.fromParent);
      this.titulo = this.fromParent.modo
      this.item = this.fromParent.item;
      this.item.op = 'Editar'; //unica operacion permitida por el momento
      this.configureForm(this.titulo, this.item);

    }
  }





  configureForm(titulo: string, item: any) {

    // console.log("configure form", titulo, item), (titulo !=='agregar');

  

      this.editForm.patchValue({
        id_persona:1,   // seteada por defecto hasta imprlementar registro usuarios
        nombre: item.nombre,
        apellido: item.apellido,
        username: item.username,
        password: item.password,
        acercade: item.acercade,
        titulo: item.titulo,
        email: item.email,
        telefono: item.telefono,
        ubicacion: item.ubicacion,
        url_img_perfil: item.url_img_perfil,
        url_img_fondo: item.url_img_fondo,

      });
  }

  createForm() {
    this.editForm = this.fb.group({
      id_persona:  [''],
      nombre: [''],
      apellido: [''],
      username: [''],
      password: [''],
      acercade: [''],
      titulo: [''],
      email: [''],
      telefono: [''],
      ubicacion: [''],
      url_img_perfil: [''],
      url_img_fondo: [''],

    });
  }


  closeModal() {
    let value = {
   op: this.item.op,
   item: this.editForm.value
   
 };

//  console.log("closemodal", value)
 this.activeModal.close(value);

}

}
