import { User } from './../../user';
import { Cancion } from './../models/cancion';
import { CancionesService } from '../services/cancion.services';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'canciones-list',
    templateUrl: '../views/canciones-list.html',
    providers: [CancionesService]
})


export class CancionesListComponet {
    public titulo: string;
    public canciones: Cancion[];
    public confirmado;


    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _CancionService: CancionesService

    ) {
        this.titulo = 'Listado de canciones';
        this.confirmado = null;
    }

    ngOnInit() {
        console.log("Se cargar el componente lista canciones");
        this.getCanciones();
    }

    getCanciones() {
        this._CancionService.getCanciones().subscribe(
            result => {
                this.canciones = result;
                console.log(result);
                if (!this.canciones) {
                    console.log("error en el servidor");
                }
            },
            error => {
                var errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        );
    }

    

    borrarConfirm(id){
        this.confirmado = id;
    }
    cancelarConfirm(){
        this.confirmado = null;
    }


    deleteCancion(idCancion) {
        this._CancionService.deleteCancion(idCancion).subscribe(
            result => {
               // console.log(result);                
               if (result['respuesta']== 'OK') {
                    this.getCanciones();
                }else{
                    alert("Error al borrar productos");
                }
                
            },

            error => {
                console.log(<any>error);
            }

        );

    }


}