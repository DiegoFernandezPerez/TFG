import { Component, Injectable, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/services/services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class HomeComponent{
/* 
  experiencies:any;
  constructor(webService: WebService){
   webService.getInfo().subscribe((experiencies:any)=>{
   this.experiencies = experiencies['localidades'];
   })
   console.log(this.experiencies);
  } */

  localidades: any;
  constructor(webService: WebService){
    webService.getProductos().subscribe((localidades:any)=>{
      this.localidades = localidades['localidades'];
    })
    console.log(this.localidades);
  }
  
}
