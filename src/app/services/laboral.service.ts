import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import Laboral from '../interfaces/laboral.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaboralService {

  private httpClient = inject(HttpClient);
  private apiUrlLaboral = `${environment.apiUrl}/api/laboral`;



  async getAllLaboral(): Promise<Laboral[]> {
    return lastValueFrom(this.httpClient.get<Laboral[]>(this.apiUrlLaboral));
  }

  async getLaboralById(id: number): Promise<Laboral> {
    return lastValueFrom(this.httpClient.get<Laboral>(`${this.apiUrlLaboral}/${id}`));
  }

}
