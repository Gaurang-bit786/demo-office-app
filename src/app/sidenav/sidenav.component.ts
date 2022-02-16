import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private cookie:CookieService) { }

  ngOnInit(): void {
  }
  panelOpenState = true;
  getUser(){
    return this.cookie.get("username");
  }
  public profileCollapsed = true;
  public employeeCollapsed = true;
  public isCollapsed = true;
}
