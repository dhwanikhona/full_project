import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AdminRequest } from '../admin-request';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/authentication.service';

@Component({
  selector: 'app-chequerequest',
  templateUrl: './chequerequest.component.html',
  styleUrls: ['./chequerequest.component.css']
})
export class ChequerequestComponent implements OnInit {
  private adminrequests:AdminRequest[];
  private acceptRequest:string;
  private deleteRequest:string;

  constructor(private authenticationService: AuthenticationService,private adminService:AdminService,private router:Router) {

   
    
   }
logout(){
      this.authenticationService.logout();
      this.router.navigate(['/icin-bank']);
          

    }
  ngOnInit() {

    this.adminService.getRequests().subscribe(res=>{this.adminrequests=res});

  }
accept($event:MouseEvent,requestId:number){
  ($event.target as HTMLButtonElement).disabled = true;

  const button = document.getElementById("decline_button");

  console.log((button as HTMLButtonElement).disabled);
 
 (button as HTMLButtonElement).disabled = true;
 
  this.adminService.acceptUserRequest(requestId).subscribe(res=>{this.acceptRequest=res});

}


  decline($event:MouseEvent,requestId:number){
    ($event.target as HTMLButtonElement).disabled = true;

    const button = document.getElementById("accept_button");

    console.log((button as HTMLButtonElement).disabled);
  
    (button as HTMLButtonElement).disabled = true;

    this.adminService.deleteUserRequest(requestId).subscribe(res=>this.gotoHome());
   
  }
  gotoHome(){

    this.router.navigate(['/chequerequest']);
  }







}