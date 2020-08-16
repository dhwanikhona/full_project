import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Userdetails } from '../userdetails';
import{SavingsAccount} from '../savings-account';
import { AuthenticationService } from '@app/authentication.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  private users:Userdetails[];
  private savingsaccount:number;
  private enableUser:string;
  constructor(private authenticationService: AuthenticationService,private adminService:AdminService,private router:Router,private service:UserService) { 

  
  

  }
logout(){
      this.authenticationService.logout();
      this.router.navigate(['/icin-bank']);
          

    }
  ngOnInit() {
  
  this.adminService.getAll().subscribe(res=>{this.users=res});

  

  
  
}




  enable($event:MouseEvent,uId:string){
  ($event.target as HTMLButtonElement).disabled = true;

  
 
  this.adminService.enableUserAccount(uId).subscribe(res=>{this.enableUser=res});

  }


  disable($event:MouseEvent,uId:string){
    ($event.target as HTMLButtonElement).disabled = true;

    this.adminService.disableUserAccount(uId).subscribe(res=>{this.enableUser=res});
  
    

    
   
  }

  findSavingsaccount(username:string){

    return this.adminService.getSavingsAccount(username).subscribe(res=>{this.savingsaccount=res});
  }
}