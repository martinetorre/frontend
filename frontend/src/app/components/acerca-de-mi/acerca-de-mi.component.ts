import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
  descrip:string="";
    constructor(private router: Router, public personaService: PersonaService, 
      private tokenService: TokenService) { }
      
    isLogged = false;
  
    ngOnInit(): void {
      this.cargarPersona();
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }   
    cargarPersona() {
      this.personaService.lista().subscribe(
        data => {
          this.descrip = data[0].descripcion;
        }
      )
    }
    seguirExplorando(){
      this.router.navigate(['/home'])
    }
  }
  
