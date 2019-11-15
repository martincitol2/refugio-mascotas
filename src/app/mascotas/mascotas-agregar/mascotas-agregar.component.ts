import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MascotasService } from '../mascotas.service';

@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']
})
export class MascotasAgregarComponent implements OnInit {

  mascotasForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required, Validators.pattern("[0-9]+")]),
    descripcion: new FormControl('', [Validators.required]),
    imagen:new FormControl("")
  });

  constructor(private router: Router, private mascotasService: MascotasService) {

  }

  onSubmit() {
    this.mascotasService.addMascota(this.mascotasForm.value);
  }

  reset($event) {
    $event.preventDefault();
    this.mascotasForm.reset();
  }

  comeBack($event) {
    $event.preventDefault();
    this.router.navigate(['/mascotas-listar']);
  }

  ngOnInit() {

  }

}
