import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';

import {routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent, 
    HeaderComponent, NavigationComponent, FooterComponent, ViewstudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
