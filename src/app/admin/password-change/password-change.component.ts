import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  constructor(private cookie:CookieService,private route:Router,private http:HttpClient) { 
    if(!this.cookie.get("token")){
      this.route.navigate([""])
    }
    console.log(this.cookie.get("token"))
  }

  baseURL='http://192.168.29.153:8084';
  
  ngOnInit(): void {

    
    

    
  }  

  oldPassword:string="";
  newPassword:string="";
  confirmPassword:string="";


  changePasword(){
    var header = new HttpHeaders();
    header.append("Authorization","Bearer "+this.cookie.get("token"))
    Swal.fire(this.oldPassword)
    if(this.newPassword!==this.confirmPassword){
      Swal.fire("Password Doest Not match")
      this.oldPassword="";
      this.newPassword="";
      this.confirmPassword="";
    }else{
        if(this.newPassword===""&&this.confirmPassword===""&&this.oldPassword===""){
          Swal.fire("All Fields are manditory")
        }else{
           this.http.post(`${this.baseURL}/api/changePassword`,{

            oldPassword:this.oldPassword,
            password:this.newPassword
          },{
            headers:header
          }).subscribe(res=>{
            console.log(res)
          })
        }
    }
  }

  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }


}
