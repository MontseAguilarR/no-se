import { Component, OnInit } from '@angular/core';
import { Cancion } from 'src/app/Models/canciones';
import { CancionService } from 'src/app/Services/cancion.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-listar-canciones',
  templateUrl: './listar-canciones.component.html',
  styleUrls: ['./listar-canciones.component.css']
})
export class ListarCancionesComponent implements OnInit{
   
  listCanciones: Cancion[]=[];

  constructor(private _cancionService: CancionService,
           private toastr: ToastrService){ }

  ngOnInit(): void {
    this.obtenerCanciones();
  }

  obtenerCanciones(){
    this._cancionService.getCanciones().subscribe(data =>{
      console.log(data);
      this.listCanciones=data;
    }, error=>{
      console.log(error);
    })
  }

  eliminarCanciones(id: any){
    this._cancionService.eliminarCanciones(id).subscribe(data=>{
      this.toastr.error('cancion eliminada con exito', 'Cancion eliminada');
      this.obtenerCanciones();
    },error=>{
      console.log(error);
    })
  }
}
