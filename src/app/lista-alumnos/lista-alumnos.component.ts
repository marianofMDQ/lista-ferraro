import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos : any[] = [];
  cols : string[] = [];

  constructor() { }

  ngOnInit(): void {

    this.alumnos = [
              {nombre: "Marcos", apellido: "Benitez", inscripcion: new Date("2023-01-16"), curso: "Matematica", nota: 9},
              {nombre: "Tamara", apellido: "Gomez", inscripcion: new Date("2023-01-17"), curso: "Biologia", nota: 8},
              {nombre: "Camila", apellido: "Barragan", inscripcion: new Date("2023-01-18"), curso: "Literatura", nota: 10},
              {nombre: "Franco", apellido: "Lopez", inscripcion: new Date("2023-01-19"), curso: "Sociales", nota: 3},
              {nombre: "Mariano", apellido: "Ferrari", inscripcion: new Date("2023-01-20"), curso: "Historia", nota: 5},
              {nombre: "Ezequiel", apellido: "David", inscripcion: new Date("2023-01-21"), curso: "Tic", nota: 8},
              {nombre: "Polo", apellido: "Trueba", inscripcion: new Date("2023-01-22"), curso: "Fisica", nota: 6},
              ]           
    
    this.cols = ["Numero", "Nombre", "Apellido", "Curso", "Fecha de inscripcion", "Nota"];
    }
  }