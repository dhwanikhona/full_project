import { Component, OnInit } from '@angular/core';
import { AllTransfers } from '../all-transfers';
import { AllTransactions } from '../all-transactions';
import { UserService } from '../user.service';
import { AuthenticationService } from '@app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css']
})
export class SavingComponent implements OnInit {
private transfers:AllTransfers[];
private transactions:AllTransactions[];
  constructor(private authenticationService: AuthenticationService,private router:Router,private service:UserService) { }
 logout(){
      this.authenticationService.logout();
      this.router.navigate(['/icin-bank']);
          

    }

  ngOnInit() {
      this.service.getTransfers().subscribe(res=>{
    this.transfers=res});

    this.service.getTransactions().subscribe(res=>{this.transactions=res})

  }

}
