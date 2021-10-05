import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/Modelo/Servicio';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) {
  }

  ngOnInit(): void {
  }

  servicio:Servicio = new Servicio();
  
  Guardar(){
    this.service.createServicio(this.servicio).subscribe(data=>{
      alert("Se ha agregado con exito "+this.servicio.id_tecnico+" - "+ this.servicio.nombre_servicio);
      this.router.navigate(["listar"]);
    });
  }

}
