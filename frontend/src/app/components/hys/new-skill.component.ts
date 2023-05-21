import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit{
  nombre: string ='';
  porcentaje!: number;

  constructor(private skills:SkillService, private router: Router) { }
  
  ngOnInit(): void {
        
    }

    onCreate():void{
      const skill = new Skill(this.nombre, this.porcentaje);
      this.skills.save(skill).subscribe(
        data => {
          alert("habilidad creada");
          this.router.navigate(['/hys']);
        }, err => {
          alert("falló al añadir su habilidad");
          this.router.navigate(['']);
        }
      )
     }
    }


  
  