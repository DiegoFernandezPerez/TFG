import { Component, Injectable, Input, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/services/services';

@Component({
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrls: ['./vinos.component.css']
})
export class VinosComponent {
  rosado: any;
  tinto: any;
  blanco: any ;
  constructor(webService: WebService){ console.log(this.blanco);
    webService.getBlanco().subscribe((blanco:any)=>{
      this.blanco = blanco['1'];console.log(this.blanco);
    })
    webService.getRosado().subscribe((rosado:any)=>{
      this.rosado = rosado['0'];console.log(this.rosado);
    })
    webService.getTinto().subscribe((tinto:any)=>{
      this.tinto = tinto['2'];console.log(this.tinto);
    })
  }
  
}
