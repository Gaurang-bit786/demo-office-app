import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  
  constructor(private route: ActivatedRoute) { }
  public token:string = "";
  public newPassword:string = "";
  public confirmPassword:string = "";
  ngOnInit(): void {  
   
  }

  changePassword(){
    
    if(this.newPassword !== this.confirmPassword){
      Swal.fire("Password not matched")
      this.newPassword = "";
      this.confirmPassword = "";
    }else{
      Swal.fire("Password Changed")
      this.newPassword = "";
      this.confirmPassword = "";
    }

    alert(this.route.snapshot.paramMap.get('id'))

  }

}
