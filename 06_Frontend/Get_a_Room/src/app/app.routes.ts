import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
// import {PropertiesComponent} from './properties/properties.component'
import { SignupComponent } from './signup/signup.component';
// import { PropertiesComponent } from './properties/properties.component';
import { HotelDescriptionComponent } from './hotel-description/hotel-description.component';
import { RoomdetailsComponent } from './roomdetails/roomdetails.component';
import { WalletManagementComponent } from './wallet-management/wallet-management.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { PropertiesComponent } from './properties/properties.component';
import { AddNewHotelComponent } from './add-new-hotel/add-new-hotel.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { ManageHotelComponent } from './manage-hotel/manage-hotel.component';
import { AdminbookingsComponent } from './adminbookings/adminbookings.component';
import { AddNewHotelRoomproperty1Component } from './add-new-hotel-roomproperty1/add-new-hotel-roomproperty1.component';
import { AddNewHotelRoomproperty2Component } from './add-new-hotel-roomproperty2/add-new-hotel-roomproperty2.component';
import { AddNewHotelRoomproperty3Component } from './add-new-hotel-roomproperty3/add-new-hotel-roomproperty3.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'properties',component:PropertiesComponent},
  {path:'properties',component:PropertiesComponent},
  {path:'hotelDesc',component:HotelDescriptionComponent},
  {path:'roomdetail',component:RoomdetailsComponent},
  {path:'walletmanage',component:WalletManagementComponent},
  {path:'profile',component:ProfileUserComponent},
  {path:'manageHotel',component:ManageHotelComponent},
  {path:'bookings',component:AdminbookingsComponent},
  {path:'addNewHotelProperty1',component:AddNewHotelRoomproperty1Component},
  {path:'addNewHotelProperty2',component:AddNewHotelRoomproperty2Component},
  {path:'addNewHotelProperty3',component:AddNewHotelRoomproperty3Component},
  {path:'**',component:PageNotFoundComponent}
];
