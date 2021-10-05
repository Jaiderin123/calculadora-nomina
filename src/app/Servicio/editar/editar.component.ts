import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/Modelo/Servicio';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  servicio : Servicio=new Servicio();
  
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Listar(){
    this.router.navigate(["listar"])
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getServicioId(id!)
    .subscribe(data=>{
      this.servicio=data;
    })
  }

  Actualizar(servicio:Servicio){
    this.service.updateServicio(servicio)
    .subscribe(data=>{
      this.servicio=data;
      alert("Se edito con exito");
      this.router.navigate(["listar"]);
    })
  }

}
