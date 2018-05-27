import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  appear: boolean = true;

  constructor() { }

  ngOnInit() {

  }

  onStartChat() {
    this.appear = false;
  }
}
