import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user.component';

@Component({
  imports: [RouterOutlet, User],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {
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
