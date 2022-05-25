import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-eliminar',
  template: `
<button type="button" class="btn btn-outline-primary"><i class="bi bi-trash3"></i></button>

  
              `,
  
    styles: [
      `
    `
    ]
})
export class BtnEliminarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
