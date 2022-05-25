import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-skills-view',
  templateUrl: './skills-view.component.html',
  styleUrls: ['./skills-view.component.css']
})
export class SkillsViewComponent implements OnInit {



titulo:string='Skills';
@Input() data?: any
@Input() $estado: any
@Output() newItemEvent = new EventEmitter<any>();

msgBack(op:string, item:any) {
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