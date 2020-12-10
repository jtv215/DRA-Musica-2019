import { CancionDetailComponent } from './component/cancion-detail.component';
import { CancionAddComponent } from './component/cancion-add.component';
import { MessagesComponent } from './messages/messages.component';
import { CancionesListComponet } from './component/canciones-list.component';
import { routing,appRoutingProviders } from './app.routing';
import { HomeComponent } from './component/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CancionEditComponent } from './component/cancion-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CancionesListComponet,
    CancionAddComponent,
    CancionDetailComponent,
    CancionEditComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
