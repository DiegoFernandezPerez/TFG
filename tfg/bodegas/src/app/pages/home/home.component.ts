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
export class HomeComponent implements OnInit{
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
    console.log(this.localidades);
    webService.getProductos().subscribe((localidades:any)=>{ 
      this.localidades = localidades['0']; console.log(this.localidades);
    }) 
    console.log(this.localidades);
  }
  ngOnInit(): void {
    console.log(this.localidades);
  }
  
}
