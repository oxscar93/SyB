import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/auth.service';
import { ComedorComponent } from './comedor/comedor.component';
import { TipsSaludablesComponent } from './tips-saludables/tips-saludables.component';
import { TipsComponent } from './tips-cocina/tips.component';
import { TipCocinaResolverService } from './tips-cocina/tip-cocina-resolver.service';
import { TipSaludableResolverService } from './tips-saludables/tip-saludable-resolver.service';
import { ContactoComponent } from './contacto/contacto.component';
import { ContactoResolverService } from './contacto/contacto-resolver.service';
import { ComedorResolverService } from './comedor/comedor-resolver.service';
import { MenuComedorListComponent } from './menu-comedor-list/menu-comedor-list.component';
import { MenuComedorAddComponent } from './menu-comedor-add/menu-comedor-add.component';
import { MenuComedorAddResolverService } from './menu-comedor-add/menu-comedor-add-resolver.service';


const routes: Routes = [
  {path: 'home', component:  HomeComponent,
          children: [
            { path: 'comedor', component: ComedorComponent, resolve:{comedorList: ComedorResolverService}},
            { path: 'menu-comedor-list', component: MenuComedorListComponent, resolve:{comedorList: ComedorResolverService}},
            { path: 'menu-comedor-add', component: MenuComedorAddComponent, resolve: {initParams: MenuComedorAddResolverService }},
            { path: 'tips-saludables', component: TipsSaludablesComponent, resolve:{tipList: TipSaludableResolverService}},
            { path: 'tips-cocina', component: TipsComponent, resolve:{tipList: TipCocinaResolverService} },
            { path: 'contacto', component: ContactoComponent, resolve:{contacto: ContactoResolverService}}
           ], canActivate: [AuthGuard]},
  {path: '', component:  LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
