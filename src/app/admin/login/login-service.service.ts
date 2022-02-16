import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }


  loginUser(username:string, password:string){
    return this.http.post("http://192.168.29.153:8084/auth/login",{
      'email':username,'password':password
    })
  }


}
