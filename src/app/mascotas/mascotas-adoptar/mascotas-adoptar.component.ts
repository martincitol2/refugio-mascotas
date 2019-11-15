import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../mascotas.service';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-mascotas-adoptar',
  templateUrl: './mascotas-adoptar.component.html',
  styleUrls: ['./mascotas-adoptar.component.css']
})
export class MascotasAdoptarComponent implements OnInit {
  
  public mascotas:Array<Mascota> = [];

  constructor(private mascotasService: MascotasService) {}

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe(data => {
      this.mascotas = data;
    });
  }
}


