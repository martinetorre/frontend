import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  salida(){
    this.router.navigate(['/home'])
  }
}
