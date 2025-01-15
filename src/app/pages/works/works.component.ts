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

  async ngOnInit() {
    try {
      this.projects = await this.ProjectsService.getAllProjects()
      this.laboral = await this.LaboralService.getAllLaboral()
      console.log(this.laboral);

    } catch (error) {
      console.error('Error:', error);
    }
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
