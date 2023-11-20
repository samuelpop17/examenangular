import { Component, ElementRef, ViewChild } from '@angular/core';
import { usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/environment';
import { ServiceCubos } from 'src/app/services/service.cubos';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
 
  @ViewChild('cajaname') cajaNmaeRef!: ElementRef;
  @ViewChild('cajapassword') cajaPasswordRef!: ElementRef;
  @ViewChild('cajaemail') cajaEmail!: ElementRef;

  constructor(private _serviceCubos: ServiceCubos, private _router: Router) {

  }


  registro() {
    var nom = this.cajaNmaeRef.nativeElement.value
    var pas = this.cajaPasswordRef.nativeElement.value
    var ema = this.cajaEmail.nativeElement.value
    var id = 1
    var us = new usuario(id, nom, ema, pas)
    console.log(id, nom, ema, pas)
    this._serviceCubos.registro(us).subscribe((response) => {
      this._router.navigate(['/seguridad'])

    })
  }
}
