import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit {


  public users: any[] = [
    {
      id: 1,
      name: "Aymen Ben Salah",
      age: 23,
      email: " aymen@gmail.com",
    },
    {
      id: 2,
      name: "Ahmed Badreddine Atbi",
      age: 28,
      email: "ahmedatbi@gmail.com",
    },
    {
      id: 3,
      name: "Hela Azaiez",
      age: 26,
      email: "helaazaiez@yahoo.com",
    },
    {
      id: 4,
      name: "Imen Haj Amor",
      age: 25,
      email: "imenhaj@gmail.com",
    },

  ]

  public deleteUser(email: String): void {
    let indice = this.users.indexOf(email)
    this.users.splice(indice, 1)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
