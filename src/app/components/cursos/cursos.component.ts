import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cursos= [
    {'id':'1', 'nombre':'Electrónica Básica', 'descripcion':'En este curso de electrónica aprenderás cómo funcionan los circuitos y elementos electrónicos más usados en la actualidad.', 'imagen':'../../../assets/electronica.jpg'},
    {'id':'2', 'nombre':'Programación Básica', 'descripcion':' Este curso te enseñará a pensar como un programador, creando algoritmos y aplicando soluciones en lenguajes de programación reales.', 'imagen':'../../../assets/programacion.jpg'},
    {'id':'3', 'nombre':'Photoshop', 'descripcion':' En este curso de Photoshop aprenderás a editar imagenes y fotografías, así como realizar retoques digitales de manera profesional', 'imagen':'../../../assets/photoshop.jpg'},
    {'id':'4', 'nombre':'Marketing Digital', 'descripcion':'En este curso de marketing digital aprenderás aplicar una serie de estrategias orientadas a la comercialización de una marca.', 'imagen':'../../../assets/marketing.jpg'},

  ]

}
