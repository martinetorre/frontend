import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from '../app/components/educacion/educacion.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmpleosComponent } from './components/empleos/empleos.component';
import { HomeComponent } from './components/home/home.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { EducationComponent } from './components/education/education.component';
import { HabilEditComponent } from './components/habil-edit/habil-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor.service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { EditAcercaComponent } from './components/acerca/edit-acerca.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
//import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
//import { provideStorage,getStorage } from '@angular/fire/storage';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    BannerComponent,
    EducacionComponent,
    AcercaComponent,
    ExperienciaComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,   
    EmpleosComponent,
    HomeComponent,
    AcercaDeComponent,
    AcercaDeMiComponent,
    EducationComponent,
    HabilEditComponent,
    ProjectsComponent,
    NewExperienciaComponent,
    EditEducacionComponent,
    NewEducacionComponent,
    EditExperienciaComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaComponent,
    LoginComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,        
    NgCircleProgressModule.forRoot({}), 
   // provideFirebaseApp(() => initializeApp(environment.firebase)), 
    //provideStorage(() => getStorage()),
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}  