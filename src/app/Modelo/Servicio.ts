import { Calculo } from "./Calculo";

export class Servicio extends Calculo{
    id!: string;
    id_tecnico!: string;
    nombre_servicio!: string;
    fecha_inicio!: Date;
    fecha_final!: Date;
    Calculo?: Calculo;
}