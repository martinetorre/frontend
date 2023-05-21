import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Skill[] = [];
  constructor(
    private skills: SkillService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarSkills(): void {
    this.skills.lista().subscribe(data => { this.skill = data; })
  }
  delete(id?: number) {
    if (id != undefined) {
      this.skills.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se borró la habilidad");
        }
      )
    }
  }
  Continuemos() {
    this.router.navigate(['/home'])
  }
}