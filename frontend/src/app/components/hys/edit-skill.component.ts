import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit{
  skill!: Skill
expLab: any;

    constructor(private skills:SkillService, 
      private activatedRouter: ActivatedRoute, 
      private router: Router) { }

    ngOnInit(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.skills.detail(id).subscribe(
          data => {
            this.skill = data;
          }, err => {
            alert ("error al editar la habilidad");
            this.router.navigate(['']);
          }
        )
    }

    onUpdate(){
      const id = this.activatedRouter.snapshot.params['id'];
      this.skills.update(id, this.skill).subscribe(
        data => {
          alert("error al editar la habilidad");
          this.router.navigate(['']);
        }
      )
    }
}
