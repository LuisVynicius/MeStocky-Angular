import { Component } from '@angular/core';
import { UserInformation } from './user-information/user-information';
import { UserAdminPage } from '../../shape/userShape';

@Component({
  selector: 'app-admin-page',
  imports: [
    UserInformation
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage {
  users: UserAdminPage[] = [
    {
      title: 'Alice Silva',
      email: 'alice.silva@empresa.com',
      role: 'Administrador'
    },
    {
      title: 'Bruno Costa',
      email: 'bruno.costa@empresa.com',
      role: 'Gerente'
    },
    {
      title: 'Carla Mendes',
      email: 'carla.mendes@empresa.com',
      role: 'Operador'
    },
    {
      title: 'Daniel Rocha',
      email: 'daniel.rocha@empresa.com',
      role: 'Visualizador'
    },
    {
      title: 'Eduarda Lima',
      email: 'eduarda.lima@empresa.com',
      role: 'Administrador'
    },
    {
      title: 'Felipe Araujo',
      email: 'felipe.araujo@empresa.com',
      role: 'Operador'
    },
    {
      title: 'Gabriela Nunes',
      email: 'gabriela.nunes@empresa.com',
      role: 'Gerente'
    },
    {
      title: 'Henrique Alves',
      email: 'henrique.alves@empresa.com',
      role: 'Visualizador'
    },
    {
      title: 'Isabela Freitas',
      email: 'isabela.freitas@empresa.com',
      role: 'Operador'
    },
    {
      title: 'João Pereira',
      email: 'joao.pereira@empresa.com',
      role: 'Visualizador'
    }
  ];
}
