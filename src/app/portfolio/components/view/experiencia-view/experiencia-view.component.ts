import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experiencia-view',
  templateUrl: './experiencia-view.component.html',
  styleUrls: ['./experiencia-view.component.css']
})
export class ExperienciaViewComponent implements OnInit {

  titulo: string = 'Experiencia';
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