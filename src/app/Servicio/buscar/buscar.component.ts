import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calculo } from 'src/app/Modelo/Calculo';
import { Servicio } from 'src/app/Modelo/Servicio';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  
  servicios: Servicio[] = [];
  calculos: Calculo[] = [];

  cedula = localStorage.getItem("cc");
  semana = localStorage.getItem("week");
  intervalo!: Servicio[];

  constructor(private service:ServiceService, private router:Router) {
   }

  ngOnInit(): void {
    this.Buscar();
  }

  Buscar(){
    let cc = localStorage.getItem("cc");
    let week = localStorage.getItem("week");

    this.service.buscador(cc!,week!)
    .subscribe(data=>{
      this.servicios=data;
      console.log("BUSQUEDA\n",data);
      this.service.intervalo().subscribe(x=>{
        this.intervalo=x;
      });
    });

    
    
    /*this.service.buscador_semana(cc!,week!).subscribe(x=>{
      localStorage.setItem("total_horas",total_horas.toString());
      console.log("HORAS TRABAJADAS EN LA SEMANA->",x);
    });*/
  }

  Info(servicio:Servicio):void{
    localStorage.setItem("id",servicio.id.toString());
    localStorage.setItem("id_tecnico",servicio.id_tecnico.toString());
    this.router.navigate(["info"])
  }
}
