import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {


  constructor(private http: HttpClient) { }

  public universityList: any[] = [
    {
      id: 1,
      name: "ESPRIT",
      address: "2 rue André Ampère - 2083 - Pôle Technologique - El Ghazala",
      email: "contact@esprit.tn",
      phone: "+216 70 250 000"
    },
    {
      id: 2,
      name: "IT Business School",
      address: "Avenue Dali Jazi, Nabeul‎ 8062",
      email: "contact@itbs.tn",
      phone: "+216 72 233 777"
    },
    {
      id: 3,
      name: "Université central",
      address: "3 Rue Hammadi Fareh, Eljaziri 1002",
      email: "contact@universitecentral.tn",
      phone: "+216 71 796 679"
    },
    {
      id: 4,
      name: "Université libre",
      address: "32 Bis Av. Kheireddine Pacha 1002 Tunis",
      email: "contact@ult-tunisie.tn",
      phone: "+216 71 902 811"
    },
  ]



  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/university/all").subscribe(
      result => {
        this.universityList = result
      },
      error => {
        console.log(error);
      }
    )
  }

  public deleteUniversity(email: String): void {
    let indice = this.universityList.indexOf(email)
    this.universityList.splice(indice, 1)
  }

}
