import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-item',
  templateUrl: './sell-item.component.html',
  styleUrls: ['./sell-item.component.scss']
})
export class SellItemComponent implements OnInit {
  seller: string ='';
  category: string = '';
  name: string ='';
  location: string = '';


  constructor() { 
    this.seller ='';
    this.category = '';
    this.name ='';
    this.location = '';
  }

  ngOnInit() {
  }

  private sellThis(){
    console.log('Selling '+this.name);
  }

}
