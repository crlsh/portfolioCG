import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent implements OnInit {

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
      if(this.item.op === 'Agregar'){ delete this.item.experiencia.id }

      this.configureForm(this.titulo, this.item);

    }
  }





  configureForm(titulo: string, item: any) {

    console.log("configure form", titulo, item), (titulo !=='agregar');

  

      this.editForm.patchValue({
        id_persona:1,  // seteada por defecto hasta imprlementar registro usuarios
        nombre: item.nombre,
        porcentaje: item.porcentaje,
        id_skill: item.id_skill,
     
      });
    // }
  }

  createForm() {
    this.editForm = this.fb.group({
      id_skill: [''],
      nombre: [''],
      porcentaje: [''],
      id_persona:  [''],
   

  
    });
  }


  closeModal() {
    let value = {
   op: this.titulo,
   item: this.editForm.value
   
 };
 if(value.op === 'Agregar'){ delete value.item.id_skill }
   // debe estar vacio para que la genere la api}
 console.log("closemodal", value)
 this.activeModal.close(value);

}

}
