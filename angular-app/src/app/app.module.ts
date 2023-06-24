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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
