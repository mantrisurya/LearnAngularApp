import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifdirective',
  templateUrl: './ifdirective.component.html',
  styleUrls: ['./ifdirective.component.css']
})
export class IfdirectiveComponent implements OnInit {

  displayif: boolean = true
  displayElse:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay =()=>{
    this.displayif = this.displayif==true ? false:true
    console.log(this.displayif);
  }


  toggleDisplayElse =()=>{
    this.displayElse = this.displayElse==true ? false:true
    console.log(this.displayElse);
  }
}
