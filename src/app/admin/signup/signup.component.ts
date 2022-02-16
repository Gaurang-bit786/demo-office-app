import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http:HttpClient,private cookies:CookieService, private router:Router) {
    if(this.cookies.get("token")){
      this.router.navigate(['/dashboard']);
    }
   }

  employeeCode:string = "";
  employeeName:string = "";
  companyCode:string = "";
  username:string = "";
  email:string = "";
  mobile:string = "";
  password1:string = "";
  password2:string = "";

  saveUser(){
    if(this.password1!==this.password2){
      Swal.fire("Password Not Matched")
    }
    else{
      this.http.post("http://192.168.29.153:8084/auth/signup",{
          employeeCode:this.employeeCode,
          employeeName:this.employeeName,
          companyCode:this.companyCode,
          username:this.username,
          password:this.password1,
          email:this.email,
          mobile:this.mobile
      }).subscribe(res=>{
        Swal.fire("Data saved")
        this.employeeCode="";
        this.employeeName="";
        this.companyCode=""
        this.username=""
        this.password1=""
        this.password2=""
        this.email=""
        this.mobile=""
      },err=>{
        console.log(err)
        Swal.fire("Internal Server Error")
      })
    }
  }

  ngOnInit(): void {
  }

}
