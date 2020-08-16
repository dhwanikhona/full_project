import{ Userdetails } from "./userdetails"
export class AdminRequest {
    requestId:number;
	date:Date;
	requestType:string;
	requestDiscription:string;
	accept:string;
	username:string;
    user:Userdetails;
}
