import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-banner-view',
  templateUrl: './banner-view.component.html',
  styleUrls: ['./banner-view.component.css']
})
export class BannerViewComponent implements OnInit {
  titulo: string = 'Banner';
  @Input() persona: any
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

