import { MessageService } from './../message.service';
import { User } from '../../user';
import { Global } from './global';
import { Cancion } from '../models/cancion';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

//HTTP
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'; //npm install --save rxjs-compat
import { Observable, of } from 'rxjs';//devolver un observable


const httpOptions = {
    headers: new HttpHeaders({'responseType': 'text', 'Content-Type': 'application/json; charset=utf-8' , 'Access-Control-Allow-Origin': '*'})
    
};


@Injectable({ providedIn: 'root' })

export class CancionesService {
     public url: string;


    constructor(
        private _http: HttpClient
        // private messageService: MessageService
    ) {
         this.url = Global.url;
    }


    getPrueba() {
        return "hola Mundo desede el servicio";
    }
   
    getCanciones(): Observable<Cancion[]> {
        return this._http.get<Cancion[]>(this.url+"cancion",httpOptions)
    }

    getCancion(id): Observable<Cancion[]> {

        return this._http.get<Cancion[]>(this.url+"cancion/filter/"+id,httpOptions)
    }

    addCancion(cancion: Cancion) : Observable<any>{
        let json = JSON.stringify(cancion);            
        return this._http.post(this.url+'cancion',json,httpOptions) ;
        
    }

    editCancion(id,cancion: Cancion) : Observable<any>{
        let json = JSON.stringify(cancion);            
        return this._http.post(this.url+'cancion',json,httpOptions) ;
        
    }

    deleteCancion(idCancion) : Observable<any>{              
    return this._http.post(this.url+'deleteCancion/'+idCancion,httpOptions) ;
    }

}

