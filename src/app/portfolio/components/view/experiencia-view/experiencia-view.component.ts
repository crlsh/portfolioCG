import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experiencia-view',
  templateUrl: './experiencia-view.component.html',
  styleUrls: ['./experiencia-view.component.css']
})
export class ExperienciaViewComponent implements OnInit {

 ;
  @Input() data?: any
  @Input() $estado: any
  @Output() newItemEvent = new EventEmitter<any>();
  titulo: string = 'Experiencia'
  logo_exp:string="https://i.ibb.co/HVJmFzr/job-logo.png"

  msgBack(op: string, item: any) {
    let value = {
      op: op,
      item: item,
    }
    this.newItemEvent.emit(value);
  }

  pictNotLoading(event:any) { event.target.src = this.logo_exp; }

  constructor() { }
  msg: any
  ngOnInit(): void {
  }
}