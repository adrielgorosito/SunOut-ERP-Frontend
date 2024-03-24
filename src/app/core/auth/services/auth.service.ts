import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/domain/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  private apiUrl = environment.AUTH_API_URL;

  public login(u: User): Observable<string> {
    const credentials = { username: u.username, passwordHash: u.password };
    return this.http.post(this.apiUrl, credentials, { responseType: 'text' });
  }
}