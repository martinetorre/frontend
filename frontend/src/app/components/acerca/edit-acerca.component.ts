import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
//import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca',
  templateUrl: './edit-acerca.component.html',
  styleUrls: ['./edit-acerca.component.css']
})
export class EditAcercaComponent implements OnInit {
  persona: persona = { "nombre": "", "apellido": "", "descripcion": "", "img": "" };


  constructor(
    private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    //public imageService: ImageService
  ) { }

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id)
    .subscribe(
      {
        next: data =>{
          this.persona = data;
        },
          error: err =>{
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    //this.persona.img = this.imageService.url
    this.personaService.update(id, this.persona).subscribe(
      {
        next:data => {
          this.router.navigate(['']);
          },
        error: err => {
          alert("Error al modificar la persona");
          this.router.navigate(['']);
        }
      })
}

uploadImg($event: any){
  const id= this.activatedRouter.snapshot.params['id'];
  const name = "perfil_" + id;
  //this.imageService.uploadImg($event, name)
}
  salirDelEditor() {
    this.router.navigate(['/home'])
  }
}