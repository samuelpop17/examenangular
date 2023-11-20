import { Component, ElementRef, ViewChild } from '@angular/core';
import { Seguridad } from 'src/app/models/seguridad';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/environment';
import { ServiceCubos } from 'src/app/services/service.cubos';
@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent {
  public token!: string;
  @ViewChild('cajaname') cajaNmaeRef!: ElementRef;
  @ViewChild('cajapassword') cajaPasswordRef!: ElementRef;

  constructor(private _serviceCubos: ServiceCubos, private _router: Router) {

  }
  BuscarToken() {
    var nom = this.cajaNmaeRef.nativeElement.value
    var pas = this.cajaPasswordRef.nativeElement.value

    var usu = new Seguridad(nom, pas)
    this._serviceCubos.seguridad(usu).subscribe((response) => {
      environment.token = response.response
      console.log(environment.token)
      
    })

  }

}

