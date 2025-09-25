import { Component, signal } from '@angular/core';
import {ContactList} from './components/contact-list/contact-list';
import {Header} from './components/header/header';
import {Sidebar} from './components/sidebar/sidebar';
import { Dashboard } from './components/dashboard/dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactList, Header, Sidebar, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dashboard-app');
}
