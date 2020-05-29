import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'switchdirective',
  templateUrl: './switchdirective.component.html',
  styleUrls: ['./switchdirective.component.css']
})
export class SwitchdirectiveComponent implements OnInit {

  friend: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
