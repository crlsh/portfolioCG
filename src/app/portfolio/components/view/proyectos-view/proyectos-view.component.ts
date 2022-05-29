import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-proyectos-view',
  templateUrl: './proyectos-view.component.html',
  styleUrls: ['./proyectos-view.component.css']
})
export class ProyectosViewComponent implements OnInit {

   logo_proyecto:string='https://i.ibb.co/PGY3L58/logo-proyecto.png'
  titulo: string = 'Proyectos';
  @Input() data?: any
  @Input() $estado: any
  @Output() newItemEvent = new EventEmitter<any>();

  msgBack(op: string, item: any) {
    let value = {
      op: op,
      item: item,
    }
    this.newItemEvent.emit(value);
  }

  pictNotLoading(event:any) { event.target.src = this.logo_proyecto; }

  constructor() { }
  msg: any
  ngOnInit(): void {
  }
}