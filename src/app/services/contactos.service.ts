import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import Contacto from '../interfaces/contacto.interface';
import { lastValueFrom } from 'rxjs';

type CreateBody = {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  private httpClient = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/contactos`;


  async create(body: CreateBody): Promise<Contacto[]> {
    return lastValueFrom(this.httpClient.post<Contacto[]>(this.apiUrl, body));
  }
}
