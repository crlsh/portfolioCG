import { Component, Input, OnInit } from '@angular/core';
import { Redes } from 'src/app/models/Redes';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { ServicioDatosService } from 'src/app/services/servicio-datos.service';

@Component({
  selector: 'app-redes-view',
  templateUrl: './redes-view.component.html',
  styleUrls: ['./redes-view.component.css']
})
export class RedesViewComponent implements OnInit {

  // #!!! AL MOMENTO DE ENTREGAR EL TP (30/05/2022)  #!!!!
  // EL SERVICIO DE CLEVERCLOUD ESTA CAIDO Y ALLI ESTA
  // ALOJADA LA BASE DE DATOS TAL COMO SE SOLICITA EN LAS CONDICIONES DE AP

  // DEBIDO A ELLO A ESTE COMPONENTE NO SE LE PUDO HACER UN TESTEO FINAL 
  // POR LO CUAL SE DESHABILITO TODA LA PARTE DE EDICION Y BORRADO CRUD
  
  
  // REDES ESTA IMPLEMENTADO COMO MODULO PARA PODER INCORPORARLO A DISTINTAS SECCIONES 
  // DENTRO DE LA APP Y NO COMPLICAR LA ANIDACION DE COMPONENTES
  // ESTA DENTRO DE LOS COMPONENTES banner-view y footer.



  data!: Redes[];
  $estado!: boolean;
  componente: string = 'redes'


  constructor(
    // private modalService: NgbModal,
    private loginService: LoginService,
    // private fb: FormBuilder,
    private servicioDatosService: ServicioDatosService,
   

  ) {
  
  }

  ngOnInit(): void {
   
    // actualizar datos
    this.getAll();
    this.loginService.LogState().subscribe((login) => (this.$estado = login)); 
  
  }

  // getMsg(msg: any) {
  //   console.log(msg, "from parent");
  //    this.openForm(msg.op, msg.item)
  // }



  // openForm(modo: string, item: any) {
  //   {
  //     const modalRef = this.modalService.open(RedesFormComponent,
  //       {
  //         // scrollable: false,
  //         windowClass: 'myCustomModalClass',
  //         // keyboard: false,
  //         // backdrop: 'static'
  //       })

  //     let info = {
  //       modo: modo,
  //       item: item

  //     }

  //     modalRef.componentInstance.fromParent = info;

  //     modalRef.result.then((result) => {
  //       console.log("result from control","op", result.op,"item", result.item);
  //       this.selectCrudOp(result.op, result.item)
      
  //       ;
  //     }, (reason) => { });
  //   }
  // }

  // selectCrudOp(op: string, item:any) {

  //   switch (op) {
  //     case 'Agregar': {

  //       this.addItem(this.componente, item);
  //       break;
  //     }
   
  //     case 'Editar': {
  //       this.updateItem(this.componente, item);
  //       break;
  //     }
  //     case 'Eliminar': {
  //       this.deleteItem(this.componente, item);
  //       break;
  //     }
  //     // case 'Eliminar': {
  //     //   this.delete( item.id_red);
  //     //   break;
  //     // }

    

  //     default: {
  //       console.log("sin operacion en case crud")
  //       break;
  //     }
  //   }
  // };





  selectIcon(nombre:String){
    switch(nombre) { 
      case 'Facebook': { return 'fa fa-facebook' };break;
      case 'Instagram': { return 'fa fa-instagram' };break;
      case 'Linkedin': { return 'fa fa-linkedin' };break;
      case 'Github': { return 'fa fa-github' };break;
      case 'Twitter': { return 'fa fa-twitter' };break;
      case 'Pinterest': { return 'fa fa-pinterest' };break;
     
    
  
      default: { 
         return 'fa fa-circle-user'
         break; 
      } 
   } 
  }

  

  // CRUD OPERATIONS
  getAll(): void {
    this.servicioDatosService.getAll(this.componente).subscribe (
    datos => {this.data = datos;
  // console.log("get all ", this.componente, this.data)
 
    }
  );
  }





  // deleteItem(componente: string, item: any): void {
  //   console.log("delete component", item, item.id_red)
  //   this.servicioDatosService.deleteItem(componente, item.id_red)
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

   


  // updateItem(componente: string, item: any): void {
   
  //   this.servicioDatosService.updateItem(componente, item, item.id_red)
  //   .subscribe
  //   (data => { 
  //     this.data = data; 
  //     this.ngOnInit();
  //   });

    // }


}