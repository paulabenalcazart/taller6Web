import { Component } from '@angular/core';
import { ContactRow } from '../contact-row/contact-row';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.html',
  imports: [ContactRow],
  styleUrl: './contact-list.css'
})
export class ContactList {
  contacts: Contact[] = [
    { id: 1, name: 'María López', email: 'maria@example.com'},
    {id: 2, name: 'Carlos Ruiz', email: 'carlos@example.com'},
    {id: 3, name: 'Ana Gómez', email: 'ana@example.com'},
    {id: 4, name: 'Luis Fernández', email: 'luis@example.com'}
  ];
}
export interface Contact {
  id: number;
  name: string;
  email: string;
}
