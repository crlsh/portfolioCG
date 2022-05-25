import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Educacion } from 'src/app/services/interface/Educacion';
import { EducacionService } from 'src/app/services/api-rest/educacion.service';

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',
  styleUrls: ['./educacion-modal.component.css']
})
export class EducacionModalComponent implements OnInit {

  @Input()  id!:number; //recibe el id del elemento que se quiere editar
  @Input() eduNueva!:boolean;
  educacion!:Educacion;
  formulario!:FormGroup
  constructor(public activeModal: NgbActiveModal, private educacionService:EducacionService, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      id_educacion: [''],
      institucion: [''],
      titulo: [''],
      ingreso: [''],
      egreso: [''],
      fotourl: [''],
      institucionurl: [''],
      persona: ['']
    })
   }

  editarForm(edu:any){
    this.formulario.patchValue( {
      id_educacion: edu.id_educacion,
      institucion: edu.institucion,
      titulo: edu.titulo,
      ingreso: edu.ingreso,
      egreso: edu.egreso,
      fotourl: edu.fotourl,
      institucionurl: edu.institucionurl,
      persona: edu.persona
    });
  }



  ngOnInit(): void {
    if(!this.eduNueva){
      this.getById(this.id)}    
    
  }

  cerrarModal(){
    this.activeModal.close();
  }

  getById(id: number) {
    //console.log(this.id)
    this.educacionService.getById(id).subscribe (
            data => {
         this.educacion = data; 
         //console.log(this.educacion)
         this.editarForm(this.educacion)
        }
        );

  }


  guardarEducacion(){
    if(this.eduNueva){
        this.crearEducacion();      
    }else{
      this.actualizarEducacion();
    }

  }

  crearEducacion(){
    this.educacionService.save(this.formulario.value).subscribe(
      data => {
        this.activeModal.close();
      }
    );
  }


  actualizarEducacion(){
    console.log("actualizar Edu Form", this.eduNueva,this.formulario.value)
    this.educacionService.update(this.id, this.formulario.value).subscribe(
      data => {
        this.activeModal.close();
      }
    );
  }
  
}
