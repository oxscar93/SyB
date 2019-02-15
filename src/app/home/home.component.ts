import { Component, OnInit } from '@angular/core';
import { ToasterConfig, BodyOutputType } from 'angular2-toaster';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  config: ToasterConfig;
  
  constructor() { }

  ngOnInit() {
    this.setToasterConfig();
  }

  setToasterConfig(){
    this.config = new ToasterConfig({animation: 'fade', 
                                    positionClass: 'toast-top-right',  
                                    bodyOutputType: BodyOutputType.TrustedHtml});
  }
}
