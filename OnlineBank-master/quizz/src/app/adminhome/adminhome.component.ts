import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/authentication.service';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,private router: Router) { }
logout(){
      this.authenticationService.logout();
      this.router.navigate(['/icin-bank']);
          

    }
  ngOnInit() {
  }

}
