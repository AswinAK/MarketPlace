
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StuffService{

    constructor(private http: Http) { }
    loginApi: string ='';

    headers: HttpHeaders = new HttpHeaders();



    login(userID: string, password: string): Observable<String>{
        const params = new HttpParams().set('uid',userID ).set('password',password);
        
        console.log('logging in '+userID);
        return this.http.get(this.loginApi, { params }).map(response => response.json());
    }
    

}