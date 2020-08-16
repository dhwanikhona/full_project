import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/user.service';
import { Router } from '@angular/router';
import{Userdetails} from '../userdetails';
import{SavingsAccount} from '../savings-account';
import { AuthenticationService } from '@app/authentication.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
private userdetails:Userdetails;
 private savingsaccount:SavingsAccount;

  constructor(private authenticationService: AuthenticationService, private router:Router,private service:UserService) {
    this.userdetails=new Userdetails();
    this.savingsaccount = new SavingsAccount();
   }
   logout(){
      this.authenticationService.logout();
      this.router.navigate(['/icin-bank']);
          

    }

  ngOnInit() {
    this.service.getUser().subscribe(res=>{this.userdetails=res});
    this.service.getSavingsAccount().subscribe(res=>{this.savingsaccount=res});
  }
  

}
