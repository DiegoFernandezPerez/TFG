import { Component, Input, OnInit } from '@angular/core';
import { WebService } from '../services/services';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() vinos:any;
  // localidades: any;
  constructor(webService: WebService){ console.log(this.vinos);
    webService.getBlanco().subscribe((vinos:any)=>{
      this.vinos = vinos['0'];
    })
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
