import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
 

  ngOnInit() {
  }

  base64String:any = "";

  data:any = [];
  constructor(private cookie:CookieService,private route:Router,private http:HttpClient) {
    if(!this.cookie.get("token")){
      this.route.navigate([""])
    }
   }

   public firstname:string = ""
   public middlename:string = ""
   public lastname:string = ""
   public email:string = ""
   public surname:string = ""

  onSubmit(employee:any){

    console.log(this.base64textString1.substring(this.base64textString1.indexOf(",")+1,this.base64textString1.length))
    console.log(this.base64textString2.substring(this.base64textString2.indexOf(",")+1,this.base64textString2.length))
    this.http.post("http://127.0.0.1:8084/employee",{
      "firstName":this.surname + " " +this.firstname,
      "lastName":this.lastname,
      "image":this.base64textString1.substring(this.base64textString1.indexOf(",")+1,this.base64textString1.length),
      "familyImage":this.base64textString2.substring(this.base64textString2.indexOf(",")+1,this.base64textString2.length),
      "email":this.email
    }).subscribe(res=>{
      console.log(res) 
      Swal.fire("Record Save")
    })
  }
 imageFile1(e:any){
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0] )
    reader.onload =this.handleFile1.bind(this);
}
base64textString1 = ""
handleFile1(event:any) {
  var binaryString = event.target.result;
  this.base64textString1 = binaryString;
  this.base64textString1.substring(this.base64textString1.indexOf(",")+1,this.base64textString1.length)
}

imageFile2(e:any){
  var reader = new FileReader()
  reader.readAsDataURL(e.target.files[0] )
  reader.onload =this.handleFile2.bind(this);
}
base64textString2 = ""
handleFile2(event:any) {
  var binaryString = event.target.result;
  this.base64textString2 = binaryString;
  this.base64textString2.substring(this.base64textString2.indexOf(",")+1,this.base64textString2.length)
}






  showFiller = false;
  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}