import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClassdirectiveComponent } from './directive/classdirective/classdirective.component';
import { FordirectiveComponent } from './directive/fordirective/fordirective.component';
import { IfdirectiveComponent } from './directive/ifdirective/ifdirective.component';
import { StyledirectiveComponent } from './directive/styledirective/styledirective.component';
import { SwitchdirectiveComponent } from './directive/switchdirective/switchdirective.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ClassdirectiveComponent,
    FordirectiveComponent,
    IfdirectiveComponent,
    StyledirectiveComponent,
    SwitchdirectiveComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
