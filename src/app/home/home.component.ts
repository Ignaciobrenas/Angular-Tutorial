import { Component } from '@angular/core';
import { User } from '../user/user.component';

@Component({
  imports: [User],
  selector: 'app-home',
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class Home {
  city = 'San Francisco';
  isServerRunning = true;
  isEditable = true;
  message = '';

  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'macOS' },
    { id: 'linux', name: 'Linux' },
  ];

  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];

  greet() {
    this.message = 'Hello, there 👋';
  }

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }

  toggleServer() {
    this.isServerRunning = !this.isServerRunning;
  }
}
