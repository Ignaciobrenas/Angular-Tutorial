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
}
