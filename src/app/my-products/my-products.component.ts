import { Component, OnInit } from '@angular/core';
import {StuffService} from '../stuff.service';
import {Item} from "../item"

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss'],
  providers: [StuffService]
})
export class MyProductsComponent implements OnInit {
  
  private items: Item[]=[]

  constructor(private stuffService: StuffService) { 

    this.items = stuffService.getAllStuff();

  }

  ngOnInit() {
    
  }

}
