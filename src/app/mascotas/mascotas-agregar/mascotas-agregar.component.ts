import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']
})
export class MascotasAgregarComponent implements OnInit {

  mascotasForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    tipo: new FormControl('',Validators.required),
    edad: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required)
  });

  constructor() { 
    
  }

  ngOnInit() {

  }

}
