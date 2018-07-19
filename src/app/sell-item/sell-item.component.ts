import { Component, OnInit } from '@angular/core';
import {StuffService} from '../stuff.service';

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
  stuffService: StuffService


  constructor(service: StuffService) { 
    this.seller ='';
    this.category = '';
    this.name ='';
    this.location = '';
    this.stuffService = service;
  }

  ngOnInit() {
  }

  private sellThis(){
    console.log('Selling '+this.name);
    this.stuffService.addStuff({id:0, category: this.category, name: this.name, seller: this.seller, location: this.location})
  }

}
