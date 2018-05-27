import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatarea',
  templateUrl: './chatarea.component.html',
  styleUrls: ['./chatarea.component.css']
})
export class ChatareaComponent implements OnInit {

  message: string = "Hello World";

  constructor() { }

  ngOnInit() {
  }

}
