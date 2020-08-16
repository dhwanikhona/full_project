import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { HttpParams } from '@angular/common/http';
import { User } from './user';
import { Request } from './request';
import { AdminRequest } from './admin-request';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Userdetails } from './userdetails';
import{SavingsAccount} from './savings-account';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
private getRequestUrl:string;
private acceptRequestUrl:string;
private getAllUsers:string;
private disableUsers:string;
private enableUsers:string;
private deleteRequestUrl:string;
private req: Request;
private getSavingsAccountUrl:string;

  constructor(private http:HttpClient,private authService: AuthenticationService) {
    this.getRequestUrl="http://localhost:8080/admin/requests";
    this.acceptRequestUrl="http://localhost:8080/admin/request";
    this.getAllUsers="http://localhost:8080/admin/getallusers";
    this.disableUsers="http://localhost:8080/admin/disable";
    this.enableUsers="http://localhost:8080/admin/enable";
    this.deleteRequestUrl="http://localhost:8080/admin/delete/request";
    this.getSavingsAccountUrl="http://localhost:8080/getSavingsAccount/accountNumber";

    this.req = new Request();
   }

  getRequests():Observable<AdminRequest[]>{
    
    
    return this.http.get<AdminRequest[]>(this.getRequestUrl);


  }


  acceptUserRequest(requestId:number){

    const currentUser = this.authService.currentUserValue;

    console.log(currentUser);

   //const requestId = reqId + "";


    //this.req.requestId = reqId.toString();

    //console.log(this.req.requestId);
    

    
    //const opts = new HttpParams().set("requestId",this.req.requestId);

    return this.http.put<any>(this.acceptRequestUrl+'/'+requestId,new HttpHeaders({"Content-Type":"application/json"}));
  }

  deleteUserRequest(requestId:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' as 'body'
    };
    const opts ={params:new HttpParams().set("requestId",requestId+"")} ;
    return this.http.delete<any>(this.deleteRequestUrl+'/'+requestId,httpOptions);
  }

  getAll(){
    return this.http.get<Userdetails[]>(this.getAllUsers);
  }

  enableUserAccount(uId:string){

  return this.http.put<any>(this.enableUsers+'/'+uId,new HttpHeaders({"Content-Type":"application/json"}));
  }

  disableUserAccount(uId:string){

  return this.http.put<any>(this.disableUsers+'/'+uId,new HttpHeaders({"Content-Type":"application/json"}));
  }

  getSavingsAccount(username:string){
    
      const opts = new HttpParams().set("username",username);

     return this.http.get<any>(this.getSavingsAccountUrl,{params:opts});

  }

}
