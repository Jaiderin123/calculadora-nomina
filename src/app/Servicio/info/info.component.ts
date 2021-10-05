import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calculo } from 'src/app/Modelo/Calculo';
import { Servicio } from 'src/app/Modelo/Servicio';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  servicio : Servicio=new Servicio();
  calculo : Calculo=new Calculo();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Info();
  }

  Listar(){
    this.router.navigate(["listar"])
  }

  Info(){
    let id = localStorage.getItem("id");
    let id_tecnico = localStorage.getItem("id_tecnico");
    this.service.getCalculoId(id!)
    .subscribe(x=>{
      this.servicio.id_tecnico=id_tecnico!;
      this.calculo=x;
    });
  }

}
