import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrls: ['./organisation-details.component.css']
})
export class OrganisationDetailsComponent implements OnInit {

  constructor(private cookie:CookieService,private route:Router) {
    if(!this.cookie.get("token")){
      this.route.navigate([""])
    }
   }

  ngOnInit(): void {
  }
  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
