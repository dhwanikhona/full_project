import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '@app/authentication.service';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { UserService } from '@app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    private accountBalance:string;
    constructor(private authenticationService: AuthenticationService,
      private router:Router,private service:UserService) {

        

       
    }

    ngOnInit() {

      this.service.getAccountBalance().subscribe(res=>{this.accountBalance=res})
      



        
    }

    logout(){
      this.authenticationService.logout();
      this.router.navigate(['/icin-bank']);
          

    }

}
