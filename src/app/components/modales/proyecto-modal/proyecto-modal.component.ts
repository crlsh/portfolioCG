import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/services/interface/Proyecto';
import { ProyectosService } from 'src/app/services/api-rest/proyectos.service';

@Component({
  selector: 'app-proyecto-modal',
  templateUrl: './proyecto-modal.component.html',
  styleUrls: ['./proyecto-modal.component.css']
})
export class ProyectoModalComponent implements OnInit {


  @Input() id!: number; //recibe el id del elemento que se quiere editar
  @Input() proNuevo!: boolean;

  proyecto!: Proyecto;
  formulario!: FormGroup

  constructor(public activeModal: NgbActiveModal, private proyectoService: ProyectosService, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      id_proyecto: [''],
      nombre: [''],
      descripcion: [''],
      url_proyecto: [''],
      url_imagen: [''],
      id_persona: [''],
    })
  }

  editarForm(pro: any) {
    this.formulario.patchValue({
      id_proyecto: pro.id_proyecto,
      nombre: pro.nombre,
      descripcion: pro.descripcion,
      url_proyecto: pro.url_proyecto,
      url_imagen: pro.url_imagen,
      id_persona: pro.id_persona
    });
    console.log("open From", this.formulario.value)
  }

  ngOnInit(): void {
    if (!this.proNuevo) {
      this.getById(this.id)
    }
  }

  cerrarModal() {
    this.activeModal.close();
  }

  getById(id: number) {
    // console.log(this.id)
    this.proyectoService.getById(id).subscribe(
      data => {
        this.proyecto = data;
        //console.log(this.proyecto)
        this.editarForm(this.proyecto)
      }
    );

  }



  guardarProyecto() {
    if (this.proNuevo) {
      this.crearProyecto();
    } else {
      this.actualizarProyecto();
    }
  }

  crearProyecto() {
    this.formulario.value.id_persona=1
    delete this.formulario.value.id_proyecto;
    this.proyectoService.save(this.formulario.value).subscribe(
      data => {
        this.activeModal.close();
      }
    );
  }
  actualizarProyecto() {
    console.log("actualizar proyecto form", this.proNuevo,this.formulario.value)
    this.proyectoService.update(this.id, this.formulario.value).subscribe(
      data => {
        this.activeModal.close();
      }
    );
  }
}
