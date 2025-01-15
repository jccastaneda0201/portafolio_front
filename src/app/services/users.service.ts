import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';
import User from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpClient = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/users`;

  getAllUsers(): Promise<User[]> {
    return lastValueFrom(this.httpClient.get<User[]>(this.apiUrl));
  }
}
