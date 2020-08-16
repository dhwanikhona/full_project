import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TakequizComponent } from './takequiz/takequiz.component';
import { ReviewComponent } from './review/review.component';
import { ResultsComponent } from './results/results.component';
import { SubmitquizComponent } from './submitquiz/submitquiz.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuizService } from './quiz.service';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SavingComponent } from './saving/saving.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { IcinBankComponent } from './icin-bank/icin-bank.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ChequerequestComponent } from './chequerequest/chequerequest.component';
import { AuthenticationService } from './authentication.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    TakequizComponent,
    ReviewComponent,
    ResultsComponent,
    SubmitquizComponent,
    ProfileComponent,
    SavingComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    IcinBankComponent,
    MyprofileComponent,
    AdminhomeComponent,
    UserdetailsComponent,
    ChequerequestComponent,
    LogoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
