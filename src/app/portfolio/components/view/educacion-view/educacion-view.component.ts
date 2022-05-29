import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';

@Component({
  selector: 'app-educacion-view',
  templateUrl: './educacion-view.component.html',
  styleUrls: ['./educacion-view.component.css']
})
export class EducacionViewComponent implements OnInit {


  titulo: string = 'Educacion';
  @Input() data?: any
  @Input() $estado: any
  @Output() newItemEvent = new EventEmitter<any>();

  // POR SI FALLA LA CARGA DE LA IMAGEN O NO TIENE
  logo_edu: string = 'https://i.ibb.co/25LpcYW/educacion-logo.png'


  msgBack(op: string, item: any) {
    let value = {
      op: op,
      item: item,
    }
    this.newItemEvent.emit(value);
  }


  pictNotLoading(event:any) { event.target.src = this.logo_edu; }
  constructor() { }
  msg: any
  ngOnInit(): void {
  }
}