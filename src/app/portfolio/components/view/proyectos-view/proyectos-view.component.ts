import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-proyectos-view',
  templateUrl: './proyectos-view.component.html',
  styleUrls: ['./proyectos-view.component.css']
})
export class ProyectosViewComponent implements OnInit {

 
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

  constructor() { }
  msg: any
  ngOnInit(): void {
  }
}