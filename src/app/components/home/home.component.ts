import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubos } from 'src/app/models/cubo';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

public cubos!:Array<Cubos>

constructor(private _serviceCubos: ServiceCubos) {
  
}

ngOnInit(): void {
    this._serviceCubos.getCubos().subscribe((response)=>{
      this.cubos=response
    })
}
}
