import {Item} from '../app/item'
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class StuffService{

    constructor(private http: Http) { }

    items: Item[]  = [{id: 10, category:'Games',name:'COD', seller:'Aswin',location:'Palo Alto'},
    {id: 11, category:'Books',name:'GOT', seller:'Aswin',location:'Palo Alto'},
    {id: 12, category:'Games',name:'Halo', seller:'Aswin',location:'Palo Alto'},
    {id: 12, category:'Games',name:'Halo', seller:'Aswin',location:'Palo Alto'}
]

    getAllStuff(){
        return this.items;
    }

    addStuff(newItem){
        console.log('add new stuff service '+JSON.stringify(newItem));
        this.http.post('', newItem);
    
    }
    

}