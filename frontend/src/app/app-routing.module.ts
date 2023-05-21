import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EmpleosComponent } from './components/empleos/empleos.component';
import { HysComponent } from './components/hys/hys.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditAcercaComponent } from './components/acerca/edit-acerca.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'empleos', component: EmpleosComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'acerca-de-mi', component: AcercaDeMiComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'hys', component: HysComponent },
  { path: 'home', component: HomeComponent },
  { path: 'proyecto', component: ProyectoComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NewEducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },  
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill', component: EditSkillComponent},
  { path: 'editacerca/:id', component: EditAcercaComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    NgForm,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class AppRoutingModule { }
