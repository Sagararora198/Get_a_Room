import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PropertiesComponent } from './properties/properties.component';
import { HotelDescriptionComponent } from './hotel-description/hotel-description.component';
import { RoomdetailsComponent } from './roomdetails/roomdetails.component';
import { WalletManagementComponent } from './wallet-management/wallet-management.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { AdminbookingsComponent } from './adminbookings/adminbookings.component';
import { CheckoutComponent } from './layout/checkout/checkout.component';
import { ConfirmationComponent } from './layout/confirmation/confirmation.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'properties',component:PropertiesComponent},
  {path:'hotelDesc',component:HotelDescriptionComponent},
  {path:'roomdetail',component:RoomdetailsComponent},
  {path:'walletmanage',component:WalletManagementComponent},
  {path:'profile',component:ProfileUserComponent},
  {path:'bookings',component:AdminbookingsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'**',component:PageNotFoundComponent}
];
