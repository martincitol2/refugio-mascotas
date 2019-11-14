import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../mascotas.service';
import { Mascota } from '../mascota';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascotas-listar',
  templateUrl: './mascotas-listar.component.html',
  styleUrls: ['./mascotas-listar.component.css']
})
export class MascotasListarComponent implements OnInit {

  public mascotas:Array<Mascota> = [];
  
  constructor(private mascotasService:MascotasService,private router:Router) { }

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe((data)=>{
      this.mascotas = data;
    })
  }

  delete($event,id:number){
    this.mascotasService.deleteMascota(id).subscribe(data => {
     this.mascotasService.getMascotas().subscribe(info => {
       this.mascotas=info;
       
     });

  })
}

}
