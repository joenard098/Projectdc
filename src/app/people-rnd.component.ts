import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'people-rnd',
  templateUrl: './people-rnd.component.html',
  styleUrls: ['./app.component.css']
})

export class PeopleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  result:any;

  rndNumber1 = Math.floor(Math.random() * 46) + 1;
  rndNumber2 = Math.floor(Math.random() * 46) + 1;
  rndNumber3 = Math.floor(Math.random() * 46) + 1;
  rndNumber4 = Math.floor(Math.random() * 46) + 1;
  rndNumber5 = Math.floor(Math.random() * 46) + 1;
  rndNumber6 = Math.floor(Math.random() * 46) + 1;


  clickedrndNumber1(){
    this.result = this.rndNumber1;
  }

  clickedrndNumber2(){
    this.result = this.rndNumber2;
  }

  clickedrndNumber3(){
    this.result = this.rndNumber3;
  }

  clickedrndNumber4(){
    this.result = this.rndNumber4;
  }

  clickedrndNumber5(){
    this.result = this.rndNumber5;
  }

  clickedrndNumber6(){
    this.result = this.rndNumber6;
  }

}
