import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';
import { BodyComponent } from './Body/body.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { EmailsComponent } from './emails/emails.component';

import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//import {RouterModule, Routes } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

//const appRoute: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ContentComponent,
    AboutComponent,
    EmailsComponent
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    //RouterModule.forRoot(appRoute)
    MatButtonModule,
    MatToolbarModule
  ],
  //exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
