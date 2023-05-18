import { Component, Injectable, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/services/services';

@Component({
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrls: ['./vinos.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class VinosComponent {

  precios: any;
  constructor(webService: WebService){
    webService.getPrecio().subscribe((precios:any)=>{
      this.precios = precios['producto'];
    })
    console.log(this.precios);
  }

}
