import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comedor } from '../models/Comedor';

@Component({
  selector: 'app-menu-comedor-list',
  templateUrl: './menu-comedor-list.component.html',
  styleUrls: ['./menu-comedor-list.component.css']
})
export class MenuComedorListComponent implements OnInit {
  
  comedorList: Comedor[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.setDefaultData();

  }

  setDefaultData(){
    this.route.data
    .subscribe((data: { comedorList: Array<Comedor> }) => {
      this.comedorList = data.comedorList
    });
  }

  updateMenu(comedor: Comedor){
    this.router.navigate(["/home/menu-comedor-add/"], {queryParams: {comedorId: comedor.id}});
  }
}
