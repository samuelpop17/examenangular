import { Component, OnInit} from '@angular/core';
import { Cubos } from 'src/app/models/cubo';
import { ServiceCubos } from 'src/app/services/service.cubos';
import {  Params, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-marcascubos',
  templateUrl: './marcascubos.component.html',
  styleUrls: ['./marcascubos.component.css']
})
export class MarcascubosComponent implements OnInit{
public cubos!:Array<Cubos>
public marca!:string

constructor(private _activeRoute: ActivatedRoute,private _serviceCubos: ServiceCubos) {
  
}

ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
      var marca =parametros['marca']
      this.marca=marca
      this._serviceCubos.getCubosMarcas(marca).subscribe((response)=>{
        this.cubos=response
      })
    })
}
}
