import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos';
  //Propiedades
  nombre = 'Leonardo Resendiz';
  email = 'leonardo@utsjr.edu.mx';
  aniosServicio = 15;
  activo = true;
  alumnos = [24, 25, 26];
  numero = 6;
  contador = 0;
  botonHabilitado = false;

  productos = [
    {
      id: 1,
      descripcion: 'Doritos',
      precio: 25
    },
    {
      id: 2,
      descripcion: 'Gatorade',
      precio: 32.50
    },
    {
      id: 3,
      descripcion: 'Snickers',
      precio: 17
    },
  ];

  //Función que muestra si el profesor está activo o no
  estaActivo(){
    if(this.activo){
      return 'Empleado Activo';
    } else{
      return 'Empleado Inactivo';
    }
  }

  //Funcion que suma los alumnos del arreglo
  sumarAlumnos(){
    let suma = 0;
    for(let i = 0; i < this.alumnos.length; i++){
      suma += this.alumnos[i];
    }
    return suma;
  }
//Función que incrementa el contador
incrementarContador(){
  this.contador++;
}
//Función que decrementa el contador
decrementarContador(){
  this.contador--;
}

alternarBoton(){
  this.botonHabilitado = !this.botonHabilitado;
}

}
