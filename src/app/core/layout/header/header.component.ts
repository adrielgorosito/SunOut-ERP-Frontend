import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(public router: Router) { }

  userType: number = 0;

  ngOnInit(): void {
    const userStorage = localStorage.getItem("user");

    this.userType = 0;

    if (userStorage) {
      const { username, password, type } = JSON.parse(userStorage);
      const user = new User(username, password, type);

      if (user.type == 1) this.userType = 1;
      else if (user.type == 2) this.userType = 2;
      else this.userType = 3;
    }
  }
}