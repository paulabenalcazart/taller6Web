import { Component, signal } from '@angular/core';
import {ContactList} from './components/contact-list/contact-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dashboard-app');
}
