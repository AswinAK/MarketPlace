import { Component, OnInit } from '@angular/core';
import {StuffService} from '../stuff.service';
import {Item} from "../item"

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
  providers: [StuffService]
})
export class ExchangeComponent implements OnInit {

  private items: Item[]=[]
  private data: Item[]=[]

  constructor(private stuffService: StuffService) { 
    this.data = stuffService.getAllStuff().filter(x => x.seller=="Aswin");
    this.items = this.data; 
  }

  ngOnInit() {
  }
  private refresh(code : number) {
        
    switch(code) {
        
        case 0: 
            this.items = this.data;
            break;

        case 1:
            this.items = this.data.filter(x => x.category=="Books" && x.seller=="Aswin");
            console.log("BOOKS");
            break;
            
        case 2:
            this.items = this.data.filter(x => x.category=="DVDs" && x.seller=="Aswin");
            break;
        
        case 3:
            this.items = this.data.filter(x => x.category=="Games" && x.seller=="Aswin");
            break;
    }

  }


}
