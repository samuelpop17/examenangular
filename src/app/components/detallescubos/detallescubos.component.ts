import { Component, OnInit} from '@angular/core';
import { Cubos } from 'src/app/models/cubo';
import { ServiceCubos } from 'src/app/services/service.cubos';
import {  Params, ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
@Component({
  selector: 'app-detallescubos',
  templateUrl: './detallescubos.component.html',
  styleUrls: ['./detallescubos.component.css']
})
export class DetallescubosComponent implements OnInit{
constructor(private _activeRoute: ActivatedRoute,private _serviceCubos: ServiceCubos) {
  
}
public cubo!:Cubos
public comentarios!:Array<Comentario>

ngOnInit(): void {
  this._activeRoute.params.subscribe((parametros:Params)=>{
    var id =parametros['id']
   
    this._serviceCubos.getCubosDetalles(id).subscribe((response)=>{
      this.cubo=response
    })

    this._serviceCubos.getCubosDetallesComentarios(id).subscribe((response)=>{
      this.comentarios=response
    })
  })
}

}
