import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PropertiesComponent } from './properties/properties.component';
import { HotelDescriptionComponent } from './hotel-description/hotel-description.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'properities',component:PropertiesComponent},
  {path:'hotelDesc',component:HotelDescriptionComponent}
];
