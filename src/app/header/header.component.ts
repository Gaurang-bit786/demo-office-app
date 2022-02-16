import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { StringMappingType } from 'typescript';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe : EventEmitter<any> = new EventEmitter();

  user:string = "";


  constructor(private cookie:CookieService,private route:Router) {
    if(this.cookie.getAll()==null){
      this.route.navigate(["/"])
    }
   }

  ngOnInit(): void {
  }


  getUser(){
    return this.cookie.get("username");
  }

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }

  logout(){
    this.cookie.deleteAll();
    this.route.navigate([''])
  }
}
