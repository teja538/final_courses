import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HpyComponent } from './hpy/hpy.component';
import { SahajComponent } from './sahaj/sahaj.component';
import { VtpComponent } from './vtp/vtp.component';
import { InfoformComponent } from './infoform/infoform.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:"home",component:HomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},

  {path:"vtp",component:VtpComponent},
  {path:"hpy",component:HpyComponent},
  {path:"sahaj",component:SahajComponent},
  {path:"form",component:InfoformComponent},
  {path:"login",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


