import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviroments/environment';
import { Seguridad } from '../models/seguridad';
import { usuario } from '../models/usuario';
@Injectable()
export class ServiceCubos {
  constructor(private _http: HttpClient) { }


  getCubos(): Observable<any> {

    var url = "https://apitiendacubos2023.azurewebsites.net/api/Cubos"
    return this._http.get(url)

  }

  getMaarcas(): Observable<any> {

    var url = "https://apitiendacubos2023.azurewebsites.net/api/Cubos/Marcas"
    return this._http.get(url)

  }

  getCubosMarcas(marca: string): Observable<any> {

    var url = "https://apitiendacubos2023.azurewebsites.net/api/Cubos/CubosMarca/" + marca
    return this._http.get(url)

  }
  getCubosDetalles(id: string): Observable<any> {

    var url = "https://apitiendacubos2023.azurewebsites.net/api/Cubos/" + id
    return this._http.get(url)

  }
  getCubosDetallesComentarios(id: string): Observable<any> {

    var url = "https://apitiendacubos2023.azurewebsites.net/api/ComentariosCubo/GetComentariosCubo/" + id
    return this._http.get(url)

  }

  seguridad(usu: Seguridad): Observable<any> {

    var header = new HttpHeaders().set('content-type', 'application/json');
    var json = JSON.stringify(usu);
    var url = "https://apitiendacubos2023.azurewebsites.net/api/Manage/Login"

    return this._http.post(url, json, { headers: header })

  }

  getPerfil(): Observable<any> {

    var header = new HttpHeaders().set('authorization', 'bearer ' + environment.token);
    var url = "https://apitiendacubos2023.azurewebsites.net/api/Manage/PerfilUsuario"
    return this._http.get(url, { headers: header })

  }
  getCompras(): Observable<any> {

    var header = new HttpHeaders().set('authorization', 'bearer ' + environment.token);
    var url = "https://apitiendacubos2023.azurewebsites.net/api/Compra/ComprasUsuario"
    return this._http.get(url, { headers: header })

  }


  registro(usu: usuario): Observable<any> {

    var header = new HttpHeaders().set('content-type', 'application/json');
    var json = JSON.stringify(usu);
    var url = "https://apitiendacubos2023.azurewebsites.net/api/Manage/RegistroUsuario"
    console.log(json)
    return this._http.post(url, json, { headers: header })

  }

}