import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
private user:User;
  constructor(private service:UserService,private router : Router) {
  this.user=new User(); 
  }

adduser(){
    this.service.adduser(this.user).subscribe(res=>this.gotoLogin())
  }

  gotoLogin(){
   
    this.router.navigate(['/login'])
  }
  ngOnInit() {
  }

}
