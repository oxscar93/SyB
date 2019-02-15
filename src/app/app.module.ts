import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { ComedorComponent } from './comedor/comedor.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.service';
import { HttpModule } from '@angular/http';
import { LoginService } from './login/login.service';
import { TipsSaludablesComponent } from './tips-saludables/tips-saludables.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { TipDialogComponent } from './tip-dialog/tip-dialog.component';
import { TipDialogTemplateDirective } from './tip-dialog/tip-dialog.directive';
import { DialogState } from './models/dialog-state';
import { TipDialogService } from './tip-dialog/tip-dialog.service';
import { TipsComponent } from './tips-cocina/tips.component';
import { TipCocinaService } from './tips-cocina/tip-cocina.service';
import { TipSaludableService } from './tips-saludables/tip-saludable.service';
import { ExecutionHandlerService } from './common-services/execution-handler.service';
import { BlockUIModule } from 'ng-block-ui';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmService } from './confirmation-dialog/confirm.service';
import { ConfirmTemplateDirective } from './confirmation-dialog/confirm.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './common-services/http-interceptor';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { FileSelectDirective } from 'ng2-file-upload';
import { ImagePreviewDirective } from './common-directives/image-preview.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContactoService } from './contacto/contacto.service';
import { ComedorDialogComponent } from './comedor-dialog/comedor-dialog.component';
import { ComedorDialogTemplateDirective } from './comedor-dialog/comedor-dialog.directive';
import { ComedorService } from './comedor/comedor.service';
import { ComedorDialogService } from './comedor-dialog/comedor-dialog.service';
import { MenuComedorListComponent } from './menu-comedor-list/menu-comedor-list.component';
import { MenuComedorAddComponent } from './menu-comedor-add/menu-comedor-add.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CategoriaDialogComponent } from './categoria-dialog/categoria-dialog.component';
import { CategoriaDialogTemplateDirective } from './categoria-dialog/categoria-dialog.directive';
import { CategoriaDialogService } from './categoria-dialog/categoria-dialog.service';
import { AlertService } from './common-services/alert.service';
import { AlertComponent } from './directives/alert.component';
import { HeaderService } from './header/header.service';
import { PlatoDialogComponent } from './plato-dialog/plato-dialog.component';
import { PlatoDialogService } from './plato-dialog/plato-dialog.service';
import { PlatoDialogTemplateDirective } from './plato-dialog/plato-dialog.directive';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    MainComponent,
    ComedorComponent,
    TipsComponent, 
    LoginComponent,
    TipsSaludablesComponent,
    TipDialogComponent,
    TipDialogTemplateDirective,
    ComedorDialogComponent,
    ComedorDialogTemplateDirective,
    CategoriaDialogTemplateDirective,
    ConfirmationDialogComponent,
    ConfirmTemplateDirective,
    FileSelectDirective,
    ImagePreviewDirective,
    FileUploadComponent,
    ContactoComponent,
    MenuComedorListComponent,
    MenuComedorAddComponent,
    CategoriaDialogComponent,
    AlertComponent,
    PlatoDialogComponent,
    PlatoDialogTemplateDirective
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BlockUIModule.forRoot(),
    MaterialModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    AngularFontAwesomeModule
    
  ],
  exports: [
   TipDialogTemplateDirective,
   CategoriaDialogTemplateDirective,
   ComedorDialogTemplateDirective,
   ConfirmTemplateDirective,
   ImagePreviewDirective,
   PlatoDialogTemplateDirective
  ],
  providers: [ExecutionHandlerService, 
              ConfirmService,
              LoginService, 
              TipCocinaService, 
              TipSaludableService, 
              TipDialogService,
              ComedorService,
              ComedorDialogService,
              AuthGuard, 
              DialogState,
              ContactoService,
              {provide: LOCALE_ID, useValue: "es-ES"},
              {
                provide: HTTP_INTERCEPTORS,
                useClass: HttpErrorInterceptor,
                multi: true
              },
              ToasterService,
              CategoriaDialogService,
              AlertService,
              HeaderService,
              PlatoDialogService],
              
  bootstrap: [AppComponent]
})
export class AppModule { }
