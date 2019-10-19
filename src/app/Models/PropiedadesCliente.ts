export class PropiedadesCliente{
    constructor(
        public ID: number,
        public Precio:number,
        public Direccion_Exacta: string,
        public Titulo: string,
        public Parqueo_Visitas: boolean,
        public Niveles: number,
        public Piscina: boolean,
        public Gimnasio: boolean,
        public Tamano_Terreno:number,
        public Tamano_Construccion:number,
        public Cant_Habitaciones: number,
        public Cant_Banos: number,
        public Cant_Parqueos: number,
        public Descripcion: string,
        public Foto_Principal: string,
        public ID_Ubicacion: number,
        public Nombre_Inmueble:string

    ){}
}