import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  header: string;
  constructor() {
     this.header = "Student Information System";
  }

  ngOnInit() {
  }

}
