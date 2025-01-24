import { Component, inject } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { LaboralService } from '../../services/laboral.service';
import Laboral from '../../interfaces/laboral.interface';
import { ProjectsService } from '../../services/projects.service';
import Project from '../../interfaces/project.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-works',
  imports: [FontAwesomeModule, DatePipe],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

  ProjectsService = inject(ProjectsService)
  projects: Project[] = []

  LaboralService = inject(LaboralService)
  laboral: Laboral[] = []

  habilidadesObjetos: any[] = [];
  descripcionObj: any[] = [];

  async ngOnInit() {
    try {
      this.projects = await this.ProjectsService.getAllProjects()
      this.laboral = await this.LaboralService.getAllLaboral()
      this.extraerHabilidades();
      console.log(this.laboral);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  extraerHabilidades() {
    this.habilidadesObjetos = []; // Limpia el array antes de agregar nuevos elementos

    this.laboral.forEach(experiencia => {
      if (experiencia.habilidades && Array.isArray(experiencia.habilidades)) {
        experiencia.habilidades.forEach(habilidad => {
          // Verifica si la habilidad ya existe en el array
          if (!this.habilidadesObjetos.some(obj => obj.habilidad === habilidad)) {
            this.habilidadesObjetos.push({ habilidad: habilidad });
          }
        });
      }
    });
    console.log('Habilidades como objetos (sin duplicados):', this.habilidadesObjetos);
  }

  extraerFunciones() {
    this.descripcionObj = []; // Limpia el array antes de agregar nuevos elementos

    this.laboral.forEach(experiencia => {
      if (experiencia.funciones && Array.isArray(experiencia.funciones)) {
        experiencia.funciones.forEach(funcion => {
          // Verifica si la funcion ya existe en el array
          if (!this.descripcionObj.some(obj => obj.funcion === funcion)) {
            this.descripcionObj.push({ funcion: funcion });
          }
        });
      }
    });
    console.log('Funciones como objetos (sin duplicados):', this.descripcionObj);
  }
  getActualStatus(actual: boolean): string {
    return actual ? 'Actual' : 'Finalizado'
  }
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faGithub
    );
  }
  getByFunciones(id: number): string {
    //por cada objeto encontrado incrementa en 1
    let count = 0;
    //recorre el array de laboral
    this.laboral.forEach((item) => {
      //si el id coincide incrementa en 1
      if (item.id === id) {
        count++;
      }
    });
    //retorna el numero de veces que se repite el id
    return count.toString();

  }
}
