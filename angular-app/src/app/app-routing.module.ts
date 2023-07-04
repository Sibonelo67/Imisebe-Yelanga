import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './Footer/footer.component';
import { AboutComponent } from './about/about.component';
import { EmailsComponent } from './emails/emails.component';

const routes: Routes = [
  //{path:'', redirectTo: '/home'},
  {path: 'footer', component: FooterComponent },
  {path:"About", component: AboutComponent},
  //{path:'email',component: EmailsComponent}
  
];

@NgModule({
  imports: [
     
  RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
