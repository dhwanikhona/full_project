import{SavingsAccount} from './savings-account'
import{Request} from './request'
export class Userdetails {
     uId:number;
	
	firstName:string;
	 lastName:string;
	 mobileNumber:number;
	address:string;
	 city:string;
	 state:string;
	country:string;
	 gender:string;
	 role:string;
	 emailId:string;
	username:string;
	password:string;
	enable:boolean;
	savingsAccount:SavingsAccount ;
	
	requestsList:Request[];

}
