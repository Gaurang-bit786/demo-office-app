import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-organisation-add',
  templateUrl: './organisation-add.component.html',
  styleUrls: ['./organisation-add.component.css']
})
export class OrganisationAddComponent implements OnInit {
  constructor(private cookie:CookieService,private route:Router) {
    if(!this.cookie.get("token")){
      this.route.navigate([""])
    }
   }
  data:any = [];
  ngOnInit() {
    
  }
  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
