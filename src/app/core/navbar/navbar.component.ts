import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }
  topScroll(){
    window.scrollTo(0, 0);
  }

}
