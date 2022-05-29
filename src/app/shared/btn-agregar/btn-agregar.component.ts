import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-agregar',
  template: `

<button class="btn btn-danger btn-icon  btn-icon-mini btn-round" >
	<i class="fa fa-plus"></i>
</button>



              `,

  styles: [
    `
    `
  ]
})




export class BtnAgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
