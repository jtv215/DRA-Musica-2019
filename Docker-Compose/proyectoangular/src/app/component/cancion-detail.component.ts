import { Cancion } from './../models/cancion';
import { CancionesService } from './../services/cancion.services';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'cancion-detail',
    templateUrl: '../views/cancion-detail.html',
    providers: [CancionesService]
})

export class CancionDetailComponent {
    public cancion: Cancion;

    constructor(
        private _cancionService: CancionesService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        console.log('Se inicia Componente cancion-detail');
        this.getCancion();
    }


    getCancion() {
        //Recoger el parametro de la url
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            // alert(id);

            this._cancionService.getCancion(id).subscribe(
                response => {
                    console.log(response);
                    this.cancion = response[0];
                },
                error => {
                    console.log(<any>error);
                }
             );

           


        });



    }


}