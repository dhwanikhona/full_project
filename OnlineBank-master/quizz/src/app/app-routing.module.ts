import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakequizComponent } from './takequiz/takequiz.component';
import { ReviewComponent } from './review/review.component';
import { ResultsComponent } from './results/results.component';
import { SubmitquizComponent } from './submitquiz/submitquiz.component';
import { ProfileComponent } from './profile/profile.component';
import { SavingComponent } from './saving/saving.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { IcinBankComponent } from './icin-bank/icin-bank.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ChequerequestComponent } from './chequerequest/chequerequest.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
{path:'request',component:TakequizComponent},
{path:'transfer',component:ReviewComponent},
{path:'transaction',component:ResultsComponent},
{path:'submit',component:SubmitquizComponent},
{path:'profile',component:ProfileComponent},
{path:'saving',component:SavingComponent},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'icin-bank',component:IcinBankComponent},
{path:'myprofile',component:MyprofileComponent},
{path:'adminhome',component:AdminhomeComponent},
{path:'userdetails',component:UserdetailsComponent},
{path:'chequerequest',component:ChequerequestComponent},
{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
{path:'logout',component:LogoutComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
