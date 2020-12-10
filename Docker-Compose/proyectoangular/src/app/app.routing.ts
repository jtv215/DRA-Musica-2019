import { CancionEditComponent } from './component/cancion-edit.component';
import { CancionDetailComponent } from './component/cancion-detail.component';
import { CancionAddComponent } from './component/cancion-add.component';
import { HomeComponent } from './component/home.component';
import {Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { CancionesListComponet } from './component/canciones-list.component';



const appRoutes: Routes = [
    {path:'' ,component: HomeComponent}, //pag principal
    {path:'home',component:HomeComponent},
    {path:'canciones',component:CancionesListComponet},
    {path:'addCancion',component:CancionAddComponent},
    {path:'cancion/:id',component:CancionDetailComponent},
    {path:'editarCancion/:id',component:CancionEditComponent},

    {path: '**',component:HomeComponent}//cuando hay algun fallo
]


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);