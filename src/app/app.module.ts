import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { HomebarComponent } from './homebar/homebar.component'
import { MenuService } from './services/menu.service';
import { SideNavMeniuComponent } from './side-nav/side-nav-meniu/side-nav-meniu.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { AppRoutingModule } from './app-routing';
import { HomeUtilitieComponent } from './home-utilitie/home-utilitie.component';
import { PopupInputComponent } from './shared/popup-input/popup-input.component';
import { PopupInputOpen } from './shared/popup-input/popup-input-open.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    UtilitiesComponent,
    HomebarComponent,
    SideNavMeniuComponent,
    LoginComponent,
    HomeUtilitieComponent,
    PopupInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
   
  ],
  entryComponents: [
    PopupInputComponent
],
  providers: [
    MenuService,
    LoginService,
    PopupInputOpen],
  bootstrap: [AppComponent]
})
export class AppModule { }

