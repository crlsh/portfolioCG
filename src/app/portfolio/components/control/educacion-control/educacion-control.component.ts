import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/models/Educacion';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { ServicioDatosService } from 'src/app/services/servicio-datos.service';
import { EducacionFormComponent } from '../../forms/educacion-form/educacion-form.component';

@Component({
  selector: 'app-educacion-control',
  template: `



  <app-educacion-view [data]=data 
                [$estado]=$estado   
                (newItemEvent)="getMsg($event)"
  ></app-educacion-view>
  
              `,
  
    styles: [
      `
    `
    ]
})
export class EducacionControlComponent implements OnInit {

 
  data!: any;
  $estado!: boolean;
  componente: string = 'educacion'

  constructor(private modalService: NgbModal,
    private loginService: LoginService,
    private fb: FormBuilder,
    private servicioDatosService: ServicioDatosService,
   

  ) {
  
  }

  ngOnInit(): void {
   
    // actualizar datos
    this.getAll();
    this.loginService.LogState().subscribe((login) => (this.$estado = login)); 
  
  }

  getMsg(msg: any) {
    // console.log(msg, "from parent");
     this.openForm(msg.op, msg.item)
  }



  openForm(modo: string, item: any) {
    {
      const modalRef = this.modalService.open(EducacionFormComponent,
        {
          // scrollable: false,
          windowClass: 'myCustomModalClass',
          // keyboard: false,
          // backdrop: 'static'
        })

      let info = {
        modo: modo,
        item: item

      }

      modalRef.componentInstance.fromParent = info;

      modalRef.result.then((result) => {
        // console.log("result from control","op", result.op,"item", result.item);
        this.selectCrudOp(result.op, result.item)
      
        ;
      }, (reason) => { });
    }
  }

  selectCrudOp(op: string, item:any) {

    switch (op) {
      case 'Agregar': {

        this.addItem(this.componente, item);
        break;
      }
   
      case 'Editar': {
        this.updateItem(this.componente, item);
        break;
      }
      case 'Eliminar': {
        this.deleteItem(this.componente, item);
        break;
      }
     

      default: {
        console.log("sin operacion en case crud")
        break;
      }
    }
  };


  // CRUD OPERATIONS
  getAll(): void {
    this.servicioDatosService.getAll(this.componente).subscribe (
    datos => {this.data = datos;
  // console.log("get all ", this.componente, this.data)
 
    }
  );
  }




  deleteItem(componente: string, item: any): void {
    // console.log("delete component", item, item.id_educacion)
    this.servicioDatosService.deleteItem(componente, item.id_educacion)
    .subscribe 
    (data => { 
      this.data = data; 
      this.ngOnInit();
    })
  }

  addItem(componente: string, item: any): void {
 
    // console.log("add itemcomponent", item, )
    this.servicioDatosService.addItem(componente, item) 
    .subscribe
    (data => { 
      this.data = data; 
      this.ngOnInit();
    });

    }

   


  updateItem(componente: string, item: any): void {
   
    this.servicioDatosService.updateItem(componente, item, item.id_educacion)
    .subscribe
    (data => { 
      this.data = data; 
      this.ngOnInit();
    });

    }


}