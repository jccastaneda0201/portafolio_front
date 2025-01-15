import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import User from '../../interfaces/user.interface';

@Component({
  selector: 'app-aboutme',
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {
  userService = inject(UsersService)
  usuario: User[] = []

  async ngOnInit() {
    try {
      this.usuario = await this.userService.getAllUsers()
      console.log(this.usuario);
    }
    catch (error) {
      console.error('Error:', error);
    }
  }
}
