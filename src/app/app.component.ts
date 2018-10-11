import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  users;
  title = 'app';
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(this.apiUrl)
      .subscribe(d => {
        this.users = d;
      });
  }
}
