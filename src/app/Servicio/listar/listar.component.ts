import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calculo } from 'src/app/Modelo/Calculo';
import { Servicio } from 'src/app/Modelo/Servicio';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  servicios: Servicio[] = [];
  calculos: Calculo[] = [];

  //BUSCADOR
  cc!:string;
  week!:string;

  //total_horas
  total_horas!:string;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getServicios()
    .subscribe(data=>{
      this.servicios=data;
      //console.log("GET SERVICIOS\n",data);
    });
  }

  Info(servicio:Servicio):void{

    localStorage.setItem("id",servicio.id.toString());
    localStorage.setItem("id_tecnico",servicio.id_tecnico.toString());
    this.router.navigate(["info"])

   /* this.service.getCalculoId(servicio.id)
    .subscribe(x=>{
      localStorage.setItem("id",servicio.id.toString());
      localStorage.setItem("id_calculo",x.id.toString());
      console.log("id del servicio->",servicio.id,"\nid del calculo->",x.id);
    });*/
  }

  Buscar(cc:string,week:string){
    if(cc== undefined || week== undefined || cc.length === 0 || week.length === 0){
      alert("PARA BUSCAR DEBE DE DIGITAR CEDULA Y SEMANA DEL AÑO");
    }else {
      localStorage.setItem("cc",cc.toString());
      localStorage.setItem("week",week.toString());

    this.router.navigate(["buscar"])
    } 
  }

  /*
  Editar(servicio:Servicio):void{
    localStorage.setItem("id",servicio.id.toString());
    this.router.navigate(["editar"])
  }*/

}
