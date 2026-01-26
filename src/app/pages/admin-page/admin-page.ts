import { Component } from '@angular/core';
import { UserInformation } from './user-information/user-information';
import { UserAdminShape } from '../../shape/userShape';

@Component({
  selector: 'app-admin-page',
  imports: [
    UserInformation
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage {
  users: UserAdminShape[] = [
    {
      id: 0,
      username: 'Alice Silva',
      email: 'alice.silva@empresa.com',
      role: 'Administrador'
    },
    {
      id: 0,
      username: 'Bruno Costa',
      email: 'bruno.costa@empresa.com',
      role: 'Gerente'
    },
    {
      id: 0,
      username: 'Carla Mendes',
      email: 'carla.mendes@empresa.com',
      role: 'Operador'
    },
    {
      id: 0,
      username: 'Daniel Rocha',
      email: 'daniel.rocha@empresa.com',
      role: 'Visualizador'
    },
    {
      id: 0,
      username: 'Eduarda Lima',
      email: 'eduarda.lima@empresa.com',
      role: 'Administrador'
    },
    {
      id: 0,
      username: 'Felipe Araujo',
      email: 'felipe.araujo@empresa.com',
      role: 'Operador'
    },
    {
      id: 0,
      username: 'Gabriela Nunes',
      email: 'gabriela.nunes@empresa.com',
      role: 'Gerente'
    },
    {
      id: 0,
      username: 'Henrique Alves',
      email: 'henrique.alves@empresa.com',
      role: 'Visualizador'
    },
    {
      id: 0,
      username: 'Isabela Freitas',
      email: 'isabela.freitas@empresa.com',
      role: 'Operador'
    },
    {
      id: 0,
      username: 'João Pereira',
      email: 'joao.pereira@empresa.com',
      role: 'Visualizador'
    }
  ];
}
