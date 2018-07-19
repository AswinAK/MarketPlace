import {Item} from '../app/item'
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class StuffService{

    constructor(private http: Http) { }

    items: Item[]  = [{id: 10, category:'Games',name:'COD', seller:'Aswin',location:'Palo Alto'},
    {id: 11, category:'Books',name:'GOT', seller:'Aswin',location:'Palo Alto'},
    {id: 12, category:'Games',name:'Halo 1', seller:'Aswin',location:'Palo Alto'},
    {id: 13, category:'DVDs',name:'Lord of the Rings', seller:'Kavya',location:'Menlo Park'},
    {id: 14, category:'DVDs',name:'FRIENDS', seller:'Kavya',location:'Menlo Park'},
    {id: 15, category:'Games',name:'Counter Strike', seller:'Bob',location:'NYC'},
    {id: 16, category:'Books',name:'Harry Potter', seller:'Bob',location:'NYC'},
    {id: 17, category:'Books',name:'Kane and Abel', seller:'Bob',location:'NYC'},
    {id: 18, category:'Books',name:'Dan Brown Series', seller:'Cathy',location:'Illinois'},
    {id: 19, category:'Games',name:'Mario', seller:'Cathy',location:'Illinois'}

]

    getAllStuff(){
        return this.items;
    }

    addStuff(newItem){
        console.log('add new stuff service '+JSON.stringify(newItem));
        this.http.post('upload_product_form', newItem);
    }
    

}