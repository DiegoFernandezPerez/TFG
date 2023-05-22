import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/services/services';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos: any = [];
  constructor(private readonly webService: WebService) {
    webService.getProductos().subscribe((productos: any) => {
      this.productos = productos; console.log(this.productos);
    })
  }
  /*   constructor(private readonly webService: WebService) { }
  
    ngOnInit(): void {
      this.webService.getProductos().subscribe(res=>{this.productos=res; console.log(res)});
      
      
      
    } */

}
