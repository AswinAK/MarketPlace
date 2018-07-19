/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import {StuffService} from '../stuff.service';
import {Item} from "../item"

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
    providers: [StuffService]
})
export class HomeComponent {

    private items: Item[]=[]
    private data: Item[]=[]

    constructor(private stuffService: StuffService) {
        this.data = stuffService.getAllStuff().filter(x => x.seller!='Aswin');
        this.items = this.data; 
      }

    private refresh(code : number) {
        
        switch(code) {
            
            case 0: 
                this.items = this.data;
                break;

            case 1:
                this.items = this.data.filter(x => x.category=="Books");
                console.log("BOOKS");
                break;
                
            case 2:
                this.items = this.data.filter(x => x.category=="DVDs");
                break;
            
            case 3:
                this.items = this.data.filter(x => x.category=="Games");
                break;
        }

      }

    }
