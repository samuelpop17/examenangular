import { Component,OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { usuario } from 'src/app/models/usuario';
import { environment } from 'src/enviroments/environment';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
constructor(private _serviceCubos: ServiceCubos) {
  
}
public perfil!:usuario
  ngOnInit(): void {
       this._serviceCubos.getPerfil().subscribe((response)=>{
        this.perfil=response
       })
  }
}
