import {Item} from '../app/item'
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class StuffService{

    constructor(private http: Http) { }

    items: Item[]  = [{id: 10, category:'ps4',name:'COD', seller:'Aswin',location:'Palo Alto'},
    {id: 11, category:'book',name:'GOT', seller:'Aswin',location:'Palo Alto'},
    {id: 12, category:'xbox',name:'Halo', seller:'Aswin',location:'Palo Alto'}
,{id: 12, category:'xbox',name:'Halo', seller:'Aswin',location:'Palo Alto'}
]

    getAllStuff(){
        return this.items;
    }

}