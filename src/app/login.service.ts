
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";

@Injectable()
export class StuffService{

    constructor(private http: Http) { }

    headers: HttpHeaders = new HttpHeaders();

 


    login(userID: string, password: string): string{
        console.log('logging in '+userID);
        // this.http.post('', );
        return '';
    }
    

}