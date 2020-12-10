import { Cancion } from './../models/cancion';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { CancionesService } from '../services/cancion.services';


@Component({
    selector: 'cancion-add',
    templateUrl: '../views/cancion-add.html',
    providers: [CancionesService]
})

export class CancionAddComponent {
    public title: string;
    public cancion: Cancion;


    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _cancionService: CancionesService
    ) {
        this.title = 'Añadir Cancion';
        this.cancion = new Cancion('','', '', '', '');
    }


    onSubmit() {
        console.log(this.cancion);
        this._cancionService.addCancion(this.cancion).subscribe(
            result  => { 
               
                console.log(result);
                if (result['respuesta']== 'OK') {
                    this._router.navigate(['/home']);
                }
            },
            error => {
                console.log(<any>error);
            }
        );

    }
}