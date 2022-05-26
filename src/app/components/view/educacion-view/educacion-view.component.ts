import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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