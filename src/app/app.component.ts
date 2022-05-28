import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Observable } from 'rxjs';
import { LoadingService } from './services/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';


  loadingStatus$!: Observable<boolean>;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {

    AOS.init();
  }
  

}





