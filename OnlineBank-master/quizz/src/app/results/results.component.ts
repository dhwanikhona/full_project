import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Transaction } from '../transaction';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/authentication.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
 private transaction:Transaction;
 
  constructor(private authenticationService: AuthenticationService,private service:UserService,private router: Router) {
	  this.transaction=new Transaction();
	  
  }
transac(){
  
	this.service.depotransaction(this.transaction).subscribe(res=>this.gotoHome());
  this.router.navigate(['/transaction']);


}
withdrawtransac(){

	this.service.withdrawtransaction(this.transaction).subscribe(res=>this.gotoHome())

}
 logout(){
      this.authenticationService.logout();
      this.router.navigate(['/icin-bank']);
          

    }
gotoHome(){
   this.transaction = new Transaction();
    this.router.navigate(['/transaction']);
    
  }
  ngOnInit() {
  
  }
}

