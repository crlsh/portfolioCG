import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { Persona } from 'src/app/models/Persona';
import { ServicioDatosService } from 'src/app/services/servicio-datos.service';
import { AboutFormComponent } from '../../forms/about-form/about-form.component';


@Component({
  selector: 'app-about-control',
  template: `
<div>

              
<app-banner-view [persona]=persona 
                [$estado]=$estado   
                (newItemEvent)="getMsg($event)"
  ></app-banner-view>

  <app-about-view [persona]=persona 
                [$estado]=$estado   
                (newItemEvent)="getMsg($event)"
  ></app-about-view>

</div>
  
              `,

  styles: [
    `


    `
  ]
})
export class AboutControlComponent implements OnInit {


  id_persona: number = 1; //prefijado hasta implementar registro de nuevos usuarios
  persona!: Persona;
  $estado!: boolean;
  componente: string = 'personas'

  constructor(private modalService: NgbModal,
    private loginService: LoginService,
    private fb: FormBuilder,
    private servicioDatosService: ServicioDatosService,


  ) {

  }

  ngOnInit(): void {

    // actualizar datos persona prefijada (los metodos estan completos para cuando se implemente creacion de usuarios)
    this.getItem(this.id_persona)
    this.loginService.LogState().subscribe((login) => (this.$estado = login));

  }

  getMsg(msg: any) {
    console.log(msg, "from parent");
    this.openForm(msg.op, msg.item)
  }



  openForm(modo: string, item: any) {
    {
      const modalRef = this.modalService.open(AboutFormComponent,
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
        console.log("result from control", "op", result.op, "item", result.item);
        this.selectCrudOp(result.op, result.item)

          ;
      }, (reason) => { });
    }
  }

  selectCrudOp(op: string, item: any) {

    switch (op) {
   

      case 'Editar': {
        this.updateItem(this.componente, item);
        break;
      }

         // case 'Agregar': {

      //   this.addItem(this.componente, item);
      //   break;
      // }
      // case 'Eliminar': {
      //   this.deleteItem(this.componente, item);
      //   break;
      // }

      default: {
        console.log("sin operacion en case crud")
        break;
      }
    }
  };


  // CRUD OPERATIONS


  getItem(id: number) {
    this.servicioDatosService.getItem(this.componente, id).subscribe(
      data => {
        this.persona = data;
        //console.log(this.persona)        
      }
    );
  }


  updateItem(componente: string, item: any): void {
    console.log("view sending update" ,componente, item, item.id_persona);
    this.servicioDatosService.updateItem(componente, item, item.id_persona)
    
      .subscribe
      (data => {
        this.persona = data;
        this.ngOnInit();
      });

    // getAll(): void {
    //   this.servicioDatosService.getAll(this.componente).subscribe(
    //     datos => {
    //       this.data = datos;
    //       console.log("get all ", this.componente, this.data)

    //     }
    //   );
    // }



    // deleteItem(componente: string, item: any): void {
    //   console.log("delete component", item, item.id_persona)
    //   this.servicioDatosService.deleteItem(componente, item.id_persona)
    //   .subscribe 
    //   (data => { 
    //     this.data = data; 
    //     this.ngOnInit();
    //   })
    // }

    // addItem(componente: string, item: any): void {

    //   console.log("add itemcomponent", item, )
    //   this.servicioDatosService.addItem(componente, item) 
    //   .subscribe
    //   (data => { 
    //     this.data = data; 
    //     this.ngOnInit();
    //   });

    //   }






  }


}