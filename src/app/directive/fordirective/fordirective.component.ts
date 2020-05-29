import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {


  names =['Karthikeyan', 'Rajasekar', 'Lakshmi', 'Yamuna']

  constructor() { }

  ngOnInit(): void {
  }

}
