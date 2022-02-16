import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit {

  constructor(private cookies:CookieService, private router:Router, private ls:LoginServiceService,private dialog:MatDialog) {    
    if(this.cookies.get("token")){
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {


  }
  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  

  username:string = "";
  password:string = "";
  data:any;
  getname(){
    return this.cookies.get("username")
  }


  loginNow(){
    if(this.username!=""&& this.password!=""){
    this.ls.loginUser(this.username,this.password).subscribe(res=>{
     this.data = res;

        

        this.cookies.set("token",this.data[0])
        this.cookies.set("username",this.data[1])
        this.cookies.set("role",this.data[2])
        this.cookies.set("email",this.username)
        this.cookies.set("alldetails",this.data)
        this.router.navigate(['/dashboard']);

    },e=>{
      alert("Error")
    })
    }else{
      Swal.fire(
        'Fill all fields!!',
        'All Fields Are Manditory',
        'warning'
      )
    }

    
  }
}
