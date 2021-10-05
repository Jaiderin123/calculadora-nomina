import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../Modelo/Servicio';
import { Calculo } from '../Modelo/Calculo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/servicios';

  buscador(cc:string,week:string){
    return this.http.get<Servicio[]>(this.Url+"/buscar/"+cc+"/"+week);
  }

  intervalo(){
    return this.http.get<Servicio[]>(this.Url+"/intervalo");
  }

  getServicios(){
    return this.http.get<Servicio[]>(this.Url);
  }

  createServicio(servicio:Servicio){
    return this.http.post<Servicio>(this.Url,servicio);
  }

  getServicioId(id:string){
    return this.http.get<Servicio>(this.Url+"/"+id);
  }

  getCalculoId(id:string){
    return this.http.get<Calculo>(this.Url+"/calculo/"+id);
  }

  getServicioTecnico(id_tecnico:String){
    return this.http.get<Servicio>(this.Url+"/"+id_tecnico);
  }

  updateServicio(servicio:Servicio){
    return this.http.put<Servicio>(this.Url+"/"+servicio.id,servicio);
  }

}
