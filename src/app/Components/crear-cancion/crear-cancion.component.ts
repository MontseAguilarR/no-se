import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cancion } from 'src/app/Models/canciones';
import { CancionService } from 'src/app/Services/cancion.service';

@Component({
  selector: 'app-crear-cancion',
  templateUrl: './crear-cancion.component.html',
  styleUrls: ['./crear-cancion.component.css']
})
export class CrearCancionComponent implements OnInit{

  cancionForm: FormGroup;
  titulo="Crear Cancion";
  id: string | null;

  constructor(private fb: FormBuilder,
             private router: Router, 
             private toastr: ToastrService,
             private _cancionService: CancionService,
             private aRouter: ActivatedRoute){
    this.cancionForm=this.fb.group({
      nombre_cancion:['', Validators.required],
      instrumento:['', Validators.required],
      artista:['', Validators.required],
      duracion:['', Validators.required]
    })
   this.id=this.aRouter.snapshot.paramMap.get('id');
  }
  
ngOnInit():void{
 this.editar();
}

agregarCancion(){
console.log(this.cancionForm);
 const CANCION: Cancion={
  nombre_cancion: this.cancionForm.get('nombre_cancion')?.value,
  instrumento: this.cancionForm.get('instrumento')?.value,
  artista: this.cancionForm.get('artista')?.value,
  duracion: this.cancionForm.get('duracion')?.value,
 }

 if(this.id!==null){
  this._cancionService.editarCancion(this.id, CANCION).subscribe(data=>{
  this.toastr.success('El cancion fue actualizada', 'Cancion actualizada');
  this.router.navigate(['/']);
  }, error=>{
    console.log(error);
    this.cancionForm.reset();
   })
 }else{
  console.log(CANCION);
 this._cancionService.guardarCanciones(CANCION).subscribe(data=>{
  this.toastr.success('El cancion se registró', 'Cancion registrada');
  this.router.navigate(['/']);
 }, error=>{
  console.log(error);
  this.cancionForm.reset();
 })
}

 
 
}

editar(){
 if(this.id!==null){
  this.titulo= 'Editar producto';
  this._cancionService.obtenerCancion(this.id).subscribe(data=> {
    this.cancionForm.setValue({
      nombre_cancion: data.producto,
      instrumento: data.instrumento,
      artista: data.artista,
      duracion: data.duracion,
    })
  })
 }
}

}




