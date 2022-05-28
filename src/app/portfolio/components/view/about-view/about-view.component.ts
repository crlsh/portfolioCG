import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css']
})
export class AboutViewComponent implements OnInit {

  
  titulo: string = 'Educacion';
  @Input() persona?: any
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
