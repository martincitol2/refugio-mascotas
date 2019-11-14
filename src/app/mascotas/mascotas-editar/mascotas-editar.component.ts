import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../mascotas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mascotas-editar',
  templateUrl: './mascotas-editar.component.html',
  styleUrls: ['./mascotas-editar.component.css']
})
export class MascotasEditarComponent implements OnInit {

  mascotaForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required, Validators.pattern("[0-9]+")]),
    descripcion: new FormControl('', [Validators.required])
  });

  constructor(private mascotasServices:MascotasService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.mascotasServices.getMascota(params["id"]).subscribe(data => {
        this.mascotaForm.setValue(data);
      });
    })
   
  }

  onSubmit($event) {
    this.mascotasServices.updateMascota(this.mascotaForm.value);
  }
  
  comeBack($event){
    $event.preventDefault();
    this.route.navigate(['/mascotas-listar']);
  }

}
