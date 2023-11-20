import { Component,OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { compras } from 'src/app/models/compras';
@Component({
  selector: 'app-vercompras',
  templateUrl: './vercompras.component.html',
  styleUrls: ['./vercompras.component.css']
})
export class VercomprasComponent implements OnInit{

  constructor(private _serviceCubos: ServiceCubos) {
    
  }
  public compras!:Array<compras>

  ngOnInit(): void {
    this._serviceCubos.getCompras().subscribe((response)=>{
     this.compras=response
    })
}
}
