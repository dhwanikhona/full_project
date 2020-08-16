import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/authentication.service';
import { first } from 'rxjs/operators';
import { Login } from '@app/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  login: Login;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { 
      this.login = new Login();
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/home']);
      }
      
    }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    
      this.submitted = true;

      // stop here if form is invalid
      // if (this.loginForm.invalid) {
      //     return;
      // }

      this.loading = true;
      if(this.login.username=="admin1" && this.login.password=="admin1"){
         this.router.navigate(['/adminhome']);
      
      }else{

         this.authenticationService.login(this.login.username,this.login.password)
          .pipe(first())
          .subscribe(
              data => {
                  console.log(data);
                  this.router.navigate(['/home']);
                  
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });

      }
      
  }






  home(){
    this.router.navigate(['/adminhome']) 
  }

}
