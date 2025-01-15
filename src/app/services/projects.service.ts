import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import Project from '../interfaces/project.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private httpClient = inject(HttpClient);
  private apiUrlProjects = `${environment.apiUrl}/api/projects`;
  async getAllProjects(): Promise<Project[]> {
    return lastValueFrom(this.httpClient.get<Project[]>(this.apiUrlProjects));
  }

  async getProjectById(id: number): Promise<Project> {
    return lastValueFrom(this.httpClient.get<Project>(`${this.apiUrlProjects}/${id}`));
  }
}
